// components/Editor.tsx
'use client'
import React, { useState, ChangeEvent } from 'react';

interface EditorProps {
  onChange: (text: string) => void;
}

const Editor: React.FC<EditorProps> = ({ onChange }) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange(newText);
  };

  return (
    
  <textarea
    value={text}
    onChange={handleChange}
    className="w-full h-64 p-2 border rounded-md shadow-2xl shadow-gray-400"
    placeholder="Write your Markdown here..."
  />


  );
};

export default Editor;
