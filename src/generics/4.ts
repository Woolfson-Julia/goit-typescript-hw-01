type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser( updates: Partial<User>):User {
  const originalProfile: User = {
  name: '',
  surname: '',
  email: '',
  password: '',
}

  return { ...originalProfile, ...updates };
}



console.log(createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
}));