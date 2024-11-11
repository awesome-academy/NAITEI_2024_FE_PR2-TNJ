export const encrypt = (password: string, key: string): string => {
  let encryptedPassword = '';

  for (let i = 0; i < password.length; i++) {
    const encryptedChar =
      password.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    encryptedPassword += String.fromCharCode(encryptedChar);
  }

  return encryptedPassword;
};

export const decrypt = (encryptedPassword: string, key: string): string => {
  let decryptedPassword = '';

  for (let i = 0; i < encryptedPassword.length; i++) {
    const decryptedChar =
      encryptedPassword.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    decryptedPassword += String.fromCharCode(decryptedChar);
  }

  return decryptedPassword;
};
