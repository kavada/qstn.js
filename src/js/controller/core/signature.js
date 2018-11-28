class Sign {

	init(obj) {

		let content, container, sign, signbox, data, image, width;
		container = jQuery('#qstn-form-item-'+obj.id+' .qstn-form-signature');
		content = `<div class="buildr-item-input-container">
						<div class="buildr-item-input-title"></div>
						<div class="buildr-item-input">
							<div id="`+obj.id+`" class="signature qstn-form-value" data-set="`+obj.id+`" data-type="`+obj.type+`"></div>
						</div>
					</div>`;
		container.html(content);

		sign = jQuery("#"+obj.id).jSignature({'UndoButton':true,'color':'#000','background-color': 'transparent','lineWidth':'1','decor-color': 'transparent'});
		signbox = jQuery('#qstn-form-item-'+obj.id+' .qstn-form-signature');
		
		setTimeout(() => {
			signatureResize();	
		}, 150);
		
		jQuery(window).resize(() => {
			signatureResize();
		});

		function signatureResize() {
			width = signbox.width();
			jQuery('#qstn-form-item-'+obj.id+' .jSignature').css({'height':'120px','width':width+'px'}).attr('height','80').attr('width',width);
		}

		// jQuery('.jsignature-undo').off('click').on('click', () => {
		// 	console.log('undo');
		// });

		// jQuery("#signature").bind('change', function(e){
		// 	data = sign.jSignature('getData', e.target.value);
		// 	if( sign.jSignature('getData', 'native').length == 0) {
		// 		jQuery('.buildr-item-input-signature-sign').val('');
		// 	}
		// 	else {
		// 		image = new Image();
		// 		image.src = 'data:' + data;
		// 		console.log(data);
		// 	}
		// });

	}

}