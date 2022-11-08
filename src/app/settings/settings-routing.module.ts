import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsAccessComponent } from './settings-access/settings-access.component';
import { SettingsPermissionsComponent } from './settings-permissions/settings-permissions.component';
import { SettingsUsersComponent } from './settings-users/settings-users.component';

const routes: Routes = [
  {
    path: 'users',
    component: SettingsUsersComponent
  },
  {
    path: 'roles',
    component: SettingsAccessComponent
  },
  {
    path: 'permissions',
    component: SettingsPermissionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
