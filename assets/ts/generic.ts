const fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];
const numbers: number[] = [1, 2, 3, 4, 5];

function getFirstItem<T>(items: T[]): T {
    return items[0];
}

const firstFruit = getFirstItem(fruits);
console.log(firstFruit); // Output: Apple

const firstNumber = getFirstItem(numbers);
console.log(firstNumber); // Output: 1