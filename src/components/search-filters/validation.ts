
export const validateStoreNumber = (value: string): string => {
  if (value && value.length > 0) {
    const storeNum = parseInt(value);
    if (isNaN(storeNum) || storeNum < 1 || storeNum > 9999) {
      return "This store # does not exist";
    }
  }
  return "";
};

export const validateEmployeeNumber = (value: string): string => {
  if (value && value.length > 0) {
    const empNum = parseInt(value);
    if (isNaN(empNum) || empNum < 1 || empNum > 99999) {
      return "This employee # does not exist";
    }
  }
  return "";
};
