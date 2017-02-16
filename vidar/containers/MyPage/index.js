/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';

export class MyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <div>
            <h2>Min kjære hjemmeside</h2>
          <p>
              Her er den
            </p>
          <section>
            Her er litt mer
          </section>
        </div>
      </article>
    );
  }
}

MyPage.propTypes = {};


const mapStateToProps = (state) => {
  return {};
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(MyPage);
