import { Component, input, output, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Stay } from '../stay';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-stay-card',
  imports: [CurrencyPipe, Highlight],
  templateUrl: './stay-card.html',
  styleUrl: './stay-card.css',
})
export class StayCard {
  stay = input.required<Stay>();

  favorite = output<Stay>();

  isFavorite = signal(false);

  onFavorite() {
    this.isFavorite.update(value => !value);

    if (this.isFavorite()) {
      this.favorite.emit(this.stay());
    }
  }
}