const cachePrefix = 'medical';

export function setItemInCache(id:string, data:object) {
  const stringData = JSON.stringify(data);
  window.localStorage.setItem(`${cachePrefix}-${id}`, stringData);
}

export function getItemFromCache(id:string) {
  const stringData = window.localStorage.getItem(`${cachePrefix}-${id}`);
  return JSON.parse(stringData);
}
