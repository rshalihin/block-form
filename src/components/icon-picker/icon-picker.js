import FontIconPicker from '@re.d_beard./react-fonticonpicker';

import '@re.d_beard./react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@re.d_beard./react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import icons from './icon-lists';
import './editor.scss';

const IconPicker = ({attributes, setAttributes, label, attributesKey, onChange = false }) => {
    const handleChange = (value) => {
        setAttributes({
            [attributesKey]: value
        });
    }
    const settings = {
        icons: icons,
        theme: 'default',
        renderUsing: 'class',
        value: attributes,
        onChange: onChange ? onChange : handleChange,
        isMulti: false
    }
    return (
        <>
            <div className={'mrs-icon-picker mrs-component-mb'}>
                <label className={ 'mrs-component-title'}>{label}</label>
                <FontIconPicker {...settings} />
            </div>
        </>
    );
}

export default IconPicker;