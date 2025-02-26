import { Component } from '@angular/core';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { VentasComponent } from '../ventas/ventas.component';

@Component({
  
    selector: "mi-producto",
    imports:[PeliculaComponent,UsuarioComponent,VentasComponent],
    templateUrl: "producto.component.html",
    styleUrl: "producto.component.css"

})

export class ProductoComponent {

    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;

    constructor(){

        this.nombre = "PC PORTATIL";
        this.marca = "Lenovo";
        this.precio = 1500.00;
        this.descripcion = "Una PC portatil de 15.6 pulgadas con procesador Intel Core i7 y RAM de 16GB";

        console.log("Se ha cargado el componente de mi de productos")
        
    }

}
