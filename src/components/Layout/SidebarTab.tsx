import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

interface SidebarTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarTab: React.FC<SidebarTabProps> = ({
  title,
  isActive,
  onClick,
}) => {
  const activeColor = useColorModeValue("blue.500", "blue.200");
  const inactiveColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      bg={isActive ? activeColor : "transparent"}
      color={isActive ? "white" : inactiveColor}
      py={3}
      px={4}
      cursor="pointer"
      _hover={{ bg: isActive ? activeColor : "gray.100" }}
      onClick={onClick}
    >
      <Text fontWeight="bold">{title}</Text>
    </Box>
  );
};

export default SidebarTab;
