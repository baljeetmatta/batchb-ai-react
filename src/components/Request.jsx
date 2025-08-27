import { useEffect, useState } from "react";

const Request=()=>{

   // let users=[];
   const [users,setUsers]=useState([]);
    const [isLoading,setLoading]=useState(false);
    const [page,setPage]=useState(1);


    useEffect(()=>{
        setLoading(true);
        fetch(`https://reqres.in/api/users?page=${page}`,{
            headers:{
                'x-api-key': 'reqres-free-v1'
            }
        })
        .then((response)=>{
            return response.json();
        }).then((response)=>{
            //users=response;

            setUsers(response.data);
            
            console.log(users);
            setLoading(false);


        })

    },[page]);


    if(isLoading){
        return (
    <div>Loading..</div>
    )

}

    return (
        <>
        <div>Users Data...</div>
        <button onClick={()=>setPage(page+1)}>Next</button>
            <table>
                <thead>
                <tr>
                <th>First</th>
                <th>Last Name</th>
                <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((item)=>{
                        return (
                            <tr>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
            
            </table>

        </>
    )

}
export default Request;
