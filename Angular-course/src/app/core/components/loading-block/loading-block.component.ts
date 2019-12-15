import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})
export class LoadingBlockComponent implements OnInit {
  public isLoading = false;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.getLoading().subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }

}
