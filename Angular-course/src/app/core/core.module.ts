import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LoadingBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LoadingBlockComponent
  ]
})
export class CoreModule { }
