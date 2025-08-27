import { useEffect, useState } from "react";

const Users=()=>{

   // let users=[];
   const [users,setUsers]=useState([]);


    useEffect(()=>{

        fetch("./users.json")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
            //users=response;
            setUsers(response)
            console.log(users);


        })

    },[]);




    return (
        <>
        <div>Users Data...</div>
            <table>
                <thead>
                <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Password</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((item)=>{
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
            
            </table>

        </>
    )

}
export default Users;
