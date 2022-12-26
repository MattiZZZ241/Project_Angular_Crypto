import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoinsinfoComponent } from './coinsinfo/coinsinfo.component';
import { CryptoAllComponent } from './crypto-all/crypto-all.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CryptoAllComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coins/:id', component: CoinsinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
