import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './SeeYou.css';

function SeeYou() {
  return (
    <div className="seeyou">
      <div>
        別ページ
      </div>
      <li><Link to="/">TOP</Link></li>
      <li><Link to="home">HOMEへ</Link></li>
    </div>
  );
}

export default SeeYou;
