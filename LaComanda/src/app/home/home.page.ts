import { Component } from '@angular/core';
import{Persona} from '../entities/persona';
import { Camera } from '@ionic-native/camera/ngx';
import { QRScanner} from '@ionic-native/qr-scanner/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private camera:Camera,
    private qrScanner:QRScanner) {}

  public leerDni(){
    let p:Persona = new Persona("","","","",this.camera,this.qrScanner);

    alert(p.obtenerDatosDniQr());
  }

}
