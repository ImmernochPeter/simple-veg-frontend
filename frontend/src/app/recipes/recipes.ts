import { Component } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  selector: 'app-recipes',
  imports: [RecipeCard],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes {

}
