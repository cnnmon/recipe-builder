export function saveData(name, data) {
  window.localStorage.setItem(name, data);
}

export function getData(name) {
  return window.localStorage.getItem(name);
}
