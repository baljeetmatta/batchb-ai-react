import { useEffect, useState } from "react";

const Posts=()=>{

   // let users=[];
   const [users,setUsers]=useState([]);
    const [isLoading,setLoading]=useState(false);


    useEffect(()=>{
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
            //users=response;
            setUsers(response)
            console.log(users);
            setLoading(false);


        })

    },[]);


    if(isLoading){
        return (
    <div>Loading..</div>
    )

}

    return (
        <>
        <div>Users Data...</div>
            <table>
                <thead>
                <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((item)=>{
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
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
export default Posts;
