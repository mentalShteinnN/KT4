import { Component, inject } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {
  recipes = inject(RecipesService)
}
