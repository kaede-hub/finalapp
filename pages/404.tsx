import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Container, Text, VStack } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Todo Edit</title>
      </Head>
      <Header />
      <Container mt="51px" p="0" w="84.375%" maxW="1080px">
        <VStack spacing="41px">
          <Text
            fontSize="64px"
            fontWeight="bold"
            lineHeight="75px"
            color="blackAlpha.800"
          >
            Welcome to TODO APP!!
          </Text>
          <Text
            fontSize="24px"
            fontWeight="bold"
            lineHeight="29px"
            color="blackAlpha.800"
          >
            This WebSite is TODO APP.
          </Text>
          <Button
            w="112px"
            h="40px"
            p="0"
            fontSize="18px"
            fontWeight="bold"
            bg="pink.100"
            color="blackAlpha.800"
            borderWidth="1px"
            borderColor="blackAlpha.800"
            borderRadius="50px"
            onClick={() => router.push("/top")}
          >
            TOP
          </Button>
        </VStack>
      </Container>
    </>
  );
}