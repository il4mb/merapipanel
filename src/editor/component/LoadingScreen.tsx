import React, { useEffect } from "react";
import { useRoot } from "../Root";


export const LoadingScreen = () => {

    const { progress } = useRoot();

    useEffect(() => {
        console.log("PROGRESS", progress);
        if (progress === 100) {
            document.querySelector('.loading-screen')?.classList.add('hide');
            setTimeout(() => {
                document.querySelector('.loading-screen')?.remove();
            }, 400);
        }
    }, [progress]);



    return (
        <div className="loading-screen">
            <div className="loading-progress">
                <div className="progressbar" style={{ "--MP-loading-width": `${progress}%` } as any}></div>
            </div>
        </div>
    )
}
