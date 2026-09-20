const data = new Set<string>();
data.add("Shahriar");
data.add("Shihab");
data.add("Shahriar"); // Duplicate value, will not be added

console.log(data); // Output: Set { 'Shahriar', 'Shihab' }


const players = new Map<string, number>();
export{}
players.set("Shahriar", 10);
players.set("Shihab", 20);

console.log(players); // Output: Map { 'Shahriar' => 30, 'Shihab' => 20 }