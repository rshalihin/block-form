import { __ } from '@wordpress/i18n';
import Toggle from '../../components/toggle/toggle';
import { PanelBody, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import IconPicker from '../../components/icon-picker/icon-picker';
import MrsButtonGroup from "../../components/button-group/button-group";

const GeneralTab = ({attributes, setAttributes}) => {
    const { enableIcon, buttonIcon, buttonIconPosition, buttonLink, buttonLinkTarget, buttonLinkFollow, removeText } = attributes;
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
                attributes={enableIcon}
                setAttributes={setAttributes}
                attributesKey={'enableIcon'}
            />
            { enableIcon && 
            <>
            <IconPicker
                label={__('Icon')}
                attributes={buttonIcon}
                setAttributes={setAttributes}
                attributesKey={'buttonIcon'}
            />
            <MrsButtonGroup
                label={__('Icon Position')}
                attributes={buttonIconPosition}
                setAttributes={setAttributes}
                attributesKey={'buttonIconPosition'}
                border={false}
                items={[
                    { label: 'After Text', value: 'afterText' },
                    { label: 'Before Text', value: 'beforeText' }
                ]}
            />
            </>}
            <TextControl
                label={__('Button Link')}
                placeholder='#'
                value={buttonLink}
                onChange={(value) => setAttributes({buttonLink: value})}
            />
            <Toggle
                label={__('Open in new tab')}
                attributes={buttonLinkTarget}
                setAttributes={setAttributes}
                attributesKey={'buttonLinkTarget'}
            />
            <Toggle
                label={__('Add "NOFOLLOW" to the link')}
                attributes={buttonLinkFollow}
                setAttributes={setAttributes}
                attributesKey={'buttonLinkFollow'}
            />
            <Toggle
                label={__('Remove Text')}
                attributes={removeText}
                setAttributes={setAttributes}
                attributesKey={'removeText'}
            />
        </PanelBody>
        </>
    )
}
export default GeneralTab;