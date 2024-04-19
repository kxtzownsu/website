import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function BlogViewer() {
  const markdown = `
  <!-- 
  Title: "KVS"
  Description: "KVS: Kernel Version Switcher"
  Date: "12/25/23"
  -->
  # KVS
  # Kernel Version Switcher
  <hr>
  <i>12/25/23</i>
  `;

  return (
    <div>
      <Markdown rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
    </div>
  );
}
