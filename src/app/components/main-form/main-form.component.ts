import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styles: ['input { display: none } ']
})
export class MainFormComponent implements OnInit {

  public forms = ['so', 'price', 'display', 'ram', 'rom', 'features'];
  public titleForm: string[] = ['¿Qué sistema operativo prefiere?', '¿Cuál es tu presupuesto máximo?', '¿Tamaño de la pantalla?', '¿Cuánta memoria RAM?', '¿Cuánto almacenamiento interno?', '¿Le interesa alguna característica más?'];
  public labels: any[] = [
    ['Indiferente', 'Android', 'IOS'],
    [650],
    ['Indiferente', 'Menos de 6 pulgadas', 'Más de 6 pulgadas'],
    ['Indiferente', 'Menos de 8GB', 'Más de 8GB'],
    ['Indiferente', 'Menos de 128GB', 'Más de 128GB'],
    ['Sensor de huella', 'Desbloqueo facial', 'Carga inalámbrica', 'Carga rápida', 'Radio FM', 'Dual SIM', 'Jack 3.5mm'],
  ];
  public features: string[] = ['Sensor de huella', 'Desbloqueo facial', 'Carga inalámbrica', 'Carga rápida', 'Radio FM', 'Dual SIM', 'Jack 3.5mm'];
  public selection: object = Object.entries({
    showSo : true,
    showDisplay : false,
    showRam : false,
    showRom : false,
    showPrice : false,
    showFeatures : false,
    result : false,
    found : false,
    notFound : false,
  });
  public infoData: object = {
    so: 'Indiferente',
    display: 'Indiferente',
    ram: 'Indiferente',
    rom: 'Indiferente',
    price: 650,
    features: [],
  };
  public devicesRecomend;
  public pointAct = 1;


  constructor() { }

  ngOnInit(): void {
  }
}
