export default async function traductor(locale: string, text: string) {
  return (await import(`../translations/${locale.toLowerCase()}.json`))[text];
}
