import { Component, input } from '@angular/core';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  recipe = input.required<Recipe>();
}
