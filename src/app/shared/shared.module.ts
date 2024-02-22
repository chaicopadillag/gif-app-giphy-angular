import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [LazyImageComponent],
  imports: [CommonModule],
  exports: [LazyImageComponent],
})
export class SharedModule {}
