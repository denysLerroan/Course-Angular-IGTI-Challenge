import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenatorsDetailsComponent } from './senators-details/senators-details.component';
import { SenatorsListComponent } from './senators-list/senators-list.component';

const routes: Routes = [
  { path: 'senadores', component: SenatorsListComponent },
  { path: 'senadores/:id', component: SenatorsDetailsComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
