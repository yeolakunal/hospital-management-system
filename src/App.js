import React, { useState, useEffect } from "react";
import Datagrid from "./components/Datagrid";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const getPatients = async () => {
            const res = await axios.get("http://localhost:3001/patients");
            setPatients(res.data);
        };
        getPatients();
    }, []);
    return (
        <div>
            <Navbar />
            <Datagrid patients={patients} />
        </div>
    );
};

export default App;
