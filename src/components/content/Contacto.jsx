import React from "react";

const Contacto = () => {
    const dataForm = React.useRef () //agrega referencia al form. para identificarlo "gps"
    
    const consultarForm = (e) =>{
        e.preventDefault()
        const datosForm = new FormData (dataForm.current)
        console.log(Object.fromEntries(datosForm))

    }
  return (
    <>
      <form onSubmit={consultarForm} ref={dataForm}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre y Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
          />
        </div>
        <div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue name="mañana" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      contacto por la Mañana
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue name="tarde" defaultChecked />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    contacto por la Tarde
    </label>
  </div>
</div>
       
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Contacto;
