export const addCheck = (pageNumber, endPage) => {
  if (pageNumber >= endPage) return pageNumber;

  return pageNumber + 1;
};

export const subCheck = (pageNumber) => {
  if (pageNumber === 1) return 1;

  return pageNumber - 1;
};
