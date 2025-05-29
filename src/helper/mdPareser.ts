import fm from 'front-matter';

export function parseMarkdown(raw: string) {
  const { attributes, body } = fm<any>(raw);
  return {
    heading: attributes.heading,
    content: body,
  };
}
