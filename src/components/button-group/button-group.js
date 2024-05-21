import {  } from "@wordpress/i18n";
import { ButtonGroup, Button } from "@wordpress/components";
import "./editor.scss";

const MrsButtonGroup = ({ label, attributes, setAttributes, attributesKey, border=false, items, onClick=false }) => {
    const setButtonGroup = ( value ) => {
        setAttributes({
            [attributesKey]: value
        });
    }

    return (
        <>
        <ButtonGroup className={`mrs-button-group mrs-components-mb`}>
            <div className={'mrs-components-top'}>
                <label className='mrs-components-title'>{label}</label>
            </div>
            <div className={`mrs-button-group-list ${border ? 'has-border' : ''}`}>
                {items && items.map( (item, i ) => (
                    <Button
                        key={i}
                        className={`mrs-button-group-item ${ attributes === item.value? 'is-active' : ''}`}
                        onClick={(e) => onClick ? onClick( e.target.closest('button').value ) : setButtonGroup( e.target.closest('button').value)}
                        value={item.value}
                    >
                        <span>{item.label}</span>
                    </Button>
                ))}
            </div>
        </ButtonGroup>
        </>
    );
}

export default MrsButtonGroup;
