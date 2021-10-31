import React from 'react'
import Input from '../Input';
import {Box} from "@mui/material";


const TableSearchBar = ({searchProperty, data, onSearch}) => {

    const raiseSearch = ({target:input}) =>{
        const result = data.filter(item => 
            item[searchProperty].trim().toLowerCase().includes(input.value.trim().toLowerCase()));
        onSearch(result);
    }


    return (
        <Box>
            <Input fullWidth placeholder="Search.." onChange={raiseSearch}/>
        </Box>
    )
}

export default TableSearchBar
