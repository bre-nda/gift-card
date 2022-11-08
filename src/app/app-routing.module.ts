import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FriendComponent } from './friend/friend.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { RedemptionComponent } from './redemption/redemption.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SettingsComponent } from './settings/settings.component';
import { ShareComponent } from './share/share.component';
import { SummaryComponent } from './summary/summary.component';
import { WalletsComponent } from './wallets/wallets.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
{path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
{path: 'messages', component:MessagesComponent, canActivate: [AuthGuard]},
{path: 'purchases', component:PurchasesComponent, canActivate: [AuthGuard]},
{path: 'wallets', component: WalletsComponent},
{path: 'redemption', component: RedemptionComponent},
{path: 'share', component: ShareComponent},
{path: 'balance', component: BalanceComponent},
{path: 'summary', component: SummaryComponent},
{path: 'contacts', component: ContactsComponent},
{path: 'sessions', component: SessionsComponent},
{path: 'friend', component:FriendComponent},
{path: 'work', component:WorkComponent},
{
  path: 'settings',
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
},   
{path: '', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
