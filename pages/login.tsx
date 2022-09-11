import React from "react";
import { Layout } from "../components/Layout";
import { Box, Input, Button, Center } from "@chakra-ui/react";

const login = () => {
  return (
    <Layout title="login">
      <Box
        mt="20"
        p="0"
        bg="green.100"
        h="300px"
        w="100%"
        borderWidth="1px"
        borderRadius="3xl"
      >
        <Box
          mt="5"
          ml="5px"
          bg="white"
          h="30px"
          w="100px"
          borderRadius="3xl"
          textAlign="center"
          color="green.500"
        >
          {" "}
          EMAIL
        </Box>
        <Input
          bg="white"
          mt="25"
          ml="50"
          mr="5px"
          w="80%"
          placeholder="Email"
          borderRadius="3xl"
        />
        <Center>
          <Button
            w="25%"
            mt="5"
            bg="green.400"
            color="white"
            borderRadius="3xl"
          >
            Login
          </Button>
        </Center>
        <Center>
          <Button
            w="50%"
            mt="5"
            bg="gray.100"
            _hover={{ bg: "red" }}
            color="white"
            borderRadius="3xl"
          >
            GOOGLELOGIN
          </Button>
        </Center>
      </Box>
    </Layout>
  );
};

export default login;
