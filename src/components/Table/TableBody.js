import React from 'react'
import {TableBody as MuiTableBody, TableRow, TableCell} from "@mui/material";
import _ from "lodash";

const TableBody = ({columns, data}) => {

    const renderCell = (item, column) => {
        if(column.content) return column.content(item)
        
        return _.get(item, column.path)
    }
    return (    
        <MuiTableBody>
            {data.map(item => 
            <TableRow key={item._id}>
                {columns.map(c => <TableCell key={`${c.path || c.key}_${item._id}`}>{renderCell(item, c)}</TableCell>)}
            </TableRow> )}   
        </MuiTableBody>
    )
}

export default TableBody
