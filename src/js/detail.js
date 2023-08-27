import { useContext } from "react";
import PanelsContext from "./panelcontext";
import CatchCopy from "./catchcopy";

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
                            <CatchCopy></CatchCopy>
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