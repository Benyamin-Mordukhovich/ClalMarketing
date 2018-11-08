interface IaboutDialog{
    mainTitle:string;
    rte:string;
    link:Ilink;
    imgUrl:string;
}

interface IfaqPage {
    mainTitle?: string;
    items?: IfaqModel[];
    imgUrl?:string;
}

interface IfaqModel {
    title: string;
    items: Ifaq[];
}

interface Ifaq {
    question: string;
    answer: string;
}

interface IdropDownItem{
    title: string,
    value?: string | number | boolean
}

interface IcontactPage{
    mainTitle?: string;
    title?: string,
    fieldList:Ifield[],
    transactionsList?:IdropDownItem[],
    imgUrl?:string,
    mainTitleSendSuccess:string,
    titleSendSuccess:string,
    mainTitleSendFailed:string
}
interface Ifield{
    name:string,
    placeholder:string,
    errorMsg:string
}
interface IcontactForm{
    companyName: string,
    privateCompany: string,
    transactionsOption:string,
    customerName:string,
    role: string,
    phone:string,
    email: string,
    details: string,
}

interface Ihp{
    header:Iheader,
    sectionsData:IsectionModel[],
    footer:{
        mainTitle?:string,
        text?:string,
        joinBtn:Ilink,
    },
    linkText:string
}

interface IsectionModel{
    mainTitle?:string,
    text?:string,
    linkReadMore:Ilink,
    linkText?:string,
    link?:string,
    note?:string,
    bgImage?:string,
    bgImageMobile?:string,
    videoUrl?:string,
    caruselData?:IcaruselItem[],
    offerBtn:Ilink,
}

interface Result {
    success: boolean
    error?:string
}

interface IcaruselItem{
    comment:string
    text:string
    imgUrl:string
}

interface Ilink{
    text:string,
    linkUrl:string,
    targetBlank:boolean,
    isInternal: boolean
}

interface Iheader{
    logoUrl:string,
    headerLinks:{
        faqLinkText:string,
        contactLinkText: string,
        aboutLinkText: string
    },
    polisaBtn:Ilink,
}

interface IofferPage{
    mainTitle:string,
    text?:string,
    businessDetailsTitle:string,
    businessDetailsList:IofferItem[],
    offerPriceTitle:string,
    offerList:IofferList[]
}

interface IofferItem{
    title:string,
    number:string,
    currency:string
}

type IofferList = IofferTextItem & IgiftOffer

interface IofferTextItem extends IofferItem{
    text:string
}

interface IgiftOffer extends IofferTextItem{
    imgUrl:string
}