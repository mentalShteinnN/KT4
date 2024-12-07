import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes = inject(RecipesService)
  // constructor() {
  //   console.log(this.recipes.mainRecipes);
  // }
}
