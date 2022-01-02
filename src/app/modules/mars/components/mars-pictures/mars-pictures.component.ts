import { Component, OnInit } from '@angular/core';
import { SpaceHttpService } from 'src/app/modules/core/services/space-http.service';

@Component({
  selector: 'app-mars-pictures',
  templateUrl: './mars-pictures.component.html',
  styleUrls: ['./mars-pictures.component.scss']
})
export class MarsPicturesComponent implements OnInit {
  photos$!: any;

  constructor(private spaceHttpService: SpaceHttpService) {}

  ngOnInit(): void {
    this.photos$ = this.spaceHttpService.getMarsPictures();
  }
}
