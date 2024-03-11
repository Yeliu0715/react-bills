import { Outlet } from "react-router";

import { Button } from "antd-mobile";

const Layout  = () => {
  return (
    <div>
      <h1>React App</h1>
      <Button color="primary">Primary</Button>
      <Outlet />
      <p>Layout</p>
    </div>
  );
}

export default Layout;