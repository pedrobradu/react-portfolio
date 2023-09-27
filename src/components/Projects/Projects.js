import React from 'react';
import styles from './Projects.module.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import locals_1 from '../../assets/images/locals_1.jpg';  
import presentation from '../../assets/images/presentation.jpeg';  
import { useInView } from 'react-intersection-observer';


const projects = [
  {
    title: "Locals Only",
    description: "A social network for local recomendations.",
    image: locals_1,
    liveLink: "https://locals-only-pedrobradu-49cce69c5b97.herokuapp.com/",
    codeLink: "https://github.com/pedrobradu/LOCALS_ONLY",
  },
  {
    title: "Final presentation at Google for Startups.",
    description: "Graduation presentation for the Le Wagon community.",
    image: presentation,
    type: "video",
    liveLink: "https://www.youtube.com/watch?v=2GYRJtd1Qgc&t=4943s",
  },
  // ... other projects
];

function Projects({id}) {

  const [ref, inView] = useInView({
    triggerOnce: false, // Observe forever
    threshold: 0.4 // At least 10% of the element is visible
  });

  return (
    <section id={id} ref={ref}>
      <Container className={styles.projectsSection}>
        <h2 className={`mb-5 ${inView ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOut"}`}>Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} sm={12} key={index} className={`${styles.projectCol} ${inView ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}`}>
              <Card className={styles.projectCard}>
                <Card.Img variant="top" src={project.image} className={styles.projectImage} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  {project.type === 'video' ? (
                    <Button className="btn-warning" href={project.liveLink} target="_blank">Watch Video</Button>
                  ) : (
                    <>
                      <Button className="btn-warning" href={project.liveLink} target="_blank">WebSite</Button>
                      {/* Only render GitHub button if codeLink is present */}
                      {project.codeLink && (
                        <Button href={project.codeLink} target="_blank" className="ms-2 btn-warning">Github</Button>
                      )}
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;