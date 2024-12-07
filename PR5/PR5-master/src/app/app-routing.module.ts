import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { PageFindComponent } from './pages/page-find/page-find.component';
import { PageRecipeComponent } from './pages/page-recipe/page-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'breakfast/all',
        pathMatch: 'full',
      },
      {
        path: 'recipe/:id',
        component: PageRecipeComponent
      },
      {
        path: ':time/:level',
        component: PageFindComponent,
      },
      {
        path: '**',
        redirectTo: 'breakfast/all',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
