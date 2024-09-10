export const getNumberEvol = (chainEvol: string[]) => {
  return chainEvol.map((numberUrl) => numberUrl.split("/")[6]);
};
