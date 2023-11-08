import mongoose from "mongoose";

const URI =
  "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/session47315?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(() => console.log("Conectado a DB"))
  .catch((error) => console.log(error));
