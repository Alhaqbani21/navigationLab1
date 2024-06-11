import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Tuwaiq Frontend JavaScript</h1>
            <p className="py-6">
              Master in-demand frontend development skills with this bootcamp!
              Learn HTML, CSS, JavaScript, and React to build dynamic web
              experiences. Go beyond the basics and explore additional tools to
              become a job-ready developer.
            </p>
            <Link to={'../info'}>
              <button className="btn btn-secondary">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
