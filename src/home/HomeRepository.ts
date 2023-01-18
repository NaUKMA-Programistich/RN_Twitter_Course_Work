import {getOauthHeader} from '../auth/AuthStorage';

export const getHomeTimeline = async () => {
  const request = {
    url: 'https://api.twitter.com/1.1/statuses/home_timeline.json',
    method: 'GET',
  };

  const oauth = await getOauthHeader(request);

  try {
    const response = await fetch(request.url, {
      method: 'GET',
      headers: {
        Host: 'api.twitter.com',
        ...oauth,
      },
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};
