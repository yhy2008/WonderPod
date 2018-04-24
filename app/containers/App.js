// @flow
import * as React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import styles from './App.css';

type Props = {
  children: React.Node
};

class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            {this.props.children}
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
