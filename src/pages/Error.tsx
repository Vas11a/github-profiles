import React from 'react'
import LeftBar from '../components/LeftBar'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <LeftBar page="main" />
      <div className="right_part">
        <h1 className="title">GitHub Profiles</h1>

        <h2 className="error">Error :(</h2>
        <div className="error_desc">Page did not find</div>
        <div className="block_back">
          <Link to='/' style={{textDecoration: 'none', color: 'black'}} className="back">Go Back</Link>
        </div>
      </div>
    </>
  );
}
