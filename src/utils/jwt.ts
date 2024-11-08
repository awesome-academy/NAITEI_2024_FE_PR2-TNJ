import { SignJWT, jwtVerify } from 'jose';

interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  password: string;
}

const STORAGE_KEY = 'token';
const secretKey = new TextEncoder().encode(process.env.REACT_APP_SECRET_KEY);

export async function saveUserToStorage(user: User) {
  try {
    const token = await generateToken(user);
    sessionStorage.setItem(STORAGE_KEY, token);
    return token;
  } catch (error) {
    console.error('Error saving user:', error);
    throw new Error('Failed to save user');
  }
}

export async function getUserFromStorage(): Promise<User | null> {
  try {
    const token = sessionStorage.getItem(STORAGE_KEY);
    if (!token) return null;

    const user = await verifyToken(token);
    return user;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
}

export function removeUserFromStorage() {
  sessionStorage.removeItem(STORAGE_KEY);
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getUserFromStorage();
  return user !== null;
}

async function generateToken(user: User) {
  return await new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secretKey);
}

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload.user as User;
  } catch (error) {
    throw new Error('Invalid token: ' + error);
  }
}
