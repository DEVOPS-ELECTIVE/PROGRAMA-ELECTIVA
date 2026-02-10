import { users } from "../../../mocks/users.mock";

export const login = async (identifier, password) => {
    const user = users.find(u => (u.email === identifier || u.name === identifier) && u.password === password);

    if (!user) {
        throw new Error("Usuario o contraseña incorrectos");
    }

    return user;
}