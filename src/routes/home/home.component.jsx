import { Outlet } from "react-router-dom";

import { Directory } from "../../components/directory/directory.component";

export default function Home() {
  // Home page settings that receives the object info to pass into Directory component
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}
