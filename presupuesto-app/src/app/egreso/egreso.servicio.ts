import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[] = [
      new Egreso("Renta Depto", 900),
      new Egreso("Ropa", 200)
    ];

    agregarEgreso(egreso:Egreso){
        this.egresos.push(egreso);
    }
}