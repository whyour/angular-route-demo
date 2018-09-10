import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals$;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.animals$ = [
      {
        name: 'aardvark',
        bio: 'The aardvark is a medium-sized, burrowing, nocturnal mammal native to Africa',
        img: '/img/aardvark.jpg'
      },
      {
        name: 'elephant',
        bio: 'This is elephant',
        img: '/img/elephant.jpg'
      },
      {
        name: 'moose',
        bio: 'This is moose',
        img: '/img/moose.png'
      },
      {
        name: 'zebra',
        bio: 'This is zebra',
        img: '/img/zebra.jpg'
      }
    ];
  }
}
