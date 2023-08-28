import { useContext } from "react";
import PanelsContext from "./panelcontext";
import CatchCopy from "./catchcopy";

function Detail(props) {

    const context = useContext(PanelsContext);
    const detail = context.detail;

    return (
        <div className="_detail">
            <div>
                {
                    (!detail || detail.logo)
                        ?
                        (
                            <h2>
                                <CatchCopy></CatchCopy>
                            </h2>
                        )
                        :
                        (
                            <>
                                <div className="_sptitle">
                                    <p className="_sptitle1">{detail.title1}</p>
                                    <p className="_sptitle2">{detail.title2}</p>
                                </div>
                                <div>
                                    {
                                        [...detail.detail || []].map((value, index) => {
                                            return (
                                                <p>{value}</p>
                                            );
                                        })
                                    }
                                </div>
                            </>

                            // [...detail.detail || []].map((value, index) => {
                            //     return (
                            //         <p>{value}</p>
                            //     );
                            // })
                        )
                }
            </div>
        </div>
    );
}

export default Detail;