import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Video from './components/Video/Video'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/find-counsellors" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;