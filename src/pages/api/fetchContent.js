import {CONTENTFUL_API} from "../../config";

export async function fetchContent(query) {
  try {
	const res = await fetch(
	  `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_API.spaceID}`,
	  {
		method: 'POST',
		headers: {
		  'content-type': 'application/json',
		  authorization: `Bearer ${CONTENTFUL_API.accessToken}`,
		},
		// throw our query (a string) into the body directly
		body: JSON.stringify({ query }),
	  },
	);
	const { data } = await res.json();
	// console.log('fetchContent data=>', data);
	
	return data;
  } catch (error) {
	console.error(`There was a problem retrieving entries with the query ${query}`);
	console.error(error);
  }
}
