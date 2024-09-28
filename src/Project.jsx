export default function Projects() {
    const projects = [
      {
        title: 'Comprehensive Financial Management System',
        image: './images/Project1.jpeg',
        description: 'As the lead developer on a recent project, I successfully spearheaded the development of a web application utilizing React and Node.js. The outcome was a fully functional, responsive application that significantly streamlined the client workflow, resulting in enhanced efficiency and productivity.',
      },
      {
        title: 'Pain Tracker',
        image: './images/Project2.jpg',
        description: 'As a backend developer on this project, I played a crucial role in designing and implementing a robust API using Express.js, with MongoDB as the database management system. The outcome was a highly scalable and efficient backend service that greatly enhanced data management capabilities, providing a solid foundation for the applications success.',
      },
      {
        title: 'E-Learning Platform',
        image: './images/Project3.jpeg',
        description: 'As a full-stack developer, I had the opportunity to build a comprehensive e-learning platform from the ground up. The result was a user-friendly, engaging, and scalable platform that revolutionized the way learners access knowledge and skills.',
      },
    ];
    
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Projects</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ margin: '20px', maxWidth: '300px' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }