import { useState,useEffect } from "react";
const useFetch =(url)=>
{
    const abortCont=new AbortController();
    const [data, setData] = useState(null);
    const[ispending,setIspending]= useState(true);
    const[error,setError]=useState(null);
 
      useEffect(()=>{
      fetch(url,{signal:abortCont.signal})
      .then(res=>{
        if(!res.ok){
          throw Error('could not fetch data');
        }

        return res.json();
       })
       .then(data=>{
         setData(data);
         setIspending(false);
         setError(null);

       })
       .catch(err=>{
           if(err.name==='AbortError'){
               console.log('err');
           }
           else{
               setIspending(false);
               setError(err.message);}
       })
       return ()=>abortCont.abort();
      },[url])
      return{data,ispending,error};
}
export default useFetch;