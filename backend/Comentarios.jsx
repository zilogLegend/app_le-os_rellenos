import React, { useState } from 'react';

function Comentarios() {
  const [comentario, setComentario] = useState('');
  const [comentarioRecibido, setComentarioRecibido] = useState('');

  const enviarComentario = async () => {
    try {
      const res = await fetch('https://backend-le-os-production.up.railway.app/comentarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto: comentario }),
      });
      const data = await res.json();
      setComentarioRecibido(data.texto);
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h3>Sistema de Comentarios Seguro</h3>
      
      <textarea 
        value={comentario} 
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribe un comentario o un script malicioso..."
        rows="4"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <br />
      <button onClick={enviarComentario}>Enviar al Backend</button>

      <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '10px' }}>
        <h4>Resultado (Saneamiento en React):</h4>
        {/* MÉTODO SEGURO: React escapa el HTML automáticamente */}
        <div>{comentarioRecibido}</div>
        
        {/* RETO DE SEGURIDAD (Solo para demostrar al profe):
            Si descomentas la línea de abajo, el script se ejecutaría. 
            Déjala comentada y explícale que por eso NO se debe usar. */}
        {/* <div dangerouslySetInnerHTML={{ __html: comentarioRecibido }} /> */}
      </div>
    </div>
  );
}

export default Comentarios;