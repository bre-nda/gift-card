import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsUsersComponent } from './settings-users/settings-users.component';
import { SettingsAccessComponent } from './settings-access/settings-access.component';
import { SettingsPermissionsComponent } from './settings-permissions/settings-permissions.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingsUsersComponent,
    SettingsAccessComponent,
    SettingsPermissionsComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
