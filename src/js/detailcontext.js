import { useEffect, useState, createContext } from "react";

const DetailContext = createContext("a");

export const DetailContextProvider = (props) => {

    const [detail, setDetail] = useState("aaa");

    // useEffect(() => { fetchJsonData() }, []);

    const setText = (e) => {
        setDetail(e);
    }

    return (
        <DetailContext.Provider value={
            {
                data: detail,
            }
        }>
            {props.children}
        </DetailContext.Provider>
    )
}

export default DetailContext;

// import { useState } from 'react'

// const useThemeColor = () => {
//     const [themeColor, setThemeColor] = useState('light')

//     return {
//         themeColor,
//         setThemeColor
//     }
// }

// export default useThemeColor