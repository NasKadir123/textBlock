import classnames from 'classnames';

import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { PanelBody, FontSizePicker } from '@wordpress/components';
import { InspectorControls, RichText, withFontSizes } from '@wordpress/block-editor';

class SimpleTextClass extends Component {

	onChangeText = ( text ) => {
		this.props.setAttributes( { text } )
	}

	render() {
		const { className, attributes, fontSize, setFontSize } = this.props;
		const { text } = attributes;

		const fontSizes = [
	        {
	            name: __( 'Small', 'eternelblocks' ),
	            slug: 'small',
	            size: 12,
	        },
	        {
	            name: __( 'Normal', 'eternelblocks' ),
	            slug: 'normal',
	            size: 16,
	        },
	        {
	            name: __( 'Medium', 'eternelblocks' ),
	            slug: 'medium',
	            size: 20,
	        },
	        {
	            name: __( 'Large', 'eternelblocks' ),
	            slug: 'large',
	            size: 36,
	        },
	        {
	            name: __( 'Huge', 'eternelblocks' ),
	            slug: 'huge',
	            size: 48,
	        },
	    ];
	    const fallbackFontSize = 14;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__("Main Settings", "eternelblocks")}>
						<FontSizePicker
				            fontSizes={ fontSizes }
							fallbackFontSize={ fallbackFontSize }
							value={ fontSize.size }
							onChange={ setFontSize }
				        />
					</PanelBody>
				</InspectorControls>
				
				<div className={ className }>
					<RichText
						tagName={ "p" }
						onChange={ this.onChangeText }
						value={ text }
						placeholder={ __("Write a Text", "eternelblocks") }
						style={{ fontSize: fontSize.size }}
					/>
				</div>
			</>
		)
	}
}

export default compose(
	withFontSizes('fontSize')
)(SimpleTextClass);