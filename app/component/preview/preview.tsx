import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import hljs from 'highlight.js';

interface PreviewProps {
  content: string;
}

type CodeProps = {
  node: string;
  inline: string;
  className: string;
  children: string;
};

const Preview: React.FC<PreviewProps> = ({ content }) => {
  const components = {
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <pre className="rounded-md p-2">
          <code
            {...props}
            className={`block overflow-x-auto ${className}`}
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(match[1], String(children)).value,
            }}
          />
        </pre>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="w-full p-2 border rounded-md bg-white h-8 shadow-2xl shadow-gray-400">
      <ReactMarkdown
        remarkPlugins={[gfm]} // Change 'plugins' to 'remarkPlugins'
        children={content}
        components={components}
      />
    </div>
  );
};

export default Preview;

