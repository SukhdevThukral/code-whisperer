import { useState } from "react";
import Editor from '@monaco-editor/react';
import { callAI } from "../ai";                     

export default function CodeEditor(){
    const [code, setCode] = useState("WRITE YOUR CODE HERE!!")
    const [output, setOutput] = useState('')

    const handleAI = async (type) => {
        const prompt = type === 'explain'
            ? `youre an expert programming tutor, explaint he followin code to a beginner in simple, step by step lang, include examples if needed:\n\n${code}`
            : `youre an expert software engineer, refactor the following code for readability, efficiency, maintainbility, keep the functionality identical and also explain the changes made:\n\n${code}`;

        const { result, error } = await callAI(prompt);

        if (error) {
            setOutput("Error: " + error);
        } else {
            setOutput(result);
        }
    };

    return(
        <div className="p-6">
            <Editor
                height="60vh"
                defaultLanguage="javascript"
                value={code}
                onChange={setCode} 
            />
            <div className="mt-4 flex gap-4">
                <button onClick={() => handleAI('explain')}
                    className="px-4 py-2 bg-gray">
                    Explain Code
                </button>
                <button onClick={() => handleAI('refactor')}
                    className="px-4 py-2 bg-gray">
                    Refactor Code
                </button>
            </div>
            <div className="mt-4 p-4 bg-gray-800 text-white whitespace-pre-wrap">
                {output}
            </div>
        </div>
    );
}
