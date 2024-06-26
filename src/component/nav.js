import "./nav.css";

export const PAGES = ["Home", "Projects"];

export function NavBar({ page, setPage }) {
    return (
        <nav className="Nav" style={{ backgroundImage: "url(Lheader.png)" }}>
            {PAGES.map((pageName) => (
                <span
                    style={{ padding: "10px" }}
                    onClick={() => setPage(pageName.toLowerCase())}
                >
                    {pageName.toLowerCase() === page.toLowerCase() ? (
                        <b>{pageName}</b>
                    ) : (
                        <a href={`?${pageName.toLowerCase()}`}>{pageName}</a>
                    )}
                </span>
            ))}
            <br /> This site is currently unfinished.
        </nav>
    );
}
