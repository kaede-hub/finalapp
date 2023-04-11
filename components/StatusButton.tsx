import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { todoListState } from "../constants/atom";

type Props = {
  todoId: number;
  defaultValue: 0 | 1 | 2;
  disabled: true | false
};

const StatusButton: React.FC<Props> = ({ todoId, defaultValue, disabled }) => {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const [statusValue, setStatusValue] = useState(defaultValue);
  const [content, setCntent] = useState("NOT STARTED");
  const [color, setColor] = useState("blackAlpha.800");
  const [bgColor, setBgColor] = useState("green.50");
  const [fontSize, setFontSize] = useState("12px");

  useEffect(() => {
    switch (statusValue) {
      case 1:
        setCntent("進行中");
        setColor("green.50");
        setBgColor("green.600");
        setFontSize("18px");
        break;
      case 2:
        setCntent("完了");
        setColor("blackAlpha.800");
        setBgColor("green.300");
        setFontSize("18px");
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusButtonOnClick = () => {
    switch (statusValue) {
      case 0:
        setStatusValue(1);
        setCntent("進行中");
        setColor("green.50");
        setBgColor("green.600");
        setFontSize("18px");
        break;
      case 1:
        setStatusValue(2);
        setCntent("完了");
        setColor("blackAlpha.800");
        setBgColor("green.300");
        setFontSize("18px");
        break;
      case 2:
        setStatusValue(0);
        setCntent("未完了");
        setColor("blackAlpha.800");
        setBgColor("green.50");
        setFontSize("18px");
        break;
    }
  };

  useEffect(() => {
    const todos = todoList.map((todo: any) =>
      todoId === todo.id
        ? {
            id: todo.id,
            title: todo.title,
            detail: todo.detail,
            status: statusValue,
            priority: todo.priority,
            createAt: todo.createAt,
            category: todo.category,
          }
        : todo
    );
    setTodoList(todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusValue]);

  return (
    <Button
      color={color}
      variant={`outline`}
      bgColor={bgColor}
      w={`104px`}
      h={`40px`}
      borderRadius={`3xl`}
      borderColor={`blackAlpha.800`}
      fontSize={fontSize}
      fontWeight={`bold`}
      fontFamily={`roboto`}
      p={`0`}
      onClick={statusButtonOnClick}
      disabled={disabled}
    >
      {content}
    </Button>
  );
};

export default StatusButton;
