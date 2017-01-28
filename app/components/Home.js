// @flow
import React from 'react';
import styles from './Home.css';
import Button from './Button';
import Text from './Text';

type Props = {
  userToken: string,
  login: () => void,
  logout: () => void
};

const Home = (props: Props) => (
  <div className={styles.container}>
    <Text text={'Electron Playlist'} />
    <Button label={'Login'} handleClick={props.login} />
    <Button label={'Logout'} handleClick={props.logout} />
    <Text text={props.userToken} />
  </div>
);

export default Home;
