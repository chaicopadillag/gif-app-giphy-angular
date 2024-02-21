import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifServ: GifsService) {}

  toogleSidebar(val: boolean) {
    this.gifServ.toogleSidebar(val);
  }
  get isOpen() {
    return this.gifServ.isOpenSidebar;
  }
}
