import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { PublishComponent } from './components/publish/publish.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'publish', component: PublishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
