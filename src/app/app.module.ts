import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardPageComponent } from './components/ui/card-page/card-page.component';
import { MarketComponent } from './pages/market/market.component';
import { CollectionPointsComponent } from './pages/collection-points/collection-points.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutServiceComponent } from './pages/about-service/about-service.component';
import { ButtonWithIconComponent } from './components/ui/button-with-icon/button-with-icon.component';
import { IconComponent } from './components/ui/icon/icon.component';
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardPageComponent,
    MarketComponent,
    CollectionPointsComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutServiceComponent,
    ButtonWithIconComponent,
    IconComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
