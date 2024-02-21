import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-historic-component',
  templateUrl: './historic.component.html',
})
export class GifsHistoricComponent {
  constructor(private gifService: GifsService) {}

  get keywords() {
    return this.gifService.keywordsTags;
  }

  searchKeyword(key: string) {
    this.gifService.searchByKeyboard(key);
  }

  get isOpen() {
    return this.gifService.isOpenSidebar;
  }

  toogleSidebar(val: boolean) {
    this.gifService.toogleSidebar(val);
  }
}
