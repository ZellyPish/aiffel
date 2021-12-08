import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Forum from './pages/Forum/List';
import Login from './pages/Login';
import Container from './components/styles/Container';
import AuthedPages from './AuthedPages';

export const LOGIN_TOKEN = 'login success';

function App() {
  const token = useSelector((state) => state.userInfo.token);
  return (
    <BrowserRouter>
      <Container>
        {token && <Header />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<AuthedPages />}>
            <Route path="forum" element={<Forum />} />
            <Route
              path="profile"
              element={<div>유저 프로필 화면입니다 ^^;</div>}
            />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
