import { motion } from "framer-motion";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Explore from './pages/Explore';
import Layout from './components/Layout';


export default function App() {
  return (
    <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Layout>
    </motion.div>
  );
}
