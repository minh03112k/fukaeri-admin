import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SidebarTab from './SidebarTab';
import { ROUTES } from '@/constant/const';

// interface SidebarProps {
//   title: string;
//   isActive: boolean;
//   onClick: () => void;
// }

const Sidebar = () => {
  const router = useRouter();
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <>
      <Box width={{ base: '100%', md: 60 }} bg={bgColor} pt={4}>
      {ROUTES.map((route) => (
        <SidebarTab
          key={route.path}
          title={route.title}
          isActive={router.pathname === route.path}
          onClick={() => router.push(route.path)}
        />
      ))}
      </Box>
    </>
  );
};

export default Sidebar;
