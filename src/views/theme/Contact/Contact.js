import React, { useState } from 'react';
import { CCard, CCardHeader, CCardBody, CButton, CForm, CFormLabel, CFormInput, CFormTextarea } from '@coreui/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podría añadir la lógica para enviar el formulario
    setMensajeVisible(true);
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>Contacto</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <div className="mb-3">
            <CFormLabel htmlFor="nombre">Nombre</CFormLabel>
            <CFormInput
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="email">Correo Electrónico</CFormLabel>
            <CFormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="mensaje">Mensaje</CFormLabel>
            <CFormTextarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <CButton color="primary" type="submit">
            Enviar
          </CButton>
        </CForm>
        {mensajeVisible && (
          <div className="mt-3">
            <h5>¡Gracias!</h5>
            <p>Nos pondremos en contacto contigo pronto.</p>
          </div>
        )}
      </CCardBody>
    </CCard>
  );
};

export default Contact;
