import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-recipe',
  templateUrl: './page-recipe.component.html',
  styleUrl: './page-recipe.component.scss'
})
export class PageRecipeComponent {
  recipes = inject(RecipesService)
  constructor(private route: ActivatedRoute, public location: Location) {
    this.route.params.subscribe((params: any) => {
      // this.recipe = this.recipes.recipes.find(recipe => recipe.id === params['id'])
      // console.log(this.recipe);
      // this.recipes.selectedRecipe = this.recipes.recipes.find(recipe => recipe.id === params['id']) ?? null
      this.recipes.changeSelectedRecipe(params['id'])
    });
  }
  // goHome() {
  //   if (this.locationStrategy instanceof PathLocationStrategy) {
  //     this.locationStrategy.back();
  //   } else {
  //     // Обработка ситуации, если не удается выполнить назад
  //     console.error('Невозможно выполнить назад.');
  //   }
  // }
}