import { useRouteError } from "react-router-dom";

export const Error=()=>{

const err=useRouteError();

    return(
        <>
        <h1>smthg went wrng....plz check ur url!!!</h1>
        <h2>Please check the url</h2>
        <h2>
            {err.status}-{err.error.message}
        </h2>
        </>
    )
};