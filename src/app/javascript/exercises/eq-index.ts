// En el siguiente arreglo la posición 2 (0 based index) es considerada
// un punto de equilibrio, es decir la suma de la izquierda (3 + 4) es igual
// a la suma de la derecha (1 + 6).

// El arreglo puede contener números positivos y negativos
// Retorna un arreglo con todos los puntos de equilibrio
// Ejemplo si el arreglo es [3, 4, 8, 1, 6] se espera como resultado [2].
// Otro ejemplo: [0, -3, 5, -4, -2, 3, 1, 0] --> [ 0, 3, 7]

export const input = [3, 4, 8, 1, 6];
export const input2 = [0, -3, 5, -4, -2, 3, 1, 0];

export default function getEqIndexes(arr: number[]): number[] {
  const eqIndex: number[]= [];
  for (let i = 0; i < arr.length; i++){
    const sumLeft = arr.slice(0,i).reduce((a,b) => a + b, 0);
    const sumRight = arr.slice(i + 1).reduce((a,b) => a + b, 0);

    if(sumLeft === sumRight){
      eqIndex.push(i);
    }

  }
  return eqIndex;
}

console.log(getEqIndexes(input));
console.log(getEqIndexes(input2));



class Base {
  protected m = 10;
}
class Derived extends Base {
  override m = 15;
}
const d = new Derived();
console.log(d.m);



//Explicación
/*
1. se itera sobre cada elemento del arreglo arr con bucle for. para cada elemento
se calcula la suma de los elementos de las izquierda en la variable sumLeft
2. se calcula la suma de los elementos de la derecha de la posición actual usando
la variable sumRight
4. se compara la suma de la izquierda y derecha para verificar que son iguales, si son iguales
se agrega el indice actual i al arreglo eqIndex
5. se retorna el arrego edIndex con los indices de los puntos de equilibrios encontrados.

 */
