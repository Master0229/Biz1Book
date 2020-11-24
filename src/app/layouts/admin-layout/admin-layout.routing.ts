import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { CmComponent } from "../../pages/cm/cm.component";
import { PlansComponent } from "../../pages/plans/plans.component";
import { UrbanpiperComponent } from "../../pages/urbanpiper/urbanpiper.component";
import { IssuesComponent } from "../../pages/issues/issues.component";
import { EmployeesComponent } from "../../pages/employees/employees.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "cm", component: CmComponent },
  { path: "plans", component: PlansComponent },
  { path: "urbanpiper", component: UrbanpiperComponent },
  { path: "issues", component: IssuesComponent },
  { path: "employees", component: EmployeesComponent },
  // { path: "rtl", component: RtlComponent }
];
