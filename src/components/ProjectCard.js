import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle } from 'reactstrap';

const ProjectCard = props => {
  const {
    bannerUrl,
    name,
    published,
    slug
  } = props;
  return (
    <Card>
      <CardHeader tag="h6">Project</CardHeader>
      <CardImg top width="100%" src={ bannerUrl } alt={ name } />
      <CardBody>
        <CardTitle>{ name }</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color='primary'>View Project</Button>
      </CardBody>
    </Card>
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