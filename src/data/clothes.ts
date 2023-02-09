export type ClotheType = {
    id: number,
    name: string,
    imageSource: string,
    cost: number,
    color: string,
    colorHex: string,
    colors: string[],
    sizes: string[],
    isNew: boolean
}

export const clothes: ClotheType[] = [
    {
        id: 0,
        name: "Біла куртка",
        imageSource: "../media/tovar1.png",
        cost: 2900,
        color: "Білий",
        colorHex: "#FFFFFF",
        colors: [
            "#FFFFFF",
            "#6F83A4",
            "#F1DDAA",
        ],
        sizes: [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
        ],
        isNew: true

    },
    {
        id: 1,
        name: "Синє пальто",
        imageSource: "../media/tovar2.png",
        cost: 3150,
        color: "Синій",
        colorHex: "#6F83A4",
        colors: [
            "#FFFFFF",
            "#6F83A4",
            "#F1DDAA",
        ],
        sizes: [
            "XS",
            "M",
            "L",
        ],
        isNew: false

    },
    {
        id: 2,
        name: "Бежева шуба",
        imageSource: "../media/tovar3.png",
        cost: 4200,
        color: "Бежевий",
        colorHex: "#F1DDAA",
        colors: [
            "#FFFFFF",
            "#6F83A4",
            "#F1DDAA",
        ],
        sizes: [
            "XS",
            "S",
            "L",
        ],
        isNew: false

    },
    {
        id: 3,
        name: "Синя парка",
        imageSource: "../media/tovar4.png",
        cost: 2900,
        color: "Синій",
        colorHex: "#6F83A4",
        colors: [
            "#FFFFFF",
            "#6F83A4",
            "#F1DDAA",
        ],
        sizes: [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
        ],
        isNew: true

    },
    {
        id: 4,
        name: "Біла куртка",
        imageSource: "../media/tovar1.png",
        cost: 2900,
        color: "Білий",
        colorHex: "#FFFFFF",
        colors: [
            "#FFFFFF",
            "#6F83A4",
            "#F1DDAA",
        ],
        sizes: [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
        ],
        isNew: true

    },
    {
        id: 4,
        name: "Синє пальто",
        imageSource: "../media/tovar2.png",
        cost: 3150,
        color: "Синій",
        colorHex: "#6F83A4",
        colors: [
            "#FFFFFF",
            "#6F83A4",
            "#F1DDAA",
        ],
        sizes: [
            "XS",
            "M",
            "L",
        ],
        isNew: false

    },

]