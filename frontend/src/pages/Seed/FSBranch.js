import React from 'react';
import { exports } from './module';

class FSBranch extends React.Component {
  render() {
    return <exports.FSNode />;
  }
}

exports.FSBranch = FSBranch;
