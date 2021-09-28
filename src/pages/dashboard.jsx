import "./dashboard.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
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
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
          
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">DEVICE ONLINE</span>
        <div className="featuredMoneyContainer">
        <a href={"/deployform"}>click to view</a>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">DEPLOY APPLICATION</span>
        <div className="featuredMoneyContainer">
        <a href={"/deployform"}>click to deploy</a>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
    </Layout>
  );
}

