import { Component} from '@angular/core';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Component({
  
    selector: "mi-producto",
    imports:[PeliculaComponent],
    templateUrl: "producto.component.html",
    styleUrl: "producto.component.css"

})

export class ProductoComponent {

    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;


    public mostrar_peliculas:boolean = true;


    constructor(){

        this.nombre = "PC PORTATIL";
        this.marca = "Lenovo";
        this.precio = 1500.00;
        this.descripcion = "Una PC portatil de 15.6 pulgadas con procesador Intel Core i7 y RAM de 16GB";

        console.log("Se ha cargado el componente de mi de productos")
        
    }


    ngOnInit(){
        console.log("Vale, el componente esta inicializado!!")
    }


    ngAfterViewInit(){
        console.log("La vista esta cargada!!!!!")
    }


    ngDoCheck(){
        console.log("Los cambios en el componente han sido detectados")
    }


    cambiarNombre(){
        this.nombre = "PC ELEGANTE";
    }


    ocultarPeliculas (valor:boolean){
        this.mostrar_peliculas = valor;
    }

}
