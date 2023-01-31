import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any[]=[
    {
      id :"1",
      codigo:"1",
      descripcion:"Galletas chokis",
      precioCompra:"10.00",
      precioVenta:"15.00",
      ganancia:"5.00",
      existencia:"100.00",
    },
    {
      id :"2",
      codigo:"2",
      descripcion:"Mermelada de fresa",
      precioCompra:"65.00",
      precioVenta:"80.00",
      ganancia:"15.00",
      existencia:"100.00",
    },
    {
      id :"3",
      codigo:"3",
      descripcion:"Aceite",
      precioCompra:"18.00",
      precioVenta:"20.00",
      ganancia:"2.00",
      existencia:"100.00",
    },
    {
      id :"4",
      codigo:"4",
      descripcion:"Palomitas de maíz",
      precioCompra:"12.00",
      precioVenta:"15.00",
      ganancia:"3.00",
      existencia:"100.00",
    },
    {
      id :"5",
      codigo:"5",
      descripcion:"Doritos",
      precioCompra:"5.00",
      precioVenta:"8.00",
      ganancia:"3.00",
      existencia:"100.00",
    },

  ]
}
