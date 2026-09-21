type Point = [number, number]; // Tuple type representing a point in 2D space

const point1: Point = [10, 20];
const point2: Point = [30, 40];

console.log(point1);
console.log(point2[0]);

type Player = [string, string, number]; // when we want fixed length array with same or different types of data, we can use tuple. In this case, we have a tuple representing a player with name, country, and jersey number.

const players: Player[] = [
    ["Ronaldo", "Portugal", 7],
    ["Messi", "Argentina", 10],
    ["Neymar", "Brazil", 10]
];

console.log(players);


type OrderItem = readonly [number, number]; // The readonly modifier makes the tuple immutable.

const item: OrderItem = [17, 10];
// item.push(57);

console.log(item);