import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars-gallery',
  templateUrl: './mars-gallery.component.html',
  styleUrls: ['./mars-gallery.component.scss']
})
export class MarsGalleryComponent implements OnInit {
  tabs = [
    {name: 'Default', route: 'default', id: 1},
    {name: 'Pictures', route: 'pictures', id: 2},
    {name: 'Videos', route: 'videos', id: 3},
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
