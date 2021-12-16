import React,{useState,useEffect} from "react";

function App (){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then ((r)=>r.json())
        .then ((data)=>{
            setIsLoaded(true);
            setItems(data.message)
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    },[]);

    if (error){
        return <div>Error</div>
    }
    else if(!isLoaded){
        return <div>
            <p>Loading...</p>
        </div>
    }
    else {
        return (
            <ul>
                <img src={items} alt="A Random Dog" />
            </ul>
        )
    }
}

    

export default App