import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Card from 'grommet/components/Card';
import Actions from 'grommet/components/icons/base/Action';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Meter from 'grommet/components/Meter';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';

import { pageLoaded } from './utils';

class Cards extends Component {
  componentDidMount() {
    pageLoaded('Cards');
    this.props.dispatch(loadTasks());
  }

  componentWillUnmount() {
    this.props.dispatch(unloadTasks());
  }

  render() {
    const { error, tasks } = this.props;
    const { intl } = this.context;

    let errorNode;
    let listNode;

    return (
      <Article primary={true}>
        <Header direction='row'
          justify='between'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}>
          <Title>
            Bizintro
        </Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
            <Search inline={true}
              fill={true}
              size='medium'
              placeHolder='Search'
              dropAlign={{ "right": "right" }} />
            <Menu icon={<Actions />}
              dropAlign={{ "right": "right" }}>
              <Anchor href='#'
                className='active'>
                Dashboard
            </Anchor>
              <Anchor href='#'>
                Home
            </Anchor>
              <Anchor href='#'>
                Appointment
            </Anchor>
              <Anchor href='#'>
                Help
            </Anchor>
              <Anchor href='#'>
                Contact List
            </Anchor>
              <Anchor href='#'>
                Logout
            </Anchor>
            </Menu>
          </Box>
        </Header>

            <Tiles fill={true}
              flush={false}>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href='#'
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
              <Tile>
                <Card thumbnail='imgs/carousel-1.png'
                  label='Sample Label'
                  heading='Sample Heading'
                  description='Sample description providing more details.'
                  link={<Anchor href=''
                    label='Sample anchor' />} />
              </Tile>
            </Tiles>

      </Article>
    );
  }
}

Cards.defaultProps = {
  error: undefined,
  tasks: []
};

Cards.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Cards.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.cards });

export default connect(select)(Cards);
