import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { TopWidgetsComponent } from './components/top-widgets/top-widgets.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { PaltoonComponent } from './pages/admin/paltoon/paltoon.component';
import { ExamsComponent } from './pages/admin/exams/exams.component';
import { MessageComponent } from './pages/admin/message/message.component';
import { SettingComponent } from './pages/admin/setting/setting.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    PaltoonComponent,
    ExamsComponent,
    MessageComponent,
    SettingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
