import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { create,update } from "../slicer/AdminSlicer";

// import "../../node_modules/"
export default function Users(){
  const users = useSelector((state)=>state.users);
  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState({
    name: "",
    email: ""
  });

  const handleChange = (inpt) => {
    // console.log(inpt)
    setUserdata(prev => ({...prev, [inpt.name]: inpt.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create(userdata))
    setUserdata({name: "", email: ""});
  }
  
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(update(userdata))
    setUserdata({name: "", email: ""});
  }
    
    return(
        <>
          <div className="col-md-12">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e.target)} value={userdata.name}/>
                <input type="email" placeholder="email" name="email" onChange={(e) => handleChange(e.target)} value={userdata.email} />
                <button type="submit">Create</button>
              </form>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleUpdateSubmit}>
                <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e.target)} />
                <input type="email" placeholder="email" name="email" onChange={(e) => handleChange(e.target)} />
                <button type="submit">Update</button>
              </form>
            </div>
          </div>
          
      
            <h2>Users</h2>
            

            <table className="col-md-6 table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  users && users.map((user) => {
                    return(
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    )
                  })
                }
                
              </tbody>
            </table>
        </>
    )
}