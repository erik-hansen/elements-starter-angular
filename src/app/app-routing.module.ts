import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiComponent } from './api/api.component';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';
import { MetaElementsComponent } from './meta-elements/meta-elements.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'docs',
    component: DocsComponent,
    children: [{ path: '**', component: DocsComponent }],
  },
  {
    path: 'reference',
    component: ApiComponent,
    children: [{ path: '**', component: ApiComponent }],
  },
  {
    path: 'meta-elements',
    component: MetaElementsComponent,
    children: [{ path: '**', component: MetaElementsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
