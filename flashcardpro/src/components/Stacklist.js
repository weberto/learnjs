import React, { Component } from 'react';
import { Jumbotron, Well, ListGroup, ListGroupItem } from 'react-bootstrap';
import stacks from '../data/stacks.json';
import './stacks.css';
import _ from 'lodash';

// import Menu from './menu';
      // <Jumbotron style={{background: "#eeeeff"}}>

class StackList extends Component {
  render() {
    return (
      <div>
        {/* <Menu></Menu> */}
        <Jumbotron className="btron">
          <h2 className="text-center">Eshape Pro</h2>
        </Jumbotron>
          {
            stacks.map(stack => {
              return (
                <Well className="btron">
                  <h4>{stack.title}</h4>
                  <ListGroup>
                    {stack.cards.map(card => {
                      return (
                        <ListGroupItem>{card.prompt}</ListGroupItem>
                      )
                    })}
                  </ListGroup>
                </Well>
              )
          })}
      </div>
    );
  }
}
// Feb, 23rd, 1979.
// the next solar eclipse on this continent will be 38 years from now
// may the shadow of the moon fall on a world of peace
export default StackList;
