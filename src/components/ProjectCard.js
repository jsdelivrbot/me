import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

const ProjectCard = props => {
  return (
    <div className='Card w-150 mb-4'>
      <CardImg top src={props.thumbUrl} alt={props.name} />
    </div>
  );
};

ProjectCard.propTypes = {
  bannerUrl: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  published: PropTypes.bool,
  slug: PropTypes.string,
  thumbUrl: PropTypes.string
}

export default ProjectCard;