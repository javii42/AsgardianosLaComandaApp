import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

export class Camara {

	private const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.FILE_URI,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
	}

	constructor(private camera: Camera) { }

	public tomarFoto():string{
		this.camera.getPicture(this.options).then((imageData) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64 (DATA_URL):
		 let foto = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			console.log(err);
		 // Handle error
	});
		return foto;
	}
}
