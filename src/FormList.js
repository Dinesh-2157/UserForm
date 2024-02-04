import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import Paper from '@mui/material/Paper';

const FormList = ({ forms, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Qualification</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms?.map((form) => (
            <TableRow key={form.id}>
              <TableCell>{form.name}</TableCell>
              <TableCell>{form.phone}</TableCell>
              <TableCell>{form.email}</TableCell>
              <TableCell>{form.qualification}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => onEdit(form.id)}>
                  Edit
                </Button>
                <Button variant="contained" color="error" onClick={() => onDelete(form.id)} style={{ marginLeft: '5px' }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FormList;
