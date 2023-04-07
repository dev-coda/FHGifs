import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from 'src/app/gifs/interfaces/SearchGifResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey: string = 'A1v7Tk8T1P1S8dtiNBuYTUjA6nmko79M';
  private _historial: string[] = [];
  public resultados: GifItem[] = [];
  private URI = 'https://api.giphy.com/v1/gifs';
  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    this.fetchGifs2(query);
    if (query && !this._historial.includes(query)) {
      this._historial.unshift(query);
      if (this._historial.length > 10) {
        this._historial.pop();
      }

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
  }

  fetchGifs = async (query: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img: any) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  };

  fetchGifs2 = (query: string) => {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`;
    this.http
      .get<SearchGifsResponse>(`${this.URI}/search`, { params })
      .subscribe((resp: SearchGifsResponse) => {
        const gifs: GifItem[] = resp.data.map((img) => {
          return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
          };
        });
        this.resultados = gifs;

        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  };

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    }
    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    }
  }
}

interface GifItem {
  id: string;
  title: string;
  url: string;
}
