import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: 'assets/hp-data.json',
  popupSectionsUrl: id => `assets/popupSection${id}.json`,
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
