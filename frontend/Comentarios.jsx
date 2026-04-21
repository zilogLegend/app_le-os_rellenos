import React, { useState } from 'react';

function ComentariosSeguros() {
  const [texto, setTexto] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const manejarEnvio = async () => {
    const res = await fetch('https://backend-le-os-production.up.railway.app/comentarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texto })
    });
    const data = await res.json();
    setRespuesta(data.texto);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', marginTop: '20px' }}>
      <h2>Prueba de Seguridad (XSS & CORS)</h2>
      <textarea 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe algo, incluso etiquetas HTML..."
        style={{ width: '100%', height: '80px' }}
      />
      <button onClick={manejarEnvio} style={{ marginTop: '10px' }}>Enviar</button>
      
      <div style={{ marginTop: '20px' }}>
        <strong>Respuesta del servidor (Saneada por React):</strong>
        <p style={{ border: '1px solid black', padding: '10px' }}>{respuesta}</p>
      </div>
    </div>
  );
}

export default ComentariosSeguros;