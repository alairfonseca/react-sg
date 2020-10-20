interface Response {
  token: string;
  user: {
    name: string,
    email: string,
  };
}

export function signIn(email: string, password: string): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          name: email.split('@')[0],
          email,
        }
      });
    }, 2000);
  });
}