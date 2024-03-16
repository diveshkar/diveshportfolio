import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private messageService: MessageService,
    private _snackBar: MatSnackBar,
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
      this.showSnackBar('Please fill in all the fields', 'error');
    } else {
      this.messageService.sendMessage(this.formDataObject).subscribe({
        next: (response) => {
          this.showSnackBar('Message sent success fully', 'Thanks for sending');
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

  showSnackBar(message: string, panelClass: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [panelClass],
    });
  }
}
