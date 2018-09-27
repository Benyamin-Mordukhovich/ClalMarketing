interface IaboutDialog{
    mainTitle:string;
    rte:string;
    link:string;
    imgUrl:string;
}

interface IfaqPage {
    mainTitle: string;
    items: IfaqModel[];
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
    transactionsList?:IdropDownItem[],
    imgUrl?:string
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

interface IsectionModel{
    mainTitle?:string,
    text?:string,
    linkReadMore?:string,
    linkText?:string,
    link?:string,
    note?:string,
}

