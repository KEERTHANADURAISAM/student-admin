import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Base({ title, description, children }) {
  const history = useHistory();
  return (
    <div className="main-division base-component">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button color="inherit" onClick={() => history.push("/login")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => history.push("/students")}>
            Student List
          </Button>
          {/* <Button color="inherit"onClick={()=>history.push("/login")}>Login</Button> */}
          <Button color="inherit" onClick={() => history.push("/adddata")}>
            Add Data
          </Button>
        </Toolbar>
      </AppBar>
      <header>
        <h1 className="heading">{title}</h1>
      </header>
      <main className="main-segmant">
        <h2>{description}</h2>

        <div className="children-segment">{children}</div>
      </main>
    </div>
  );
}
