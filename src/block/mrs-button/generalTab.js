import { __ } from '@wordpress/i18n';
import Toggle from '../../components/toggle/toggle';
import { PanelBody, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import IconPicker from '../../components/icon-picker/icon-picker';

const GeneralTab = ({attributes, setAttributes}) => {
    const { enableIcon } = attributes;
    const [ openTab, setOpenTab ] = useState('general');
    return (
        <>
        {/* General PanelBody  */}
        <PanelBody
            title={__('General')}
            opened={('general' === openTab) ? true : false }
            onToggle={() => ( 'general' === openTab) ? setOpenTab('') : setOpenTab('general')}
        >
            <Toggle
                label={__('Enable Icon')}
                attributes={attributes}
                setAttributes={setAttributes}
                attributesKey={'enableIcon'}
            />
            { enableIcon && 
            <>
            <IconPicker
                label={__('Icon')}
                attributes={attributes}
                setAttributes={setAttributes}
                attributesKey={'buttonIcon'}
            />
            </>}
        </PanelBody>
        </>
    )
}
export default GeneralTab;