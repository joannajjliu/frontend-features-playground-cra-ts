const pointerArray = ['👆', '👉', '👇', '👈']

export default {
  GRID_SIZE: 10,
  createNElementArray: (n: number) => Array(n).fill(0),
  POINT_RIGHT: 1,
  POINT_LEFT: 3,
  POINT_DOWN: 2,
  POINT_UP: 0,
  pointerArray,
  pointerArraySize: pointerArray.length,
}
