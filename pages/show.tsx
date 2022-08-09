import { Header } from "../components/Header";
import {
  Input,
  Textarea,
  Box,
  Flex,
  FormLabel,
  Text,
  Button,
  Stack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";
import { PenIcon } from "./penIcon";
import { todoListState } from '../constants/atom'
import { useRecoilValue } from 'recoil'


export default function ShowPage() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const todoList = useRecoilValue<any>(todoListState);
  console.log(todoList)
  return (
    <>
      <Header />
      <Stack mt="20px" direction={["column", "row"]} mb="100px">
        <Box w="630px" ml="99px">
          <Text
            fontSize="28px"
            fontWeight="bold"
            lineHeight="33px"
            color="blackAlpha.800"
          >
            SHOW TODO
          </Text>
          <Box
            borderWidth="1px"
            borderColor="blackAlpha.800"
            borderRadius="10px"
            p="10px"
            mt="15px"
            minHeight="630px"
          >
            <Box p="10px">
              <FormLabel
                m="0"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="24px"
                color="blackAlpha.800"
                bgColor="green.300"
              >
                TITLE
              </FormLabel>
              <Text
                h="30px"
                fontSize="20px"
                fontWeight="bold"
                color="blackAlpha.800"
                border="none"
              ></Text>
            </Box>

            <Box p="10px">
              <FormLabel
                m="16px 0 0 0"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="24px"
                color="blackAlpha.800"
                bgColor="green.300"
              >
                DETAIL
              </FormLabel>
              <Text
                h="350px"
                mt="4px"
                fontSize="24px"
                fontWeight="bold"
                color="blackAlpha.800"
                border="none"
              ></Text>
            </Box>
            <HStack spacing="60px" p="10px" pb="20px">
              <Button
                w="112px"
                borderRadius="50px"
                bgColor="green.300"
                borderWidth="1px"
                borderColor="blackAlpha.800"
                iconSpacing="10px"
                rightIcon={<PenIcon />}
              >
                Edit
              </Button>

              <Flex direction="column">
                <Text fontWeight="bold">Create</Text>
                <Text fontWeight="bold" fontSize="20px">
                  2020-11-8 18:55
                </Text>
              </Flex>
              <Flex direction="column">
                <Text fontWeight="bold">Update</Text>
                <Text fontWeight="bold" fontSize="20px">
                  2020-11-8 18:55
                </Text>
              </Flex>
            </HStack>
          </Box>
        </Box>

        {/* 右 */}
        <Box w="600px">
          <Flex justify="flex-end">
            <Button
              w="112px"
              h="40px"
              mt="8px"
              mr="10px"
              fontSize="18px"
              fontWeight="bold"
              bg="green.600"
              color="white"
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="50px"
              onClick={onOpen}
            >
              Comment
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent w="390px" border="1px solid black" mt="150px" borderRadius="10px">
                <ModalHeader fontWeight="bold" fontSize="30px" pt="5px" pb="0">
                  Comment
                </ModalHeader>
                <ModalBody>
                  <Text fontSize="20px" fontWeight="bold" pb="5px">
                    Name
                  </Text>
                  <Input pb="5px" />
                  <Text fontSize="20px" fontWeight="bold" pb="5px">
                    Your Comment
                  </Text>
                  <Textarea
                    mb="10px"
                    borderColor="blackAlpha.800"
                    h="160px"
                    pb="5px"
                  />
                  <Button
                    mb="15px"
                    bgColor="green.600"
                    color="white"
                    fontSize="18px"
                    border="1px solid black"
                    w="100%"
                  >
                    CREATE
                  </Button>
                </ModalBody>
              </ModalContent>
            </Modal>
            <Button
              w="112px"
              h="40px"
              mt="8px"
              fontSize="18px"
              fontWeight="bold"
              bg="green.300"
              color="blackAlpha.800"
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="50px"
            >
              Back
            </Button>
          </Flex>
          {/* List */}
          <Stack mt="20px" ml="20px" spacing="32px">
            <Stack
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="10px"
              fontWeight="bold"
            >
              <Flex
                bgColor="green.700"
                borderRadius="10px 10px 0 0"
                borderBottom="1px solid black"
                color="white"
                justifyContent="space-between"
              >
                <Text ml="30px" fontSize="22px">
                  ジョン
                </Text>
                <Text mr="30px" fontSize="22px">
                  2022/01/01
                </Text>
              </Flex>

              <Text pb="60px" pl="10px">
                ２日後までに完了お願い致します。
              </Text>
            </Stack>
            <Stack
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="10px"
              fontWeight="bold"
            >
              <Flex
                bgColor="green.700"
                borderRadius="10px 10px 0 0"
                borderBottom="1px solid black"
                color="white"
                justifyContent="space-between"
              >
                <Text ml="30px" fontSize="22px">
                  リンゴ
                </Text>
                <Text mr="30px" fontSize="22px">
                  2022/01/01
                </Text>
              </Flex>
              <Text pb="60px" pl="10px">
                内容確認致しました。修正点メールしましたのでご確認ください。
              </Text>
            </Stack>
            <Stack
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="10px"
              fontWeight="bold"
            >
              <Flex
                bgColor="green.700"
                borderRadius="10px 10px 0 0"
                borderBottom="1px solid black"
                color="white"
                justifyContent="space-between"
              >
                <Text ml="30px" fontSize="22px">
                  ポール
                </Text>
                <Text mr="30px" fontSize="22px">
                  2022/01/01
                </Text>
              </Flex>
              <Text pb="60px" pl="10px">
                2日後までに完了お願い致します。
              </Text>
            </Stack>
            <Stack
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="10px"
              fontWeight="bold"
            >
              <Flex
                bgColor="green.700"
                borderRadius="10px 10px 0 0"
                borderBottom="1px solid black"
                color="white"
                justifyContent="space-between"
              >
                <Text ml="30px" fontSize="22px">
                  ジョージ
                </Text>
                <Text mr="30px" fontSize="22px">
                  2022/01/01
                </Text>
              </Flex>
              <Text pb="60px" pl="10px">
                ２日後までに完了お願い致します。
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
