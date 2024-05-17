import { InspectorControls } from "@wordpress/block-editor";
import TabControls from '../../components/tabControls/tabControls';
import GeneralTab from './generalTab';
import StyleTab from './styleTab';
import AdvancedTab from './advancedTab';

const Inspector = ({attributes, setAttributes}) => {
    return (
        <div>
            <InspectorControls>
                <TabControls
                    attributes={attributes}
                    setAttributes={setAttributes}
                    GeneralTab={GeneralTab}
                    StyleTab={StyleTab}
                    AdvancedTab={AdvancedTab}
                />
            </InspectorControls>
        </div>
    )
}
export default Inspector;