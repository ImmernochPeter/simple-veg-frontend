import { Component, inject, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeCard, Recipe } from '../recipe-card/recipe-card';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-recipes',
  imports: [RecipeCard],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes implements OnInit {
  private http = inject(HttpClient);

  recipes = signal<Recipe[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadRecipes();
  }

  private loadRecipes(): void {
    this.http.get<Recipe[]>(`${environment.apiUrl}/api/recipes/`).subscribe({
      next: (data) => {
        this.recipes.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Rezepte konnten nicht geladen werden.');
        this.loading.set(false);
      },
    });
  }
}
