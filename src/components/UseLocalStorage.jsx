import { useState } from "react";

export function useLocalStorage (key, initialValue) {

  const [storedValue, setStoredValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key);
      const parsed = item ? JSON.parse(item) : initialValue;
      return [...parsed];
    } catch(error) {
      return initialValue;
    }  
  })

  const setValue = value => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
      console.log(error);
    }
  }

  return [storedValue, setValue]
} 