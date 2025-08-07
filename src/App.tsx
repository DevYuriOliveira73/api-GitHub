import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>OLA</ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
