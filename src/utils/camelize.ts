export const capitalize = (text: string) => {
  return text.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase());
}