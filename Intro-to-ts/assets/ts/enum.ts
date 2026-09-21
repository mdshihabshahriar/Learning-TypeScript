enum TColor {
    Red = "Red",
    Blue = "Blue",
    Green = "Green",
}

type TeeShirt = {
    size: number,
    color: TColor,
}

const t1: TeeShirt = {
    size: 32,
    color: TColor.Red,
}

const t2: TeeShirt = {
    size: 34,
    color: TColor.Blue,
}

const t3: TeeShirt = {
    size: 36,
    color: TColor.Green,
}

// const t4: TeeShirt = {
//     size: 38,
//     color: "Black",
// }

console.log(t1);