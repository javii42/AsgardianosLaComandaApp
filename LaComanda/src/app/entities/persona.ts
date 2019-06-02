import { Camara } from './camara';
import { CodigoQR } from './codigo-qr';


export class Persona {
	private nombre:string;
	private apellido:string;
	private dni:number;
	private foto:string;

	constructor(nombre,apellido,dni,foto){
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
		this.foto = foto;
	}

	public getNombre():string{
		return this.nombre;
	}

	public getApellido():string{
		return this.apellido;
	}

	public getDNI():number{
		return this.dni;
	}

	public getFoto():string{
		return this.foto;
	}

	public tomarFoto(){
		let camara:Camara = new Camara();
		this.foto = camara.tomarFoto();
	}

	public obtenerDatosDniQr(){
		let codQr:CodigoQR = new CodigoQR();
		var datos:string = codQr.leerCodigo();

	}

}
