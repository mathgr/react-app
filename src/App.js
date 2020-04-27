import React from 'react';
import './App.css';
import { Container } from "reactstrap";
import CreateLinkForm from "./components/CreateLinkForm";
import TableList from "./components/TableList";

function App() {
  return (
      <Container>
          <CreateLinkForm></CreateLinkForm>
          <TableList></TableList>
      </Container>
  );
}

export default App;
