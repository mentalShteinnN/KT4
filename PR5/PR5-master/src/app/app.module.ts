import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { PageFindComponent } from './pages/page-find/page-find.component';
import { PageRecipeComponent } from './pages/page-recipe/page-recipe.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    PageRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    PageFindComponent,
    RouterLink,
    RecipeListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
