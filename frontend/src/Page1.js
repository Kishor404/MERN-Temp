import { useEffect, useState } from "react"

function P1(){
    
    const [data,setdata]=useState()
    
    useEffect(()=>{
        const fetchData1=async ()=>{
            try{
                const response=await fetch("/api1")
                const json=await response.json()
                if(response.ok){
                    setdata(json)
                }
            }catch(err){
                console.log(err)
            }
            
        }
        fetchData1();
    },[])

    console.log(data)

    return(
        <>
            <div>
                <p>Page1</p>
                {data && data.map((info)=>(
                    <p key={info._id}>{info.N1}</p>
                ))}
            </div>
        </>
    )
}

export default P1