export default function Projects() {
  const projects = [
    { title: 'E-Commerce Platform', description: 'A full-stack online store' },
    { title: 'Chat Application', description: 'Real-time messaging app' },
    { title: 'Portfolio Website', description: 'Personal portfolio site' },
  ];

  return (
    <section className="p-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
