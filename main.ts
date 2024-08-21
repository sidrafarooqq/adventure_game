import inquirer from "inquirer"
import chalk  from  "chalk";

class Player{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name
    }
    fuelDecrease (){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease (){
        this.fuel = 100
    }
}

class Opponent{ 
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name
    }
    fuelDecrease (){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name",
})
console.log(player.name)

let opponent = await inquirer.prompt({
    type:"list",
    name: "select",
    message: "select your Opponent",
    choices: ["skeleton", "Assassin", "Zombie" ]
})
let p1 = new Player (player.name)
let o1 = new Opponent(opponent.select)

    if(opponent.select == "skeleton"){
        console.log(`${chalk.bold.green(p1.name)} VS${chalk.bold.red(o1.name)}  `)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["attack", "Drink portion", "back to your life.."]
    
        })
        if(ask.opt == "attack"){
            let num = Math.floor(Math.random() * 2 )
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel <= 0){
                    console.log(chalk.bold.italic.red(`You loose , better luck next time.`))
                }
                process.exit()
            }
                if( num <= 0){
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel <= 0){
                    console.log(chalk.bold.italic.green(`YOU win `))
                    process.exit
                }
            }
            
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`))
        }
        if(ask.opt == "back to your life.."){
            console.log(chalk.red.bold.italic("You loose , better luck next time"))
        }
        process.exit()
    }
    //assasin
    if(opponent.select == "Assassin"){
        console.log(`${chalk.bold.green(p1.name)} VS${chalk.bold.red(o1.name)}  `)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["attack", "Drink portion", "back to your life.."]
    
        })
        if(ask.opt == "attack"){
            let num = Math.floor(Math.random() * 2 )
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel <= 0){
                    console.log(chalk.bold.italic.red(`You loose , better luck next time.`))
                }
                process.exit()
            }
                if( num <= 0){
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel <= 0){
                    console.log(chalk.bold.italic.green(`YOU win `))
                    process.exit
                }
            }
            
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`))
        }
        if(ask.opt == "back to your life.."){
            console.log(chalk.red.bold.italic("You loose , better luck next time"))
        }
        process.exit()
    }
    //zombie
    if(opponent.select == "Zombie"){
        console.log(`${chalk.bold.green(p1.name)} VS${chalk.bold.red(o1.name)}  `)
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your Opponent",
            choices: ["attack", "Drink portion", "back to your life.."]
    
        })
        if(ask.opt == "attack"){
            let num = Math.floor(Math.random() * 2 )
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel <= 0){
                    console.log(chalk.bold.italic.red(`You loose , better luck next time.`))
                }
                process.exit()
            }
                if( num <= 0){
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel <= 0){
                    console.log(chalk.bold.italic.green(`YOU win `))
                    process.exit
                }
            }
            
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`))
        }
        if(ask.opt == "back to your life.."){
            console.log(chalk.red.bold.italic("You loose , better luck next time"))
        }
        process.exit()
    }
    
    

