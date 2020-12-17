import { KanyeRestService } from './service/kanye-rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyPipePipe } from './shared/my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    KanyeRestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
