import { PROJECT_LIST } from "../projectlist";

export function Projects() {
    return (
        <div className="Projects">
            <title>Projects - Connor Nagle</title>
            <h1>Projects</h1>
            {PROJECT_LIST.map((project) => (
                <div>
                    <hr></hr>
                    <h2>{project.name}</h2>
                    <h4>{project.created}</h4>
                    {project.description}
                    <br></br>
                    {project.links.map((link) => (
                        <span style={{ padding: "10px" }}>
                            <a href={link.site}>{link.title}</a>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
