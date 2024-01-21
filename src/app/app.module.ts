import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EtkinliklerComponent } from './pages/etkinlikler/etkinlikler.component';
import { EtkinlikComponent } from './pages/etkinlikler/etkinlik/etkinlik.component';
import { KayitComponent } from './pages/kayit/kayit.component';
import { OnayComponent } from './pages/kayit/onay/onay.component';
import { HakkimizdaComponent } from './pages/hakkimizda/hakkimizda.component';
import { KurulComponent } from './pages/kurul/kurul.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KitaplarComponent } from './pages/kitaplar/kitaplar.component';
import { KitapComponent } from './pages/kitaplar/kitap/kitap.component';
import { SiparisComponent } from './pages/kitaplar/siparis/siparis.component';
import { BagisComponent } from './pages/bagis/bagis.component';
import { DuyuruComponent } from './pages/home/duyuru/duyuru.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EtkinliklerComponent,
    EtkinlikComponent,
    KayitComponent,
    OnayComponent,
    HakkimizdaComponent,
    KurulComponent,
    ContactComponent,
    KitaplarComponent,
    KitapComponent,
    SiparisComponent,
    BagisComponent,
    DuyuruComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
