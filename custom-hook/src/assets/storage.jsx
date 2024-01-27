import { useEffect, useState } from 'react';

const useStorage = () => {
  const k = 'content'
  const [val,setval] = useState(()=>localStorage.getItem(k))
  useEffect(()=>{
    localStorage.setItem(k,val)
  },[k,val])
  return [val,setval]
};

export default useStorage;