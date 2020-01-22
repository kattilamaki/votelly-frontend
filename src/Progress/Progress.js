import React from 'react';
// import classes from './Progress.css';

const progress = props => {
  return (
    <tr>
      <td>{props.characterName}</td>
      <td>
        <progress value={props.voteCount} max={props.totalVotes}></progress>
      </td>
    </tr>
  );
};

export default progress;
