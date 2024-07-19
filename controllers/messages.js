const express = require("express");
const db = require("../db/models");
const router = express.Router();

router.post("/", async (req, res) => {
    var data = req.body ;
    await db.Messages.create(data).then((dataMessage) => {
        return res.json({
            error: true,
            message: "Mensagem cadastrada com sucesso!",
            data: dataMessage
        });
    }).catch(() => {
        return res.status(400).json({
            error: false,
            message: "Erro: Mensagem não cadastrada com sucesso!",
        });
    });
});
module.exports = router;