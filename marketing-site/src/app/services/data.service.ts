import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { }
    private _urlHp = "assets/hp-data.json";
    private _urlFaq = "assets/faq-data.json";
    private _urlAbout = "assets/about-data.json";
    private _urlContactPage = "assets/contact-data.json";
    private cacheHpPage: any = {}
    private cacheFaqPage: any = {}
    private cacheAboutDialog: any = {}
    private cacheContactForm: any = {}

    getHomePage():Observable<Ihp[]>{
        if (this.cacheHpPage[this._urlHp]) {
            return of(this.cacheHpPage[this._urlHp]);
        }
        return this.http.get<Ihp[]>(this._urlHp).pipe(
            catchError(err=>{
                throw (err.message || "");
            }),
            tap(res =>{
                this.cacheHpPage[this._urlHp] = res;
            })
        )
    }

    getFaqPage(): Observable<IfaqPage> {
        if (this.cacheFaqPage[this._urlFaq]) {
            return of(this.cacheFaqPage[this._urlFaq]);
        }

        return this.http.get<IfaqPage>(this._urlFaq).pipe(
            catchError(err => {
                return of()
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

    getContactData():Observable<IcontactPage[]>{

        if(this.cacheContactForm[this._urlContactPage]){
            return of(this.cacheContactForm[this._urlContactPage]);
        }

        return this.http.get<IcontactPage[]>(this._urlContactPage).pipe(
            catchError(err => {
                return of([])
            }),
            tap(res =>{
                this.cacheContactForm[this._urlContactPage] = res;
            })
        )
    }

    sendContactForm(formValue:IcontactForm): Observable<Result>  {
        console.log("sendContactForm",formValue);
        const httpOptions = {headers: new HttpHeaders ({'Content-Type': 'application/json'})}
        return this.http.post<Result>(this._urlContactPage, formValue,httpOptions)
    }

    
}

