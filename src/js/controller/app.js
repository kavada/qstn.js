class App {

	init() {
		this.app = jQuery('.mp-app');
		this.meta();
		this.template();
		this.events();
	}

	meta() {
		let container, content;
		container = jQuery('head');
		content = 	`<title>Qstn.js | Mathew Maione</title>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">`;
		container.prepend(content);
	}

	template() {
		this.header();
		this.page();
		this.footer();
	}

	header() {
		let container, content;
		container = this.app;
		content = 	`<div class="mp-header mp-25"></div>`;
		container.append(content);
	}

	page() {
		let container, content;
		container = this.app;
		content = 	`<div class="mp-page">
						<div class="mp-page-container">
							<div class="mp-page-content"></div>
						</div>
					</div>`;
		container.append(content);
	}

	footer() {
		let container, content;
		container = this.app;
		content = 	`<div class="mp-footer"></div>`;
		container.append(content);
	}

	events() {
		jQuery(document).scroll(function() {
			let pos;
			pos = jQuery(document).scrollTop();
			if(pos > 75) {
				jQuery('.mp-header').addClass('active');
			}
			else {
				jQuery('.mp-header').removeClass('active');
			}
		});
	}

}