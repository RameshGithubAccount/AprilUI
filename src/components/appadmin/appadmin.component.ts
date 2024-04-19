import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import { MessageService } from 'primeng/api';
import { AppAdmin } from 'src/app/interfaces/app-admin';
import { AppAdminService } from 'src/app/services/app-admin.service';
//import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-appadmin',
  standalone: true,
  imports: [],
  templateUrl: './appadmin.component.html',
  styleUrl: './appadmin.component.scss'
})
export class AppadminComponent {

  appAdmin = this.fb.group({})

  constructor(
    private fb: FormBuilder,
    private appAdminService: AppAdminService,
    //private messageService: MessageService,
    private router: Router
  ) { }

  get appKey() {
    return this.appAdmin.controls['appKey'];
  }

  get appValue() {
    return this.appAdmin.controls['appValue'];
  }

  get appComments() {
    return this.appAdmin.controls['appComments'];
  }

  // get confirmPassword() {
  //   return this.registerForm.controls['confirmPassword'];
  // }

  // submitDetails() {
  //   const postData = { ...this.appAdmin.value };
  //   //delete postData.confirmPassword;
  //   this.appAdminService.registerUser(postData as AppAdmin).subscribe(
  //     response => {
  //       console.log(response);
  //       //this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
  //       this.router.navigate(['login'])
  //     },
  //     error => {
  //       //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
  //     }
  //   )
  // }
}
