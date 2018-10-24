import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { ContentUrls } from 'src/types';

@Injectable()
export class DataService {

    private urls: ContentUrls = environment.urls
    private cacheHpPage: any = {}
    private cacheFaqPage: any = {}
    private cacheAboutDialog: any = {}
    private cacheContactForm: any = {}

    constructor(private http: HttpClient) {

    }


    getHomePage(): Observable<Ihp> {
        if (this.cacheHpPage[this.urls.hp]) {
            return of(this.cacheHpPage[this.urls.hp]);
        }
        return this.http.get<Ihp>(this.urls.hp).pipe(
            catchError(err => {
                throw (err.message || "");
            }),
            tap(res => {
                this.cacheHpPage[this.urls.hp] = res;
            })
        )
    }

    getFaqPage(): Observable<IfaqPage> {
        if (this.cacheFaqPage[this.urls.faq]) {
            return of(this.cacheFaqPage[this.urls.faq]);
        }

        return this.http.get<IfaqPage>(this.urls.faq).pipe(
            catchError(err => {
                throw (err.message || "");
            }),
            tap(res => {
                this.cacheFaqPage[this.urls.faq] = res;
            }),

        );
    }

    getAboutData(): Observable<IaboutDialog[]> {
        if (this.cacheAboutDialog[this.urls.about]) {
            return of(this.cacheAboutDialog[this.urls.about]);
        }

        return this.http.get<IaboutDialog[]>(this.urls.about).pipe(
            catchError(err => {
                return of([])
            }),
            tap(res => {
                this.cacheAboutDialog[this.urls.about] = res;
            }),

        );
    }

    getContactData(): Observable<IcontactPage[]> {

        if (this.cacheContactForm[this.urls.contact]) {
            return of(this.cacheContactForm[this.urls.contact]);
        }

        return this.http.get<IcontactPage[]>(this.urls.contact).pipe(
            catchError(err => {
                return of([])
            }),
            tap(res => {
                this.cacheContactForm[this.urls.contact] = res;
            })
        )
    }

    sendContactForm(formValue: IcontactForm): Observable<Result> {
        // console.log("sendContactForm",formValue);
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        return this.http.post<Result>(this.urls.contactSubmitUrl, formValue, httpOptions)
    }


}

