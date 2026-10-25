import React from 'react';
import Navbar from './Navbar';

function Reserva() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        

        <Navbar />

        <header className="bg-dark py-5">
          <div className="container px-5 text-center">
            <h1 className="display-5 fw-bolder text-white mb-2">Reserva una Mesa</h1>
            <p className="lead fw-normal text-white-50 mb-0">Asegura tu lugar y vive una experiencia gastronómica inolvidable.</p>
          </div>
        </header>

        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card shadow border-0 p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h2 className="fw-bolder">Completa tus datos</h2>
                    <p className="text-muted">Nos pondremos en contacto para confirmar tu reserva.</p>
                  </div>
                  
                  <form>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label fw-bold">Nombre completo</label>
                      <input type="text" className="form-control" id="nombre" placeholder="Ej. Juan Pérez" required />
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="fecha" className="form-label fw-bold">Fecha</label>
                        <input type="date" className="form-control" id="fecha" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="personas" className="form-label fw-bold">Número de personas</label>
                        <select className="form-select" id="personas" required>
                          <option value="">Selecciona...</option>
                          <option value="1">1 Persona</option>
                          <option value="2">2 Personas</option>
                          <option value="4">4 Personas</option>
                          <option value="6">6 o más Personas</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="comentarios" className="form-label fw-bold">Comentarios o Alergias (Opcional)</label>
                      <textarea className="form-control" id="comentarios" rows="3" placeholder="Indícanos si tienes alguna preferencia o requerimiento especial."></textarea>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-dark btn-lg">
                        <i className="bi bi-calendar-check me-2"></i> Confirmar Reserva
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Mi Restaurante 2026</div></div>
            <div className="col-auto">
              <a className="link-light small" href="#!">Privacy</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Reserva;