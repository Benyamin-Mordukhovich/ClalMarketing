import { ContentUrls } from "src/types";

const urls: ContentUrls = {
  hp: '/umbraco/api/app/Content?url=/',
  about: "assets/about-data.json",
  contact: "assets/contact-data.json",
  faq: "assets/faq-data.json"
}

export const environment = {
  production: false,
  urls
};
