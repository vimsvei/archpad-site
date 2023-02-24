import {fetchContent} from "./fetchContent";

export const getNotFoundError = async () => {
  const content = await fetchContent(`
  {
    archPadLandingPage(id:"7CK85ImCBjld5C84a4AWaf") {
      title
      subtitle
      image {
        title
        url
      }
    }
  }`);
  
  return content.archPadLandingPage;
}
