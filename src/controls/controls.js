import { useSelect, select } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

// Device type fn.
export const useDeviceType = () => {
    const canvas = document.getElementsByClassName( 'edit-site-visual-editor__editor-canvas' );
	const { deviceType } = useSelect(
		select => {
            if(canvas.length > 0) {
                return {
                    deviceType: select(
                        'core/edit-site'
                    )?.__experimentalGetPreviewDeviceType() || 'Desktop',
                }
            }else{
                return {
                    deviceType: select(
                        'core/edit-post'
                    )?.__experimentalGetPreviewDeviceType() || 'Desktop',
                }
            }
		},
		[]
	)

	return deviceType || ''
}

// Object to css convert fn.
export const cssString = (css) => {
    let result = '';
    for ( const selector in css ) {
        let cssProps = '';
        for ( const property in css[selector] ) {
            if (css[selector][property] && css[selector][property].length > 0) {
                cssProps += property + ':' + css[selector][property] + ';';
            }
        }
        result += '' !== cssProps ? selector + '{' + cssProps + '}' : '';
    }
    return result;
}

// Responsive alignment fn.
export const responsiveData = (deviceName, value, deviceType) => {
    switch ( deviceType ) {
        case 'Desktop':
            value = value.desktop;
            deviceName = deviceName.desktop;
            break
        case 'Tablet':
            value = value.tablet;
            deviceName = deviceName.tablet;
            break;
        case 'Mobile': 
            value = value.mobile;
            deviceName = deviceName.mobile;
            break;
        default:
            value = value.desktop;
            deviceName = deviceName.desktop;
    }

    return {
        deviceName,
        value
    }
}
// Responsive alignment fn.
export const responsiveAlignment = (deviceName, value, deviceType) => {
    switch ( deviceType ) {
        case 'Desktop':
            value = value.desktop;
            deviceName = deviceName.desktop;
            break
        case 'Tablet':
            value = value.tablet;
            deviceName = deviceName.tablet;
            break;
        case 'Mobile': 
            value = value.mobile;
            deviceName = deviceName.mobile;
            break;
        default:
            value = value.desktop;
            deviceName = deviceName.desktop;
    }

    return {
        deviceName,
        value
    }
}

// Create css link for responsive device,
export const createCssLink = (Id, linkId, href) => {
    // Tablet / Mobile Starts.
    const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
    const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );
    const canvas = document.getElementsByClassName( 'edit-site-visual-editor__editor-canvas' );

    if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length || 0 !== canvas.length ) {
        const preview = tabletPreview[0] || mobilePreview[0] || canvas[0];

		let iframe = false;

        if ( preview ) {
            iframe = preview.getElementsByTagName( 'iframe' )[0];
            if( 0 !== canvas.length ) {
                iframe = preview;
            }
        }

        const IframeDocument = iframe?.contentWindow.document || iframe?.contentDocument;

        linkId = IframeDocument.getElementById(linkId);

        
        if( null === linkId || undefined === linkId ) {
            const $link = document.createElement( 'link' );
            $link.setAttribute(
                'id',
                Id
            );
            $link.setAttribute(
                'href',
                href
            );
            $link.setAttribute(
                'media',
                'all'
            );
            $link.setAttribute(
                'rel',
                'stylesheet'
            );
    
            IframeDocument.head.appendChild( $link );
        }

    }
}

// Create js link for responsive device,
export const createJsLink = (Id, linkId, href) => {
    // Tablet / Mobile Starts.
    const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
    const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );
    const canvas = document.getElementsByClassName( 'edit-site-visual-editor__editor-canvas' );

    if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length || 0 !== canvas.length ) {
        const preview = tabletPreview[0] || mobilePreview[0] || canvas[0];

		let iframe = false;

        if ( preview ) {
            iframe = preview.getElementsByTagName( 'iframe' )[0];
            if( 0 !== canvas.length ) {
                iframe = preview;
            }
        }

        const IframeDocument = iframe?.contentWindow.document || iframe?.contentDocument;

        linkId = IframeDocument.getElementById(linkId);

        
        if( null === linkId || undefined === linkId ) {
            const $link = document.createElement( 'script' );
            $link.setAttribute(
                'id',
                Id
            );
            $link.setAttribute(
                'src',
                href
            );
            $link.setAttribute(
                'type',
                'text/javascript'
            );
    
            IframeDocument.body.appendChild( $link );
        }

    }
}

