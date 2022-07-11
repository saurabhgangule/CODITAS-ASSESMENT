import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeAuthService } from '../../services/home-auth.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DialogComponent } from '../dialog/dialog.component';
import { IPokemon } from 'src/app/models/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  dataSource!: MatTableDataSource<IPokemon>;
  displayedColumns: string[] = ['name', 'level', 'type', 'createdAt', 'updatedAt', 'action'];
  initData!: IPokemon;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private homeAuthService: HomeAuthService, public dialog: MatDialog, private router: Router) { }
  private loadInitData() {
    this.initData = {
      name: '',
      level: 0,
      type: 0,
      isSelected: false,
      action: 'Add',
      id: 0,
      createdOn: '',
      updatedOn: ''
    };

  }
  private loadPokemonData() {
    this.homeAuthService.getPokemons().subscribe({
      next: (response) => {
        this.dataSource = new MatTableDataSource<IPokemon>(Object(response).data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngOnInit(): void {
    this.loadInitData();
    this.loadPokemonData();
  }

  openDialog(action?: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        name: this.initData.name,
        level: this.initData.level,
        type: this.initData.type,
        isSelected: this.initData.isSelected,
        action: this.initData.action,
        id: this.initData.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        action ?
          this.homeAuthService.updatePokemon(result).subscribe({
            next: () => this.loadPokemonData()
          })
          :
          this.homeAuthService.createPokemon(result).subscribe({
            next: () => this.loadPokemonData()
          })
      }
      this.loadInitData();
    });
  }

  handleEdit(pokemon: any) {
    this.initData.name = pokemon.name;
    this.initData.level = pokemon.level;
    this.initData.type = pokemon.type.id;
    this.initData.id = pokemon.id;
    this.initData.action = 'Edit';
    this.openDialog(this.initData.action);
  }

  handleDelete(id: string) {
    this.homeAuthService.deletePokemon(id).subscribe({
      next: () => this.loadPokemonData()
    })
  }

  handleLogOut() {
    this.homeAuthService.logOut();
    this.router.navigate(['']);
  }

}