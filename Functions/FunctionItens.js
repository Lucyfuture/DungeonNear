import { log } from "node:console";
console.clear()

const itemPoolComum = [
    {
        itemName: "Espada de PAU",
        itemDescription: "Uma espada como qualquer outra porém de PAU.",
        itemStats: {
            atk: '1d8',
            bleed: 1
        }
    },
    {
        itemName: "Espada de não de PAU",
        itemDescription: "Uma espada como qualquer outra porém não é de PAU.",
        itemStats: {
            atk: '2d8',
            bleed: 2
        }
    },
    {
        itemName: "Adaga de Manteiga",
        itemDescription: "Perfeita para passar requeijão, terrível para duelos.",
        itemStats: {
            atk: '1d4',
            bleed: 0
        }
    },
    {
        itemName: "Clava de Pão Dormido",
        itemDescription: "Mais dura que concreto após três dias fora da sacola.",
        itemStats: {
            atk: '1d10',
            bleed: 0
        }
    },
    {
        itemName: "Lança de Cabo de Vassoura",
        itemDescription: "Afiada na ponta com um apontador escolar.",
        itemStats: {
            atk: '1d6',
            bleed: 2
        }
    },
    {
        itemName: "Machado Enferrujado",
        itemDescription: "O corte não mata, mas o tétano faz o trabalho.",
        itemStats: {
            atk: '1d8',
            bleed: 4
        }
    },
    {
        itemName: "Pedra Pontuda",
        itemDescription: "Tecnologia de ponta diretamente da era das cavernas.",
        itemStats: {
            atk: '1d6',
            bleed: 3
        }
    },
    {
        itemName: "Chinelo Havaiana Branca",
        itemDescription: "Causa dano emocional crítico se arremessado por uma mãe.",
        itemStats: {
            atk: '2d6',
            bleed: 0
        }
    },
    {
        itemName: "Caco de Vidro",
        itemDescription: "Encontrado no beco mais próximo. Cuidado para não cortar a mão.",
        itemStats: {
            atk: '1d4',
            bleed: 5
        }
    },
    {
        itemName: "Escudo de Tampa de Panela",
        itemDescription: "Faz um barulho ensurdecedor ao bloquear golpes.",
        itemStats: {
            atk: '1d4',
            bleed: 0
        }
    }
];



const itemDrop = function (array, quantity) {
    const size = array.length;
    const drops = [];

    for (let i = 0; i < quantity; i++) {
        const escolhido = Math.floor(Math.random() * size);
        drops.push(array[escolhido]);
    }

    return drops;
}

const itensSorteados = itemDrop(itemPoolComum, 2);

console.log(itensSorteados);