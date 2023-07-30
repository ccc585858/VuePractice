export function hi(user) {
  return `Hi, ${user}!`;
}

export function hello(user) {
  return `hello ${user}`;
}

export let arr = [1, 2, 3, 4, 5];

// 在一個模組檔案中，export default 最多只能使用一次。
export default function () {
  return `這是指定的預設函式匯出`;
}
