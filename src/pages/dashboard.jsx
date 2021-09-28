import "./dashboard.css";
import React from "react";
import Layout from "../Layouts/Layout";

export default function dashboard() {
  return (
    <Layout>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">ENROLL DEVICE</span>
          <div className="featuredMoneyContainer">
            <a href={"/enrollform"}>click to enroll</a>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">DEVICE </span>
          <div className="featuredMoneyContainer">
            <a href={"/deployform"}>click to view</a>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">DEPLOY APPLICATION</span>
          <div className="featuredMoneyContainer">
            <a href={"/deployform"}>click to deploy</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
