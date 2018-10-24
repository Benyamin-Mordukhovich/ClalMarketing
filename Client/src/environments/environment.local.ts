import { ContentUrls } from "../types";

const urls: ContentUrls = {
  hp: '/umbraco/api/app/Content?url=/',
  about: "/umbraco/api/app/Content?url=/about",
  contact: "/umbraco/api/app/Content?url=/contact",
  faq: "/umbraco/api/app/Content?url=/faq",
  contactSubmitUrl: "/umbraco/api/Contact/Submit/"
}

export const environment = {
  production: false,
  urls
};
