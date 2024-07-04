import { useEffect, useState } from "react";
import supabase from "./supabaseClient";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  
  return (
   <Dashboard />
  );
}

export default App;