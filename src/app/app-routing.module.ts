import { GetDataComponent } from './get-data/get-data.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'templateForm', component: TemplateDrivenFormComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'getData', component: GetDataComponent },
  { path: 'postData', component: PostDataComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
