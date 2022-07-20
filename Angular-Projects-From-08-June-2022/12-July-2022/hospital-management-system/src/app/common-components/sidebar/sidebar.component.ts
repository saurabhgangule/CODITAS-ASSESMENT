import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ToggleMatDrawerService } from 'src/app/shared-services/toggle-mat-drawer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') public drawer!: MatDrawer;
  @Input() menuData!: any;

  constructor(private toogleMatDrawerService: ToggleMatDrawerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.toogleMatDrawerService.setDrawer(this.drawer);
  }
}

