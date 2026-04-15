export const authConfig = {
  rpName: "Dababy",
  rpID: process.env.NODE_ENV === "production" ? "shadhaan.me" : "localhost",
  origin:
    process.env.NODE_ENV === "production" ? "https://www.shadhaan.me" : "http://localhost:3000",
  sessionCookieName: "admin_session",
};
