import { Component } from '@angular/core';
import { StayCard } from '../../stay-card/stay-card';
import { Stay } from '../../stay';

@Component({
  selector: 'app-stays-list',
  imports: [StayCard],
  templateUrl: './stays-list.html',
  styleUrl: './stays-list.css',
})
export class StaysList {
  stays: Stay[] = [
    {
      id: 1,
      title: 'Cozy Mountain Cabin',
      location: 'Mavrovo, Macedonia',
      pricePerNight: 85,
      rating: 4.9,
      image: '',
      superhost: true,
      description:
        'A cozy cabin surrounded by mountains and beautiful nature.',
    },
    {
      id: 2,
      title: 'Lake View Apartment',
      location: 'Ohrid, Macedonia',
      pricePerNight: 70,
      rating: 4.8,
      image: '',
      superhost: true,
      description:
        'Beautiful apartment with an amazing view of the lake.',
    },
    {
      id: 3,
      title: 'Modern City Apartment',
      location: 'Skopje, Macedonia',
      pricePerNight: 55,
      rating: 4.6,
      image: '',
      superhost: false,
      description:
        'A modern apartment close to the city center and restaurants.',
    },
    {
      id: 4,
      title: 'Peaceful Forest House',
      location: 'Krushevo, Macedonia',
      pricePerNight: 65,
      rating: 4.9,
      image: '',
      superhost: true,
      description:
        'A peaceful house surrounded by forest and fresh mountain air.',
    },
    {
      id: 5,
      title: 'Traditional Village Home',
      location: 'Galicnik, Macedonia',
      pricePerNight: 90,
      rating: 4.7,
      image: '',
      superhost: false,
      description:
        'A traditional home perfect for a quiet weekend in nature.',
    },
    {
      id: 6,
      title: 'Sunny Lake House',
      location: 'Dojran, Macedonia',
      pricePerNight: 75,
      rating: 4.8,
      image: '',
      superhost: true,
      description:
        'A sunny house near the lake, perfect for a relaxing holiday.',
    },
  ];

  onFavorite(stay: Stay) {
    console.log('Favorite:', stay);
  }
}