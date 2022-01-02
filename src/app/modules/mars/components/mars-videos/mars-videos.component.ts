import { Component, OnInit } from '@angular/core';
import { VideoData } from '../../models/video.model';
import { MarsDataService } from '../../services/mars-data.service';
@Component({
  selector: 'app-mars-videos',
  templateUrl: './mars-videos.component.html',
  styleUrls: ['./mars-videos.component.scss']
})
export class MarsVideosComponent implements OnInit {
  data: VideoData[] = [];
  constructor(private marsDataService: MarsDataService) { }

  ngOnInit(): void {
    this.data = this.marsDataService.getVideos();
  }
}
