import { TypographyIcon } from './svgIcon';
import { Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import Select from 'react-select';
import StybleRanger from '../../components/rangeControl/RangeControl';

const fontFetch = async () => {
    try{
        const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCJIzfKoHlACqsmK1zDzl-OAsgtJPk8BtI');

        if ( response.status === 200 ) {
            const data = await response.json();
            return data;
        }
    } catch(e) {
        console.error('Error fetching Google Fonts:', error);
    }
}

const MrsTypography = ({  setAttributes, attributes, fontSizeDefault = { unit: 'px', value: 16 }, spacingDefaultValue = { unit: 'px', value: 0 }, lineDefaultValue = { unit: 'px', value: 0 }  }) => {
    const { family, familyKey, fontSize, fontSizeKey, fontSpacing, fontSpacingKey } = attributes;

    const [ typographyOpen, setTypographyOpen ] = useState(false);
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ allFonts, setAllFonts ] = useState([]);
    const [ fontList, setFontList ] = useState([]);

    const onMenuOpen = () => setIsMenuOpen(true);
    const onMenuClose = () => setIsMenuOpen(false);

    const updateFontTypography = ( nextFont ) => {
        setAttributes({ [familyKey]: { ...family, 'googleFont': nextFont.value}, 'typography': { ...family.typography, 'family': ( 'Default' !== nextFont?.value?.family) ? nextFont.value.family : '', 'weight': ( 'regular' !== nextFont?.value?.variants[0]) ? nextFont.value.variants[0] : '400' } })
    }
    const fontSearch = (inputSearch) => {
        let googleFonts = allFonts.filter((font) => {
            return font.label.toLowerCase().includes(inputSearch.toLowerCase());
        })
        setFontList(googleFonts);
    }

    useEffect(() => {
        if ( typographyOpen && allFonts.length === 0 ) {
            fontFetch().then( (data) => {
                let fonts = data.items.map((item) => {
                    return { label: item.family, value: { family: item.family, variants: item.variants}}
                })
                setAllFonts(fonts);
                setFontList(fonts.filter( (font, i ) => (i < 50) && font));
            });
        }
    }, [typographyOpen])
    return (
        <>
        <div className='mrs-typography mrs-components-mb'>
            <div className={`mrs-typography-btn ${ typographyOpen ? 'active' : ''}`}>
                <p className={'mrs-typography-title'}>{__('Typography')}</p>
                <Button onClick={() => setTypographyOpen( !typographyOpen )}>
                    <TypographyIcon />
                </Button>
            </div>
            <div className={`mrs-typography-font ${typographyOpen ? 'open' : ''}`}>
                <div className={'mrs-typography-family'}>
                { typographyOpen && 
                <>
                    <Select
                        onMenuOpen={onMenuOpen}
                        onMenuClose={onMenuClose}
                        options={[{ label: 'Default', value: { family: 'default', variants: ['regular']}}, ...fontList]}
                        placeholder={family?.googleFont?.family}
                        onChange={updateFontTypography}
                        className='mrs-typography-selections'
                        onInputChange={(inputValue) => fontSearch(inputValue)}
                    />
                    <StybleRanger
                        label={__('Font Size')}
                        setAttributes={setAttributes}
                        attributes={fontSize}
                        attributesKey={'fontSizeKey'}
                        units={['Px', '%', 'Em']}
                        defaultValue={fontSizeDefault}
                    />
                    </>
                    }
                </div>
            </div>
        </div>            
        </>
    )
}

export default MrsTypography;