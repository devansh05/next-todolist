import React from "react";
import Login from "../login/page";

interface HomeProps {
  //   label: string;
  //   onClick: () => void;
}

const Dashboard: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <h1 data-testid="heading" className="text-slate-800 font-sans text-xl">
        ToDo List
      </h1>
      <Login />
    </div>
  );
};

export default Dashboard;
