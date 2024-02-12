import { Component } from '@angular/core';
import { WebSidebarComponent } from '../../components/sidebar/web-sidebar.component';

@Component({
  selector: 'commonwealth-dashboard',
  standalone: true,
  imports: [WebSidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
