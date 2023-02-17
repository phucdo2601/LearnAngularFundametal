import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { LoginComponent } from './components/auth/login/login.component';
import { BlogPageComponent } from './components/blog/blog-page/blog-page.component';
import { SingleBlogComponent } from './components/blog/single-blog/single-blog.component';
import { PostComponent } from './components/blog/post/post.component';
import { AdminBlogComponent } from './components/blog/admin/admin-blog/admin-blog.component';
import { DeleteDialogComponent } from './components/blog/admin/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, BlogPageComponent, SingleBlogComponent, PostComponent, AdminBlogComponent, DeleteDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
