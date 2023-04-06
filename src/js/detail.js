import { useContext } from "react";
import PanelsContext from "./panelcontext";

function Detail(props) {

    const context = useContext(PanelsContext);
    const detail = context.detail || [];

    return (
        <div className="_detail">
            <div>
                {
                    (detail.length < 1)
                        ?
                        <h2>
                            <span>Graphical Logic</span>
                            <span>&times;</span>
                            <span>Logical Graphic</span>
                        </h2>
                        :
                        [...detail].map((value, index) => {
                            return (
                                <p>{value}</p>
                            );
                        })
                }
            </div>
        </div>
    );
}

export default Detail;