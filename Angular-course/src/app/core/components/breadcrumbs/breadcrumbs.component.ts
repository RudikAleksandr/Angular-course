import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { BreadcrumbsService } from '../../services/breadcrumbs/breadcrumbs.service';
import { Routes } from '../../enums/routes.enum';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: string;
  constructor(
    private router: Router,
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit() {
    this.router.events.subscribe(this.handlerRouterEvents.bind(this));
    this.breadcrumbsService.getBreadcrumbsChangeEmitter().subscribe(this.handlerBreadcrumbsChange.bind(this));
  }

  private handlerRouterEvents(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      switch (event.urlAfterRedirects) {
        case Routes.COURSES: this.breadcrumbs = ''; break;
        case Routes.COURSES_NEW: this.breadcrumbs = Routes.COURSES_NEW.split('/')[2]; break;
      }
    }
  }

  private handlerBreadcrumbsChange(breadcrumbs: string): void {
    this.breadcrumbs = breadcrumbs;
  }

}
