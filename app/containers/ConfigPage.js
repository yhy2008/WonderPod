// @flow
import React, { Component } from 'react';
import { Dialog } from '@blueprintjs/core';
import styles from './ConfigPage.css';

type Props = {};
class ConfigPage extends Component {
  props: Props

  state = {
    isDialogOpen: false
  }

  toggleDialog = () => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  }

  render() {
    return (
      <div className={styles.config}>
        <h3>设置</h3>
        <hr />
        <div className={styles.config__body}>
          <h5>快捷键</h5>
          <div className={styles.config__shortcut}>
            <table className="pt-html-table pt-interactive">
              <thead>
                <tr>
                  <th className={styles.config__shortcut_head}>功能说明</th>
                  <th className={styles.config__shortcut_head}>全局快捷键</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={this.toggleDialog}>
                  <td>播放</td>
                  <td>Control+A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Dialog
          title="设置快捷键"
          isOpen={this.state.isDialogOpen}
          onClose={this.toggleDialog}
        >
        </Dialog>
      </div>
    );
  }
}

export default ConfigPage;
