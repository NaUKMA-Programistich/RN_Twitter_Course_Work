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

  const response = await fetch(request.url, {
    method: 'GET',
    headers: {
      Host: 'api.twitter.com',
      ...oauthHeader,
    },
  });
  const json = await response.json();
  if (response.status === 200) {
    return json;
  } else {
    throw new Error(json.errors[0].message);
  }
};
