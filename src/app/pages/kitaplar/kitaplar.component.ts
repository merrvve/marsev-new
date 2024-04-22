import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { KitapService } from 'src/app/services/kitap.service';

@Component({
  selector: 'app-kitaplar',
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.css']
})
export class KitaplarComponent implements OnInit {
  subscription1! : Subscription
  kitaplar! : any[];

  selectedBook:  number = 1;
  constructor(private kitapService: KitapService) {}
  ngOnInit(): void {
    this.subscription1 = this.kitapService.getAllEtkinlikler().subscribe({
      next:(result: any)=>this.kitaplar=result,
      error:(error)=>console.log(error)
    })
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
