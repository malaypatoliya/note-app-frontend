import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNote from "./Components/AddNote";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";
import UpdateNote from "./Components/UpdateNote";

function App() {

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert msg="malay patoliya" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/updatenote/:id" element={<UpdateNote />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
