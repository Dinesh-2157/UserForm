import Form from './Form';
import FormList from './FormList';
import React, { useState } from 'react';

const App = () => {
  const [forms, setForms] = useState([]);
  const [editingFormId, setEditingFormId] = useState(null);
  const [editingFormData, setEditingFormData] = useState(null);
  const handleFormSubmit = (formData) => {
    if (editingFormId !== null) {
      setForms((prevForms) =>
        prevForms.map((form) => (form.id === editingFormId ? { ...form, ...formData } : form))
      );
      setEditingFormId(null);
    } else {
      setForms((prevForms) => [...prevForms, { ...formData, id: Date.now() }]);

    }
  };

  const handleEdit = (formId) => {
    const editedForm = forms.find((form) => form.id === formId);

    if (editedForm) {
      setEditingFormId(formId);
      setEditingFormData(editedForm);
    } else {
      console.error("Form not found with ID:", formId);
    }
  };

  const handleDelete = (formId) => {
    setForms((prevForms) => prevForms.filter((form) => form.id !== formId));
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} editingFormData={editingFormData} />
      <FormList forms={forms} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
