import { useState } from "react";
import Editor, {useMonaco} from '@monaco-editor/react';
import { callAI } from "../ai";
import ReactMarkdown from "react-markdown";

export default function CodeEditor(){
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState("WRITE YOUR CODE HERE!!")
    const [output, setOutput] = useState('')
    const [language, setLanguage] = useState('javascript')

    //AI side handling
    const handleAI = async (type) => {
        let prompt = '';

        //prompt architecure
        if (type==='explain'){
            prompt = `youre an expert ${language} programming tutor, explaint he followin code to a beginner in simple, step by step lang, include examples if needed:\n\n${code}`;
        } else if (type==='refactor'){
            prompt = `youre an expert ${language} software engineer, refactor the following code for readability, efficiency, maintainbility, and also refactor the style keep the functionality identical and also explain the changes made. try to be direct:\n\n${code}`;
        } else if (type==='comment'){
            prompt = `youre an expert ${language} software engineer, add clear concise and direct coomments to the existing code for developers' ease, maintainbility. youre only supposed to give the code with the comments no extra stuff or explanation:\n\n${code}`;
        } else if (type==='complexity'){
            prompt = `You're an expert in algorithms. Analyze the time and space complexity of this code in simple terms for a beginner:\n\n${code}`;
        } else if (type==='security'){
            prompt = `You are a cybersecurity expert. Analyze the following code for security vulnerabilities and provide recommendations to fix them:\n\n${code}`;
        }


        // former arch
        // const prompt = type === 'explain'
        //     ? `youre an expert programming tutor, explaint he followin code to a beginner in simple, step by step lang, include examples if needed:\n\n${code}`
        //     : type === 'refactor'
        //         ? `youre an expert software engineer, refactor the following code for readability, efficiency, maintainbility, keep the functionality identical and also explain the changes made:\n\n${code}`
        //         : `youre an expert software engineer, add clear concise and direct coomments to the existing code for developers' ease, maintainbility. youre only supposed to give the code with the comments no extra stuff or explanation:\n\n${code}`;
        
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
                <div className="mb-4">
                    <label className="mr-4 text-white ml-2" id="editorBtn">Select Language:</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-[#333] text-white p-2" id="editorBtn">
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <Editor
                    height="60vh"
                    defaultLanguage={language === 'python' ? 'plaintext' : language} value={code}
                    onChange={setCode} theme="vs-dark"
                    options={{
                        fontSize: 14,
                        wordWrap: "on",
                        automaticLayout: true,
                        suggest: { enabled: false },
                        readOnly: false,
                    }}/>
                <div className="mt-4 flex gap-4">
                    <button onClick={() => handleAI('explain')} 
                        id = "editorBtn"
                        className="flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-lg shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition">
                       <span className="mb-2 text-sm"> Explain code</span>
                    </button>
                    <button onClick={() => handleAI('refactor')}
                        id = "editorBtn"
                        className="flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-lg shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition">
                        <span className="mb-2 text-sm">Refactor code</span>
                    </button>
                    <button onClick={() => handleAI('comment')}
                        id = "editorBtn"
                        className="flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-full shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition">
                        <i class="bi bi-lightning-charge-fill mr-2 text-xl"></i>   
                        <span className="mb-1 text-sm">Commentify!</span>
                    </button>
                    <button onClick={() => handleAI('complexity')}
                        id = "editorBtn"
                        className="flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-lg shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition">
                        <span className="mb-2">Analyze Complexity</span>
                    </button>
                    <button onClick={() => handleAI('security')}
                        id = "editorBtn"
                        className="flex items-center sm:mt-0 p-2 border border-[#595959] bg-gradient-to-b from-[#404040] to-[#141414] text-white px-4 py-2 rounded-full shadow-md hover:from-[#505050] hover:to-[#1f1f1f] transition">
                        <i class="bi bi-bug-fill"></i>
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
                            <p className="text-gray-400 italic font-mono">The AI assistant output will appear here. Click the feature buttons to get started with it :3!!</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}