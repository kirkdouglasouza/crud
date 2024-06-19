const express = require("express");
const routes = require("./routes");
const app = express();

require("./database");

app.use(express.json());
app.use(routes);

const PORT = process.env.APP_PORT || 3030;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
