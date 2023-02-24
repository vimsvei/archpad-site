import {fetchContent} from "./fetchContent";

export const getTitle = async () => {
  const content = await fetchContent(`
  {
    archPadLandingHeaderCollection {
      items {
        title
        subtitle
        description
        titleImage {
          title
          url
        }
        buttonCaptionList
      }
    }
  }`);
  
  return content.archPadLandingHeaderCollection.items[0];
}
