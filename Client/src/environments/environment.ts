import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: 'assets/hp-data.json',
  popupSection2: 'assets/popupSection2.json',
  popupSection3: 'assets/popupSection3.json',
  popupSection4: 'assets/popupSection4.json',
  popupSection5: 'assets/popupSection5.json',
  about: "assets/about-data.json",
  contact: "assets/contact-data.json",
  faq: "assets/faq-data.json",
  offer: "assets/offer-data.json",
  contactSubmitUrl: "/umbraco/api/Contact/Submit/"
}

export const environment = {
  production: false,
  urls
};
