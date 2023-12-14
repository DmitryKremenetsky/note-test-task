import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import TagFilter from "./components/TagFilter";

const App: React.FC = () => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <TagFilter />
      <NoteEditor />
      <NoteList />
    </Container>
  );
};

export default App;
