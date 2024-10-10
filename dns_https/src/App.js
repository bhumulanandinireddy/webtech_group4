import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Overview from './components/Overview';
import About from './components/About';
import LiteratureReview from './components/LiteratureReview';
import Taxonomy from './components/Taxonomy';
import Challenges from './components/Challenges';
import GroupMembers from './components/GroupMembers';
import References from './components/References';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="tabs">
                    <ul>
                        <li><Link to="/">Overview</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/literature-review">Literature Review</Link></li>
                        <li><Link to="/taxonomy">Taxonomy</Link></li>
                        <li><Link to="/challenges">Challenges & Open Issues</Link></li>
                        <li><Link to="/group-members">Group Members</Link></li>
                        <li><Link to="/references">References</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/literature-review" element={<LiteratureReview />} />
                    <Route path="/taxonomy" element={<Taxonomy />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/group-members" element={<GroupMembers />} />
                    <Route path="/references" element={<References />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
