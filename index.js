import edit from './edit';

import classnames from 'classnames';

import { registerBlockType, createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText, getFontSizeClass } from '@wordpress/block-editor';

registerBlockType( 'eternelblocks/text', {
	title: __( 'Text', 'eternelblocks' ),
	description: __('Simple text.', 'eternelblocks'),
	category: 'eternel-category',
	attributes: {
		text: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
		fontSize: {
			type: 'string',
		},
		customFontSize: {
			type: 'number',
		},
	},
	edit: edit,
	save: ({ attributes, className }) => {
		const { text, fontSize, customFontSize } = attributes;
		const fontSizeClass = getFontSizeClass( fontSize );
		const textClass = classnames( {
			[fontSizeClass]: fontSizeClass
		});
		const textStyle = {
			fontSize: fontSizeClass ? undefined : customFontSize, 
		}
		return (
			<div>
				{text &&
					<RichText.Content
						className={ textClass }
						style={ textStyle }
						tagName="p"
						value={text}
					/>
				}
			</div>
		)
	}
} );