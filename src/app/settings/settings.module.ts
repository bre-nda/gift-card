import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsUsersComponent } from './settings-users/settings-users.component';
import { SettingsAccessComponent } from './settings-access/settings-access.component';
import { SettingsPermissionsComponent } from './settings-permissions/settings-permissions.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingCreateUserComponent } from '../setting-create-user/setting-create-user.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingsUsersComponent,
    SettingsAccessComponent,
    SettingsPermissionsComponent,
    SettingCreateUserComponent,
  
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SettingsModule { }
