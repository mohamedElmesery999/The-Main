import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";

function Examples() {
    const [selected, setSelected] = useState();

    function hundleSelect(selectButton) {
        setSelected(selectButton)
    }

    let content = <p>please select a topic...</p>

    if (selected) {
        content = (

            <div id='tab-content'>

                <h3>{EXAMPLES[selected].title}</h3>
                <p>{EXAMPLES[selected].description}</p>
                <pre>
                    <code>{EXAMPLES[selected].code}</code>
                </pre>
            </div>
        );
    }

    // { !selected ? (<p>please select a topic ..</p>) : (
    //     <div id='tab-content'>

    //         <h3>{EXAMPLES[selected].title}</h3>
    //         <p>{EXAMPLES[selected].description}</p> 
    //         <pre>
    //             <code>{EXAMPLES[selected].code}</code>
    //         </pre>
    //     </div>
    // )

    return (
        <Section title="Examples" id='examples'>
            <menu>

                <TabButton isSelected={selected === 'Components'} onSelect={() => hundleSelect('Components')}>Components</TabButton>
                <TabButton isSelected={selected === 'Jsx'} onSelect={() => hundleSelect('Jsx')}>JSX</TabButton>
                <TabButton isSelected={selected === 'Props'} onSelect={() => hundleSelect('Props')}>Props</TabButton>
                <TabButton isSelected={selected === 'State'} onSelect={() => hundleSelect('State')}>State</TabButton>

            </menu>
            {content}
        </Section>
    );
}


export default Examples;