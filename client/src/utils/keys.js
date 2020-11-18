export const keys = {
  NODE_API_URL:
    process.env.NODE_ENV === "production" ? "/n/" : "http://localhost:4000/",
  PYTHON_API_URL:
    process.env.NODE_ENV === "production" ? "/p/" : "http://localhost:8000/",
  CLIENT_URL:
    process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/",
  ENCRYPTOR_KEY: "w61czHEUzbLlu3RsYKCSLjn5VCxewWe8pi2KkR",
};
