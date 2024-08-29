import React from 'react';

function Footer (){
  
  return (
    <footer>
      <small className="d-block text-start text-md-end ms-4 ps-2">Claudio Salazar © 2004 - 2024 <br className="d-block d-md-none" /><span className="d-none d-md-inline-block">|</span> Sitio desarrollado con React Native</small>
      <div className="d-flex align-items-center me-4 pe-2 me-md-0 pe-md-0">
        <a href="https://www.linkedin.com/in/claudiosv/" target="new" className="btn-footer linkedin" title="Mi perfil en LinkedIn"></a>
        <a href="https://github.com/claudiosalazar" target="new" className="btn-footer github" title="Mi repositorio en GitHub"></a>
      </div>
    </footer>
  );
};

export default Footer;