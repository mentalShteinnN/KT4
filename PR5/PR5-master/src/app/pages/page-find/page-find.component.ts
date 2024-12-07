import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipesService } from '../../services/recipes.service'; import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';
;

@Component({
  selector: 'app-page-find',
  standalone: true,
  imports: [RouterLink, RecipeListComponent],
  templateUrl: './page-find.component.html',
  styleUrl: './page-find.component.scss'
})
export class PageFindComponent {
  recipes = inject(RecipesService)

  // time: string = this.recipes.time
  // level: string = this.recipes.level

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      // this.time = params['time'];
      // this.level = params['level']
      this.recipes.changeTimeLevel(params['time'], params['level'])
    });
  }
}
