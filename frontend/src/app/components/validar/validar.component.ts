import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ValidarDataSource } from './validar-datasource';
import { Registro } from 'src/app/shared/models/registro.model';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.scss'],
})
export class ValidarComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Registro>;
  dataSource: ValidarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'nome',
    'email',
    'cpf',
    'celular',
    'conhecimentos',
    'status',
  ];

  constructor() {
    this.dataSource = new ValidarDataSource();
  }

  validarStatus(row: Registro): void {
    // Encontre a linha correta na fonte de dados e atualize o status
    const index = this.dataSource.data.findIndex((item) => item === row);
    if (index >= 0) {
      this.dataSource.data[index].status = 'Validado';
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
