import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import configureStore from './modules/';
import Header from './components/header/';
import Routes from './routes/';
import { Body } from './constants/interface/elements';
import { title, description } from './constants/copy/meta';
import { font, size, weight, height, gutter } from './constants/design/content';
import { color, space, speed } from './constants/design/composition';

// Store configuration imported from `modules` (redux code)
// to be passed into store prop of redux provider component
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Body>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header title={title} />
        <Routes />
      </Body>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// Inject global styles
injectGlobal`
  html {
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${color.emperor};
    font-size: ${size.base};
    font-family: ${font};
    font-weight: ${weight.base};
    line-height: ${height.apex};
  }

  ::-moz-selection {
    background-color: ${color.chiffon};
    text-shadow: none;
  }

  ::selection {
    background-color: ${color.chiffon};
    text-shadow: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  h1, h2, h3,
  h4, h5, h6 {
    position: relative;
    margin: ${gutter.apex};
    color: ${color.blackcurrant};
    font-weight: ${weight.apex};
    line-height: ${height.base};

    small {
      display: block;
      margin-top: ${space.split};
      font-size: ${size.sub};
      font-weight: ${weight.core};
      line-height: ${height.core};
    }
  }

  p {
    margin: ${gutter.base};
  }

  a {
    position: relative;
    color: ${color.disco};
    text-decoration: none;
    transition: all ${speed.base};

    &:hover {
      color: ${color.maroonflush};
    }
  }
`;

// Enable hot reloading
module.hot.accept();
