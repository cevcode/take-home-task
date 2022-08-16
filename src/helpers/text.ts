export const prettifyLongString = (value: string, maxLength: number): string | null => {
  if(!value) {
    return null;
  }
  if(value.length > maxLength) {
    return value.substring(0, maxLength) + '...';
  }
  return value;
};
