/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

import Header from 'components/Header';
import Footer from '../../components/Footer';

export default class App extends React.Component {

  render() {
    return (
      <div>Jada, her er vi jo i gang
        {React.Children.toArray(this.props.children)}
        <Footer/>
      </div>
    );

  }
};

App.propTypes = {
  children: React.PropTypes.node,
};
