import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Layout from './layout/'

const routes: Routes = [
    { path: 'heroes', component: Layout }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }