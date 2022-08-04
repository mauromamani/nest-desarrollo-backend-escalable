import './style.css';
import { name, age } from './bases/01.types';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hola ${name}</h1>
  <h2>Tu edad es ${age}</h2>
`;
