import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EtkinlikService } from 'src/app/services/etkinlik.service';

@Component({
  selector: 'app-etkinlikler',
  templateUrl: './etkinlikler.component.html',
  styleUrls: ['./etkinlikler.component.css']
})
export class EtkinliklerComponent implements OnInit {
  subscription1! : Subscription
  etkinlikler! : any[];
  constructor(private etkinlikService: EtkinlikService) {}
  ngOnInit(): void {
    this.subscription1 = this.etkinlikService.getAllEtkinlikler().subscribe({
      next:(result)=>this.etkinlikler=result,
      error:(error)=>console.log(error)
    })
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
