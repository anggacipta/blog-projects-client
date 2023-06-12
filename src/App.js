import "./App.css";
import "./tailwind.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/Post/CreatePost";
import PostPage from "./pages/Post/PostPage";
import EditPost from "./pages/Post/EditPost";
import GalleryPage from "./pages/Gallery/GalleryPage";
import AboutPage from "./pages/AboutPage";
import CreateImage from "./pages/Gallery/CreateImage";
import GallerySingle from "./pages/Gallery/GallerySingle";
import EditGallery from "./pages/Gallery/EditGallery";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/gallery"} element={<GalleryPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path='/create' element={<CreatePost></CreatePost>}></Route>
          <Route path='/creategallery' element={<CreateImage />}></Route>
          <Route path='/post/:id' element={<PostPage></PostPage>} />
          <Route
            path='/gallery/:id'
            element={<GallerySingle></GallerySingle>}
          />
          <Route path='/edit/:id' element={<EditPost></EditPost>} />
          <Route
            path='/editgallery/:id'
            element={<EditGallery></EditGallery>}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
