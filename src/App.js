
import './App.css';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import SignPageComponent from './pages/Sign';
import JoinPageComponent from './pages/Join';
import HomePageComponent from './pages/Home';
function App() {
  return <Layout>
          <Routes>
            <Route path='/' element={<HomePageComponent/>}></Route>
            <Route path='/sign' element={<SignPageComponent/>}></Route>
            <Route path='/join' element={<JoinPageComponent/>}></Route>
          </Routes>
         </Layout>;
}

export default App;
