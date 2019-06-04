import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

export class CodigoQR {
	private codigoEscaneado:string;
  public scanSub;
	constructor(private qrScanner:QRScanner){}

	public leerCodigo():string{


    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {

        if (status.authorized) {

       // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });
          this.scanSub = this.qrScanner.scan().subscribe((text: string) => {

						alert(text);
					 });

          this.qrScanner.show().then(() => {
         
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there

        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => alert(e)); 
				return this.codigoEscaneado;
			}
}
