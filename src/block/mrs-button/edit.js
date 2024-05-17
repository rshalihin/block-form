import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, AlignmentToolbar, RichText } from '@wordpress/block-editor';
import { useEffect, useState } from "@wordpress/element";
import Inspector  from './Inspector'
import { select } from '@wordpress/data';
import './editor.scss';

let firstTimeLoad = true;

export default function Edit(props) {
	const { clientId, attributes, setAttributes, isSelected } = props;
	const {
		uniqueId,
		enableIcon,
		buttonIconPosition,
		buttonIcon,
		buttonText,
		removeText,
		textAlignments,
		buttonLink,
		buttonLinkTarget,
		buttonLinkFollow
	} = attributes;

	const [ onLoad, setOnLoad ] = useState(false);
	const { getBlock } = select( 'core/block-editor' );

	const isBlockReserved = () => {
		const blockClientsIds = select( 'core/block-editor' ).getClientIdsWithDescendants();
		const allUniqueIds = [];
		blockClientsIds.forEach( id => {
			if( 'undefined' !== typeof getBlock(id).attributes.uniqueId )
            allUniqueIds.push(getBlock(id).attributes.uniqueId);
        });
		const set = new Set();
		if ( firstTimeLoad ){
			firstTimeLoad = false;
			for ( const item of allUniqueIds ) {
				if ( set.has(item) ) {
					setOnLoad(true);
				}
				set.add(item);
			}
		}
	}

	useEffect(() => {
		firstTimeLoad = true;
		setOnLoad(false);
	}, [isSelected])

	useEffect(() => {
		setTimeout(() => {
			isBlockReserved();
		}, 500);
		if( ! uniqueId && onLoad ) {
			setAttributes({uniqueId: clientId});
            setOnLoad(false);
		}
	}, [onLoad]);

	const updateButtonText = (newText) => {
		setAttributes({buttonText: newText});
	}
	const icon = () => {
		return (
			<i className={`mrs-button-icon ${buttonIcon}`}></i>
		);
	}
	console.log(uniqueId);

	return (
		<>
		<Inspector
			attributes= {attributes}
			setAttributes={setAttributes}
		/>
		<BlockControls>
			<AlignmentToolbar
                value={ textAlignments }
                onChange={ ( value ) => setAttributes( { textAlignments: value } ) }
            />
		</BlockControls>
		<div { ...useBlockProps() }>
			<div className={'mrs-button'} id={ 'mrs-button' }>
				<a target={ buttonLinkTarget } rel={ buttonLinkFollow ? 'nofollow noopener' : 'follow noopener' } >
					<div className="mrs-button-content">
						{ ('beforeText' === buttonIconPosition && enableIcon ) && icon() }
						<RichText
							tagName='span'
							value={ buttonText }
							onChange={updateButtonText}
							className={`${ ( removeText  ? 'mrs-text-hide' : '') }` }
							allowedFormats={[ 'core/bold', 'core/italic' ]}
						/>
						{ ('afterText' === buttonIconPosition && enableIcon ) && icon() }						
					</div>
				</a>
			</div>
		</div>
		</>
	);
}
