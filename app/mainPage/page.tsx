 'use client'

import React, { useState } from 'react';
import Layout from '../component/layout/layout';
import Editor from '../component/editor/editor';
import Preview from '../component/preview/preview';
import { saveAs } from 'file-saver';

const MarkdownEditorPage: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  const handleSave = () => {
    const blob = new Blob([markdownContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'markdown_content.md');
  };

  return (
    <Layout>
      <div className="flex items-center space-x-4">
        <Editor onChange={setMarkdownContent} value={markdownContent} />
        <Preview content={markdownContent} />
      </div>
      <div>
        <button onClick={handleSave}>Save as File</button>
      </div>
    </Layout>
  );
};

export default MarkdownEditorPage;
