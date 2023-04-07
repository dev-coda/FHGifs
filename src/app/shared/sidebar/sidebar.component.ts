import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  get historial() {
    return this.gifService.historial;
  }

  buscarGifs(query: string) {
    console.log(query);
    this.gifService.buscarGifs(query);
    console.log(this.gifService.resultados);
  }

  buscar(query: string) {
    this.gifService.buscarGifs(query);
  }
  constructor(private gifService: GifService) {}
}
