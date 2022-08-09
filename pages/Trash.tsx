import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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

const Trash = () => {
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
									color="blackAlpha.800">
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
										fontWeight={`bold`}>
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
										ml={`24px`}>
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
										ml={`24px`}>
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
											w={`384px`}>
											Task
										</Th>
										<Th
											textAlign={`center`}
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											pt={`20px`}
											w={`174px`}>
											Status
										</Th>
										<Th
											textAlign={`center`}
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											pt={`20px`}
											w={`174px`}>
											Priority
										</Th>
										<Th
											textAlign={`center`}
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											pt={`20px`}
											w={`174px`}>
											Create
										</Th>
										<Th
											textAlign={`center`}
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											pt={`20px`}
											w={`174px`}>
											Action
										</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td
											fontWeight={`bold`}
											w={`384px`}
											fontSize={"16px"}
											lineHeight={"39px"}></Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.50`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}
												fontSize={`12px`}
												fontWeight={`bold`}
												fontFamily={`roboto`}>
												not started
											</Button>
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
											-1px 0 0 black, 1px 0 0 black;`}>
											High
										</Td>
										<Td
											w={`174px`}
											h={`56px`}
											fontSize={`14px`}
											fontWeight={`bold`}
											lineHeight={`42px`}>
											2020-11-8 18:55
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
													p={`0`}>
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
													p={`0`}>
													Restore
												</Button>
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td
											fontWeight={`bold`}
											w={`384px`}
											fontSize={"16px"}
											lineHeight={"39px"}>
											React Todo
										</Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td
											w={`174px`}
											h={`56px`}
											color={`#E53E3E`}
											textAlign={`center`}
											fontSize={`16px`}
											fontWeight={`middle`}
											lineHeight={`40px`}
											textShadow={`1px 1px 0 black, -1px -1px 0 black,
											-1px 1px 0 black, 1px -1px 0 black,
											0px 1px 0 black,  0 -1px 0 black,
											-1px 0 0 black, 1px 0 0 black;`}>
											High
										</Td>
										<Td
											w={`174px`}
											fontSize={`14px`}
											fontWeight={`bold`}
											lineHeight={`42px`}>
											2020-11-8 18:55
										</Td>
										<Td w={`174px`}>
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
													fontFamily={`roboto`}
													p={`0`}>
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
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td
											fontWeight={`bold`}
											w={`384px`}
											fontSize={"16px"}
											lineHeight={"39px"}>
											Firebase Hosting
										</Td>
										<Td w={`174px`} textAlign={`center`} h={`56px`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.300`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DONE
											</Button>
										</Td>
										<Td
											w={`174px`}
											textAlign={`center`}
											h={`56px`}
											color={`#C6F6D5`}
											fontSize={`16px`}
											fontWeight={`medium`}
											lineHeight={`40px`}
											textShadow={`1px 1px 0 black, -1px -1px 0 black,
											-1px 1px 0 black, 1px -1px 0 black,
											0px 1px 0 black,  0 -1px 0 black,
											-1px 0 0 black, 1px 0 0 black;`}>
											Middle
										</Td>
										<Td
											w={`174px`}
											fontSize={`14px`}
											fontWeight={`bold`}
											lineHeight={`42px`}>
											2020-11-8 18:55
										</Td>
										<Td w={`174px`}>
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
													fontFamily={`roboto`}
													p={`0`}>
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
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td w={`384px`} fontSize={"16px"} lineHeight={"39px"}></Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td
											color={"white"}
											w={`174px`}
											h={`56px`}
											textAlign={`center`}
											fontSize={`16px`}
											fontWeight={`middle`}
											lineHeight={`40px`}
											textShadow={`1px 1px 0 black, -1px -1px 0 black,
											-1px 1px 0 black, 1px -1px 0 black,
											0px 1px 0 black,  0 -1px 0 black,
											-1px 0 0 black, 1px 0 0 black;`}>
											Low
										</Td>
										<Td
											w={`174px`}
											fontSize={`14px`}
											fontWeight={`bold`}
											lineHeight={`42px`}>
											2020-11-8 18:55
										</Td>
										<Td w={`174px`}>
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
													fontFamily={`roboto`}
													p={`0`}>
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
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td w={`384px`} fontSize={"16px"} lineHeight={"39px"}></Td>
										<Td w={`174px`} h={`56px`} textAlign={`center`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.300`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DONE
											</Button>
										</Td>
										<Td
											w={`174px`}
											textAlign={`center`}
											h={`56px`}
											color={`#C6F6D5`}
											fontSize={`16px`}
											fontWeight={`medium`}
											lineHeight={`40px`}
											textShadow={`1px 1px 0 black, -1px -1px 0 black,
											-1px 1px 0 black, 1px -1px 0 black,
											0px 1px 0 black,  0 -1px 0 black,
											-1px 0 0 black, 1px 0 0 black;`}>
											Middle
										</Td>
										<Td
											w={`174px`}
											fontSize={`14px`}
											fontWeight={`bold`}
											lineHeight={`42px`}>
											2020-11-8 18:55
										</Td>
										<Td w={`174px`}>
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
													fontFamily={`roboto`}
													p={`0`}>
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
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td w={`384px`} fontSize={"16px"} lineHeight={"39px"}></Td>
										<Td w={`174px`} textAlign={`center`} h={`56px`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td
											color={"white"}
											w={`174px`}
											h={`56px`}
											textAlign={`center`}
											fontSize={`16px`}
											fontWeight={`medium`}
											lineHeight={`40px`}
											textShadow={`1px 1px 0 black, -1px -1px 0 black,
											-1px 1px 0 black, 1px -1px 0 black,
											0px 1px 0 black,  0 -1px 0 black,
											-1px 0 0 black, 1px 0 0 black;`}>
											Low
										</Td>
										<Td
											w={`174px`}
											fontSize={`14px`}
											fontWeight={`bold`}
											lineHeight={`42px`}>
											2020-11-8 18:55
										</Td>
										<Td w={`174px`}>
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
													fontFamily={`roboto`}
													p={`0`}>
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
													fontFamily={`roboto`}
													p={`0`}>
													Restore
												</Button>
											</HStack>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
						<Paginator
							pagesQuantity={pagesQuantity}
							currentPage={currentPage}
							onPageChange={setCurrentPage}
							activeStyles={activeStyles}
							normalStyles={normalStyles}
							separatorStyles={separatorStyles}>
							<Flex
								alignItems={`center`}
								justifyContent={`space-between`}
								w={`352px`}
								pt={`96px`}>
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

export default Trash;
