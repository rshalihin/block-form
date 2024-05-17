import { TabPanel, Icon } from '@wordpress/components'
import './tabControls.scss';

const TabControls = ({ attributes, setAttributes, GeneralTab = '', StyleTab = '', AdvancedTab = '' }) => {
    const Tabs = [];
    if ( GeneralTab ) {
        Tabs.push({
            name: 'general',
            title: <span className='mrs-tab-panel-title'><Icon icon={'admin-settings'}/> General</span>,
            className: 'mrs-general-tab',
        })
    }
    if ( StyleTab ) {
        Tabs.push({
            name: 'style',
            title: <span className='mrs-tab-panel-title'><Icon icon={'admin-customizer'}/> Style</span>,
            className:'mrs-style-tab',
        })
    }
    if ( AdvancedTab ) {
        Tabs.push({
            name: 'advanced',
            title: <span className='mrs-tab-panel-title'><Icon icon={'admin-generic'}/> Advanced</span>,
            className:'mrs-advanced-tab',
        })
    }

    return (
        <TabPanel
            className={"mrs-tab-panel"}
            activeClass="active-tab"
            tabs={Tabs}
        >
            {(tab) => {
                return(
                    <>
                    {tab.name === 'general' && GeneralTab &&
                    <GeneralTab
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />}
                    { tab.name === 'style' && StyleTab && 
                    <StyleTab
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />}
                    { tab.name === 'advanced' && AdvancedTab &&
                    <AdvancedTab
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />}

                    </>
                )
            }}
        </TabPanel>
    )
}
export default TabControls;