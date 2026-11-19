import { input } from "@inquirer/prompts";
import {StatsCreateEnemyStats} from "../FunctionsStats.js";
import {HeroStats, EnemyStats} from "../FunctionsStats.js";

async function Battle(){
    console.clear()
    const continuar = await input ({message: 'Você encontrou um Inimigo!'})
    console.clear()
    console.log("\x1b[3J");
    StatsCreateEnemyStats() 
        console.log(`
            
                    HP Heroi: ${HeroStats.derived.Hp}/${HeroStats.derived.maxHp} | HP Inimigo: ${EnemyStats.derived.Hp}/${EnemyStats.derived.maxHp}
                   
          .                                                      .
        .n                   .                 .                  n.
  .   .dP                  dP                   9b                 9b.    .
 4    qXb         .       dX                     Xb       .        dXp     t
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
        const continuar2 = await input ({message: 'continuar'})
}

export {Battle}
