import {Camara} from './camara';
import{CodigoQR} from './codigo-qr';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


export class Persona {
	private nombre:string;
	private apellido:string;
	private dni:number;
	private foto:string;

	constructor(nombre,apellido,dni,foto,
		private camera:Camera,
		private qrScanner:QRScanner){
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
		let camara:Camara = Object.create(this.camera);
		this.foto = camara.tomarFoto();

	}

	public obtenerDatosDniQr():string{
		let codQr:CodigoQR = new CodigoQR(this.qrScanner);
		var datos:string = codQr.leerCodigo();
		return datos;

	}

}
