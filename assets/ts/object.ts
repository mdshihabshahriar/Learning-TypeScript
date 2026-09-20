const user:{
    id: number,
    name: string,
    email: string,
} = {
    id: 1,
    name: "Shahriar",
    email: "shahriar@example.com"
};


//using type alias
type User = {
    id: number,
    name: string,
    email: string,
};

const person: User = {
    id: 2,
    name: "Shihab",
    email: "shihab@example.com"
};

const person2: User = {
    id: 3,
    name: "John Doe",
    email: "john@example.com"
};

//using interface
interface IUser {
    id: number,
    name: string,
    email: string,
}

const person3: IUser = {
    id: 4,
    name: "Jane Doe",
    email: "jane@example.com"
};


interface Database{
    host: string,
    username: string,
    password: string,
}

interface AppConfig {
    appName: string,
    version: string,
    debug: boolean,
    port: number,
    database: Database,
    features: {
        registration: boolean,
        login: boolean,
        profile: boolean,
    }
}

const config: AppConfig = {
    appName: "MyApp",
    version: "1.0.0",
    debug: true,
    port: 3000,
    database: {
        host: "localhost",
        username: "root",
        password: "password"
    },
    features: {
        registration: true,
        login: true,
        profile: false
    }
};

// console.log(config.database); // Output: MyApp