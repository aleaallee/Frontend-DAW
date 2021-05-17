import { Component, OnInit } from '@angular/core';
import { Componente } from '@models/componentes';
import { FabricantesService } from '@services/fabricantes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fabricantes: any;

  constructor(public fabricantesService: FabricantesService) {}

  ngOnInit(): void {
    this.obtenerFabricantes();
    console.log(this.fabricantes);
  }

  async obtenerFabricantes(): Promise<void> {
    await this.fabricantesService.getFabricantes().subscribe({
      next: (data) => {
        console.log(data);
        this.fabricantes = data;
      },
      error: (error) => {
        console.log(`${error.name}: ${error.message}`);
      },
    });
  }
}
