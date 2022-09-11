import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { todoListState, trashTodoState } from "../constants/atom";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import StatusButton from "../components/StatusButton";

import {
  Center,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  TableContainer,
  Tr,
  Thead,
  Table,
  Th,
  Button,
  Td,
  Tbody,
  ButtonProps,
} from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";

export default function Trash () {
  const [trashTodo, setTrashTodo] = useRecoilState(trashTodoState);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [isClient, setIsClient] = useState(false); //topから引用
  const router = useRouter();
  const pagesQuantity = 5;
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  const normalStyles: ButtonProps = {
    w: "40px",
    fontSize: "sm",
    _hover: {
      bg: "green.300",
    },
  };

  const activeStyles: ButtonProps = {
    w: "40px",
    fontSize: "sm",
    _hover: {
      bg: "green.300",
    },
  };

  const separatorStyles: ButtonProps = {
    w: 7,
    bg: "green.200",
  };

  //topから引用
  useEffect(() => {
    setIsClient(true);
  }, []);

  //削除機能（１タスクのみ）
  const handleDelete = (id: string) => {
    const deleteTodo = trashTodo.filter(
      (todo: { id: string }) => todo.id !== id
    );
    setTrashTodo(deleteTodo);
  };

  //全削除機能
  const handleAllDelete = () => {
    const allDeleteTodo = trashTodo.filter((todo: { id: string }) => !todo.id);
    setTrashTodo(allDeleteTodo);
  };

  //戻す機能（TrashからTopへ）
  const handleRestore = (id: string) => {
    //trashから削除処理
    const restoreTodo = trashTodo.filter(
      (todo: { id: string }) => todo.id !== id
    );
    setTrashTodo(restoreTodo);
    //trashからTopへ戻す処理
    const newRestoreTodo = trashTodo.find(
      (todo: { id: string }) => todo.id === id
    );
    const copyRestoreTodo = [...todoList];
    setTodoList([...copyRestoreTodo, newRestoreTodo]);
  };

  //全て戻す機能（TrashからTopへ）
  const handleAllRestore = () => {
    //trashから全削除処理
    const allRestoreTodo = trashTodo.filter((todo: { id: string }) => !todo.id);
    setTrashTodo(allRestoreTodo);
    //trashからTopへ全て戻す処理
    const copyTrashTodo = [...trashTodo];
    const copyTodoList = [...todoList];
    setTodoList([...copyTodoList, ...copyTrashTodo]);
  };

  //ページネーション機能
  const pagination = useMemo(() => {
    const startNumber = 0 + 6 * (currentPage - 1);

    const endNumber = 5 + 6 * (currentPage - 1);

    return trashTodo.slice(startNumber, endNumber);
  }, [currentPage, trashTodo]);

  return (
    <Layout title="Trash">
      <Container>
        <Center>
          <VStack h={`700px`}>
            <Flex w={`1080px`} h={"88px"}>
              <Flex w={`1080px`} justify={"space-between"}>
                <Text
                  marginTop={`24px`}
                  fontSize="28px"
                  fontWeight="bold"
                  lineHeight="33px"
                  color="blackAlpha.800"
                >
                  TRASH
                </Text>
                <Flex justify={"end"} align={"center"}>
                  <Button
                    color={`white`}
                    variant={`outline`}
                    bgColor={`red.500`}
                    w={`112px`}
                    h={`40px`}
                    borderRadius={`3xl`}
                    fontSize={`18px`}
                    fontFamily={`Gothic A1`}
                    fontWeight={`bold`}
                    onClick={handleAllDelete}
                  >
                    Delete all
                  </Button>
                  <Button
                    color={`white`}
                    variant={`outline`}
                    bgColor={`blue.300`}
                    w={`112px`}
                    h={`40px`}
                    borderRadius={`3xl`}
                    fontSize={`18px`}
                    fontFamily={`roboto`}
                    fontWeight={`bold`}
                    ml={`24px`}
                    onClick={handleAllRestore}
                  >
                    Resotre all
                  </Button>
                  <Button
                    color={`white`}
                    variant={`outline`}
                    bgColor={`green.300`}
                    w={`112px`}
                    h={`40px`}
                    borderRadius={`3xl`}
                    borderColor={`black.700`}
                    fontSize={`18px`}
                    fontFamily={`roboto`}
                    fontWeight={`bold`}
                    ml={`24px`}
                    onClick={() => router.back()}
                  >
                    Back
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <TableContainer w={`1080px`} h={`420px`}>
              <Table variant="simple" size={"sm"}>
                <Thead bgColor={`green.300`} h={`56px`}>
                  <Tr>
                    <Th
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      pt={`20px`}
                      w={`384px`}
                    >
                      Task
                    </Th>
                    <Th
                      textAlign={`center`}
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      pt={`20px`}
                      w={`174px`}
                    >
                      Status
                    </Th>
                    <Th
                      textAlign={`center`}
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      pt={`20px`}
                      w={`174px`}
                    >
                      Priority
                    </Th>
                    <Th
                      textAlign={`center`}
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      pt={`20px`}
                      w={`174px`}
                    >
                      Create
                    </Th>
                    <Th
                      textAlign={`center`}
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      pt={`20px`}
                      w={`174px`}
                    >
                      Action
                    </Th>
                  </Tr>
                </Thead>
                {isClient && (
                  <Tbody>
                    {pagination.map((todo: any) => {
                      return (
                        <Tr key={todo.id}>
                          <Td
                            fontWeight={`bold`}
                            w={`384px`}
                            fontSize={"16px"}
                            lineHeight={"39px"}
                          >
                            {todo.title}
                          </Td>
                          <Td w={`174px`} h={`56px`} textAlign={`center`}>
                            <StatusButton
                              todoId={todo.id}
                              defaultValue={todo.status}
                              disabled={true}
                            ></StatusButton>
                          </Td>
                          <Td
                            w={`174px`}
                            h={`56px`}
                            color={`#E53E3E`}
                            textAlign={`center`}
                            fontSize={`16px`}
                            fontWeight={`medium`}
                            lineHeight={`40px`}
                            textShadow={`1px 1px 0 black, -1px -1px 0 black,
											-1px 1px 0 black, 1px -1px 0 black,
											0px 1px 0 black,  0 -1px 0 black,
											-1px 0 0 black, 1px 0 0 black;`}
                          >
                            {todo.priority}
                          </Td>
                          <Td
                            w={`174px`}
                            h={`56px`}
                            fontSize={`14px`}
                            fontWeight={`bold`}
                            lineHeight={`42px`}
                          >
                            {todo.createAt}
                          </Td>
                          <Td w={`174px`} h={`56px`}>
                            <HStack mx={`auto`}>
                              <Button
                                color={`white`}
                                variant={`outline`}
                                bgColor={`red.500`}
                                w={`80px`}
                                h={`40px`}
                                borderRadius={`3xl`}
                                fontSize={`18px`}
                                fontWeight={`bold`}
                                fontFamily={`Gothic A1`}
                                p={`0`}
                                onClick={() => handleDelete(todo.id)}
                              >
                                Delete
                              </Button>
                              <Button
                                color={`white`}
                                variant={`outline`}
                                bgColor={`blue.300`}
                                w={`80px`}
                                h={`40px`}
                                borderRadius={`3xl`}
                                fontSize={`18px`}
                                fontWeight={`bold`}
                                fontFamily={`Gothic A1`}
                                p={`0`}
                                onClick={() => handleRestore(todo.id)}
                              >
                                Restore
                              </Button>
                            </HStack>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                )}
              </Table>
            </TableContainer>
            <Paginator
              pagesQuantity={pagesQuantity}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              activeStyles={activeStyles}
              normalStyles={normalStyles}
              separatorStyles={separatorStyles}
            >
              <Flex
                alignItems={`center`}
                justifyContent={`space-between`}
                w={`352px`}
                pt={`96px`}
              >
                <Previous>
                  <ChevronLeftIcon />
                </Previous>
                <PageGroup isInline align={`center`} />
                <Next>
                  <ChevronRightIcon />
                </Next>
              </Flex>
            </Paginator>
          </VStack>
        </Center>
      </Container>
    </Layout>
  );
};
