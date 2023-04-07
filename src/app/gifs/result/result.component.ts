import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass'],
})
export class ResultComponent implements OnInit {
  constructor(private gifService: GifService) {}

  get resultados() {
    return this.gifService.resultados;
  }

  async ngOnInit() {}
}
