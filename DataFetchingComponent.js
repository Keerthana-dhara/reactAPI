import React, {useEffect,useState} from 'react'

const DataFetchingComponent=()=> {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]= useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
            if(!Response.ok){
                throw new Error("network response not ok");
            }
            return Response.json();
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setLoading(false);
        });
    },[]);

    if(loading){
        return <div>loading...</div>
    }
    if(error){
        return <div>Error: {error.message}</div>
    }
  return (
    <div>
      <h1>List of API Data</h1>
      <ol>
        {data.map((item)=>(
            <li key={item.id}>
                <h3>Name: {item.name}</h3>
                <h3>Username: {item.username}</h3>
                <h3>Email: {item.email}</h3>
                <br/>
            </li>
        ))}
      </ol>
    </div>
  );
};

export default DataFetchingComponent;
