import React from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Flex flex="1" direction="row">
        <Sidebar />
        <Flex flex="1">{children}</Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
