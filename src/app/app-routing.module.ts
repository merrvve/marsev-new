import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagisComponent } from './pages/bagis/bagis.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EtkinliklerComponent } from './pages/etkinlikler/etkinlikler.component';
import { HakkimizdaComponent } from './pages/hakkimizda/hakkimizda.component';
import { HomeComponent } from './pages/home/home.component';
import { KayitComponent } from './pages/kayit/kayit.component';
import { OnayComponent } from './pages/kayit/onay/onay.component';
import { KitapComponent } from './pages/kitaplar/kitap/kitap.component';
import { KitaplarComponent } from './pages/kitaplar/kitaplar.component';
import { KurulComponent } from './pages/kurul/kurul.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'amaclar-ve-hedefler', component: HakkimizdaComponent },
  { path: 'yonetim-kurulu', component: KurulComponent },
  { path: 'kayit', component: KayitComponent },
  { path: 'duyurular', component: EtkinliklerComponent },
  { path: 'bagis', component: BagisComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'kitap-satis', component: KitaplarComponent },
  { path: 'kitap', component: KitapComponent },
  { path: 'kayit-onay', component: OnayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
