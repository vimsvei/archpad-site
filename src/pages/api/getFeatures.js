import {fetchContent} from "./fetchContent";

export const getFeatures = async () => {
  const content = await fetchContent(`
  {
    archPadLandingFeatureItemCollection (order: order_ASC) {
      items {
        sys {
          id
        }
        order
        title
        description
        image {
          title
          url
        }
      }
    }
  }`);
  
  return content.archPadLandingFeatureItemCollection.items;
}
