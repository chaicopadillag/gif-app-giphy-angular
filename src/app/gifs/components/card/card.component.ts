import { Component, Input, OnInit } from '@angular/core';
import { GiPhy } from '../../interfaces/gyphy.interface';

@Component({
  selector: 'gif-card-component',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  isLoanding = true;

  @Input()
  gifGiPhy: GiPhy = <GiPhy>{};

  ngOnInit(): void {
    if (!this.gifGiPhy)
      throw new Error('gifGiPhy is required, this is unifined');
  }

  onLoadImg() {
    this.isLoanding = false;
  }
}
