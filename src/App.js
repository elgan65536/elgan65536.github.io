import "./App.css";
import { Home } from "./component/home";
import { NavBar } from "./component/nav";
import { useState } from "react";
import { Projects } from "./component/projects";

function App() {
    const pages = ["home", "projects"];
    const selectedPage = window.location.href.split("?")[1];
    const [page, setPage] = useState(
        pages.find((page) => page === selectedPage) ?? "home"
    );
    function onPageChange(string) {
        setPage(string);
    }
    return (
        <div>
            <NavBar page={page} setPage={onPageChange}></NavBar>
            <div className="App">
                {page.toLowerCase() === "home" && <Home></Home>}
                {page.toLowerCase() === "projects" && <Projects></Projects>}
            </div>
        </div>
    );
}

export default App;
