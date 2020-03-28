export default function authHeader() {
  // return authorization header with jwt token
  let json = localStorage.getItem("user");
  if (!json) return;
  var user = JSON.parse(json);
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  }
  return;
}
