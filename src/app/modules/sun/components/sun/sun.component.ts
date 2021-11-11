import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpaceHttpService } from 'src/app/modules/core/services/space-http.service';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent implements OnInit {
  items$!: Observable<any[]>;
  itemsAmount!: number;
  pageNumber$: Subject<number> = new Subject();
  constructor(private spaceHttpService: SpaceHttpService) {}

  ngOnInit(): void {
    this.items$ = combineLatest(
      [this.spaceHttpService.getPictures('sun'), this.pageNumber$]
    ).pipe(
      map(([items, page]) => {
        this.itemsAmount = items.length;
        return items.slice((page - 1) * 10, (page - 1) * 10 + 10);
      })
    )
  }

  onPageIndexChange(event: number): void {
    this.pageNumber$.next(event);
  }
}
