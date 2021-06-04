import { Component, OnInit, isDevMode } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FabricantesService } from '@services/fabricantes.service';
import { ComponentesService } from '@services/componentes.service';
import { from } from 'rxjs';
import { endpoint } from '@models/database';
import { faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss'],
})
export class ComponentesComponent implements OnInit {
  componentes: any;
  fabricantes: any;
  filtrado = false;
  filtroFabricantes: any = '';
  isDev: boolean = isDevMode();
  endpoint = endpoint;

  constructor(
    public componentesService: ComponentesService,
    public fabricantesService: FabricantesService
  ) {}

  ngOnInit(): void {
    this.obtenerComponentes();
    this.obtenerFabricantes();

    console.log(this.componentes);
  }

  async obtenerComponentes(): Promise<void> {
    await this.componentesService.getComponentes().subscribe({
      next: (data) => {
        this.componentes = data;
        // console.log(data);
      },
      error: (error) => {
        console.log(`${error}`);
      },
    });
  }

  async obtenerFabricantes(): Promise<void> {
    await this.fabricantesService.getFabricantes().subscribe({
      next: (data) => {
        this.fabricantes = data;
      },
      error: (error) => {
        console.log(`${error}`);
      },
    });
  }

  limpiarFiltro(): void {
    this.filtroFabricantes = '';
  }
}
