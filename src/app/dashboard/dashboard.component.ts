import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
