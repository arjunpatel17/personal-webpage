import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  formAction: string = 'https://formspree.io/f/xzbydvbo';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'userData': new FormGroup({
          'name': new FormControl(null, [Validators.required]),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'description': new FormControl(null, [Validators.required]),
      }),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let formData = new FormData();
      formData.append("name", this.contactForm.get("userData").value.name);
      formData.append("email", this.contactForm.get("userData").value.email);
      formData.append("description", this.contactForm.get("userData").value.description);

      this.http.post(this.formAction, formData).toPromise()
      .then(response => alert('Thank you for contacting. I will get back to you shortly.'))
      .catch(error => alert('Error, message not sent!'));

      this.reset();
    } else {
      this.validateAllFormFields(this.contactForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset() {
    this.contactForm.reset();
  }

}
