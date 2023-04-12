import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleSignOut = () => {
    // Handle sign out logic here
    router.push("/signin");
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="blue.500"
      color="white"
    >
      <Box as="h1" fontSize="2xl">
        My App
      </Box>
      <Button colorScheme='red' onClick={handleSignOut}>
        <Text>Sign Out</Text>
      </Button>
    </Flex>
  );
};

export default Navbar;
