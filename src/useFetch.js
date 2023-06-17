import {useState, useEffect} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
 
  useEffect(() =>{
    const abortCont = new AbortController();
    
    fetch(url, {signal: abortCont.signal})
      .then(response =>{
        if(!response.ok){
          throw Error('could not fetch data from that resource');
        }
          return response.json();
        } )
      .then(result =>{
        setData(result)
        setError(null)
      })
      .catch(err => {
        if(err.name === 'AbortError'){
        } else {
          setError(err.message)
        }
      })
      return () => abortCont.abort();
  }, [url])
  return {data, error}
}

export default useFetch