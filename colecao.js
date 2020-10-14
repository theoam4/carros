const escapeHtml = require("escape-html");
const Firestore = require("@google-cloud/firestore");

exports.helloHttp = (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || "World")}!`);
};

exports.Carro = async (req, res) => {
  const {placa, cor, preco, modelo, marca} = req.query;

  const response = await db.collection("carro").add({
    placa,
    cor,
    preco,
    modelo,
    marca,
  });

exports.getCarro = async (req, res) => {
  const placa = req.query.placa;

  }
}