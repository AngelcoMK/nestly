import { Component, signal } from '@angular/core';
import { Stay } from './stay';
import { StayCard } from './stay-card/stay-card';

@Component({
  selector: 'app-root',
  imports: [StayCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nestly');

  stays: Stay[] = [
    {
      id: 1,
      title: 'Cozy Mountain Cabin',
      location: 'Mavrovo, Macedonia',
      pricePerNight: 85,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
      superhost: true,
      description: 'A cozy cabin surrounded by mountains and beautiful nature.'
    },
    {
      id: 2,
      title: 'Lake View Apartment',
      location: 'Ohrid, Macedonia',
      pricePerNight: 70,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      superhost: true,
      description: 'Beautiful apartment with an amazing view of the lake.'
    },
    {
      id: 3,
      title: 'Modern City Apartment',
      location: 'Skopje, Macedonia',
      pricePerNight: 55,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      superhost: false,
      description: 'A modern apartment close to the city center and restaurants.'
    },
    {
      id: 4,
      title: 'Peaceful Forest House',
      location: 'Krushevo, Macedonia',
      pricePerNight: 65,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8',
      superhost: true,
      description: 'A peaceful house surrounded by forest and fresh mountain air.'
    },
    {
      id: 5,
      title: 'Traditional Village Home',
      location: 'Galicnik, Macedonia',
      pricePerNight: 90,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607',
      superhost: false,
      description: 'A traditional home perfect for a quiet weekend in nature.'
    },
    {
      id: 6,
      title: 'Sunny Lake House',
      location: 'Dojran, Macedonia',
      pricePerNight: 75,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156',
      superhost: true,
      description: 'A sunny house near the lake, perfect for a relaxing holiday.'
    }
  ];

  onFavorite(stay: Stay) {
    console.log('Favorite:', stay.title);
  }
}