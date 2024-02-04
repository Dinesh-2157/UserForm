import React, { useEffect, useState } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, FormGroup, Container, Paper } from '@mui/material';

const Form = ({ onSubmit, editingFormData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '',
    declaration: false,
  });
  useEffect(() => {
    if (editingFormData) {
      setFormData(editingFormData);
    }
  }, [editingFormData]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.declaration) {
      alert("Please accept the declaration before submitting.");
      return;
    } else {


      onSubmit(formData);
      setFormData({
        name: '',
        phone: '',
        email: '',
        qualification: '',
        declaration: false,
      });
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Qualification"
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="declaration" checked={formData.declaration} onChange={handleChange} />}
              label="I Agree"
            />
          </FormGroup>

          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
