import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: 'assets/hp-data.json',
  about: "assets/about-data.json",
  contact: "assets/contact-data.json",
  faq: "assets/faq-data.json",
  contactSubmitUrl: "/umbraco/api/Contact/Submit/"
}

export const environment = {
  production: true,
  urls
};
