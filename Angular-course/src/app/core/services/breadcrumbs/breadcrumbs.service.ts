import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbsChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public emitBreadcrumbsChangeEvent(breadcrumbs: string): void {
    this.breadcrumbsChange.emit(breadcrumbs);
  }

  public getBreadcrumbsChangeEmitter(): EventEmitter<string> {
    return this.breadcrumbsChange;
  }
}
