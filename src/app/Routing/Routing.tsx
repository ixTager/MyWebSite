import { BrowserRouter, Route, Routes } from "react-router";
import App from "../../pages/App";
import NotFound from "../../pages/NotFound";

export default function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/" />
                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    );
}