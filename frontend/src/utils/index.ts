export function trim(input: string): string {
  const trimmed = input.trim();
  return trimmed.replace(/ /g, "\n");
}
