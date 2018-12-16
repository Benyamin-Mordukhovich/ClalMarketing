import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, ReplaySubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { ContentUrls } from '../../types';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { IcontactPage,Ihp,IfaqPage,IaboutDialog ,IcontactForm,IofferPage,Result,Ipopup} from '../models';


const homeStateKey = makeStateKey("home");
const faqStateKey = makeStateKey("faq");
const contactStateKey = makeStateKey("contact");
const aboutStateKey = makeStateKey("about");
const offerStateKey = makeStateKey("offer");
const layoutData = makeStateKey("layoutData");
const popupSection2 = makeStateKey("popupSection2");
const popupSection3 = makeStateKey("popupSection3");
const popupSection4 = makeStateKey("popupSection4");
const popupSection5 = makeStateKey("popupSection5");

@Injectable()
export class DataService {

    private urls: ContentUrls = environment.urls
    private cacheHpPage: any = {}
    private cacheFaqPage: any = {}
    private cacheAboutDialog: any = {}
    private cacheContactForm: any = {}
    private cacheOfferDialog: any = {}
    private popupSection2: any = {}
    private _layoutData = new ReplaySubject<any>();
    public dataSubject = new Subject<any>()
    
    constructor(private http: HttpClient, private state: TransferState) {
        let data = state.get(layoutData,undefined);
        if(data) {
            this._layoutData.next(data)
        }
    }

    sendData(value) { 
        this.dataSubject.next(value)     
    }  

    get layoutData() {
        return this._layoutData.asObservable();
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
                    this.state.set(homeStateKey, res);
                    this.setLayoutData(res)
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
                    this.setLayoutData(res)
                }),

            );
        }
        return of(data);
    }

    getAboutData(): Observable<IaboutDialog> {
        let data = this.state.get(aboutStateKey, undefined);
        if (!data) {

            if (this.cacheAboutDialog[this.urls.about]) {
                return of(this.cacheAboutDialog[this.urls.about]);
            }

            return this.http.get<IaboutDialog>(this.urls.about).pipe(
                catchError(err => {
                    return of(null)
                }),
                tap(res => {
                    this.cacheAboutDialog[this.urls.about] = res;
                    this.setLayoutData(res)
                }),

            );
        }
        return of(data);
    }

    getContactData(): Observable<IcontactPage> {
        let data = this.state.get(contactStateKey, undefined);
        if (!data) {

            if (this.cacheContactForm[this.urls.contact]) {
                return of(this.cacheContactForm[this.urls.contact]);
            }

            return this.http.get<IcontactPage>(this.urls.contact).pipe(
                catchError(err => {
                    return of(null)
                }),
                tap(res => {
                    this.cacheContactForm[this.urls.contact] = res;
                    this.setLayoutData(res)
                })
            )
        }
        return of(data);
    }

    getOfferData(): Observable<IofferPage> {
        let data = this.state.get(offerStateKey, undefined);
        if (!data) {

            if (this.cacheOfferDialog[this.urls.offer]) {
                return of(this.cacheOfferDialog[this.urls.offer]);
            }

            return this.http.get<IofferPage>(this.urls.offer).pipe(
                catchError(err => {
                    return of(null)
                }),
                tap(res => {
                    this.cacheOfferDialog[this.urls.offer] = res;
                    this.setLayoutData(res)
                })
            )
        }
        return of(data);
    }

    getPopupSection2(): Observable<any> {
  
        let data = this.state.get(popupSection2, undefined);
        if (!data) {

            if (this.popupSection2[this.urls.popupSection2]) {
                return of(this.popupSection2[this.urls.popupSection2]);
            }

            return this.http.get<Ipopup>(this.urls.popupSection2).pipe(
                catchError(err => {
                    return of(null)
                }),
                tap(res => {
                    this.popupSection2[this.urls.popupSection2] = res;
                    this.setLayoutData(res)
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

    setLayoutData({header, footer}) {
        this.state.set(layoutData,{header, footer})
        this._layoutData.next({header, footer})
    }


}
