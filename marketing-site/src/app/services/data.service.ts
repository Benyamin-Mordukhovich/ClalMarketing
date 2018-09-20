import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }
    private _urlFaq="assets/faq-data.json";
    private _urlAbout="assets/about-data.json";
    private cacheFaqPage: any = {}
    private cacheAboutDialog: any = {}

    getFaqPage(): Observable<IfaqPage[]> {
        if (this.cacheFaqPage[this._urlFaq]) {
            return of(this.cacheFaqPage[this._urlFaq]);
        }


        return this.http.get<IfaqPage[]>(this._urlFaq).pipe(
            catchError(err => {
                return of([])
            }),
            tap(res => {
                this.cacheFaqPage[this._urlFaq] = res;
            }),

        );
    }

    getAboutData(): Observable<IaboutDialog[]> {
        if (this.cacheAboutDialog[this._urlAbout]) {
            return of(this.cacheAboutDialog[this._urlAbout]);
        }

        return this.http.get<IaboutDialog[]>(this._urlAbout).pipe(
            catchError(err => {
                return of([])
            }),
            tap(res => {
                this.cacheAboutDialog[this._urlAbout] = res;
            }),

        );
    }

}