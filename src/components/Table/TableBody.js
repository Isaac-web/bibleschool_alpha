import React, { useState } from "react";
import {
  Box,
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import _ from "lodash";

const TableBody = ({ columns, data, placeholder }) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(1);
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  if (!data.length) return <>{placeholder || "No data yet"}</>;

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ({ target: input }) => {
    setRowsPerPage(parseInt(input.value));
  };

  return (
    <MuiTableBody>
      {data.map((item) => (
        <TableRow key={item._id}>
          {columns.map((c) => (
            <TableCell key={`${c.path || c.key}_${item._id}`}>
              {renderCell(item, c)}
            </TableCell>
          ))}
        </TableRow>
      ))}

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component={Box}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </MuiTableBody>
  );
};

export default TableBody;
