import { useState } from 'react';
import './contactform.css';
import './contactoindexmediaqueries.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    servicio: 'Nutrición Clínica',
    telefono: '',
    motivoConsulta: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      

      // Check if the request was successful
      if (response.ok) {
        console.log('Form successfully submitted');
        // Reset form after successful submission if needed
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          servicio: 'Nutrición Clínica',
          telefono: '',
          motivoConsulta: '',
        });
        alert('Email enviado con éxito');
      } else {
        // Handle errors if needed
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} action='sendemail.php'>
      <div className="nombreapellidoswrapper">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre*"
          required
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
        />
      </div>
      <div className="email">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail*"
          required
        />
      </div>

      <div className="serviciotelefonowrapper">
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
        />
        <select
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Selecciona un servicio
          </option>
          <option value="Nutrición Clínica">Nutrición Clínica</option>
          <option value="Nutrición Deportiva">Nutrición Deportiva</option>
          <option value="Pérdida de Peso">Pérdida de Peso</option>
          <option value="Hábitos Alimentarios">Hábitos Alimentarios</option>
        </select>
      </div>

      <div className="motivoconsultawrapper">
        <textarea
          name="motivoConsulta"
          value={formData.motivoConsulta}
          onChange={handleChange}
          placeholder="Motivo de la consulta*"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
