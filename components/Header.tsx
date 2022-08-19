import React from "react";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <Flex h="80px" bgColor="green.300" alignItems="center">
      <Heading
        color="blackAlpha.800"
        ml="99px"
        fontSize="48px"
        fontWeight="bold"
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => router.push("/Top")}
      >
        TODO
      </Heading>
      <Spacer />
      <Text color="blackAlpha.800" mr="100px" fontSize="16px" fontWeight="bold">
        2022/01/01
      </Text>
    </Flex>
  );
};
