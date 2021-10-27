const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
// let listaJogos = [{
//         id: 1,
//         nome: 'Mortal Kombat 11',
//         anolancamento: 2019,
//         desenvolvedora: 'NetherRealm Studios, QLOC, Shiver Entertainment'
//     },
//     {
//         id: 2,
//         nome: 'Tibia',
//         anolancamento: 1997,
//         desenvolvedora: 'CipSoft'
//     },
//     {
//         id: 3,
//         nome: 'World of Warcraft',
//         anolancamento: 2004,
//         desenvolvedora: 'Blizzard Entertainment'
//     },
//     {
//         id: 4,
//         nome: 'Hearthstone',
//         anolancamento: 2014,
//         desenvolvedora: 'Blizzard Entertainment'
//     },
// ]

let listaJogos = ["Hearthstone", "World of Warcraft", "Tibia", "Mortal Kombat 11"]
app.use(express.json());

app.use(cors());

app.get("/lista", (req, res) => {
    res.send("Bem vindo a lista de jogos");
});

app.post("/listacad", (req, res) => {
    const {
        nome,
        ano,
    } = req.body
    res.send(`Nome do jogo: ${nome}, Ano de lançamento ${ano}`)
});

app.put("/editar/:id", (req, res) => {
    const id = req.params.id - 1;
    const {
        nome,
        ano
    } = req.body;
        listaJogos[id] = {
        nome: nome,
        ano: ano
    };
    res.send(listaJogos);
});
app.delete("/deletar/:id", (req, res) => {
    const id = req.params.id - 1;
    delete listaJogos[id]
    res.send(listaJogos)
})

app.listen(port, () => {
    console.log(`O app esta rodando em: http://localhost:${port}`);
});