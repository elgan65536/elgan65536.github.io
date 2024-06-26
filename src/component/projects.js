import { PROJECT_LIST } from "../projectlist";
import "./projects.css";

export function Projects() {
    return (
        <div className="Projects">
            <title>Projects - Connor Nagle</title>
            <h1>Projects</h1>
            {PROJECT_LIST.map((project) => (
                <div>
                    <hr />
                    <h2>{project.name}</h2>
                    <h3>{project.date}</h3>
                    <p>{project.tech && "Technology used: " + project.tech}</p>
                    <p>{project.description}</p>
                    {project.links.map((link) => (
                        <span style={{ padding: "10px" }}>
                            <a href={link.site}>{link.title}</a>
                        </span>
                    ))}
                    <br />
                    {project.images.map((im) => (
                        <span>
                            <img
                                src={im.src}
                                alt={im.alt ?? im.src.split(".")[0]}
                            ></img>
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
