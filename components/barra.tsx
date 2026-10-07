"use client";

import { useState} from "react";

export default function ProgressBar() {

    const [progress, setProgress] = useState(0);



    return (

        <div className="w-full max-w-xs">
            <p className="text-gray-700 font-semibold mb-2"
            style= {{color: "white"}}>
                Progreso: <input
                    type="number"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(event) => {
                        const value = Number(event.target.value);
                        setProgress(Math.min(100, Math.max(0, value || 0)));
                    }}
                    className="w-16 border border-gray-300 rounded px-2"
                    style= {{ color: "white", borderColor: "white", backgroundColor: "black", borderWidth: "1px", borderStyle: "solid", padding: "5px", marginBottom: "10px" }}
                />
            </p>

            <div className="w-full bg-gray-200 rounded-full h-4">
            <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
            ></div>
        </div>

        

        </div>


        
    );

}
