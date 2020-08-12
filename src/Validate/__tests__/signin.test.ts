import validate from '../signin';

describe('Validate', () => {
  describe('Signin', () => {
    test('Incorrect login', () => {
      expect(
        validate({
          login: '',
          password: ''
        })
      ).toMatchObject(['signin.error.login.none']);
    });

    test('Incorrect password', () => {
      expect(
        validate({
          login: 'login',
          password: ''
        })
      ).toMatchObject(['signin.error.password.none']);

      expect(
        validate({
          login: 'login',
          password: 'pass'
        })
      ).toMatchObject(['signin.error.password.long']);
    });

    test('Correct data', () => {
      expect(
        validate({
          login: 'login',
          password: '123456'
        })
      ).toMatchObject([]);
    });
  });
});
