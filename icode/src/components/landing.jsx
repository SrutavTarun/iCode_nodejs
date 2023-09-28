import React from "react";

import "./css/landing.css";

export const Landing = () => {
  return (
    <>
      <div className="dashboard">
          <div className="midSection">
            <div className="heading">Hello Reba</div>
            <div className="createPost">
              <div className="postInput">
                <label htmlFor="post">Create post</label>
                <input type="text" className="inputText" name="post" />
              </div>
              <div className="Publish">
                <button>Publish</button>
              </div>
            </div>
            <div className="Post">
                Post Placeholder
            </div>
          </div>
          <div className="rightSection">
            <div className="About">
                <div className="aboutHeading">
                    <div className="aboutTitle">About</div>
                    <button className="edit">Icon</button>
                </div>
                <div className="aboutContent">lorem ipsum</div>
            </div>
            <div className="Skilss">
                <div className="skillsHeading">
                    <div className="skillsTitle">About</div>
                    <button className="edit">Icon</button>
                </div>
                <div className="aboutContent">lorem ipsum</div>
            </div>
          </div>
      </div>
    </>
  );
};
