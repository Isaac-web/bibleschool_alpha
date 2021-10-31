import React from 'react'
import {TableBody as MuiTableBody, TableRow, TableCell} from "@mui/material";
import _ from "lodash";

const TableBody = ({columns, data}) => {
    return (    
        <MuiTableBody>
            {data.map(item => 
            <TableRow key={item._id}>
                {columns.map(c => <TableCell key={`${c.path}_${item._id}`}>{_.get(item, c.path)}</TableCell>)}
            </TableRow> )}   
        </MuiTableBody>
    )
}

export default TableBody
