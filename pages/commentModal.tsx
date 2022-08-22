import React, { Dispatch, SetStateAction } from "react";
import {
  Input,
  Textarea,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

interface commentObject {
  name: string;
  comment: string;
  createdAt: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  comments: commentObject[];
  setComments: Dispatch<SetStateAction<commentObject[]>>;
}

interface FormInputs extends commentObject {}
interface FormData extends commentObject {}

export const CommentModal = (props: Props) => {
  const { isOpen, onClose, comments, setComments } = props;
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormInputs) => {
    const now = dayjs();
    const newComment = { ...data, createdAt: now.format("YYYY/MM/DD") };
    setComments([...comments, newComment]);
    reset();
    onClose();
  };

  console.log(comments);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w="380px"
          border="1px solid black"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ModalHeader fontWeight="bold" fontSize="30px" pt="5px" pb="0">
            Comment
          </ModalHeader>
          <ModalBody>
            <Text fontSize="20px" fontWeight="bold" pb="5px">
              Name
            </Text>
            <Input
              pb="5px"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && "Nameを入力してください。"}

            <Text fontSize="20px" fontWeight="bold" pb="5px">
              Your Comment
            </Text>
            <Textarea
              mb="10px"
              borderColor="blackAlpha.800"
              h="160px"
              pb="5px"
              id="comment"
              {...register("comment", { required: true })}
            />
            {errors.comment && "Commentを入力してください。"}
            <Button
              mb="15px"
              bgColor="green.600"
              color="white"
              fontSize="18px"
              border="1px solid black"
              w="100%"
              type="submit"
            >
              CREATE
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
