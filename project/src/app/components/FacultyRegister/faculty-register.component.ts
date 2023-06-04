import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-register',
  templateUrl: './faculty-register.component.html',
  styleUrls: ['./faculty-register.component.css']
})
export class FacultyRegisterComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [
      Validators.required,
      Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
    gender: new FormControl("", [
      Validators.required])
  });
  //registrationMessage: any = {};

  get Name(): FormControl {
    return this.registerForm.get("name") as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }

  registerSubmitted(){
    console.log(this.registerForm);
    //document.write("Registration submitted");
   // alert("Registration Submitted");
   this.router.navigate(['/facultylogin']);



  }

  loginpage(){
    this.router.navigate(['/facultylogin']);

  }

}

