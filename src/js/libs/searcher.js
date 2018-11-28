class Searcher {

	init() {
		setTimeout(function() {
            let id, pac, arr = [];
            jQuery('.mp-page-form-item-input').each((i,el) => {
                id = jQuery(el).attr('id');
                arr.push(id);
            });
            jQuery('.pac-container').each((i,el) => {
            	pac = jQuery(el);
                pac.wrap('<div class="mp-'+arr[i]+'"/>');
                var searchList = jQuery('.mp-'+arr[i]).detach();
                jQuery('#'+arr[i]+' .mp-page-form-address-results').html(searchList);
            });
        }, 250);
	}

	search(data) {
		let results, location, url, searcher = new Searcher();
		jQuery("#"+data.input).geocomplete({
		    details:"#"+data.form,
		    types:["geocode", "establishment"]
		}).bind("geocode:result", function(event, result){
			results = result.address_components;
			location = searcher.searchData(results);
			location.vicinity = result.vicinity;
			location.address = result.formatted_address;
			location.lat = jQuery('#'+data.input).find('.mp-page-form-address-lat').val();
			location.lon = jQuery('#'+data.input).find('.mp-page-form-address-lon').val();
			jQuery('#'+data.input).parent().parent().parent().addClass('qstn-form-input-complete').removeClass('qstn-form-input-error');
		});
	}

	searchData(results) {
		var type, location = {};
		for (var i = 0; i < results.length; i++) {
			type = results[i].types[0]
			this.searchFilter(type, location, results[i]);
		}
		return location;
	}

	searchFilter(type, location, result) {
		switch(type) {
			case 'street_number':
				location.number = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'route':
				location.street = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'neighborhood':
				location.area = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'locality':
				location.city = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'administrative_area_level_2':
				location.county = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'administrative_area_level_1':
				location.state = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'country':
				location.country = {'short': result.short_name, 'long': result.long_name};
			break;
			case 'postal_code':
				location.zip = {'short': result.short_name, 'long': result.long_name};
			break;
		}
	}

	searchFormat(string) {
		string = string.replace(/\s+/g, '-').toLowerCase();
		return string;
	}

}