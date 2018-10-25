import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { ContentUrls } from '../../types';
import { TransferState, makeStateKey } from '@angular/platform-browser';


const homeStateKey = makeStateKey("home");
const faqStateKey = makeStateKey("faq");
const contactStateKey = makeStateKey("contact");
const aboutStateKey = makeStateKey("about");

@Injectable()
export class DataService {

    private urls: ContentUrls = environment.urls
    private cacheHpPage: any = {}
    private cacheFaqPage: any = {}
    private cacheAboutDialog: any = {}
    private cacheContactForm: any = {}

    constructor(private http: HttpClient, private state: TransferState) {

    }


    getHomePage(): Observable<Ihp> {
        let data = this.state.get(homeStateKey, undefined);
        if (!data) {

            if (this.cacheHpPage[this.urls.hp]) {
                return of(this.cacheHpPage[this.urls.hp]);
            }
            return this.http.get<Ihp>(this.urls.hp).pipe(
                catchError(err => {
                    throw ("failed to get " + this.urls.hp + ", error:" + err);
                }),
                tap(res => {
                    this.cacheHpPage[this.urls.hp] = res;
                    this.state.set(homeStateKey, res)
                })
            )
        }

        return of(data);
    }

    getFaqPage(): Observable<IfaqPage> {

        let data = this.state.get(faqStateKey, undefined);
        if (!data) {

            if (this.cacheFaqPage[this.urls.faq]) {
                return of(this.cacheFaqPage[this.urls.faq]);
            }

            return this.http.get<IfaqPage>(this.urls.faq).pipe(
                catchError(err => {
                    throw (err || "");
                }),
                tap(res => {
                    this.cacheFaqPage[this.urls.faq] = res;
                }),

            );
        }
        return of(data);
    }

    getAboutData(): Observable<IaboutDialog[]> {
        let data = this.state.get(aboutStateKey, undefined);
        if (!data) {

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
        return of(data);
    }

    getContactData(): Observable<IcontactPage[]> {
        let data = this.state.get(contactStateKey, undefined);
        if (!data) {

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
        return of(data);
    }

    sendContactForm(formValue: IcontactForm): Observable<Result> {
        // console.log("sendContactForm",formValue);
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        return this.http.post<Result>(this.urls.contactSubmitUrl, formValue, httpOptions)
    }


}

