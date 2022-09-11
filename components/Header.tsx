import React from "react";
import { Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const date = new Date();
  const formatDate =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    
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
        onClick={() => router.push("/top")}
      >
        TODO
      </Heading>
      <Spacer />
      <Text color="blackAlpha.800" mr="100px" fontSize="16px" fontWeight="bold">
        {formatDate}
      </Text>
    </Flex>
  );
};
