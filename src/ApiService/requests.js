import hostUrl from './HostConfig';
import getToken from './getToken';

function requests(route, requestType, data) {
  const token = getToken();
  return fetch(`${hostUrl}${route}`, {
    method: `${requestType}`,
    headers: { 'Content-Type': 'application/json', token },
    mode: 'cors',
    body: JSON.stringify(data),
  })
    .then(res => res.json());
}

export default requests;
