// El arreglo solo puede contener los números: 0, 1 ó 2.
/* Retorna un arreglo de números ordenados de manera ascendente de la siguiente manera:
[0,1,2,2,1,0,1,0,2,0,2] —> [0,0,0,1,1,1,2,2,2,2]
IMPORTANTE!!!: NO UTILICES el método Array.prototype.sort()
IMPORTANTE!!!: Recuerda que el arreglo solo puede contener los números: 0, 1 ó 2.
 */

export const input = [0, 1, 2, 2, 1, 0, 1, 0, 2, 0, 2];

export default function sortArray(arr: number[]): number[] {
  const counts = [0, 0, 0];

  for (const numbers of arr) {
    counts[numbers]++;
  }


  return [...Array(counts[0]).fill(0), ...Array(counts[1]).fill(1), ...Array(counts[2]).fill(2)];
}

console.log(sortArray(input));


//Explicación:
/* 1. Se define un arreglo counts con 3 elementos inicializado con 0 cada uno.
2. Con bucle for ..of se incrementa el contador para cada numero en el arreglo de entrada
3. Con operador spread y método fill se crea un nuevo arreglo con numeros ordenados
4. Se retorna la concatenación de los 3 arreglos utilizando el operador spread. */
