import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedbackComponent } from '../../shared/components/feedback/feedback.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @ViewChild(FeedbackComponent) feedback!: FeedbackComponent; 
  isCollapsed = false;
  constructor() {}

  ngOnInit() {
  }

  showModal() {
    this.feedback.showModal();
  }
}
