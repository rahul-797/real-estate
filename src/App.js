import { ChakraProvider } from "@chakra-ui/react";
import Content from "./components/Content";
import Header from "./components/Header";
import Scene from "./components/House";

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <Content />
      <Scene />
    </ChakraProvider>
  );
}
