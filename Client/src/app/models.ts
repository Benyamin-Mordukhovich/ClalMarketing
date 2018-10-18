interface IaboutDialog{
    mainTitle:string;
    rte:string;
    link:string;
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
    imgUrl?:string
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
    sectionsData:IsectionModel[],
    footer:{
        mainTitle?:string,
        text?:string
    }
}

interface IsectionModel{
    mainTitle?:string,
    text?:string,
    linkReadMore?:string,
    linkText?:string,
    link?:string,
    note?:string,
    bgImage?:string,
    bgImageMobile?:string,
    videoUrl?:string,
    caruselData?:IcaruselItem[]
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