import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublishComponent } from './components/publish/publish.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'publish', component: PublishComponent },
  { path: '**', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
