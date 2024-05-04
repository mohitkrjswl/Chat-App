import jwt from 'jsonwebtoken';

const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d'
  })
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevents XSS attacks cross-site scripting atks
    sameSite: "strict", // CSRF attacks cross-site req frogery attks
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateTokenAndSetCookies;



