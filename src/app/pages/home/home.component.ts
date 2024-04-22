import { Component, OnInit } from '@angular/core';
import { EtkinlikService } from 'src/app/services/etkinlik.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private etkinlikService: EtkinlikService) {}
  ngOnInit(): void {
    this.etkinlikService.getAllEtkinlikler().subscribe({
      next:(result)=>console.log(result),
      error:(error)=>console.log(error)
    })
  }
}
