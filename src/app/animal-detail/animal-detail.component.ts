import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  animal$;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.animal$ = this.route.data.pipe(map(val => val[0]));
  }
}
