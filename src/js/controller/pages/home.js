class Home {

	init() {
		this.template();
	}

	template() {
		let container, content;
		container = jQuery('.mp-page-content');
		content = 	`<div class="mp-page-sections">
						<div class="mp-page-cover mp-wrapper"></div>
						<div class="mp-page-section mp-wrapper">
							<div class="mp-container">
								<div class="mp-wrapper mp-page-section-right">
									<div class="mp-page-section-block mp-xs-100 mp-sm-50">
										<div class="mp-page-section-image mp-wrapper mp-xs-100 mp-sm-90">
											<div class="mp-page-cover-form">
												<div class="mp-form">
													<div class="mp-form-container">
														<div class="mp-form-content qstn-pup-form"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="mp-page-section-block mp-xs-100 mp-sm-50">
										<div class="mp-page-section-content">
											<div class="mp-page-section-title">Multi section form</div>
											<div class="mp-page-section-list">
												<div class="mp-page-section-item">Dynamic validation feedback</div>
												<div class="mp-page-section-item">Google Maps address search</div>
												<div class="mp-page-section-item">Variety of input types</div>
												<div class="mp-page-section-item">Date/Time picker</div>
												<div class="mp-page-section-item">And more...</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mp-page-section mp-wrapper">
							<div class="mp-container">
								<div class="mp-wrapper mp-page-section-left">
									<div class="mp-page-section-block mp-xs-100 mp-sm-50">
										<div class="mp-page-section-content">
											<div class="mp-page-section-title">Contact form</div>
											<div class="mp-page-section-list">
												<div class="mp-page-section-item">Email validation</div>
												<div class="mp-page-section-item">Phone number validation + masking</div>
												<div class="mp-page-section-item">Custom thank you note</div>
												<div class="mp-page-section-item">AJAX call on success</div>
											</div>
										</div>
									</div>
									<div class="mp-page-section-block mp-xs-100 mp-sm-50">
										<div class="mp-page-section-image mp-wrapper mp-xs-100 mp-sm-90">
											<div class="mp-page-cover-form">
												<div class="mp-form">
													<div class="mp-form-container">
														<div class="mp-form-content qstn-contact-form"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="mp-page-section mp-wrapper">
							<div class="mp-container">
								<div class="mp-wrapper mp-page-section-right">
									<div class="mp-page-section-block mp-xs-100 mp-sm-50">
										<div class="mp-page-section-image mp-wrapper mp-xs-100 mp-sm-90">
											<div class="mp-page-cover-form">
												<div class="mp-form">
													<div class="mp-form-container">
														<div class="mp-form-content qstn-sign-form"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="mp-page-section-block mp-xs-100 mp-sm-50">
										<div class="mp-page-section-content">
											<div class="mp-page-section-title">Legal + Contract form</div>
											<div class="mp-page-section-list">
												<div class="mp-page-section-item">Legal / Contract text block</div>
												<div class="mp-page-section-item">Dynamic text appended to contract</div>
												<div class="mp-page-section-item">Electronic signature</div>
												<div class="mp-page-section-item">Date validation</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
		container.append(content);
		this.cover();
	}

	cover() {
		let container, content, formData, player, qstn = new Qstn();
		container = jQuery('.mp-page-cover');
		content = 	`<div class="mp-container mp-page-cover-content">
						<div class="mp-wrapper">
							<div class="mp-page-cover-title">Qstn.js</div>
						</div>
					</div>`;
		container.append(content);

		qstn.build({"id":"qstn-pup-form","name":"pup-form","sections":[{"title":"Give us the basics about your pup.","hasTitle":true,"fields":[{"title":"What is your pups name?","placeholder":"Kona","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"dog-name","min":"2","max":"24","required":true},"class":{"item":"","parent":""}},{"title":"What is your pups breed?","placeholder":"","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"select","set":"dog-breed","min":"3","max":"36","required":true,"options":[{"title":"affenpinschers","value":"affenpinschers"},{"title":"afghan hounds","value":"afghan-hounds"},{"title":"airedale terriers","value":"airedale-terriers"},{"title":"akitas","value":"akitas"},{"title":"alaskan malamutes","value":"alaskan-malamutes"},{"title":"american english coonhounds","value":"american-english-coonhounds"},{"title":"american eskimo dogs","value":"american-eskimo-dogs"},{"title":"american foxhounds","value":"american-foxhounds"},{"title":"american staffordshire terriers","value":"american-staffordshire-terriers"},{"title":"anatolian shepherd dogs","value":"anatolian-shepherd-dogs"},{"title":"australian cattle dogs","value":"australian-cattle-dogs"},{"title":"australian shepherds","value":"australian-shepherds"},{"title":"australian terriers","value":"australian-terriers"},{"title":"basenjis","value":"basenjis"},{"title":"basset hounds","value":"basset-hounds"},{"title":"beagles","value":"beagles"},{"title":"bearded collies","value":"bearded-collies"},{"title":"beaucerons","value":"beaucerons"},{"title":"bedlington terriers","value":"bedlington-terriers"},{"title":"belgian malinois","value":"belgian-malinois"},{"title":"belgian sheepdogs","value":"belgian-sheepdogs"},{"title":"belgian tervuren","value":"belgian-tervuren"},{"title":"bergamasco sheepdogs","value":"bergamasco-sheepdogs"},{"title":"berger picards","value":"berger-picards"},{"title":"bernese mountain dogs","value":"bernese-mountain-dogs"},{"title":"bichons frises","value":"bichons-frises"},{"title":"black and tan coonhounds","value":"black-and-tan-coonhounds"},{"title":"black russian terriers","value":"black-russian-terriers"},{"title":"bloodhounds","value":"bloodhounds"},{"title":"bluetick coonhounds","value":"bluetick-coonhounds"},{"title":"boerboels","value":"boerboels"},{"title":"border collies","value":"border-collies"},{"title":"border terriers","value":"border-terriers"},{"title":"borzois","value":"borzois"},{"title":"boston terriers","value":"boston-terriers"},{"title":"bouviers des flandres","value":"bouviers-des-flandres"},{"title":"boxers","value":"boxers"},{"title":"briards","value":"briards"},{"title":"brittanys","value":"brittanys"},{"title":"brussels griffons","value":"brussels-griffons"},{"title":"bull terriers","value":"bull-terriers"},{"title":"bulldogs","value":"bulldogs"},{"title":"bullmastiffs","value":"bullmastiffs"},{"title":"cairn terriers","value":"cairn-terriers"},{"title":"canaan dogs","value":"canaan-dogs"},{"title":"cane corso","value":"cane-corso"},{"title":"cardigan welsh corgis","value":"cardigan-welsh-corgis"},{"title":"cavalier king charles spaniels","value":"cavalier-king-charles-spaniels"},{"title":"cesky terriers","value":"cesky-terriers"},{"title":"chihuahuas","value":"chihuahuas"},{"title":"chinese crested","value":"chinese-crested"},{"title":"chinese shar-pei","value":"chinese-shar-pei"},{"title":"chinooks","value":"chinooks"},{"title":"chow chows","value":"chow-chows"},{"title":"cirneco dell’etna","value":"cirneco-dell’etna"},{"title":"collies","value":"collies"},{"title":"coton de tulear","value":"coton-de-tulear"},{"title":"dachshunds","value":"dachshunds"},{"title":"dalmatians","value":"dalmatians"},{"title":"dandie dinmont terriers","value":"dandie-dinmont-terriers"},{"title":"doberman pinschers","value":"doberman-pinschers"},{"title":"dogues de bordeaux","value":"dogues-de-bordeaux"},{"title":"english foxhounds","value":"english-foxhounds"},{"title":"english toy spaniels","value":"english-toy-spaniels"},{"title":"entlebucher mountain dogs","value":"entlebucher-mountain-dogs"},{"title":"finnish lapphunds","value":"finnish-lapphunds"},{"title":"finnish spitz","value":"finnish-spitz"},{"title":"fox terriers (smooth)","value":"fox-terriers-(smooth)"},{"title":"fox terriers (wire)","value":"fox-terriers-(wire)"},{"title":"french bulldogs","value":"french-bulldogs"},{"title":"german pinschers","value":"german-pinschers"},{"title":"german shepherd dogs","value":"german-shepherd-dogs"},{"title":"giant schnauzers","value":"giant-schnauzers"},{"title":"glen of imaal terriers","value":"glen-of-imaal-terriers"},{"title":"great danes","value":"great-danes"},{"title":"great pyrenees","value":"great-pyrenees"},{"title":"greater swiss mountain dogs","value":"greater-swiss-mountain-dogs"},{"title":"greyhounds","value":"greyhounds"},{"title":"harriers","value":"harriers"},{"title":"havanese","value":"havanese"},{"title":"ibizan hounds","value":"ibizan-hounds"},{"title":"icelandic sheepdogs","value":"icelandic-sheepdogs"},{"title":"irish terriers","value":"irish-terriers"},{"title":"irish wolfhounds","value":"irish-wolfhounds"},{"title":"italian greyhounds","value":"italian-greyhounds"},{"title":"japanese chin","value":"japanese-chin"},{"title":"keeshonden","value":"keeshonden"},{"title":"kerry blue terriers","value":"kerry-blue-terriers"},{"title":"komondorok","value":"komondorok"},{"title":"kuvaszok","value":"kuvaszok"},{"title":"lagotti romagnoli","value":"lagotti-romagnoli"},{"title":"lakeland terriers","value":"lakeland-terriers"},{"title":"leonbergers","value":"leonbergers"},{"title":"lhasa apsos","value":"lhasa-apsos"},{"title":"lowchen","value":"lowchen"},{"title":"maltese","value":"maltese"},{"title":"manchester terriers","value":"manchester-terriers"},{"title":"mastiffs","value":"mastiffs"},{"title":"miniature american shepherds","value":"miniature-american-shepherds"},{"title":"miniature bull terriers","value":"miniature-bull-terriers"},{"title":"miniature pinschers","value":"miniature-pinschers"},{"title":"miniature schnauzers","value":"miniature-schnauzers"},{"title":"neapolitan mastiffs","value":"neapolitan-mastiffs"},{"title":"newfoundlands","value":"newfoundlands"},{"title":"norfolk terriers","value":"norfolk-terriers"},{"title":"norwegian buhunds","value":"norwegian-buhunds"},{"title":"norwegian elkhounds","value":"norwegian-elkhounds"},{"title":"norwegian lundehunds","value":"norwegian-lundehunds"},{"title":"norwich terriers","value":"norwich-terriers"},{"title":"old english sheepdogs","value":"old-english-sheepdogs"},{"title":"otterhounds","value":"otterhounds"},{"title":"papillons","value":"papillons"},{"title":"parson russell terriers","value":"parson-russell-terriers"},{"title":"pekingese","value":"pekingese"},{"title":"pembroke welsh corgis","value":"pembroke-welsh-corgis"},{"title":"petits bassets griffons vendeens","value":"petits-bassets-griffons-vendeens"},{"title":"pharaoh hounds","value":"pharaoh-hounds"},{"title":"plotts","value":"plotts"},{"title":"pointers","value":"pointers"},{"title":"pointers (german shorthaired)","value":"pointers-(german-shorthaired)"},{"title":"pointers (german wirehaired)","value":"pointers-(german-wirehaired)"},{"title":"polish lowland sheepdogs","value":"polish-lowland-sheepdogs"},{"title":"pomeranians","value":"pomeranians"},{"title":"poodles","value":"poodles"},{"title":"portuguese podengo pequenos","value":"portuguese-podengo-pequenos"},{"title":"portuguese water dogs","value":"portuguese-water-dogs"},{"title":"pugs","value":"pugs"},{"title":"puli","value":"puli"},{"title":"pyrenean shepherds","value":"pyrenean-shepherds"},{"title":"rat terriers","value":"rat-terriers"},{"title":"redbone coonhounds","value":"redbone-coonhounds"},{"title":"retrievers (chesapeake bay)","value":"retrievers-(chesapeake-bay)"},{"title":"retrievers (curly-coated)","value":"retrievers-(curly-coated)"},{"title":"retrievers (flat-coated)","value":"retrievers-(flat-coated)"},{"title":"retrievers (golden)","value":"retrievers-(golden)"},{"title":"retrievers (labrador)","value":"retrievers-(labrador)"},{"title":"retrievers (nova scotia duck tolling)","value":"retrievers-(nova-scotia-duck-tolling)"},{"title":"rhodesian ridgebacks","value":"rhodesian-ridgebacks"},{"title":"rottweilers","value":"rottweilers"},{"title":"russell terriers","value":"russell-terriers"},{"title":"salukis","value":"salukis"},{"title":"samoyeds","value":"samoyeds"},{"title":"schipperkes","value":"schipperkes"},{"title":"scottish deerhounds","value":"scottish-deerhounds"},{"title":"scottish terriers","value":"scottish-terriers"},{"title":"sealyham terriers","value":"sealyham-terriers"},{"title":"setters (english)","value":"setters-(english)"},{"title":"setters (gordon)","value":"setters-(gordon)"},{"title":"setters (irish)","value":"setters-(irish)"},{"title":"setters (irish red and white)","value":"setters-(irish-red-and-white)"},{"title":"shetland sheepdogs","value":"shetland-sheepdogs"},{"title":"shiba inu","value":"shiba-inu"},{"title":"shih tzu","value":"shih-tzu"},{"title":"siberian huskies","value":"siberian-huskies"},{"title":"silky terriers","value":"silky-terriers"},{"title":"skye terriers","value":"skye-terriers"},{"title":"sloughis","value":"sloughis"},{"title":"soft coated wheaten terriers","value":"soft-coated-wheaten-terriers"},{"title":"spaniels (american water)","value":"spaniels-(american-water)"},{"title":"spaniels (boykin)","value":"spaniels-(boykin)"},{"title":"spaniels (clumber)","value":"spaniels-(clumber)"},{"title":"spaniels (cocker)","value":"spaniels-(cocker)"},{"title":"spaniels (english cocker)","value":"spaniels-(english-cocker)"},{"title":"spaniels (english springer)","value":"spaniels-(english-springer)"},{"title":"spaniels (field)","value":"spaniels-(field)"},{"title":"spaniels (irish water)","value":"spaniels-(irish-water)"},{"title":"spaniels (sussex)","value":"spaniels-(sussex)"},{"title":"spaniels (welsh springer)","value":"spaniels-(welsh-springer)"},{"title":"spanish water dogs","value":"spanish-water-dogs"},{"title":"spinoni italiani","value":"spinoni-italiani"},{"title":"st. bernards","value":"st.-bernards"},{"title":"staffordshire bull terriers","value":"staffordshire-bull-terriers"},{"title":"standard schnauzers","value":"standard-schnauzers"},{"title":"swedish vallhunds","value":"swedish-vallhunds"},{"title":"tibetan mastiffs","value":"tibetan-mastiffs"},{"title":"tibetan spaniels","value":"tibetan-spaniels"},{"title":"tibetan terriers","value":"tibetan-terriers"},{"title":"toy fox terriers","value":"toy-fox-terriers"},{"title":"treeing walker coonhounds","value":"treeing-walker-coonhounds"},{"title":"vizslas","value":"vizslas"},{"title":"weimaraners","value":"weimaraners"},{"title":"welsh terriers","value":"welsh-terriers"},{"title":"west highland white terriers","value":"west-highland-white-terriers"},{"title":"whippets","value":"whippets"},{"title":"wirehaired pointing griffons","value":"wirehaired-pointing-griffons"},{"title":"wirehaired vizslas","value":"wirehaired-vizslas"},{"title":"xoloitzcuintli","value":"xoloitzcuintli"},{"title":"yorkshire terriers","value":"yorkshire-terriers"}]},"class":{"item":"qstn-radio-dog-breed","parent":""}},{"title":"What is your pups gender?","placeholder":"","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"radios","set":"dog-gender","min":"3","max":"36","required":true,"radio":[{"title":"female","value":"female"},{"title":"male","value":"male"}],"sizes":"mp-xs-50 mp-sm-50 mp-md-33"},"class":{"item":"qstn-radio-dog-gender","parent":""}},{"title":"Is your pup spayed or neutered?","placeholder":"","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"radios","set":"dog-fixed","min":"3","max":"36","required":true,"radio":[{"title":"yes","value":"yes"},{"title":"no","value":"no"}],"sizes":"mp-xs-50 mp-sm-50 mp-md-33"},"class":{"item":"qstn-radio-dog-fixed","parent":""}}]},{"title":"More info about your pup.","hasTitle":true,"fields":[{"title":"When was your pup born?","placeholder":"01/01/2018","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"dateonly","set":"dog-age","min":"3","max":"36","required":true},"class":{"item":"qstn-radio-dog-age","parent":""}},{"title":"What is your pups current weight?","placeholder":"8","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"dog-weight-current","min":"1","max":"3","required":true},"class":{"item":"","parent":""}},{"title":"What is your pups ideal weight?","placeholder":"12","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"dog-weight-ideal","min":"1","max":"3","required":true},"class":{"item":"","parent":""}},{"title":"What is your pups activity level?","placeholder":"","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"radios","set":"dog-activity","min":"3","max":"36","required":true,"radio":[{"title":"not active","value":"not active"},{"title":"normal","value":"normal"},{"title":"active","value":"active"},{"title":"very active","value":"very-active"}],"sizes":"mp-xs-50 mp-sm-50 mp-md-25"},"class":{"item":"qstn-radio-dog-activity","parent":""}}]},{"title":"Give us the basics about the hooman.","hasTitle":true,"fields":[{"title":"What is the hoomans name?","placeholder":"Barry Allen","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"hooman-name","min":"2","max":"24","required":true},"class":{"item":"","parent":""}},{"title":"What is the hoomans email?","placeholder":"me@example.com","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"email","min":"2","max":"24","required":true},"class":{"item":"","parent":""}},{"title":"Where is the hooman located?","placeholder":"25521 Spectrum Irvine, CA 92618","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"location","set":"hooman-location","min":"2","max":"24","required":true},"search":{"form":"searcher-default-address-form","input":"searcher-default-address-input"},"class":{"item":"","parent":""}}]}],"submit":{"button":{"states":{"prev":{"title":"back"},"next":{"title":"continue"},"finish":{"title":"submit"}},"class":"","style":"background: var(--mp-orange);color: #fff"},"message":"thank you for signing up!"},"ajax":{"url":"send-contact"}});
		qstn.build({"id":"qstn-contact-form","name":"contact-form","sections":[{"title":"","hasTitle":false,"fields":[{"title":"Name","placeholder":"Barry Allen","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"hooman-name","min":"2","max":"24","required":true},"class":{"item":"","parent":""}},{"title":"Email","placeholder":"me@example.com","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"email","min":"2","max":"24","required":true},"class":{"item":"","parent":""}},{"title":"Phone","placeholder":"(949) 999-9999","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"phone","min":"14","max":"14","required":true},"class":{"item":"qstn-form-phone-mask","parent":""}},{"title":"Message","placeholder":"What's on your mind","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"textarea","set":"","min":"10","max":"250","required":true},"class":{"item":"","parent":""}}]}],"submit":{"button":{"states":{"prev":{"title":"back"},"next":{"title":"continue"},"finish":{"title":"submit"}},"class":"","style":"background: var(--mp-orange);color: #fff"},"message":"thank you for signing up!"},"ajax":{"url":"send-contact"}});
		qstn.build({"id":"qstn-sign-form","name":"xeomin-consent","sections":[{"title":"Patient Informed Consent Form","hasTitle":true,"fields":[{"title":"","placeholder":"","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"notes","set":"agreement","required":false,"data":"<div class='qstn-form-notes-section'><div class='qstn-form-notes-text'>I, <div class='qstn-form-notes-dynamic-input-field' id='qstn-form-notes-xeomin-name'></div> understand and agree that all services rendered will be charged directly to me, and I am personally responsible for payment. I further agree, in the event of non-payment, to bear the cost of collection, and/or court costs and reasonable legal fees, should they be required. By signing below, I acknowledge that I have read the foregoing informed consent, have had the opportunity to discuss any questions that I have with my doctor to my satisfaction, and consent to the treatment described above with its associated risks. I understand that I have the right not to consent to this treatment and that my consent is voluntary. I hereby release the doctor, the person performing the XEOMIN® injection and the facility from liability associated with this procedure.</div></div>"},"class":{"item":"","parent":""}},{"title":"patient name","placeholder":"Barry Allen","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"dynamictext","set":"xeomin-patient-name","min":"3","max":"36","required":true},"operation":{"target":"qstn-form-notes-xeomin-name","action":"update-html-on-keyup"},"class":{"item":"","parent":""}},{"title":"patient signature","placeholder":"","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"signature","set":"xeomin-signature-name","required":true},"class":{"item":"","parent":""}},{"title":"date","placeholder":"01/24/1984","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"xeomin-patient-date","min":"10","max":"10","required":true},"class":{"item":"qstn-form-date-mask","parent":""}},{"title":"witness signature","placeholder":"","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"signature","set":"xeomin-witness-signature-name","required":true},"class":{"item":"","parent":""}},{"title":"date","placeholder":"01/24/1984","size":"mp-xs-100 mp-sm-100 mp-md-100 mp-lg-100","params":{"type":"text","set":"xeomin-witness-date","min":"10","max":"10","required":true},"class":{"item":"qstn-form-date-mask","parent":""}}]}],"submit":{"button":{"states":{"prev":{"title":"back"},"next":{"title":"continue"},"finish":{"title":"submit"}},"class":"","style":"background:#233768;color: #fff;"},"message":"thank you for signing up!"},"ajax":{"url":"send-audit"}});
	}

}