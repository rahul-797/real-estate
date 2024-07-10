import { ChakraProvider } from "@chakra-ui/react";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <Content />
    </ChakraProvider>
  );
}
