import { input } from "@inquirer/prompts";

//Hero Stats Creation and Storage
let HeroStats = {
    name: "HeroStats",
    Attributes: {
        int: 0,
        dex: 0,
        atk: 0,
        def: 0,
        lk: 0
    },
    derived: {
        Hp: 0,
        maxHp: 0,
        Mana: 0,
        maxMana: 0
    }
};
async function StatsCreateHeroStats(MenuHeroSelect) {
    switch (MenuHeroSelect) {
        case 1:
            const { Knight } = await import("../Resources/ClassesStats.js");
            HeroStats = Knight;
            break;

        case 2:
            const { Mage } = await import("../Resources/ClassesStats.js");
            HeroStats = Mage;
            break;

        case 3:
            const { Archer } = await import("../Resources/ClassesStats.js");
            HeroStats = Archer;
            break;
    }

    return HeroStats;
}


//====================//
function StatsShowHeroStats (HeroStats) {
    console.clear()
    console.log (HeroStats.name)
    console.log (`Vida: ${HeroStats.derived.Hp}/${HeroStats.derived.maxHp}`)
    console.log (`Mana: ${HeroStats.derived.Mana}`)
    console.log (`Atributos: (Int:${HeroStats.Attributes.int} dex:${HeroStats.Attributes.dex} atk:${HeroStats.Attributes.atk} def:${HeroStats.Attributes.def} luck:${HeroStats.Attributes.lk})`)  
}

//=========Enemy Stats===========//
//Base stats
let EnemyStats = {
    Attributes: {
        int: 0,
        dex: 0,
        atk: 0,
        def: 0,
        lk: 0
    },
    derived: {
        Hp: 0,
        maxHp: 0,
        Mana: 0,
        maxMana: 0
    }
}
function StatsCreateEnemyStats (){
    //Stats Randomizer
    EnemyStats.derived.maxHp = Math.ceil(Math.random() * 20)
    EnemyStats.derived.Hp = EnemyStats.derived.maxHp
    EnemyStats.Attributes.atk = Math.ceil(Math.random() * 20)
    EnemyStats.Attributes.def = Math.floor(Math.random() * 10)
    return EnemyStats
}

//======Exportations======//
export { StatsCreateHeroStats, StatsShowHeroStats, StatsCreateEnemyStats, HeroStats, EnemyStats};

