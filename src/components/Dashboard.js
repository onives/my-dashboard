import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import DashboardNav from "./DashboardNav";

library.add(fab, fas);

function Dashboard() {
  return (
    <div>
      <DashboardNav />
    </div>
  );
}

export default Dashboard;
