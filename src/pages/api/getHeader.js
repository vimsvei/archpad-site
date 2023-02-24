import {fetchContent} from "./fetchContent";

export const getHeader = async () => {
  const content = await fetchContent(`
  {
    archPadLandingHeader(id:"68YKrrmLn8fAEEpLdKKM6c") {
      logo {
        title
        url
      }
      pagesCollection {
        items {
          sys {
            id
          }
          title
          slug
          color
        }
      }
    }
  }`);
  
  return content.archPadLandingHeader;
}
