import React from 'react';

function Footer (){
  
  return (
    <footer>
      <p>Claudio Salazar © 2004 - 2024 | V.2</p>
      <p>
        <small>Sitio desarrollado con Next.js, React y Bootstrap</small>
      </p>
      <hr />
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/claudiosv/" target="new" className="btn-footer linkedin" title="Mi perfil en LinkedIn"></a>
        </li>
        <li>
          <a href="https://github.com/claudiosalazar" target="new" className="btn-footer github" title="Mi repositorio en GitHub"></a>
        </li>
        <li>
          <a href="https://www.instagram.com/claudiosvcl/" target="new" className="btn-footer instagram" title="Mi perfil en Intagram"></a>
        </li>
        <li>
          <a href="https://www.behance.net/claudiosalazarcl" target="new" className="btn-footer behance" title="Mi portafolop en Behance"></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;