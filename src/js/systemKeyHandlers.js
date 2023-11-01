const keysHandlers = {
  Backspace: (textarea, cursor) => {
    console.log(cursor);
    const newValue = `${textarea.value.slice(0, cursor - 1)}${textarea.value.slice(cursor)}`;
    console.log(newValue);
    return newValue;
  },
};

export default keysHandlers;
