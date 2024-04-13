export default function user() {
  const users = new Map<string, User>();

  function create(input: User) {
    users.set(input.cpf, input);
  }

  function find(cpf: string) {
    return users.get(cpf);
  }

  function update(input: User) {
    users.set(input.cpf, input);
  }

  function remove(cpf: string) {
    users.delete(cpf);
  }

  function list() {
    return Array.from(users.values());
  }

  return { create, find, update, remove, list, users };
}

type User = {
  name: string;
  cpf: string;
  idade: number;
};
