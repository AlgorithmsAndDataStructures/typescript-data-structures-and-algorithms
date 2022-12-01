export default function swap(arr: Array<any>, pos1: number, pos2: number) {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}
