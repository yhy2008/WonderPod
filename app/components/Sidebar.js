// @flow
import React, { Component } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import styles from './Sidebar.css';

type Props = {};

class Sidebar extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.sidebar}>
        <Menu className="pt-large">
          <MenuItem icon="home" text="订阅" />
          <MenuItem icon="search" text="搜索" />
          <MenuItem icon="cog" text="设置" />
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
