import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: 'http://clalsmbbackoffice.stanga.co.il/umbraco/api/app/Content?url=/',
  about: "http://clalsmbbackoffice.stanga.co.il/umbraco/api/app/Content?url=/about",
  contact: "http://clalsmbbackoffice.stanga.co.il/umbraco/api/app/Content?url=/contact",
  faq: "http://clalsmbbackoffice.stanga.co.il/umbraco/api/app/Content?url=/faq",
  contactSubmitUrl: "http://clalsmbbackoffice.stanga.co.il/umbraco/api/Contact/Submit/"
}

export const environment = {
  production: true,
  urls
};
