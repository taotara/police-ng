import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PaltoonComponent } from './paltoon/paltoon.component';
import { ExamsComponent } from './exams/exams.component';
import { MessageComponent } from './message/message.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes =[
  {
    path: '',
    component: DashboardComponent
    },
  {
    path: 'users',
    component: UsersComponent
    },
  {
    path: 'platoon',
    component: PaltoonComponent
    },
  {
    path: 'exams',
    component: ExamsComponent
    },
  {
    path: 'message',
    component: MessageComponent
    },
  {
    path: 'settings',
    component: SettingComponent
    },
  ]

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AdminRoutingModule { }
