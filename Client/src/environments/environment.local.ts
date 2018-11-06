import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: 'http://dev.clalmarketing.com/umbraco/api/app/Content?url=/',
  about: "http://dev.clalmarketing.com/umbraco/api/app/Content?url=/about",
  contact: "http://dev.clalmarketing.com/umbraco/api/app/Content?url=/contact",
  faq: "http://dev.clalmarketing.com/umbraco/api/app/Content?url=/faq",
  offer: "http://dev.clalmarketing.com/umbraco/api/app/Content?url=/offer",
  contactSubmitUrl: "http://dev.clalmarketing.com/umbraco/api/Contact/Submit/"
}

export const environment = {
  production: false,
  urls
};
