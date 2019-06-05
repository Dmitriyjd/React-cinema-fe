export default function () {
  // todo: check if token is valid and redirect user to loginPage if it`s not alive
  return localStorage.getItem('token');
}
