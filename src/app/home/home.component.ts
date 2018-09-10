import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {
    console.log(router.config);
  }

  ngOnInit() {}

  clickHandler() {
    const confirm = prompt('Are you sure you want to go here?');

    if (confirm === 'yes') {
      this.router.navigate(['animals']);
    }
  }
}
