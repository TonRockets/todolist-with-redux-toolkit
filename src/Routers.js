import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Tasks from './pages/tasks';
import Users from './pages/users';

function Routers() {
  // TODO: Controle de permissão de rotas
  // const AuthRoute = ({children}) => {

  // }

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default Routers;
