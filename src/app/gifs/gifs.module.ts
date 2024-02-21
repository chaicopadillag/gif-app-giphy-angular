import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GifsHistoricComponent } from './components/historic/hsitoric.component';
import { GifsSearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    GifsSearchBoxComponent,
    GifsHistoricComponent,
    CardListComponent,
  ],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
