import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Datagrid({ patients }) {
    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={patients} columns={columns} />
        </div>
    );
}

const columns = [
    { field: "name", headerName: "Name", width: 180, editable: true },
    { field: "age", headerName: "Age", type: "number", editable: true },
    {
        field: "dateCreated",
        headerName: "Date Created",
        type: "date",
        width: 180,
        editable: true,
    },
    {
        field: "lastLogin",
        headerName: "Last Visited",
        type: "dateTime",
        width: 220,
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        name: "Kunal",
        age: 25,
        dateCreated: new Date(18 / 5 / 1999),
        lastLogin: new Date(18 / 5 / 2020),
    },
    {
        id: 2,
        name: "John",
        age: 25,
        dateCreated: new Date(18 / 5 / 1999),
        lastLogin: new Date(18 / 5 / 2020),
    },
    {
        id: 3,
        name: "Jeff",
        age: 25,
        dateCreated: new Date(18 / 5 / 1999),
        lastLogin: new Date(18 / 5 / 2020),
    },
];
