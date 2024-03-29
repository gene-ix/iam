import { useContext } from 'react';
import PanelsContext from './panelcontext';
import Logo from './logo';
import SpIcons from './spicons';

function Panel(props) {

    const context = useContext(PanelsContext);
    const panel = context.data;

    let index = props.index;

    return (
        <>
            <input
                type={'radio'}
                name='panel'
                id={index}
                defaultChecked={panel[index].checked}
                // disabled={panel[index].disabled || panel[index] == null || panel[index].length < 1}
                onChange={context.onTest}
                value={index}
            >
            </input>

            <label htmlFor={index}>

                <div className='pcpanel'>
                    {panel[index].logo ? <h1><Logo></Logo></h1> : <></>}
                    {panel[index].title1 ? <span>{panel[index].title1}</span> : <></>}
                    {panel[index].title2 ? <span>{panel[index].title2}</span> : <></>}
                </div>
                <div className='sppanel'>
                    <span><SpIcons index={index}></SpIcons></span>
                </div>
                {/* {panel[index].body ? <p>{panel[index].body}</p> : <></>} */}

            </label>
        </>
    );
}

export default Panel;
