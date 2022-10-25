import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { BannerComponent } from './components/common/banner/banner.component';
import { AboutComponent } from './pages/about/about.component';
import { OrganicComponent } from './components/common/organic/organic.component';
import { VisitComponent } from './components/common/visit/visit.component';
import { ProductsComponent } from './pages/products/products.component';
import { OurproductsComponent } from './components/common/ourproducts/ourproducts.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LetestblogsComponent } from './components/common/letestblogs/letestblogs.component';
import { OurfeaturesComponent } from './components/common/ourfeatures/ourfeatures.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    BannerComponent,
    AboutComponent,
    OrganicComponent,
    VisitComponent,
    ProductsComponent,
    OurproductsComponent,
    BlogComponent,
    LetestblogsComponent,
    OurfeaturesComponent,
    FeatureComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