// Color controls fn.
export const colorControls = ( colorType, NormalColor, gradientColor, type = 'normal' ) => {
    let color;
	let hoverColor;

    if( type === 'normal' ) {
        switch( colorType ) {
            case 'transparent':
                color = 'transparent';
              break;
            case 'color':
                color = NormalColor;
              break;
            case 'gradient':
                color = gradientColor;
              break
            default:
                color = NormalColor;
        }
        return color;
    } else {
        switch( colorType ) {
            case 'transparentHover':
                hoverColor = 'transparent';
              break;
            case 'colorHover':
                hoverColor = NormalColor;
              break;
            case 'gradientHover':
                hoverColor = gradientColor;
              break
            default:
                hoverColor = NormalColor;
        }
        return hoverColor;
    }
}

// Removed empty css.
export const cssDataCheck = (value, unit = '') => {
    let data = '';
    if( 'object' === typeof value ) {
        for( let single in value ) {
            if(value[single].length > 0) {
                data += ` ${value[single]}${unit}`;
            }
        }
    }else {
        if(value && value.toString().length > 0) {
            data = `${value}${unit}`;
        }
    }        
    return data;
}

// Generate gradient hover color css.
export const gradientColorCss = (bgColor, selector, gradientColor, desktopCss, hoverSelector, transition = 0.3, zIndex = '') => {
    let data = {};
        if('gradient' === bgColor.hover.style) {
            data = {
                ...data,
                [selector]: {
                    ...desktopCss[selector],
                    'position': 'relative',
                    'overflow': 'hidden'
                },
                [`${selector} *`]: {
                    'position': 'relative',
                    'z-index': '2'
                },
                [`${selector}::after`]: {
                    'position': 'absolute',
                    'content': '""',
                    'inset': '0',
                    'background': gradientColor,
                    'z-index': '1',
                    'opacity': '0',
                    'transition': `opacity ${transition}s linear`
                },
                [`${hoverSelector}::after`]: {
                    'opacity': '1',
                    'z-index': zIndex,
                }
            }
        }
    return data;
}

// Generate box shadow css.
export const boxCss = (enable, device, shadow, color) => {
    if('' === shadow[color]) {
        return '';
    }
    return (enable) ? `${(shadow.unit[device] === 'inset') ? shadow.unit[device] : ''} ${shadow.device[device].top}px ${shadow.device[device].right}px ${shadow.device[device].bottom}px ${shadow.device[device].left}px ${shadow[color]}` : 'none';
}

// Check unit single or object.
export const unit = ( attributes, deviceType) => {
    if( 'object' !== typeof attributes.unit) {
        return attributes.unit;
    }
    return attributes.unit[deviceType]
}

// Set block unique Id function.
let firstTimeLoad = false;
export const setUniqueId = (setAttributes, clientId, isSelected, uniqueId) => {
    const [onLoad, setOnLoad] = useState(false);
    const { getBlock } = select('core/block-editor');

    const isBlockIdReserved = () => {
        const blocksClientIds = select('core/block-editor').getClientIdsWithDescendants();
        const allUniqueId = [];
        blocksClientIds.forEach((id) => {
            if ('undefined' !== typeof getBlock(id).attributes.uniqueId) {
                allUniqueId.push(getBlock(id).attributes.uniqueId);
            }
        })

        const set = new Set();
        if (firstTimeLoad) {
            firstTimeLoad = false;
            for (const item of allUniqueId) {
            	if (set.has(item)) {
            		setOnLoad(true);
            	}
            	set.add(item);
            }
        }
    };

    useEffect(() => {
        firstTimeLoad = true;
        setOnLoad(false);
    }, [isSelected])

    useEffect(() => {
        setTimeout(() => {
            isBlockIdReserved();
        }, 500)

        if (!uniqueId || onLoad) {
            setAttributes({
                uniqueId: clientId,
            });
            setOnLoad(false)
        }
    }, [onLoad])
}