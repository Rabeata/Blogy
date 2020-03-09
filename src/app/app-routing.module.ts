import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full'
  },
  //-------------------------------------------------------------
  {
    path: 'page', component: PageComponent, pathMatch: 'full', data: {
      title: 'Form',
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]

})
export class AppRoutingModule { }
