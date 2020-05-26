import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterExampleSharedModule } from 'app/shared/shared.module';
import { JhipsterExampleCoreModule } from 'app/core/core.module';
import { JhipsterExampleAppRoutingModule } from './app-routing.module';
import { JhipsterExampleHomeModule } from './home/home.module';
import { JhipsterExampleEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterExampleSharedModule,
    JhipsterExampleCoreModule,
    JhipsterExampleHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterExampleEntityModule,
    JhipsterExampleAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterExampleAppModule {}
