import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs/Observable';

import { RemoveTutorial } from '../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';
import { TutorialState } from '../state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // tutorials$: Observable<Tutorial>
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>

  constructor(private store: Store) {
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
  }

  deleteTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name))
  }

  ngOnInit() {
  }

}
