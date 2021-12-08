import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Forum from './pages/Forum';
import Login from './pages/Login';
import Container from './styles/Container';

export const LOGIN_TOKEN = 'login success';

function App() {
  const token = useSelector((state) => state.user.token);
  return (
    <BrowserRouter>
      <Container>
        {token && <Header />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forum" element={<Forum />} />
          <Route
            path="/profile"
            element={
              token ? (
                <div>유저 프로필 화면입니다 ^^;</div>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
