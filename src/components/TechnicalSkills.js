import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class TechnicalSkills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p></p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.skillsName}</h4>
          <p>{this.props.skillsDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default TechnicalSkills;
