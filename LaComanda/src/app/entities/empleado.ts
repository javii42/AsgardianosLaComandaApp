import { Persona } from './persona';

class Empleado extends Persona {

    cuil: string;
    tipoEmpleado: string;

    constructor (nombre: string, apellido: string, dni: string, foto: string, cuil: string, tipo: string) {

        super(nombre, apellido, dni, foto);

        this.cuil = cuil;
        this.tipoEmpleado = tipo;
    }

    public getCuil():string{
		return this.cuil;
	}

	public getTipo():string{
		return this.tipoEmpleado;
	}
}