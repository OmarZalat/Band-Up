export default async function handler(req, res) {
  try {
    res.setHeader(
      "Set-Cookie",
      "userToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );
    console.log("Success");
    res.send(true);
  } catch (e) {
    console.log("signOut ", e);
  }
}
