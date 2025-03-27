import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsList from './components/NewsList';
import New from './pages/New';
import Past from './pages/Past';
import Comments from './pages/Comments';
import Ask from './pages/Ask';
import Show from './pages/Show';
import Jobs from './pages/Jobs';
import Submit from './pages/Submit';
import Login from './pages/Login';
import './App.css';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        window.location.href = '/';
    };

    return (
        <Router>
            <div>
                <header>
                    <h1>Hacker News Clone</h1>
                    <nav>
                        <Link to="/">news</Link>
                        <Link to="/new">new</Link>
                        <Link to="/past">past</Link>
                        <Link to="/comments">comments</Link>
                        <Link to="/ask">ask</Link>
                        <Link to="/show">show</Link>
                        <Link to="/jobs">jobs</Link>
                        {user ? (
                            <>
                                <Link to="/submit">submit</Link>
                                <span>{user} | </span>
                                <button onClick={handleLogout} className="nav-link">logout</button>
                            </>
                        ) : (
                            <Link to="/login">login</Link>
                        )}
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<NewsList />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/past" element={<Past />} />
                        <Route path="/comments" element={<Comments />} />
                        <Route path="/ask" element={<Ask />} />
                        <Route path="/show" element={<Show />} />
                        <Route path="/jobs" element={<Jobs />} />
                        <Route path="/submit" element={<Submit />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;