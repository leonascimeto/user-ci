import user from './user';

describe('User', () => {
  const sut = user();
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
      cpf: '12345678901',
      idade: 30,
    };

    sut.create(userDTO);

    sut.remove(userDTO.cpf);

    expect(sut.find(userDTO.cpf)).toBeUndefined();
  });

  it('should return undefined if user does not exist', () => {
    expect(sut.find('12345678901')).toBeUndefined();
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
});
