import { useEffect, useState } from "react"

function P1(){
    
    const [data,setdata]=useState()

    useEffect(()=>{
        const fetchData1=async ()=>{
            const response=await fetch("/api1")
            const json=await response.json()
            if(response.ok){
                setdata(json)
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