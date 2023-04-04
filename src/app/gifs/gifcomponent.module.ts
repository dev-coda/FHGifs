import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifComponent } from './gif-page/gif.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [GifComponent, SearchComponent, ResultComponent],
  imports: [CommonModule],
  exports: [GifComponent],
})
export class GifModule {}
