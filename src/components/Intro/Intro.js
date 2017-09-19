import React from 'react';
// import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Page.css';

class Intro extends React.Component {

  render() {
    const { title, html } = this.props;
    return (
      <div>
        Hello! Welcome to my personal web app. Here, I like to keep things simple,
        but I'm always eager to talk more with individuals about the work that I've done
        building <b>tools for data scientists</b>, my <b>publications</b> and favorite reading,
        as well as my <b>pursuits in art</b>.
        <hr />
      </div>
    );
  }
}

export default(Intro);
