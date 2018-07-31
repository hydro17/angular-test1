import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CasingPipe } from './casing.pipe';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { ClickerComponent } from './clicker/clicker.component';
import { TotalizerService } from './services/totalizer.service';
import { ShowTotalComponent } from './show-total/show-total.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CasingPipe,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    PostsComponent,
    ClickerComponent,
    ShowTotalComponent,
    NavComponent,
    HomePageComponent,
    PageNotFoundComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'posts', component: PostsComponent },
      // { path: 'sign-up', component: SignUComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [TotalizerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
