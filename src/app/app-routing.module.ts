import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DespedidaComponent } from './components/despedida/despedida.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'despedida/:nombre', component: DespedidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
