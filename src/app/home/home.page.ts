import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photo : SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  async takePhoto() { 
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl)); 
  }
}