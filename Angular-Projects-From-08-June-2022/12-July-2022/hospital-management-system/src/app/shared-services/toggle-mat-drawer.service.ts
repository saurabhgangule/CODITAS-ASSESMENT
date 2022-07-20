import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class ToggleMatDrawerService {
  private drawer!: MatDrawer;
  private paginator!: MatPaginator;

  constructor() { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  toggle(): void {
    this.drawer.toggle();
  }

  setPaginator(paginator: MatPaginator) {
    this.paginator = paginator;
  }

  getPaginator() {
    return this.paginator;
  }
}
