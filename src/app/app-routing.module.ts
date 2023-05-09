import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BooknowComponent } from './booknow/booknow.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HotelComponent } from './hotel/hotel.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },

  { path: 'aboutus', component: AboutusComponent ,canActivate:[AuthGuard]},
  { path: 'booknow', component: BooknowComponent,canActivate:[AuthGuard] },
  { path: 'contactus', component: ContactusComponent,canActivate:[AuthGuard] },
  { path: 'hotel', component: HotelComponent,canActivate:[AuthGuard] },
  { path: 'gallery', component: GalleryComponent,canActivate:[AuthGuard] },
  { path: 'userprofile', component: UserprofileComponent,canActivate:[AuthGuard] },

  { path: 'faq', component: FaqComponent,canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }










