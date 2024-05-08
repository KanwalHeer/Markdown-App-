'use client'
import React, { useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { saveAs } from 'file-saver';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Layout: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  const handleSave = () => {
    const blob = new Blob([markdown], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'markdown_content.md');
  };

  return (

    
    
    <div className="flex flex-col items-center justify-center min-h-screen w-full  bg-gray-100">

      <h1 className="text-3xl font-bold mb-8 mt-4 text-blue-900">Online Markdown Editor</h1>
      <div className="flex items-center space-x-4 w-96 mt-8 border rounded-md shadow-md shadow:text-gray-100 " >
        <Editor onChange={setMarkdown} />
      </div>
      <div className='flex items-center space-x-4 w-96 mt-8'>
      <Preview content={markdown} />
      </div>


      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-8 shadow-blue-600 transform hover:scale-105 transition duration-300 ease-out "
          onClick={handleSave}
        >
          Save as File
        </button>
        <CopyToClipboard text={markdown}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-green-600 transform hover:scale-105 transition duration-300 ease-out">
            Copy HTML
          </button>
        </CopyToClipboard>
      </div>
    </div>
    
  );
};

export default Layout;

