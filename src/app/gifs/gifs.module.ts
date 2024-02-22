import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { GifsHistoricComponent } from './components/historic/hsitoric.component';
import { GifsSearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    GifsSearchBoxComponent,
    GifsHistoricComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
