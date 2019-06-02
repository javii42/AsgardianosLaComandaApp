export class Producto {

	private nombre: string;

	private desc: string;

	private tiempo: number;

	private precio: number;

	private fotos: Array<string>;

	constructor(nombre, desc, tiempo, precio, fotos : Array<string>){
		this.nombre = nombre;
		this.desc = desc;
		this.tiempo = tiempo;
		this.precio = precio;
		this.fotos = fotos;
	}

	public getNombre(): string{
		return this.nombre;
	}

	public getDesc(): string{
		return this.desc;
	}

	public getTiempo(): number{
		return this.tiempo;
	}

	public getPrecio(): number{
		return this.precio;
	}

	public getFotos(): Array<string>{
		return this.fotos;
	}

}
