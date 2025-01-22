import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageBase from "./pages/PageBase/PageBase";
import VideosProvider from "./components/Context/ContextVideos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <VideosProvider>
                <Routes>
                    <Route path="/" element={<PageBase />} >
                        <Route index element={<Home />} />
                        <Route path="NuevoVideo" element={<NuevoVideo />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </VideosProvider>
        </BrowserRouter >
    );
}

export default AppRoutes;