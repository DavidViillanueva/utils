import { useState, useEffect, useRef } from "react";

const useFetch = ( url ) => {

    const isMounted = useRef(true)
    
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect( () =>{

        return () =>{
            isMounted.current = false;
        }
    }, []);
    
    useEffect(() => {

        setstate({ loading:true , error:null , data:null })
        
        fetch(url)
        .then( resp => resp.json() )
        .then( data => {

            if(isMounted.current){
                setstate({
                    loading:false,
                    error: null,
                    data
                })
            };

        })
        .catch( () => {
            setstate({
                data: null,
                loading: false,
                error: "No se pudo cargar la informacion"
            })
        })
    }, [url])


    return state;
}

export default useFetch;
