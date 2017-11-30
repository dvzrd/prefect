import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Form from '../form/';
import Loader from '../loader/';
import { errorPropTypes } from '../../constants/interface/proptypes';
import { Main as MainWrapper, HeadingDirect, Container } from '../../constants/interface/elements';
import { base, flex, card, center } from '../../constants/interface/styles';
import { space } from '../../constants/design/composition';

/**
 * Authentication - component composition for authentication container.
 * @param {Boolean} loading  Boolean to idicate loading state.
 * @param {String}  heading  Heading to display title of current route.
 * @param {Object}  form     Object shape containing relative form properties.
 * @param {Array}   links    Array to display links to related routes.
 */
const Authentication = ({ loading, heading, onSubmit, errors, message, inputs, cta, links }) => (
  <Main>
    {loading ? <Loader /> :
    <Card>
      <Heading>{heading}</Heading>
      <Form
        errors={errors}
        message={message}
        inputs={inputs}
        cta={cta}
        onSubmit={onSubmit}
      />
      {links &&
      <Links>
        {links.map((link, index) => (
          <Link key={index} to={link.path}>{link.name}</Link>
        ))}
      </Links>}
    </Card>}
  </Main>
);

const Main = MainWrapper.extend`
  ${center};
  padding: ${space.base};
`;

const Card = styled.figure`
  ${base};
  ${flex};
  ${card};
  margin-top: ${space.core};
  margin-bottom: ${space.core};
`;

const Heading = HeadingDirect.extend`
  margin-top: ${space.split};
`;

const Links = Container.extend`
  margin-top: ${space.icon};

  > * {
    margin-right: ${space.base};
    margin-bottom: ${space.split};

    &:last-child {
      margin-right: 0;
    }
  }
`;

Authentication.propTypes = {
  loading: PropTypes.bool,
  heading: PropTypes.string,
  onSubmit: PropTypes.func,
  errors: errorPropTypes,
  message: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    component: PropTypes.func,
  })),
  cta: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
  })),
};

export default Authentication;
