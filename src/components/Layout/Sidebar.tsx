import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SidebarTab from './SidebarTab';

// interface SidebarProps {
//   title: string;
//   isActive: boolean;
//   onClick: () => void;
// }

const Sidebar = () => {
  const activeColor = useColorModeValue('blue.500', 'blue.200');
  const inactiveColor = useColorModeValue('gray.600', 'gray.400');
  const router = useRouter();
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <>
      <Box width={{ base: '100%', md: 60 }} bg={bgColor}>
      <SidebarTab
        title="Page 1"
        isActive={router.pathname === "/page1"}
        onClick={() => router.push("/page1")}
      />
      <SidebarTab
        title="Page 2"
        isActive={router.pathname === "/page2"}
        onClick={() => router.push("/page2")}
      />
      </Box>
    </>
  );
};

export default Sidebar;
