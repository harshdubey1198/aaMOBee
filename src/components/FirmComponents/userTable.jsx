// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UserTable({ selectedFirmId, trigger }) {
//   const [userData, setUserData] = useState([]);
//   const authuser = JSON.parse(localStorage.getItem("authUser"));
//   const defaultFirm = JSON.parse(localStorage.getItem("defaultFirm"));

//   const toPascalCase = (str) => {
//     return str
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join(' ');
//   };

//   const firmId = selectedFirmId || defaultFirm?._id;
//   const companyTitle = defaultFirm?.companyTitle;
//   // const avatar = defaultFirm?.avatar;
//   const fetchUsers = async () => {
//     try {
//       let response;
//       if (authuser?.response?.role === "super_admin") {
//         response = await axios.get(`${process.env.REACT_APP_URL}/auth/getCompany/${authuser.response._id}`);
//       } else if (authuser?.response?.role === "client_admin") {
//         response = await axios.get(`${process.env.REACT_APP_URL}/auth/getCompany/${firmId}`);
//       } else if (authuser?.response?.role === "firm_admin") {
//         response = await axios.get(`${process.env.REACT_APP_URL}/auth/getCompany/${authuser.response.adminId}`);
//       }
//       setUserData(response);
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, [selectedFirmId, trigger]);

//   return (
//     <div>
//       <h5 className="text-center card-title-heading m-0"><span>{companyTitle}</span></h5>
//     <div className="table-responsive ">
//       <table className="table table-bordered mb-0">
//         <thead className="table-light">
//           <tr>
//             <th>Name</th>
//             <th>Mobile</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.length > 0 ? (
//             userData.map((user) => (
//               <tr key={user._id}>
//                 <td>{toPascalCase(`${user.firstName} ${user.lastName}`)}</td>
//                 <td>{user?.mobile}</td>
//                 <td>{user?.email}</td>
//                 <td>{user.role?.replace(/[_-]/g, " ")  .replace(/\b\w/g, (char) => char.toUpperCase())}</td>
//                 <td>{user?.isActive ? "Active" : "Not Active"}</td>
//                 <td>Edit/Pause</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No users found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// }

// export default UserTable;


import React, { useEffect, useState } from "react";
import axios from "axios";

function UserTable({ selectedFirmId, trigger }) {
  const [userData, setUserData] = useState([]);
  const authuser = JSON.parse(localStorage.getItem("authUser"));
  const defaultFirm = JSON.parse(localStorage.getItem("defaultFirm"));
  const token = authuser?.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const toPascalCase = (str) => {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const firmId = selectedFirmId || defaultFirm?._id;
  const companyTitle = defaultFirm?.companyTitle;

  const fetchUsers = async () => {
    try {
      let response;
      if (authuser?.response?.role === "super_admin") {
        response = await axios.get(`${process.env.REACT_APP_URL}/auth/getCompany/${authuser.response._id}`);
      } else if (authuser?.response?.role === "client_admin") {
        response = await axios.get(`${process.env.REACT_APP_URL}/auth/getCompany/${firmId}`);
      } else if (authuser?.response?.role === "firm_admin") {
        response = await axios.get(`${process.env.REACT_APP_URL}/auth/getCompany/${authuser.response.adminId}`);
      }
      setUserData(response); // Ensure you access response data
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_URL}/auth/userInactive/${userId}`, {
        status: !currentStatus,
      }, config);
      console.log(response.data.message); 
      fetchUsers(); 
    } catch (error) {
      console.error("Error toggling user status", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedFirmId, trigger]);

  return (
    <div>
      <h5 className="text-center card-title-heading m-0"><span>{companyTitle}</span></h5>
      <div className="table-responsive">
        <table className="table table-bordered mb-0">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user) => (
                <tr key={user._id}>
                  <td>{toPascalCase(`${user.firstName} ${user.lastName}`)}</td>
                  <td>{user?.mobile}</td>
                  <td>{user?.email}</td>
                  <td>{user.role?.replace(/[_-]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}</td>
                  <td>{user?.isActive ? "Active" : "Not Active"}</td>
                  <td>
                      {
                        user._id !== authuser.response._id && (
                          <button
                            onClick={() => toggleUserStatus(user._id, user.isActive)}
                            className={`btn btn-sm ${user.isActive ? "btn-danger" : "btn-success"}`}
                          >
                            {user.isActive ? "Deactivate" : "Activate"}
                          </button>
                        )
                      }
                   </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
