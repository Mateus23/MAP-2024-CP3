type User = {
    id: string;
    phoneNumber: string;
    age: number;
    name: string,
    email: string;
    active: boolean;
}

export const users: User[] = [
    {
        id: "abc",
        phoneNumber: "99123456",
        age: 12,
        name: "mateus",
        email: "mat@mat.com",
        active: true,
    }
]

export const createUser = ({id, phoneNumber, age, email, name}: User): User => {
    const newUser: User = {
        id,
        phoneNumber: phoneNumber || createRandomPhone(),
        age: age || createRandomAge(),
        email: email || createRandomEmail(),
        name: name || "joão das couves",
        active: true,
    }
    users.push(newUser);
    return newUser;
}

const createRandomPhone = (): string => Math.floor(Math.random() * 100000000).toString();
const createRandomAge = (): number => Math.floor(Math.random() * 100);
const createRandomEmail = (): string => (Math.random() + 1).toString(36).substring(3) + '@' + (Math.random() + 1).toString(36).substring(5) + '.com';

export const existUserWithId = (id: string): boolean => {
    return users.some(user => user.id === id);
}

export const getUserWithId = (id: string): User | undefined => {
    return users.find(user => user.id === id)
}

const changeUserInfo = (id: string, info: keyof User, newValue: string | number | boolean): void => {
    let user = users.find((user) => user.id === id);

    if (user){
        user = {...user, [info]: newValue}
    }
}

export const changeUserPhone = (id: string, newValue: string): void => {
    changeUserInfo(id, "phoneNumber", newValue);
}

export const changeUserAge = (id: string, newValue: number): void => {
    changeUserInfo(id, "age", newValue);
}

export const changeUserEmail = (id: string, newValue: string): void => {
    changeUserInfo(id, "email", newValue);
}

export const changeUserName = (id: string, newValue: string): void => {
    changeUserInfo(id, "name", newValue);
}

export const changeIsUserActive = (id: string, newValue: boolean): void => {
    changeUserInfo(id, "active", newValue);
}

