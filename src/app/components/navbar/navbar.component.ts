import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn : boolean = false;
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    this.auth.user$.subscribe({next:result=> this.isUserLoggedIn=!!result,error:(error)=>console.log(error)})
  }
  
  signUp() {
    this.auth.signIn("mervsen@gmail.com","856575856575").subscribe(
      {next:result=> console.log(result.user),
  error: (error)=>console.log(error)})
  }

  signOut() {
    this.auth.signOut().subscribe();
  }
}
