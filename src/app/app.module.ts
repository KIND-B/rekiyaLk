import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/commonComponents/headers/headers.component';
import { HomeComponent } from './components/commonComponents/home/home.component';
import { FooterComponent } from './components/commonComponents/footer/footer.component';
import { NotFoundComponent } from './components/commonComponents/not-found/not-found.component';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core'
import { TranslateHttpLoader} from '@ngx-translate/http-loader'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

// import { NiceSelectModule } from "ng-nice-select";

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
loader:{
  provide:TranslateLoader,
  useFactory:(http:HttpClient)=>{ return new TranslateHttpLoader(http,'./assets/i18n/','.json');},
  deps:[HttpClient]
}
    }
    )

    // NiceSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
