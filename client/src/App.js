import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/ContactUs";
import Sessions from "./Pages/Sessions";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Forgot from "./Pages/ForgetPassword";
import Register from "./Pages/Register";
import SessionCreation from "./Pages/SessionCreating";
import SessionDeletion from "./Pages/SessionDeletion";
import Construction from "./Pages/Construction";
import ChatPage from "./Pages/ChatPage";
import ProductHome from "./Pages/ProductHome";
import AdminBoard from "./Pages/AdminDashboard";
import EditDetails from "./Pages/EditDetails";
import FileUpload from "./Pages/FileUpload";
import Form from "./Pages/Form";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "Lato",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  const dispatch = useDispatch();
  const loggeduser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Plots" element={<ProductHome />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/forgetPassword" element={<Forgot />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/sessionsDelete" element={<SessionDeletion />} />
          <Route path="/offerChats" element={<ChatPage />} />
          <Route path="/sessionCreation" element={<SessionCreation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminPanel" element={<AdminBoard />} />
          <Route path="/editDetails" element={<EditDetails />} />
          <Route path="/fileUploads" element={<FileUpload />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
