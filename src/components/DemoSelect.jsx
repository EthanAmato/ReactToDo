import { useState } from "react";
import TodoBoard from "./TodoBoard";
import DynamicContentDemo from "./DynamicContentDemo";
import StateDemo from "./StateDemo";
import ComponentDemoParent from "./ComponentDemoParent"
import RefDemo from './RefDemo'
function DemoSelect() {
    const [currentDemo, setCurrentDemo] = useState()

    function handleChange(demo) {
        let newDemo;
        switch (demo) {
            case "dynamic":
                newDemo = <DynamicContentDemo />
                break;
            case "state":
                newDemo = <StateDemo />
                break;
            case "components":
                newDemo = <ComponentDemoParent />

                break;
            case "ref":
                newDemo = <RefDemo />

                break;
            case "todo":
                newDemo = <TodoBoard />
                break;

            default:
                break;
        }

        if (newDemo) {
            console.log(newDemo)
            setCurrentDemo(() => newDemo)
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row text-center'>
                    <h1>Choose a demo</h1>
                </div>
                <div className='row m-auto justify-content-center'>
                    <div className='col-md-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => handleChange('dynamic')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Dynamic Content
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={() => handleChange('state')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                State
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={() => handleChange('components')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Components
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onChange={() => handleChange('ref')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                Ref
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" onChange={() => handleChange('todo')} />
                            <label className="form-check-label" htmlFor="flexRadioDefault5">
                                To Do
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {currentDemo || ""}
            </div>
        </>

    );
}


export default DemoSelect;