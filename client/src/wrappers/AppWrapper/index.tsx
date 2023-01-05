import React from 'react';
import { NavDots, Sci } from 'components';

const AppWrapper = (
  Component: React.ComponentType,
  idName: string,
  classNames?: string
) =>
  function HOC() {
    return (
      <section
        id={idName}
        className={`app_container ${classNames && classNames}`}
      >
        <Sci />
        <div className="app_wrapper app_flex">
          <Component />
          <div className="copyright">
            <p className="p-tex">&copy;2022 Gustavo Augusto</p>
            <p className="p-tex">Todos os Direitos Reservados</p>
          </div>
        </div>
        <NavDots active={idName} />
      </section>
    );
  };

export default AppWrapper;
