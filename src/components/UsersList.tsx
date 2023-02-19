import { usersList } from "./User.type"
const UsersList =()=>{
    return(
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {usersList.map((user)=>{
                    console.log(user)
                    return(
                        <tr key={user.id}>
                            <td>{`${user.firstName} ${user.lastName}`}</td>
                            <td>{user.email}</td>
                            <td>Actoin</td>
                        </tr>
                    )
                })}
            </table>
            {usersList.map(user=>{
                return(
            <div key={user.id}>
                <img src={user.imgUrl}/>
                <h3>{user.firstName}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
                )
            })}
            
        </>
    )
}

export default UsersList;