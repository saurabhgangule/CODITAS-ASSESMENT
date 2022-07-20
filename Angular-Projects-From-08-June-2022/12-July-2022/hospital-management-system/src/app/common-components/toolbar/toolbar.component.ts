import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string = 'The';

  constructor(
    private toggleMatDrawerSercice: ToggleMatDrawerService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  toggleMatDrawer() {
    this.toggleMatDrawerSercice.toggle();
  }

  handleLogout() {
    const flag = this.authService.logout();
    if (flag) {
      this.router.navigate(['auth']);
    }
  }

}
