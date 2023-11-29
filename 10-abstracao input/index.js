const inquirer = require('inquirer')

// Responsavel pelas perguntas, cada uma delas em um objeto
inquirer.prompt([
    {
        name: "p1",
        message: "Qual a minha nota",
    },
    {
        name: "p2",
        message:"Qual a segunda nota",
    },
]) .then((answers) =>{
    console.log(answers)
}).catch(err => console.log(err))