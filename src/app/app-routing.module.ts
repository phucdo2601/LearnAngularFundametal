import { AdminBlogComponent } from './components/blog/admin/admin-blog/admin-blog.component';
import { PostComponent } from './components/blog/post/post.component';
import { SingleBlogComponent } from './components/blog/single-blog/single-blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { BlogPageComponent } from './components/blog/blog-page/blog-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'blogs',
    component: BlogPageComponent,
  },
  {
    path: 'my-best-blog',
    component: PostComponent,
  },
  {
    path: 'admin/blog',
    component: AdminBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
