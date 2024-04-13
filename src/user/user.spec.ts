import user from './user';

const sut = user();

beforeEach(() => {
  sut.users.clear();
});

describe('User', () => {
  it('should create a user', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678901',
      idade: 30,
    };

    sut.create(userDTO);

    expect(sut.find(userDTO.cpf)).toEqual(userDTO);
  });

  it('should update a user', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678901',
      idade: 30,
    };

    sut.create(userDTO);

    const updatedUser = {
      name: 'John Doe',
      cpf: '12345678901',
      idade: 31,
    };

    sut.update(updatedUser);

    expect(sut.find(userDTO.cpf)).toEqual(updatedUser);
  });

  it('should remove a user', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678980',
      idade: 30,
    };

    sut.create(userDTO);

    sut.remove(userDTO.cpf);

    expect(sut.find(userDTO.cpf)).toBeUndefined();
  });

  it('should return undefined if user was removed', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678901',
      idade: 30,
    };

    sut.create(userDTO);
    sut.remove(userDTO.cpf);

    expect(sut.find(userDTO.cpf)).toBeUndefined();
  });

  it('should return undefined if user was not found', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678901',
      idade: 30,
    };

    sut.create(userDTO);

    expect(sut.find('12345678902')).toBeUndefined();
  });

  it('should update user', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678901',
      idade: 30,
    };

    sut.create(userDTO);

    const updatedUser = {
      name: 'John Doe',
      cpf: '12345678901',
      idade: 31,
    };

    sut.update(updatedUser);

    expect(sut.find(userDTO.cpf)).toEqual(updatedUser);
  });

  it('should remove user', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678902',
      idade: 30,
    };

    sut.create(userDTO);

    sut.remove(userDTO.cpf);

    expect(sut.find(userDTO.cpf)).toBeUndefined();
  });

  it('should list users', () => {
    const userDTO = {
      name: 'John Doe',
      cpf: '12345678903',
      idade: 30,
    };

    sut.create(userDTO);

    expect(sut.list()).toEqual([userDTO]);
  });
});
