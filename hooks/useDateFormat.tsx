export const useDateFormat = () => {
  // Dateをyyyy-mm-dd hh:mm形式にフォーマットする関数。dateにはnew Date()で生成した値を入れる。
  const formatted_date = (date: Date) => {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes()
    );
  };

  return formatted_date;
};
