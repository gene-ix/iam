import { useEffect, useState, createContext } from "react";
import axios from "axios";

const PanelsContext = createContext(Array(9).fill({}));

export const PanelsContextProvider = (props) => {

    const [panels, setPanels] = useState(Array(9).fill({}));
    const [detail, setDetail] = useState("");

    useEffect(() => {
        axios.get('http://atelier.topaz.ne.jp/iam_data/20230401.php')
            .then(res => {
                setPanels(res.data)
            })
    }, []);

    const testHandler = (event) => {
        setDetail(panels[event.target.value].detail);
    };

    return (
        <PanelsContext.Provider value={
            {
                data: panels,
                detail: detail,
                onTest: testHandler
            }
        }>
            {props.children}
        </PanelsContext.Provider>
    )
}

export default PanelsContext;
