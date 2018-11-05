import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: 'http://bo.clalmarketing.com/umbraco/api/app/Content?url=/',
  about: "http://bo.clalmarketing.com/umbraco/api/app/Content?url=/about",
  contact: "http://bo.clalmarketing.com/umbraco/api/app/Content?url=/contact",
  faq: "http://bo.clalmarketing.com/umbraco/api/app/Content?url=/faq",
  contactSubmitUrl: "http://bo.clalmarketing.com/umbraco/api/Contact/Submit/"
}

export const environment = {
  production: true,
  urls
};
