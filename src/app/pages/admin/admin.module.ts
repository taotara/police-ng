import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PaltoonComponent } from './paltoon/paltoon.component';
import { ExamsComponent } from './exams/exams.component';
import { MessageComponent } from './message/message.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    PaltoonComponent,
    ExamsComponent,
    MessageComponent,
    SettingComponent,
  ],

  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
