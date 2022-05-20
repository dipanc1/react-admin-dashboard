import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { darkMode, greenMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    if (currentUser) {
      return children;
    } else {
      <Navigate to="/login" />
    }
  };

  return (
    <div className={darkMode ? "app dark" : greenMode ? "app green" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />
          <Route path="/users">
            <Route index element={
              <RequireAuth>
                <List />
              </RequireAuth>
            } />
            <Route path=":id" element={
              <RequireAuth>
                <Single />
              </RequireAuth>
            } />
            <Route path="new" element={
              <RequireAuth>
                <New inputs={userInputs} title="Add New User" />
              </RequireAuth>
            } />
          </Route>
          <Route path="/products">
            <Route index element={
              <RequireAuth>
                <List />
              </RequireAuth>
            } />
            <Route path=":productId" element={
              <RequireAuth>
                <Single />
              </RequireAuth>
            } />
            <Route path="new" element={
              <RequireAuth>
                <New inputs={productInputs} title="Add New Product" />
              </RequireAuth>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
