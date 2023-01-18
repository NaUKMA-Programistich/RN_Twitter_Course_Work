import {getOauthHeader} from '../auth/AuthStorage';

export const getHomeTimeline = async () => {
  const params = new URLSearchParams({
    count: '200',
    include_entities: 'true',
    exclude_replies: 'false',
  });
  const url =
    'https://api.twitter.com/1.1/statuses/home_timeline.json?' + params;

  const request = {
    url: url,
    method: 'GET',
  };

  const oauthHeader = await getOauthHeader(request);

  try {
    const response = await fetch(request.url, {
      method: 'GET',
      headers: {
        Host: 'api.twitter.com',
        ...oauthHeader,
      },
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};
