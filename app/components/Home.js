// @flow
import React from 'react';
import styles from './Home.css';
import Button from './Button';
import Text from './Text';

const Home = () => (
  <div className={styles.container}>
    <Text text={'Electron Playlist'} />
    <Button label={'Login'} />
  </div>
);

export default Home;
