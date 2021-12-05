import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectConfigState, selectisOpenNavBar } from 'src/app/store/config/config.selectors';
import { ConfigState } from 'src/app/store/config/config.state';
import { FeedbackComponent } from '../../shared/components/feedback/feedback.component';
import * as ConfigActions from '../../../store/config/config.actions';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @ViewChild(FeedbackComponent) feedback!: FeedbackComponent; 
  isCollapsed = false;
  isVisible = false;
  constructor(public store: Store<AppState>) {
    this.store.select(selectisOpenNavBar).subscribe(value => {
      console.log(value);
      
      this.isCollapsed = value;
    })
  }

  ngOnInit() {
  }

  toggle() {
    this.store.dispatch(ConfigActions.getConfig());
  }

  showModal() {
    this.isVisible = true;
  }
}
