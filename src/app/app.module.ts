import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { WalletsComponent } from './wallets/wallets.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { ShareComponent } from './share/share.component';
import { BalanceComponent } from './balance/balance.component';
import { SummaryComponent } from './summary/summary.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SessionsComponent } from './sessions/sessions.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { WorkComponent } from './work/work.component';
import { FriendComponent } from './friend/friend.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    HeaderComponent,
    MessagesComponent,
    PurchasesComponent,
    WalletsComponent,
    RedemptionComponent,
    ShareComponent,
    BalanceComponent,
    SummaryComponent,
    ContactsComponent,
    SessionsComponent,
    HomeComponent,
    BodyComponent,
    SublevelMenuComponent,
    WorkComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
