import "./App.css";
import { Home } from "./component/home";
import { NavBar } from "./component/nav";
import { useState } from "react";
import { Projects } from "./component/projects";

function App() {
    const pages = ["home", "projects"];
    const list = window.location.href.split("/");
    const last = list[list.length - 1].split("?")[0];
    const [page, setPage] = useState(
        pages.find((page) => page === last) ?? "home"
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
