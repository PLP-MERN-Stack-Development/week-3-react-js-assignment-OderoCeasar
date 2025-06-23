import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Data from './pages/Data';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/data" element={<Data />} />
      </Route>
    </Routes>
  );
}

export default App;