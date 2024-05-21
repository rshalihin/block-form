import { Button } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { useDeviceType } from '../../controls/controls';
import { DesktopIcon, TabletIcon, MobileIcon } from '../../controls/svgIcon';
import './editor.scss';

const Responsive = () => {

    const Device = ( e ) => {
        const canvas = document.getElementsByClassName( 'edit-site-visual-editor__editor-canvas' );
        if(canvas.length > 0) {
            dispatch('core/edit-site').__experimentalSetPreviewDeviceType(e.target.closest('button').value);
        }else{
            dispatch('core/edit-post').__experimentalSetPreviewDeviceType(e.target.closest('button').value);
        }
    }

    const deviceType = useDeviceType();

    const DeviceIcon = () => {
        if('Desktop' === deviceType) {
            return <DesktopIcon />
        }
        if('Tablet' === deviceType) {
            return <TabletIcon />
        }
        if('Mobile' === deviceType) {
            return <MobileIcon />
        }
    }

    return (
        <>
            <div className='mrs-responsive'>
                <div className='mrs-units'>
                    <span><DeviceIcon /></span>
                    <div className='mrs-units-btn'>
                        <Button className={(deviceType === 'Desktop') ? 'active' : ''} value={'Desktop'} onClick={Device}><DesktopIcon /></Button>
                        <Button className={(deviceType === 'Tablet') ? 'active' : ''}  value={'Tablet'} onClick={Device}><TabletIcon /></Button>
                        <Button className={(deviceType === 'Mobile') ? 'active' : ''}  value={'Mobile'} onClick={Device}><MobileIcon /></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Responsive;