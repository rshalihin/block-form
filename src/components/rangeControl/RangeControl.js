import { __ } from '@wordpress/i18n';
import {
	RangeControl,
    SelectControl,
    Button,
    __experimentalUnitControl as UnitControl
} from '@wordpress/components';
import Responsive from '../responsive/responsive';
import { useDeviceType } from '../../controls/controls';
import { ResetIcon } from '../../controls/svgIcon';

import './editor.scss';
import { useState } from '@wordpress/element';

const StybleRanger = (props) => {

    const [eventLoad, setEventLoad] = useState(false);

    const { attributes, attributesKey, setAttributes, label, units, min = 0, max = 200, step = 1, defaultValue = {unit: 'px', value: 10} } = props;

    // Check device (desktop/tablet/mobile).
    const deviceType = useDeviceType();

    // Ranger single value and multiple device value.
    const value = attributes?.device ? attributes?.device[deviceType] : attributes?.value;

    // Ranger value set function.
    const setValue = (newValue) => {
        // It's multiple device (desktop/tablet/mobile).
        if(attributes.device) {
            setAttributes({ [attributesKey]: { ...attributes, 'device': { ...attributes.device,
                    [deviceType]: newValue
                }}
            });
        }
         // It's single device (desktop)
        if( 'number' === typeof attributes.value) {
            setAttributes({ [attributesKey]: { ...attributes, 'value': newValue}});
        }
    }

    // Set unit function.
    const setUnit = (newValue) => {
        setAttributes({ [attributesKey]: { ...attributes, 'unit': {...attributes.unit, [deviceType]: newValue.toLowerCase()}}});
    }

    // Set default value function and reset.
    const setDefault = () => {
        // It's multiple device (desktop/tablet/mobile).
        if(attributes.device) {
            setAttributes({ [attributesKey]: { ...attributes, 'device': { ...attributes.device,
                    [deviceType]: defaultValue.value
                },
                'unit': {
                    ...attributes.unit,
                    [deviceType]: defaultValue.unit
                }
            }});
        }
        // It's single device (desktop)
        if( 'number' === typeof attributes.value) {
            setAttributes({ [attributesKey]: { ...attributes, 'value': defaultValue.value, 'unit': defaultValue.unit}});
        }
    }

    // When the reset button active & unActive.
    const activeResetButton = () => {
        if('object' === typeof attributes?.unit && defaultValue?.unit[deviceType] !== attributes?.unit[deviceType] || defaultValue?.value !== parseInt(value)) {
            return 'active'
        }
        return ''
    }

    // Active Label.
    const activeLabel = (e) => {
        let input = e.target.parentNode.parentNode.parentNode;
        let inputId = input.querySelector('input').getAttribute('id');
        e.target.setAttribute('for', inputId);
        setEventLoad( eventLoad );
    }
    
    return (
        <>
            <div className='mrs-range-control mrs-component-mb' data-class='mrs-range-control'>
                <div className='mrs-header-control'>
                    <div className='mrs-header-control-left'>
                        <label onClick={(e) => activeLabel(e)} className='mrs-ranger-title'>{label}</label>
                        {attributes.device && <Responsive />}
                    </div>
                    <div className='mrs-header-control-right'>
                        <Button className={`mrs-header-control-reset ${activeResetButton()}`} onClick={() => setDefault()}> 
                            <ResetIcon />
                        </Button>
                        {units && <div className='mrs-units'>
                            <span>{( 'object' !== typeof attributes.unit) ? attributes?.unit : attributes.unit[deviceType]}</span>
                            <div className='mrs-units-btn'>
                                {units.map((item, i)=>(
                                    <Button className={attributes.unit[deviceType] === item.toLowerCase() ? 'active' : ''} key={i} value={item} onClick={(e) => setUnit(e.target.value)}> {item} </Button>
                                ))}
                            </div>
                        </div>}
                    </div>
                </div>
                <RangeControl
                    value={ value }
                    onChange={ ( newValue ) =>  setValue( newValue )}
                    min={ min }
                    max={ ( 'object' === typeof attributes?.unit && '%' === attributes?.unit[deviceType] ) ? 100 : max }
                    step={ step }
                />
            </div>
        </>
    );
}

export default StybleRanger;