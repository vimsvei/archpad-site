import {fetchContent} from "./fetchContent";

export const getFooter = async () => {
  const content = await fetchContent(`
  {
    archPadLandingFooter (id:"6IreEDMyc4B7i7lkN0T8TI") {
      sys {
        id
      }
      logo {
        title
        url
      }
      groupLinksCollection {
        items {
          sys {
            id
          }
          title
          pagesCollection {
            items {
              sys {
                id
              }
              title
              slug
            }
          }
        }
      }
      privacy {
        title
        description
      }
      year
      copyright
    }
  }
  `);
  
  return content.archPadLandingFooter;
}
