import fm from 'front-matter';

//we need to find a type for this
export function parseMarkdown(raw: string) {
  const { attributes, body } = fm<any>(raw);
  return {
    heading: attributes.heading,
    content: body,
  };
}
