import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { todoListState } from "../constants/atom";

type Props = {
  arrIndex: number;
  defaultValue: 0 | 1 | 2;
};

// arrIndexにはtodoListをmapした時のindex、defaultValueには該当のstatusを渡してください
const StatusButton: React.FC<Props> = ({ arrIndex, defaultValue }) => {
  const [statusValue, setStatusValue] = useState(defaultValue);
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);

  const statusButtonOnClick = () => {
    switch (statusValue) {
      case 0:
        () => setStatusValue(1);
        break;
      case 1:
        () => setStatusValue(2);
        break;
      case 2:
        () => setStatusValue(0);
        break;
    }
  };

  useEffect(() => {
    const todos = todoList.map((todo: any, index: number) =>
      arrIndex === index
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
      color={`blackAlpha.800`}
      variant={`outline`}
      bgColor={`green.50`}
      w={`104px`}
      h={`40px`}
      borderRadius={`3xl`}
      borderColor={`blackAlpha.800`}
      fontSize={`12px`}
      fontWeight={`bold`}
      fontFamily={`roboto`}
      p={`0`}
      onClick={statusButtonOnClick}
    ></Button>
  );
};

export default StatusButton;
