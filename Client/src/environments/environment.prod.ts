import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: 'http://callcci.stanga.co.il/umbraco/api/app/Content?url=/',
  about: "http://callcci.stanga.co.il/umbraco/api/app/Content?url=/about",
  contact: "http://callcci.stanga.co.il/umbraco/api/app/Content?url=/contact",
  faq: "http://callcci.stanga.co.il/umbraco/api/app/Content?url=/faq",
  contactSubmitUrl: "http://callcci.stanga.co.il/umbraco/api/Contact/Submit/"
}

export const environment = {
  production: true,
  urls
};
