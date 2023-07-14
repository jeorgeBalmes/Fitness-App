import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'workout',
    loadChildren: () => import('./workout/workout.module').then( m => m.WorkoutPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'sworkout',
    loadChildren: () => import('./sworkout/sworkout.module').then( m => m.SworkoutPageModule)
  },
    {
      path: 'b-workout',
      loadChildren: () => import('./b-workout/b-workout.module').then( m => m.BWorkoutPageModule)
    },
    {
    path: 'videopage',
    loadChildren: () => import('./videopage/videopage.module').then( m => m.VideopagePageModule)
  },
  {
    path: 'l-workout',
    loadChildren: () => import('./l-workout/l-workout.module').then( m => m.LWorkoutPageModule)
  },
  {
    path: 'ab-workout',
    loadChildren: () => import('./ab-workout/ab-workout.module').then( m => m.AbWorkoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
