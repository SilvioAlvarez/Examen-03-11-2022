import { stripVTControlCharacters } from "util";

 class Transporte {
 public marca: string;
 public modelo: string;
 public año: number;
protected arrancar: boolean;
public velocidad: number;

public constructor(marca: string,modelo:string,año:number,arrancar:boolean,velocidad:number){
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;
    this.arrancar=arrancar;
    this.velocidad=velocidad;
 }
 
    public apagarTransporte() {
        this.arrancar = true;
    }
    public prenderTransporte() {
        this.arrancar = false;
    }
    public subirVelocidad() {
        this.velocidad=0;
    }
    public bajarVelocidad() {
        this.velocidad = 0;
    }
   }

   class Aereo extends Transporte {
      
      public volar():void{
         console.log("Este transporte pertenece a la clase ");
       }
   }
   class Acuatico extends Transporte {
    
      public navegar(): void{
        console.log("Este transporte pertenece a la clase ");
      }
   }
   class Terrestre extends Transporte {
      public transitar(): void{
    console.log("Este transporte pertenece a la clase ")
   }}

   let miAvion : Aereo= new Aereo("Tango", "007", 2011, true, 700);
   
   let miBarco : Acuatico= new Acuatico("Yate", "Imperial", 2013, true, 90);
   
   let miAuto: Terrestre= new Terrestre("Toyota", "Corolla", 2015, true, 120);
   
   console.log(miAvion,miAvion.volar());
   console.log(miBarco,miBarco.navegar());
   console.log(miAuto,miAuto.transitar());