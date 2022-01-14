import { uuid } from 'uuidv4';
const ALPHABETHICAL_LIST = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz';

export const randString = (length: number): string => {
  let str = '';
  for (let i = 0; i < length; i++) {
    const s =
      ALPHABETHICAL_LIST[Math.round(Math.random() * ALPHABETHICAL_LIST.length)];

    str += s;
  }
  return str;
};

export const generateUuid = () => uuid();
