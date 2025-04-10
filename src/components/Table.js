import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  CircularProgress,
  Box,
} from '@mui/material';

const Table = ({ headers, data, loading, pagination }) => {
  const {
    page,
    pageSize,
    totalCount,
    onPageChange,
    onPageSizeChange
  } = pagination;

  return (
    <TableContainer component={Paper} sx={{ margin: '20px 0', boxShadow: 3 }}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'primary.main' }}>
            {headers.map((column, index) => (
              <TableCell 
                key={index}
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  padding: '16px'
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={headers.length} align="center">
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={headers.length} align="center">
                <Typography variant="body2" color="text.secondary">
                  No data available
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow 
                key={rowIndex}
                sx={{ 
                  '&:nth-of-type(odd)': { backgroundColor: 'action.hover' },
                  '&:hover': { backgroundColor: 'action.selected' }
                }}
              >
                {headers.map((column, colIndex) => (
                  <TableCell 
                    key={colIndex}
                    sx={{ padding: '12px 16px' }}
                  >
                    <Typography variant="body2">
                      {row[column.key]}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </MuiTable>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={pageSize}
        page={page}
        onPageChange={(event, newPage) => onPageChange(newPage)}
        onRowsPerPageChange={(event) => onPageSizeChange(parseInt(event.target.value, 10))}
      />
    </TableContainer>
  );
};

export default Table;
