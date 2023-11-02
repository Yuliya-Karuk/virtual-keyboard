const keysHandlers = {
  Backspace: (textarea, cursor) => {
    console.log(cursor);
    const newValue = `${textarea.value.slice(0, cursor - 1)}${textarea.value.slice(cursor)}`;
    console.log(newValue);
    return newValue;
  },
  Tab: (textarea, cursor) => {
    const newValue = `${textarea.value.substring(0, cursor)}\t${textarea.value.substring(cursor)}`;
    return newValue;
  },
  Delete: (textarea, cursor) => {
    const newValue = `${textarea.value.substring(0, cursor)}${textarea.value.substring(cursor + 1)}`;
    return newValue;
  },
  Enter: (textarea, cursor) => {
    const newValue = `${textarea.value.substring(0, cursor)}\n${textarea.value.substring(cursor)}`;
    return newValue;
  },
};

export default keysHandlers;
