import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  constructor(private gifService: GifsService) {}

  get gifs() {
    return this.gifService.gifs;
  }
}
