import { Component, inject, signal, OnInit, PLATFORM_ID, makeStateKey, TransferState } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RecipeCard, Recipe } from '../recipe-card/recipe-card';
import { environment } from '../../environments/environment';

const RECIPES_KEY = makeStateKey<Recipe[]>('recipes');

@Component({
  selector: 'app-recipes',
  imports: [RecipeCard],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes implements OnInit {
  private http = inject(HttpClient);
  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);

  recipes = signal<Recipe[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    // Check if data was transferred from server
    if (isPlatformBrowser(this.platformId) && this.transferState.hasKey(RECIPES_KEY)) {
      const recipes = this.transferState.get(RECIPES_KEY, []);
      this.recipes.set(recipes);
      this.loading.set(false);
      this.transferState.remove(RECIPES_KEY);
    } else {
      this.loadRecipes();
    }
  }

  private loadRecipes(): void {
    this.http.get<Recipe[]>(`${environment.apiUrl}/api/recipes/`).subscribe({
      next: (data) => {
        this.recipes.set(data);
        this.loading.set(false);

        // Store data for transfer to browser
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(RECIPES_KEY, data);
        }
      },
      error: () => {
        this.error.set('Rezepte konnten nicht geladen werden.');
        this.loading.set(false);
      },
    });
  }
}
