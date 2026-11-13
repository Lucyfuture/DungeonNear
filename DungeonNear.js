import { select, input } from '@inquirer/prompts';

{ //======Start Menu======//
    console.clear()
    const MenuStartMenu = await select ({
        message: '=====DungeonHunter=====',
        choices: [
            {//starts the game
                name:'start',
                value: 1,
                description: 'Comece sua jornada em busca de seu irmão sob as criptas escondidas no reino de Kurn'
            },
            {//quit game
                name:'exit',
                value: 2,
                description:'Sair do jogo.'
            }
        ]
    })

    switch (MenuStartMenu) { 
    case 1: //cleans the console after the StartMenu
        console.clear()
        break;
    case 2: //quit game
        console.clear()
        process.exit()
    }
}

//======Hero select======//
const MenuHeroSelect = await select ({  
    message: '=====Selecione Sua Classe=====',
    choices: [
        {
            name:'Cavaleiro',
            value: 1,
            description: 'Um guerreiro com alto vigor e força de ataque, capaz de resistir a longas batalhas'
        },
        {
            name:'Mago',
            value: 2,
            description: 'Um Mago capaz de manusear elementos e exterminar facilmente seus adversários'
        },
        {
            name:'Arqueiro',
            value: 3,
            description: 'Um Arqueiro ágil como o vento, atacando à distancia e esquivando facilmente dos ataques inimigos'
        }
    ]
})
export {MenuHeroSelect} //Exports the choice from "MenuHeroSelect" to imports the chosen class stats from (.Functions/FunctionsStats)

// Import of the updated stats (based on the hero select) vv
const {StatsCreateHeroStats} = await import('./Functions/FunctionsStats.js');
let HeroStats = await StatsCreateHeroStats(MenuHeroSelect);
//Function to easily show the current hero stats vv
const {StatsShowHeroStats} = await import ('./Functions/FunctionsStats.js');

// Hero Stats right after the hero select
{
    StatsShowHeroStats(HeroStats)
    const continuar = await input ({message: 'Clique enter para continuar'})
    console.clear()
}


//======History Epilogue======//
{
    console.log (`Durante meses, você percorreu terras esquecidas, atravessou florestas amaldiçoadas e enfrentou
criaturas que poucos homens ousariam sequer mencionar. Sua jornada sempre teve um propósito: encontrar
o tesouro de Eldrath, uma antiga masmorra que, segundo as lendas, guardava riquezas suficientes para
comprar reinos inteiros.`)
    const continuar = await input ({message: 'Clique enter para continuar'})
    console.clear()

    console.log (`Mas havia outro motivo.`)
    const continuar2 = await input ({message: 'Clique enter para continuar'})
    console.clear()

    console.log(`Entre os rumores sobre Eldrath, existiam histórias sobre um artefato capaz de responder a qualquer
pergunta. Diziam que os antigos reis o utilizaram para descobrir os segredos da vida, da morte e até mesmo
do próprio destino.

Como mais uma de suas aventuras, você entra na masmorra`)
    const continuar3 = await input ({message: 'Clique enter para continuar'})
    console.clear()
}

//======Jogo Principal======//
import { Explore } from './Functions/FunctionExplore.js';

do{
    const MenuExplorationMenu = await select ({
    message: 'Você está na masmorra, o que deseja fazer agora?',
    choices:[
        {
            name:'Explore',
            value: 1,
            description: 'Vá adiante na masmorre à procura de tesouros, mas cuidado, provavelmente há monstros aqui!'
        },
        {
            name:'Ver inventario',
            value: 2,
            description:'talvez eu tenha algo de útil.'
        },
        {
            name:'Sair do jogo',
            value: 3,
            description:'Encerre totalmente o jogo.'
        }
    ]
    })
    switch (MenuExplorationMenu){
        case 1: 
            console.clear()
            Explore()
            break;
        case 2:
            break;
        case 3: //quit game
            console.clear()
            process.exit()
    }
}while(HeroStats.derived.Hp > 0)









