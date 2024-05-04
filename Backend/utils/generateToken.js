import jwt from 'jsonwebtoken';
const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d'
  })
  res.cookies("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevents XSS attacks cross-site scripting atks
    sameSite: "strict" // CSRF attacks cross-site req frogery attks
  })
}
export default generateTokenAndSetCookies;
