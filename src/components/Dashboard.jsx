import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Icon from '@mui/material/Icon';


import "../styles/style.css"
import Avatar from "../assets/avatar.svg"

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStudents();
  }, []);
  


  function createData(first_name, last_name, email, age) {
    return { first_name, last_name, email, age };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  async function getStudents() {
    try {
      const { data, error } = await supabase
        .from("students")
        .select("*");
      
      if (error) {
        console.error("Supabase error:", error.message);
        throw error;
      }

      console.log("Fetched data:", data);
      
      setStudents(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching students:", error.message);
    }
  }

  return (
    <div className="App">
     
      <div className="header">
        <img src={Avatar} className="avatar" />
        <p>Students</p>
          <br />
          <hr />
      </div>

      <div className="main-content">
  
        {error && <p>Error: {error}</p>}
       
        <TableContainer component={Paper} sx={{ padding: 2, backgroundColor: '#ffffff', borderRadius: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>First Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
              
              >
              
                <TableCell align="center">{student.first_name}</TableCell>
                <TableCell align="center">{student.last_name}</TableCell>
                <TableCell align="center">{student.email}</TableCell>
                <TableCell align="center">{student.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      </div>
    </div>
  );
}

export default Dashboard;