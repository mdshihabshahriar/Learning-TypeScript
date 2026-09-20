type User = {
    id: number,
    name: string,
    email: string,
}

export{}

const users : User[] = []

let lastId: number = 0;

function addUser(user: Omit<User, 'id'>): User {
    const newUser: User = {
        id: ++lastId,
        ...user
    };
    users.push(newUser);
    return newUser;
}

addUser({ name: "Shahriar", email: "shahriar@example.com" });
console.log(users); 