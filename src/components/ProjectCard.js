import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, videoUrl, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <Col size={12} sm={6} md={4} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="proj-imgbx">
        {videoUrl ? (
          <video width="100%" autoPlay loop muted>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : imgUrl ? (
          <img src={imgUrl} alt={title} />
        ) : (
          <div className="no-media"></div>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
