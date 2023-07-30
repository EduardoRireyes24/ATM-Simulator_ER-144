import React, { useState, useRef, useLayoutEffect } from 'react';

const TarjetaCredito = () => {
  const numeroTarjeta = '**** **** **** 1234';
  const propietario = 'John Doe';
  const fechaInicio = '01/21';
  const fechaVencimiento = '01/26';


  const tarjetaRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const tarjetaRect = tarjetaRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - tarjetaRect.left,
      y: e.clientY - tarjetaRect.top,
    });
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        const x = e.clientX - offset.x - tarjetaRef.current.offsetWidth / 2;
        const y = e.clientY - offset.y - tarjetaRef.current.offsetHeight / 2;
        tarjetaRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const handleMouseLeave = () => {
      setDragging(false);
      tarjetaRef.current.style.transform = 'translate(0, 0)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dragging, offset]);

  return (
    <div className="tarjeta-credito"    
    onMouseDown={handleMouseDown}
      ref={tarjetaRef}
    >
      <div className="chip"></div>
      <div className="marca">Visa</div>
      <div className="banco">Bank of H</div>
      <div className="numero-tarjeta">{numeroTarjeta}</div>
      <div className="propietario">{propietario}</div>
      <div className="fechas">
        <div className="fecha-inicio">Inicio: {fechaInicio}</div>
        <div className="fecha-vencimiento">Vencimiento: {fechaVencimiento}</div>
      </div>
    </div>
  );
};


export {TarjetaCredito};