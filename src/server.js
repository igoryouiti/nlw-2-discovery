// Dados
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },

    {
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
        whatsapp: "89987654534", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220]
    }
    
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
];

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

//getters and Setters

function getSubject(subjectNumber) {
    const position = +subjectNumber -1; // O '+'  força receber um numero
    return subjects[position];
}

// Funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
};

function pageStudy(req, res){
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays })
};

function pageGiveClasses(req, res){
    const data = req.query;
    
    // atribui true se data não estiver vazio
    const isNotEmpty
    // transofrma data em um vetor e verifica se é maior que zero
    = Object.keys(data).length > 0;
    //se tiver dado adicionar
    if(isNotEmpty){

        data.subject = getSubject(data.subject);
        //adicionar dado a lista proffys
        proffys.push(data);

        return res.redirect("/study");
    }
    //se não, não adicionar
    return res.render("give-classes.html", {subjects, weekdays})
};

// servidor
const express = require('express');
const server = express();


//configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// início e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) // use => usado para configuração do servidor
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500) // porta do servidor




