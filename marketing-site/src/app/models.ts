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

