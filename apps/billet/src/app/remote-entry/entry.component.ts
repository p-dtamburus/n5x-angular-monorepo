import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './components/dashboard.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, DashboardComponent],
  selector: 'n5x-angular-monorepo-billet-entry',
  template: `<n5x-angular-monorepo-dashboard></n5x-angular-monorepo-dashboard>`,
})
export class RemoteEntryComponent {}
