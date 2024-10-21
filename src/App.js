import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './component/Login/login';
import MainMenu from './component/pages/StudentPanel/MainMenu/MainMenu';
import SearchOrderNumber from './component/pages/AdminPanel/buscarOrdenes/SearchOrderNumber';
import OrdenesProceso from './component/pages/AdminPanel/ordenesEnProceso/OrdenesProceso';
import EditarUsuario from './component/pages/AdminPanel/editarUsuario/EditarUsuario';
import AgregarUsuario from './component/pages/AdminPanel/agregarUsuario/AgregarUsuario';
import ActualizarCafeteria from './component/pages/AdminPanel/actiualizarCafeteria/ActualizarCafeteria';
import ActualizarCategoria from './component/pages/AdminPanel/actualizarCategoria/ActualizarCategoria';
import ActualizarMenu from './component/pages/AdminPanel/actualizarMenu/ActualizarMenu';

import { setupIonicReact } from '@ionic/react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/main-menu" component={MainMenu} />
            <Route path="/buscar-orden" component={SearchOrderNumber} />
            <Route path="/ordenes-proceso" component={OrdenesProceso} />
            <Route path="/editar-usuario" component={EditarUsuario} />
            <Route path="/agregar-usuario" component={AgregarUsuario} />
            <Route path="/actualizar-cafeteria" component={ActualizarCafeteria} />
            <Route path="/actualizar-categoria" component={ActualizarCategoria} />
            <Route path="/actualizar-menu" component={ActualizarMenu} />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
