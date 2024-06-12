import { React, useState } from 'react';
import { Container, Row, Col, Tab, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { work, design, video, graphic, development, animate, application } from "./data"
import colorSharp2 from "../assetss/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // graphic design

  const [selectedGraphic, setSelectedGraphic] = useState('All');
  const handleSelect5 = (eventKey) => {
    setSelectedGraphic(eventKey);
  };
  const renderGraphicProjects = () => {
    switch (selectedGraphic) {
      case 'Banner Design':
        return graphic.slice(0, 2);
      case 'Logo Design':
        return graphic.slice(2, 6);
      case 'Stationary Design':
        return graphic.slice(6, 9);
      case 'Social-Post Design':
        return graphic.slice(9, 14);
      case 'T-Shirt Design':
        return graphic.slice(14, 18);
      case 'UI/UX Design':
        return graphic.slice(18, 22);
      default:
        return graphic;
    }
  };
  // application
  const [selectedApplication, setSelectedApplication] = useState('All');
  const handleSelect4 = (eventKey) => {
    setSelectedApplication(eventKey);
  };
  const renderApplicationsProjects = () => {
    switch (selectedApplication) {
      case 'Calling':
        return application.slice(0, 4);
      case 'Dating':
        return application.slice(4, 8);
      case 'Photo-Edit':
        return application.slice(8, 12);
      default:
        return application;
    }
  };

  //WEB development
  const [selectedDevelopment, setSelectedDevelopment] = useState('All');
  const handleSelect3 = (eventKey) => {
    setSelectedDevelopment(eventKey);
  };
  const renderDevelopmentProjects = () => {
    switch (selectedDevelopment) {
      case 'Informative':
        return development.slice(0, 4);
      case 'Management':
        return development.slice(4, 8);
      case 'Ecommerce':
        return development.slice(8, 11);
      case 'CRM':
        return development.slice(11, 12);
      default:
        return development;
    }
  };

  // 3D work
  const [selected3DWork, setSelected3DWork] = useState('All');
  const handleSelect = (eventKey) => {
    setSelected3DWork(eventKey);
  };
  const render3DWorkProjects = () => {
    switch (selected3DWork) {
      case '3D Animate':
        return work.slice(0, 3);
      case '3D Character':
        return work.slice(3, 6);
      case '3D Cloth':
        return work.slice(6, 11);
      case '3D Environment':
        return work.slice(11, 14);
      case '3D Furniture':
        return work.slice(14, 18);
      case '3D Jewellery':
        return work.slice(18, 21);
      case '3D Logo':
        return work.slice(21, 26);
      case '3D Product':
        return work.slice(26, 30);
      default:
        return work;
    }
  };

  // 2D work
  const [selected2DWork, setSelected2DWork] = useState('All');
  const handleSelect6 = (eventKey) => {
    setSelected2DWork(eventKey);
  };
  const render2DWorkProjects = () => {
    switch (selected2DWork) {
      case '2D Animation':
        return animate.slice(0, 3);
      case '2D Character':
        return animate.slice(3, 6);
      case '2D Cloth':
        return animate.slice(6, 11);
      case '2D Environment':
        return animate.slice(11, 15);
      default:
        return animate;
    }
  };

  // Architecture Work
  const [selectedArchitectureWork, setselectedArchitectureWork] = useState('All');
  const handleSelect2 = (eventKey) => {
    setselectedArchitectureWork(eventKey);
  };

  const renderArchitectureProjects = () => {
    switch (selectedArchitectureWork) {
      case 'Interior Design':
        return design.slice(0, 6);
      case 'Exterior Design':
        return design.slice(6, 12);
      case 'Floor Planning':
        return design.slice(12, 18);
      default:
        return design;
    }
  };


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="mb-5">Projects</h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="Website">Website Development</Nav.Link>
                      <Nav.Link eventKey="Applications">Mobile Applications</Nav.Link>
                      <Nav.Link eventKey="Graphic">Graphic Designing</Nav.Link>
                      <Nav.Link eventKey="2D">2D Work</Nav.Link>
                      <Nav.Link eventKey="3D">3D Work</Nav.Link>
                      <Nav.Link eventKey="Video">Video Editing</Nav.Link>
                      <Nav.Link eventKey="Architecture">Architecture Designing</Nav.Link>
                    </Nav>

                    {/* Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      {/* 3D Work */}
                      <Tab.Pane eventKey="3D">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={selected3DWork}
                          onSelect={handleSelect}
                          className="mb-4"
                        >
                          <Dropdown.Item eventKey="All">All</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Animate">3D Animate</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Character">3D Character</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Cloth">3D Cloth</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Environment">3D Environment</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Furniture">3D Furniture</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Jewellery">3D Jewellery</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Logo">3D Logo</Dropdown.Item>
                          <Dropdown.Item eventKey="3D Product">3D Product</Dropdown.Item>
                        </DropdownButton>
                        <Row>
                          {render3DWorkProjects().map((work, index) => (
                            <ProjectCard key={index} {...work} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Website Development */}
                      <Tab.Pane eventKey="Website">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={selectedDevelopment}
                          onSelect={handleSelect3}
                          className="mb-4"
                        >
                          <Dropdown.Item eventKey="All">All</Dropdown.Item>
                          <Dropdown.Item eventKey="Informative">Informative</Dropdown.Item>
                          <Dropdown.Item eventKey="Management">Management</Dropdown.Item>
                          <Dropdown.Item eventKey="Ecommerce">Ecommerce</Dropdown.Item>
                          <Dropdown.Item eventKey="CRM">CRM</Dropdown.Item>
                        </DropdownButton>
                        <Row>
                          {renderDevelopmentProjects().map((development, index) => (
                            <ProjectCard key={index} {...development} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* 2D Work */}
                      <Tab.Pane eventKey="2D">
                      <DropdownButton
                          id="dropdown-basic-button"
                          title={selected3DWork}
                          onSelect={handleSelect6}
                          className="mb-4"
                        >
                          <Dropdown.Item eventKey="All">All</Dropdown.Item>
                          <Dropdown.Item eventKey="2D Animation">2D Animation</Dropdown.Item>
                          <Dropdown.Item eventKey="2D Character">2D Character</Dropdown.Item>
                          <Dropdown.Item eventKey="2D Cloth">2D Cloth</Dropdown.Item>
                          <Dropdown.Item eventKey="2D Environment">2D Environment</Dropdown.Item>
                        </DropdownButton>
                        <Row>
                          {render2DWorkProjects().map((animate, index) => (
                            <ProjectCard key={index} {...animate} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Applications */}
                      <Tab.Pane eventKey="Applications">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={selectedApplication}
                          onSelect={handleSelect4}
                          className="mb-4"
                        >
                          <Dropdown.Item eventKey="All">All</Dropdown.Item>
                          <Dropdown.Item eventKey="Calling">Calling</Dropdown.Item>
                          <Dropdown.Item eventKey="Dating">Dating</Dropdown.Item>
                          <Dropdown.Item eventKey="Photo-Edit">Photo-Edit</Dropdown.Item>
                        </DropdownButton>
                        <Row>
                          {renderApplicationsProjects().map((application, index) => (
                            <ProjectCard key={index} {...application} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Video Editing */}
                      <Tab.Pane eventKey="Video">
                        <Row>
                          {video.map((video, index) => (
                            <ProjectCard key={index} {...video} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Architecture*/}
                      <Tab.Pane eventKey="Architecture">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={selectedArchitectureWork}
                          onSelect={handleSelect2}
                          className="mb-4"
                        >
                          <Dropdown.Item eventKey="All">All</Dropdown.Item>
                          <Dropdown.Item eventKey="Interior Design">Interior Design</Dropdown.Item>
                          <Dropdown.Item eventKey="Exterior Design">Exterior Design</Dropdown.Item>
                          <Dropdown.Item eventKey="Floor Planning">Floor Planning</Dropdown.Item>
                        </DropdownButton>

                        <Row>
                          {renderArchitectureProjects().map((design, index) => (
                            <ProjectCard key={index} {...design} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Graphic Design*/}
                      <Tab.Pane eventKey="Graphic">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={selectedGraphic}
                          onSelect={handleSelect5}
                          className="mb-4"
                        >
                          <Dropdown.Item eventKey="All">All</Dropdown.Item>
                          <Dropdown.Item eventKey="Banner Design">Banner Design</Dropdown.Item>
                          <Dropdown.Item eventKey="Logo Design">Logo Design</Dropdown.Item>
                          <Dropdown.Item eventKey="Stationary Design">Stationary Design</Dropdown.Item>
                          <Dropdown.Item eventKey="Social-Post Design">Social-Post Design </Dropdown.Item>
                          <Dropdown.Item eventKey="T-Shirt Design">T-Shirt Design</Dropdown.Item>
                          <Dropdown.Item eventKey="UI/UX Design">UI/UX Design</Dropdown.Item>
                        </DropdownButton>
                        <Row>
                          {renderGraphicProjects().map((graphic, index) => (
                            <ProjectCard key={index} {...graphic} />
                          ))}
                        </Row>
                      </Tab.Pane>



                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}




