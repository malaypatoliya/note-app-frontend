import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import AddNote from "./Components/AddNote";
import UpdateNote from "./Components/UpdateNote";
import View from "./Components/View";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Alert from "./Components/Alert";
import PrivateComponent from "./Components/PrivateComponent";

import NoteState from "./Context/notes/NoteState";
import AlertState from "./Context/alerts/AlertStates";
import AuthState from "./Context/auth/AuthState";
import Errorpage from "./Components/Errorpage";

import "./css/app.css";

function App() {

  return (
    <>
      <NoteState>
        <AlertState>
          <AuthState>
            <BrowserRouter>
              <Navbar />
              <Alert />
              <Routes>

                <Route element={<PrivateComponent />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/addnote" element={<AddNote />} />
                  <Route path="/updatenote/:id" element={<UpdateNote />} />
                  <Route path="/view/:id" element={<View />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Errorpage />} />


              </Routes>
            </BrowserRouter>
          </AuthState>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
