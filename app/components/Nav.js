// @flow
import React, { Component } from 'react';
import { Navbar, NavbarGroup, NavbarDivider, NavbarHeading, Alignment, Button, InputGroup } from '@blueprintjs/core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

type Props = {
  history: Object
};

class Nav extends Component<Props> {
  props: Props;

  state = {
    term: ''
  };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    this.setState({ term: '' });
    this.props.history.push(`/search/${term}`);
  }

  render() {
    const navClass = `${styles.nav} pt-dark`;
    return (
      <Navbar className={navClass}>
        <NavbarGroup>
          <NavbarHeading>WonderPod</NavbarHeading>
          <NavbarDivider />
          <form onSubmit={this.onSubmit} className={styles.nav__search_form}>
            <InputGroup
              value={this.state.term}
              onChange={this.onInputChange}
              leftIcon="search"
              rightElement={<Button type="submit" icon="arrow-right" />}
              placeholder="Search Podcast"
            />
          </form>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT} className={styles.nav__buttons}>
          <Link to="/">
            <Button className="pt-minimal" icon="feed-subscribed" />
          </Link>
          <Button className="pt-minimal" icon="cog" />
          <NavbarDivider />
          <Button className="pt-minimal" icon="minus" />
          <Button className="pt-minimal" icon="plus" />
          <Button className="pt-minimal" icon="cross" />
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default withRouter(Nav);
