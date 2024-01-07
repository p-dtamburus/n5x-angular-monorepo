import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'n5x-angular-monorepo-onboarding-entry',
  template: `<n5x-angular-monorepo-nx-welcome></n5x-angular-monorepo-nx-welcome>`,
})
export class RemoteEntryComponent {}
