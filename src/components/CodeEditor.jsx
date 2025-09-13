import { useState } from "react";
import Editor, {useMonaco} from '@monaco-editor/react';
import { callAI } from "../ai"; 
import ReactMarkdown from "react-markdown";                    

export default function CodeEditor(){
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState("WRITE YOUR CODE HERE!!")
    const [output, setOutput] = useState('')

    const handleAI = async (type) => {
        const prompt = type === 'explain'
            ? `youre an expert programming tutor, explaint he followin code to a beginner in simple, step by step lang, include examples if needed:\n\n${code}`
            : `youre an expert software engineer, refactor the following code for readability, efficiency, maintainbility, keep the functionality identical and also explain the changes made:\n\n${code}`;
        
        setLoading(true);
        try {
            const { result, error } = await callAI(prompt);
            if (error) {
                setOutput("Error: " + error);
            } else {
                setOutput(result || "No output from AI.");
            }
        } catch (err) {
            setOutput("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 flex justify-center bg-black">
            <div className="w-full max-w-3xl bg-[#1e1e1e] rounded-xl p-4">
                <Editor
                    height="60vh"
                    defaultLanguage="javascript" value={code}
                    onChange={setCode} theme="vs-dark"
                    options={{
                        fontSize: 14,
                        wordWrap: "on",
                        automaticLayout: true,
                    }}/>
                <div className="mt-4 flex gap-4">
                    <button onClick={() => handleAI('explain')} 
                        className="flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-lg shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition">
                        Explain code
                    </button>
                    <button onClick={() => handleAI('refactor')}
                        className="flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-lg shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition">
                        Refactor code
                    </button>
                </div>
            </div>

            <div className="w-1/2 bg-[#111] border p-4 border-purple-600 max-h-[70vh] max-w-3xl ml-9 p-5 overflow-y-auto rounded-lg font-mono text-gray-200 whitespace-pre-wrap">
                {loading ? (
                    <div className="flex items-center justify-center gap-2 h-full">
                        <div className="w-5 h-5 border-4 border-t-purple-500 border-gray-400 rounded-full animate-spin"/>
                        <span>hmm you got me thinking....</span>
                    </div>
                ) : (
                    <div className="prose prose-invert">
                        {output?(
                            <ReactMarkdown>{output}</ReactMarkdown>
                        ) : (
                            <p className="text-gray-400 italic font-mono">The AI assistant output will appear here. Click "Explain" or "Refactor" to get started!!</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}