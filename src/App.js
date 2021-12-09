import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Forum from './pages/Forum/List';
import Login from './pages/Login';
import Container from './components/styles/Container';
import AuthedPages from './AuthedPages';
import Detail from './pages/Forum/Detail';

export const LOGIN_TOKEN = 'login success';
export const BASE_URL = 'http://localhost:5050';

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
            <Route path="forum/:id" element={<Detail />} />
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
