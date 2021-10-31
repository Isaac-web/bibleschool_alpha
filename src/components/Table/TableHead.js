import React from 'react';
import {TableHead as MuiTableHead, TableRow, TableCell} from "@mui/material";

const TableHead = ({columns=[]}) => {
    return (
    <MuiTableHead>
        <TableRow>
            {columns.map(c => <TableCell key={c.path}>{c.label}</TableCell>)}
        </TableRow>
    </MuiTableHead>
    )
}

export default TableHead
