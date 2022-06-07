import { useState } from "react";

function useLocalStorage(key, value) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const itemFromStorage = localStorage.getItem(key);

    return itemFromStorage ? JSON.parse(itemFromStorage) : value;
  });

  const setValue = (value) => {
    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [localStorageValue, setValue];
}

export default useLocalStorage;
