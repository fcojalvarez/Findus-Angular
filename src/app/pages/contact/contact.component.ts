import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  constructor( private fb: FormBuilder, private http: HttpClient ) { 
    this.formCreate();
  }

  ngOnInit(): void {
  }

  formCreate() {
    this.form = this.fb.group({
      fullName: ['', Validators.required ,''],
      email: ['', Validators.required ,''],
      subject: ['', Validators.required ,''],
      message: ['', Validators.required ,'']
    });
  }

  sendMessage( form ) {
    const message: { fullName: string, email: string, subject: string, message: string} = form.value;
    
    this.http.post<any>("https://findusapi.herokuapp.com/contact", message).subscribe()
    
  }

}
