import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name!: string;
  email!: string;
  phone!: string;
  type!: string;
  date!: string;

  constructor(private http: HttpClient, public toastController: ToastController) { }

  async submitForm() {
    const toastsuccess = await this.toastController.create({
      message: 'Form submitted successfully!',
      duration: 3000,
      position: 'top'
    });
    const toastfailed = await this.toastController.create({
      message: 'An error occurred while submitting the form. Please try again later.',
      duration: 3000,
      position: 'top',
      color: 'danger'
    });
    const data = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: this.date,
      type: this.type,
      keyAccess: '??mufr-wr$2ebec2l#riDuyutlyldras6lprotre*u$u?=uTit*es_swl',
    };
    this.http.post('https://example.com/api/submit-form', data).subscribe((response) => {
      toastsuccess.present();
      // Reset form fields
      this.name = '';
      this.email = '';
      this.phone = '';
      this.date = '';
      this.type = '';
    }, (error) => {
      toastfailed.present();
    });
  }

}
