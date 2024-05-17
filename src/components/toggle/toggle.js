import { ToggleControl } from '@wordpress/components';

const Toggle = ({ label, attributes, attributesKey, setAttributes }) => {
    console.log(attributes);
    console.log(attributesKey);
    console.log(setAttributes);

    return (
        <div className={'mrs-toggle mrs-components-mb'}>
            <ToggleControl
                label={label}
                checked={attributes}
                onChange={ () => setAttributes({ [attributesKey] : ! attributes })}
            />
        </div>
    )
}

export default Toggle;