import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  DeleteIcon,
  EditIcon,
  ExternalLinkIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Center,
  Container,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
  InputGroup,
  InputRightElement,
  Input,
  Select,
  IconButton,
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
import {
  Paginator,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";

import { Layout } from "../components/Layout";
import PrioritySelect from "../components/PrioritySelect";
import { todoItemState, todoListState } from "../constants/atom";
import StatusButton from "../components/StatusButton";
import { filterTodoList } from "../util/filterTodoList";

const Top = () => {
  const [input, setInput] = useState("");
  const [statusSelect, setStatusSelect] = useState("");
  const [prioritySelect, setPrioritySelect] = useState("");
  // サーバサイドとクライアントサイドのレンダリング結果の不一致解消のため導入
  const [isClient, setIsClient] = useState(false);
  const todoList = useRecoilValue<any>(todoListState);
  const [todoItem, setTodoItem] = useRecoilState(todoItemState);
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filterTodos = filterTodoList(
    input,
    statusSelect,
    prioritySelect,
    todoList
  );

  const handleSelectTodo = (
    id: number,
    title: string,
    detail: string,
    status: 0 | 1 | 2,
    priority: string,
    createAt: string,
    updateAt: string,
    path: string
  ) => {
    setTodoItem({
      id,
      title,
      detail,
      status,
      priority,
      createAt,
      updateAt,
    });
    router.push(path);
  };

  const resetButtonClick = () => {
    setInput("");
    setStatusSelect("");
    setPrioritySelect("");
  };

  return (
    <Layout title="TOP">
      <Container mt={`16px`}>
        <Center>
          <VStack>
            <Flex w={`1080px`} mb={`33px`}>
              <Stack>
                <Text
                  fontSize="28px"
                  fontWeight="bold"
                  lineHeight="33px"
                  color="blackAlpha.800"
                  mb={`15px`}
                >
                  TODO LIST
                </Text>
                <Flex w={`624px`}>
                  <Text fontSize={`18px`} fontWeight={`bold`} w={`180px`}>
                    SEARCH
                  </Text>
                  <Text fontSize={`18px`} fontWeight={`bold`} w={`180px`}>
                    STATUS
                  </Text>
                  <Text fontSize={`18px`} fontWeight={`bold`}>
                    PRIORITY
                  </Text>
                </Flex>
                <Flex>
                  <HStack spacing={4}>
                    <InputGroup>
                      <InputRightElement pointerEvents="none">
                        <SearchIcon color={`gray.300`} />
                      </InputRightElement>
                      <Input
                        value={input}
                        type={`text`}
                        onChange={(e) => setInput(e.target.value)}
                      />
                    </InputGroup>
                    <Select
                      placeholder="-------"
                      value={statusSelect}
                      onChange={(e) => setStatusSelect(e.target.value)}
                    >
                      <option value={0}>NOT STARTED</option>
                      <option value={1}>DOING</option>
                      <option value={2}>DONE</option>
                    </Select>
                    <Select
                      placeholder="-------"
                      value={prioritySelect}
                      onChange={(e) => setPrioritySelect(e.target.value)}
                    >
                      <option value="High">High</option>
                      <option value="Middle">Middle</option>
                      <option value="Low">Low</option>
                    </Select>
                  </HStack>
                  <Button
                    color={`blackAlpha.800`}
                    variant={`outline`}
                    bgColor={`blackAlpha.500`}
                    w={`104px`}
                    h={`40px`}
                    borderRadius={`3xl`}
                    borderColor={`black.800`}
                    fontSize={`18px`}
                    fontFamily={`roboto`}
                    fontWeight={`bold`}
                    ml={`24px`}
                    onClick={resetButtonClick}
                  >
                    RESET
                  </Button>
                </Flex>
              </Stack>
              <Spacer />
              <Stack spacing={`16px`} direction="row" align="center">
                <IconButton
                  bgColor="yellow.300"
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  borderRadius={`full`}
                  variant={`outline`}
                  borderColor={`gray.400`}
                  h={`40px`}
                  w={`40px`}
                  onClick={() => router.push("/Trash")}
                />
                <IconButton
                  aria-label="Edit"
                  bgColor="pink.100"
                  h={`40px`}
                  w={`40px`}
                  borderRadius={`full`}
                  variant={`outline`}
                  borderColor={`gray.400`}
                  icon={<EditIcon />}
                  onClick={() => router.push("/todoEdit")}
                />
                <IconButton
                  aria-label="New"
                  bgColor="green.300"
                  h={`40px`}
                  w={`40px`}
                  borderRadius={`full`}
                  variant={`outline`}
                  borderColor={`gray.400`}
                  icon={<ExternalLinkIcon />}
                  onClick={() => router.push("/create")}
                />
              </Stack>
            </Flex>
            <TableContainer w={`1080px`}>
              <Table variant="simple" mb={`16px`}>
                <Thead bgColor={`green.300`}>
                  <Tr>
                    <Th
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      py={`19px`}
                    >
                      Task
                    </Th>
                    <Th
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      py={`19px`}
                    >
                      Status
                    </Th>
                    <Th
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      py={`19px`}
                    >
                      Priority
                    </Th>
                    <Th
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      py={`19px`}
                    >
                      Create
                    </Th>
                    <Th
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      py={`19px`}
                    >
                      Update
                    </Th>
                    <Th
                      fontFamily={`roboto`}
                      fontWeight={`bold`}
                      fontSize={`24px`}
                      color={`blackAlpha.800`}
                      py={`19px`}
                    >
                      Action
                    </Th>
                  </Tr>
                </Thead>
                {/* 初期表示ではサーバサイドのレンダリング結果を採用し、マウント後に実行される副作用でクライアントサイドのレンダリング結果を反映 */}
                {isClient && (
                  <Tbody>
                    {filterTodos.map((todo) => {
                      return (
                        <Tr key={todo.id}>
                          <Td
                            fontWeight={`bold`}
                            w={`384px`}
                            _hover={{
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              handleSelectTodo(
                                todo.id,
                                todo.title,
                                todo.detail,
                                todo.status,
                                todo.priority,
                                todo.createAt,
                                todo.updateAt,
                                "/show"
                              )
                            }
                          >
                            {todo.title}
                          </Td>
                          <Td
                            w={`139.2px`}
                            p={`0`}
                            textAlign={`center`}
                            lineHeight={`56px`}
                          >
                            <StatusButton
                              todoId={todo.id}
                              defaultValue={todo.status}
                            />
                          </Td>
                          <Td w={`139.2px`} p={`0`} lineHeight={`56px`}>
                            <PrioritySelect
                              todoId={todo.id}
                              defaultValue={todo.priority}
                            />
                          </Td>
                          <Td w={`139.2px`}>{todo.createAt}</Td>
                          <Td w={`139.2px`}>{todo.updateAt}</Td>
                          <Td w={`139.2px`}>
                            <HStack w={`56px`} mx={`auto`}>
                              <EditIcon
                                h={`24px`}
                                w={`24px`}
                                _hover={{
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleSelectTodo(
                                    todo.id,
                                    todo.title,
                                    todo.detail,
                                    todo.status,
                                    todo.priority,
                                    todo.createAt,
                                    todo.updateAt,
                                    "/todoEdit"
                                  )
                                }
                              />
                              <DeleteIcon
                                h={`24px`}
                                w={`24px`}
                                _hover={{
                                  cursor: "pointer",
                                }}
                                onClick={() => router.push("/Trash")}
                              />
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
                p={`12px`}
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

export default Top;
