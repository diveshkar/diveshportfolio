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
  errorMessage: string = '';

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {}

  onSubmit() {
    console.log(this.formDataObject);
    this.errorMessage = ''; // Reset error message

    if (
      this.formDataObject.name === '' ||
      this.formDataObject.phone === '' ||
      this.formDataObject.email === '' ||
      this.formDataObject.messagetitle === '' ||
      this.formDataObject.message === ''
    ) {
      this.errorMessage = 'Please fill in all the fields';
    } else {
      this.messageService.sendMessage(this.formDataObject).subscribe({
        next: (response) => {
          console.log('Message Sent Successfully', 'success');
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        },
        error: (error) => {
          console.error('Error while sending message', error);
          this.errorMessage = 'Error while sending the message. Please try again.';
        }
      });
    }
  }
}
