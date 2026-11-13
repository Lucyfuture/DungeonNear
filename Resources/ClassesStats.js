const Knight = {
    name: "====Cavaleiro====",
    Attributes: {
        int: 5, // Inteligence
        dex: 8, // Dexterity
        atk: 15, // BaseAtk
        def: 25, // Defense
        lk: 1 // Luck
    },
    derived: {Hp: 80, maxHp: 80, Mana: 15, maxMana: 15}
};

const Mage = {
    name: "====Mago====",
    Attributes: {
        int: 40, // Inteligence
        dex: 5, // Dexterity
        atk: 5, // BaseAtk
        def: 0, // Defense
        lk: 1 // Luck
    },
    derived: {Hp: 40, maxHp: 40, Mana: 60, maxMana: 60}
};

const Archer = {
    name: "====Arqueiro====",
    Attributes: {
        int: 5, // Inteligence
        dex: 20, // Dexterity
        atk: 15, // BaseAtk
        def: 10, // Defense
        lk: 1 // Luck
    },
    derived: {Hp: 55, maxHp: 55, Mana: 25, maxMana: 25}
};

export {Knight, Mage, Archer};