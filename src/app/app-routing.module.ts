import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { UserResultComponent } from './user-result/user-result.component';

const routes: Routes = [
  {
    path:'',
    component:UserInputComponent
  },
  {
    path:'result',
    component:UserResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
