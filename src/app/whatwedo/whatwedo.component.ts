import { Component } from '@angular/core';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.css']
})
export class WhatwedoComponent {

  cards = [
    {
      id: 1,
      title: 'Group Rides',
      subtitle: 'Subtitle 1',
      content: 'This is the content of card 1.',
      image: 'assets/landing1.jpg'
    },
    {
      id: 2,
      title: 'Training Races',
      subtitle: 'Subtitle 2',
      content: 'This is the content of card 2.',
      image: 'assets/landing1.jpg'
    },
    {
      id: 3,
      title: 'MTB Races',
      subtitle: 'Subtitle 3',
      content: 'This is the content of card 3.',
      image: 'assets/landing1.jpg'
    },
    {
      id: 4,
      title: 'Mass Rides',
      subtitle: 'Subtitle 3',
      content: 'This is the content of card 3.',
      image: 'assets/landing1.jpg'
    },
    {
      id: 5,
      title: 'Road Race',
      subtitle: 'Subtitle 3',
      content: 'This is the content of card 3.',
      image: 'assets/landing1.jpg'
    },
    {
      id: 6,
      title: 'ITT Races',
      subtitle: 'Subtitle 3',
      content: 'This is the content of card 3.',
      image: 'assets/landing1.jpg'
    },
    {
      id: 7,
      title: 'Road Race',
      subtitle: 'Subtitle 3',
      content: 'This is the content of card 3.',
      image: 'assets/landing1.jpg'
    },
    {
      id: 8,
      title: 'Training Races',
      subtitle: 'Subtitle 2',
      content: 'This is the content of card 2.',
      image: 'assets/landing1.jpg'
    }

  ];

  constructor() { }

  onCancel(id: number): void {
    console.log(`Cancel clicked for card with id: ${id}`);
  }

  onSave(id: number): void {
    console.log(`Save clicked for card with id: ${id}`);
  }
}
