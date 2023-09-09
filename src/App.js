import { useContext } from "react";
import './App.css';
import PanelsContext, { PanelsContextProvider } from "./js/panelcontext";
import Panel from './js/panel';
import Detail from './js/detail';

function App() {

    const contextPanels = useContext(PanelsContext);

    return (

        <div className="App">

            <PanelsContextProvider>

                <div className="_panels" id="_menu">
                    <div>
                        {
                            Array(3).fill(null).map((ul, i) => {
                                return (
                                    <ul>
                                        {
                                            Array(3).fill(null).map((li, j) => {
                                                let index = i * 3 + j;
                                                return (
                                                    <li>
                                                        <div>

                                                            <Panel index={index} onTest={contextPanels.testHandler}></Panel>

                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="_panels" id="_body">
                    <div>

                        <Detail detail={contextPanels}></Detail>

                    </div>
                </div>

            </PanelsContextProvider>
        </div>

    );
}

export default App;
