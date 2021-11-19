import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaboTransactionsModule } from './rabo-screens/rabo-transactions/rabo-transactions.module';
import { RaboHomeModule } from './rabo-screens/rabo-home/rabo-home.module';
import { RaboLoginModule } from './rabo-screens/rabo-login/rabo-login.module';
import { RoboNavHeaderComponent } from './common-ui/rabo-nav-header/rabo-nav-header.component';
import { RaboPageNotFoundComponent } from './common-ui/rabo-page-not-found/rabo-page-not-found.component';
import { SplashScreenComponent } from './common-ui/splash-screen/splash-screen.component';
import { RaboAuthGuardService } from './rabo-services/rabo-authguard-service/rabo-authguard-service.service';
import { RaboServiceInterceptor } from './rabo-services/rabo-interceptors/rabo-service-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RaboAlertModule } from './common-ui/rabo-alert/rabo-alert.module';
import { RoboAlertMessageService } from './rabo-services/robo-alert-message-service/robo-alert-message-service';

@NgModule({
  declarations: [
    AppComponent,
    RoboNavHeaderComponent,
    RaboPageNotFoundComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RaboTransactionsModule,
    RaboLoginModule,
    RaboHomeModule,
    RaboAlertModule
  ],
  exports:[RoboNavHeaderComponent,
    RaboPageNotFoundComponent
  ],
  providers: [RaboAuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RaboServiceInterceptor,
      multi: true,
      
    },
    RoboAlertMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
