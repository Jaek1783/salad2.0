
import './App.css';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import SignPageComponent from './Sign';
import JoinPageComponent from './Join';
function App() {
  return <Layout>
          <Routes>
            <Route path='/sign' element={<SignPageComponent/>}></Route>
            <Route path='/join' element={<JoinPageComponent/>}></Route>
          </Routes>
         </Layout>;
}

export default App;
