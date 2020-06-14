export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeAllFirstLettersFromText(string: string): string {
  let array = string.split(" ");
  array.forEach(_ => {
    capitalizeFirstLetter(_);
  });
  return array.join(" ");
}

export function capitalizeAllFirstLetters({
  string1,
  string2
}: {
  string1: string;
  string2: string;
}): string {
  return capitalizeFirstLetter(string1) + " " + capitalizeFirstLetter(string2);
}
