import React from 'react';
import { exports } from './module';

class FSNode extends React.Component {
  render() {
    return <exports.FSBranch />;
  }
}

exports.FSNode = FSNode;
