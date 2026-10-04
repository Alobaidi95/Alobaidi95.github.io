// ---------------------------------------------------------------
// Project data. To add a project, add one object to this array
// and push to GitHub. The featured project (EMS) lives in
// index.html because it has its own layout.
// ---------------------------------------------------------------
const projects = [
  {
    title: "SecureTask API",
    year: "2025",
    category: "Backend · REST API",
    description:
      "Task management REST API with JWT authentication, role-based access control, and a layered Controller → Service → Repository design. Passwords hashed with BCrypt, persistence through Spring Data JPA on MySQL.",
    stack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "JPA", "Maven"],
    github: "https://github.com/Alobaidi95/secure-task-manager-api",
    demo: "",
  },
  {
    title: "Social Media Blog API",
    year: "2024",
    category: "Backend · Revature",
    description:
      "Built during my Revature internship. A Spring Boot API for user registration, login, and full CRUD on messages, plus a second version written with Javalin and raw JDBC to work directly with SQL.",
    stack: ["Spring Boot", "Spring Data JPA", "Javalin", "JDBC", "SQL"],
    github: "",
    demo: "",
  },
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map((p) => {
      const tags = p.stack.map((t) => `<span class="pill">${t}</span>`).join("");
      const links = [
        p.github ? `<a class="btn sm" href="${p.github}" target="_blank" rel="noopener">↗ GitHub</a>` : "",
        p.demo ? `<a class="btn sm" href="${p.demo}" target="_blank" rel="noopener">▶ Live demo</a>` : "",
      ].join("");

      return `
        <article class="card project reveal">
          <div class="meta">${p.year} · ${p.category}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="pills">${tags}</div>
          ${links ? `<div class="actions">${links}</div>` : ""}
        </article>`;
    })
    .join("");
}

renderProjects();
