import '../App.css';
import Panel from './panel';

function Panels(props) {

    let loading = props.loading;
    let data = props.data;
    let setJson = props.setJson;

    return (
        <div className='_panels'>
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

                                                <Panel
                                                    content={loading ? false : data[index]}
                                                    setJson={setJson}
                                                >
                                                </Panel>

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
    );

    // return (
    //     <div className='_panels'>
    //         {
    //             data.map((_ul, i) => {
    //                 return (
    //                     <ul>
    //                         {
    //                             _ul.map((_li, j) => {
    //                                 return (
    //                                     <li>
    //                                         <div>

    //                                             <Panel content={props.loading ? false : data[i][j]} setJson={props.setJson}></Panel>

    //                                         </div>
    //                                     </li>
    //                                 );
    //                             })
    //                         }
    //                     </ul>
    //                 );
    //             })
    //         }
    //     </div>
    // );
}

export default Panels;
