import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

  formData = new FormData();
  formDataObject = {
    name: '',
    phone: '',
    email: '',
    messagetitle: '',
    message: ''
  };

  // constructor(
  //   private http: HttpClient,
  //   private messageService: MessageService,
  //   private router: Router
  // ) {}

  onSubmit() {
    console.log(this.formDataObject);
    // if (
    //   this.formDataObject.name === '' ||
    //   this.formDataObject.phone === '' ||
    //   this.formDataObject.email === '' ||
    //   this.formDataObject.messagetitle === '' ||
    //   this.formDataObject.message === ''
    // ) {
    //   console.log('Please fill in all the fields', 'error');
    // } else {
    //   // Append other form fields to the FormData
    //   this.formData.append('name', this.formDataObject.name);
    //   this.formData.append('phone', this.formDataObject.phone);
    //   this.formData.append('email', this.formDataObject.email);
    //   this.formData.append('messagetitle', this.formDataObject.messagetitle);
    //   this.formData.append('message', this.formDataObject.message);

    //   // Make sure you are not setting 'Content-Type: application/json'
    //   this.messageService.sendMessage(this.formData).subscribe({
    //     next: (response) => {
    //       console.log('Message Sent Successfully', 'success');
    //       setTimeout(() => {
    //         this.router.navigate(['/']);
    //       }, 3000);
    //     },
    //     error: (error) => {
    //       console.log('Error while sending message', 'error');
    //     }
    //   });
    // }
  }
}
