import { useState, useEffect, useCallback } from 'react';
import { customLocalStorage } from './customLocalStorage';

export const useLocalStorageState = (key, defaultValue) => {
  const storedValue = customLocalStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : defaultValue;
  const [value, setValue] = useState(initial);

  const updateLocalStorage = useCallback((newValue) => {
    customLocalStorage.setItem(key, JSON.stringify(newValue));
  }, [key]);

  useEffect(() => {
    updateLocalStorage(value);
  }, [value, updateLocalStorage]);

  return [value, setValue];
};
