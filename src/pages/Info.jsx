import React from 'react';
import NavBar from '../components/NavBar';
import imgLogo from '../assets/image.png';

function Info() {
  return (
    <>
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="flex justify-center items-center flex-col">
            <div className="card w-96 bg-base-100 shadow-xl ">
              <figure>
                <img src={imgLogo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Tuwaiq Frontend JavaScript
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  This 16-week bootcamp is designed to equip you with the skills
                  to become a UX/UI designer and front-end developer. The first
                  half focuses on design thinking, user experience (UX) design,
                  and user interface (UI) design using Figma. The second half
                  dives into coding with HTML, CSS, JavaScript, Git, React, and
                  Bootstrap. By the end, you'll have built a portfolio project
                  and be prepared for a job search.
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">UI/UX</div>
                  <div className="badge badge-outline">Html</div>
                  <div className="badge badge-outline">Css</div>
                  <div className="badge badge-outline">Js</div>
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">And more!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
