import { input, select } from "@inquirer/prompts";
import {StatsCreateEnemyStats} from "../FunctionsStats.js";
import {HeroStats, EnemyStats} from "../FunctionsStats.js";


async function Battle(){
    console.clear()
    const continuar = await input ({message: 'Você encontrou um Inimigo!'})
    console.clear()
    console.log("\x1b[3J");
    StatsCreateEnemyStats() 
<<<<<<< HEAD
    do{
      console.log(`
                       "====Esqueleto mutante===="
                      HP Heroi: ${HeroStats.derived.Hp}/${HeroStats.derived.maxHp} | HP Inimigo: ${EnemyStats.derived.Hp}/${EnemyStats.derived.maxHp}
                 
        .                                                      .
      .n                   .                 .                  n.
.   .dP                  dP                   9b                 9b.    .
4    qXb         .       dX                     Xb       .        dXp     t
=======
        console.log(`
            
                    HP Heroi: ${HeroStats.derived.Hp}/${HeroStats.derived.maxHp} | HP Inimigo: ${EnemyStats.derived.Hp}/${EnemyStats.derived.maxHp}
                   
          .                                                      .
        .n                   .                 .                  n.
  .   .dP                  dP                   9b                 9b.    .
 4    qXb         .       dX                     Xb       .        dXp     t
>>>>>>> 218cd8a116bb728ac947b6f1ffee2339458326ef
dX.    9Xb      .dXb    __                         __    dXb.     dXP     .Xb
9XXb._       _.dXXXXb dXXXXbo.                 .odXXXXb dXXXXb._       _.dXXP
9XXXXXXXXXXXXXXXXXXXVXXXXXXXXOo.           .oOXXXXXXXXVXXXXXXXXXXXXXXXXXXXP
 9XXXXXXXXXXXXXXXXXXXXX'~   ~ OOO8b   d8OOO'~   ~ XXXXXXXXXXXXXXXXXXXXXP'
   9XXXXXXXXXXXP'  9XX'           98v8P'           XXP'  9XXXXXXXXXXXP'
      ~~~~~~~       9X.          .db|db.          .XP       ~~~~~~~
                      )b.  .dbo.dP' v' 9b.odb.  .dX(
                    ,dXXXXXXXXXXXb     dXXXXXXXXXXXb.
                   dXXXXXXXXXXXP'   .    9XXXXXXXXXXXb
                  dXXXXXXXXXXXXb   d|b   dXXXXXXXXXXXXb
                  9XXb'    XXXXXb.dX|Xb.dXXXXX'    dXXP
                    '      9XXXXXX{   }XXXXXXP       '
                            XXXX X. v'.X XXXX
                            XP^X' b   d' X^XX
                            X. 9      '  P )X
                             b         '  d'
                             
      `)
      const BattleAction = await select ({
        message: "O que fazer?",
        choices: [
          {
            name: 'Atacar',
            value: 1,
            description: "Balance sua arma e tente acertar o inimigo!"
          },
          {
            name: 'Fugir',
            value: 2,
            description: "Corra pela sua vida!!"
          }
        ]
      })

      let DamageDealt = (Math.random() * (HeroStats.Attributes.atk - HeroStats.Attributes.atk/2 + 1) + HeroStats.Attributes.atk/2).toFixed(0)
      let DamageTaken = ((Math.random() * (10 - 1 + 1) + 1) + EnemyStats.Attributes.atk).toFixed(0)

      if (BattleAction == 1){
        console.clear()

        //Damage dealt by the enemy vvv
        HeroStats.derived.Hp = (HeroStats.derived.Hp - DamageTaken)
        
        //Damage dealt by hero vvv
        EnemyStats.derived.Hp = (EnemyStats.derived.Hp - DamageDealt)

      }else if(BattleAction == 2){
        console.clear()
        
        let  ChanceToEscape = (20 + HeroStats.Attributes.dex)
        let  EscapeTry = (Math.random() * (100 - 1 + 1) + 1)  

        if (EscapeTry > ChanceToEscape) {
          const YouDidNotEscaped = await input ({message: "Você não conseguiu escapar!"})
          HeroStats.derived.Hp = (HeroStats.derived.Hp - DamageTaken)
        }else{
          const YouEscaped = await input ({message: "Você Fugiu!"})
          break;
        }
      }
    }while (HeroStats.derived.Hp > 0 && EnemyStats.derived.Hp > 0)
    if (HeroStats.derived.Hp <= 0){
      process.exit()
    }else {
    }
}

export {Battle}
