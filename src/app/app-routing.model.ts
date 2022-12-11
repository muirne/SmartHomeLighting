import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { AppDevicesComponent } from "./devices/devices.component";
import { AppDeviceComponent } from "./devices/device/device.component";
import { LoginComponent } from "./app-login/login/login.component";
import { SignupComponent } from "./app-login/signup/signup.component";
import { AuthGuard } from "./app-login/auth.guard";

const routes: Routes = [
  { path: '', component:  AppDeviceComponent },
  { path: 'create', component: AppDevicesComponent, canActivate: [AuthGuard]  },
  { path: 'edit/:postId', component: AppDevicesComponent,  canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'list', component: AppDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}