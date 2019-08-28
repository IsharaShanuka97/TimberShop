import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OurStrengthComponent } from './components/our-strength/our-strength.component';
import { ProductsComponent } from './components/products/products.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'ourstrength',
  component: OurStrengthComponent
},
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'gallery',
  component: GalleryComponent
},
{
  path: 'aboutus',
  component: AboutUsComponent
},
{
  path: 'pricing',
  component: PricingComponent
},
{
  path: 'contactus',
  component: ContactUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [HomeComponent, OurStrengthComponent, ProductsComponent, GalleryComponent, AboutUsComponent, PricingComponent, ContactUsComponent];
