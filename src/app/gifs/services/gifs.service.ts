import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiResponse, GiPhy } from '../interfaces/gyphy.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private API_KEY_GIPHY = '';
  private API_GIPHY = 'https://api.giphy.com/v1/gifs';
  private keywords: string[] = [];
  private _gifs: GiPhy[] = [];
  public isOpenSidebar = false;

  constructor(private httpClient: HttpClient) {
    this.keywords = JSON.parse(localStorage.getItem('keywords') || '[]');
    if (this.keywords.length > 0) this.searchByKeyboard(this.keywords[0]);
  }

  toogleSidebar(val: boolean) {
    this.isOpenSidebar = val;
  }

  get keywordsTags() {
    return [...this.keywords];
  }

  get gifs() {
    return [...this._gifs];
  }

  searchByKeyboard(keyword: string) {
    this.toogleSidebar(false);
    keyword = keyword.toLowerCase();
    if (keyword === '') return;

    this.organizeTags(keyword);
    this.keywords.unshift(keyword);
    this.keywords = this.keywords.splice(0, 10);

    const params = new HttpParams()
      .append('api_key', this.API_KEY_GIPHY)
      .append('q', keyword)
      .append('limit', 20);

    this.httpClient
      .get<ApiResponse>(`${this.API_GIPHY}/search`, { params })
      .pipe(map(({ data }) => data))
      .subscribe((data) => {
        this._gifs = data;
      });
    this.saveKeywordsLocalStorage();
  }

  organizeTags(keywrd: string) {
    if (this.keywords.includes(keywrd)) {
      this.keywords = this.keywords.filter((kwrd) => kwrd !== keywrd);
    }
  }

  private saveKeywordsLocalStorage() {
    localStorage.setItem('keywords', JSON.stringify(this.keywords));
  }
}
