import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  @ViewChild('txt') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {}
  buscar() {
    this.gifService.buscarGifs(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }
}
