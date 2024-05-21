import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import MrsTypography from '../../components/typography/typography';

import './editor.scss';


const StyleTab = ({attributes, setAttributes}) => {
    const { fontTypography, buttonFontSize, fontSpacing, fontSizeDefault = { unit: 'px', value: 16 }, spacingDefaultValue = { unit: 'px', value: 0 }, lineDefaultValue = { unit: 'px', value: 0 } } = attributes;
    const [ openTab, setOpenTab ] = useState('textTab');
    return (
        <>
            { /** Text Tab Style */}
            <PanelBody
                title={__('Text')}
                opened={('textTab' === openTab) ? true : false }
                onToggle={ ()=> ('textTab' === openTab) ? setOpenTab('') : setOpenTab('textTab') }
            >
                <MrsTypography
                    attributes={{
                        family: fontTypography,
                        familyKey: 'fontTypography',
                        fontSize: buttonFontSize,
                        fontSizeKey: 'buttonFontSize',
                        fontSpacing: fontSpacing,
                        fontSpacingKey: 'fontSpacing',

                    }}
                    setAttributes={ setAttributes }
                    spacingDefaultValue={{unit: 'px', value: 0}}
                    fontSizeDefault={{unit: 'px', value: 20}}
                    lineDefaultValue={{unit: 'px', value: 32}}
                />
                
            </PanelBody>
            <PanelBody
                title={__('Icon')}
                opened={('iconStyle' === openTab) ? true : false }
                onToggle={ ()=> ('iconStyle' === openTab) ? setOpenTab('') : setOpenTab('iconStyle') }
            ></PanelBody>
            <PanelBody
                title={__('Background')}
                opened={('backgroundStyles' === openTab) ? true : false }
                onToggle={ ()=> ('backgroundStyles' === openTab) ? setOpenTab('') : setOpenTab('backgroundStyles') }
            ></PanelBody>
            <PanelBody
                title={__('Border')}
                opened={('border' === openTab) ? true : false }
                onToggle={ ()=> ('border' === openTab) ? setOpenTab('') : setOpenTab('border') }
            ></PanelBody>
            <PanelBody
                title={__('Box Shadow')}
                opened={('boxShadow' === openTab) ? true : false }
                onToggle={ ()=> ('boxShadow' === openTab) ? setOpenTab('') : setOpenTab('boxShadow') }
            ></PanelBody>
            <PanelBody
                title={__('Spacing')}
                opened={('spacing' === openTab) ? true : false }
                onToggle={ ()=> ('spacing' === openTab) ? setOpenTab('') : setOpenTab('spacing') }
            ></PanelBody>
        </>
    )
}
export default StyleTab;