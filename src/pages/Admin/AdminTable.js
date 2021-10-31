import React from 'react'
import {TableContainer, Table} from "@mui/material";


import TableHead from "../../components/Table/TableHead";
import TableBody from "../../components/Table/TableBody";
import TableSearchBar from '../../components/Table/TableSearchBar';



const AdminTable = ({columns, searchProperty, data, onSearch, searchResults}) => {
    return (
        <TableContainer>
            <TableSearchBar searchProperty={searchProperty} data={data} onSearch={onSearch}/>
            <Table>
                <TableHead columns={columns}/>
                <TableBody columns={columns} data={searchResults.length ? searchResults : data}/>
            </Table>
        </TableContainer>
    )
}

export default AdminTable
