import { db } from "../db.js";

export const getUsers = (_, res) => {
    const query = "SELECT * FROM user;";

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const { nome } = req.body;
    const { email } = req.body;
    const { senha } = req.body;
    
    const query = "INSERT INTO user (nome, email, senha) VALUES (?, ?, ?);";

    db.query(query, [nome, email, senha], (err, result) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário Cadastrado com Sucesso!");
    });
};