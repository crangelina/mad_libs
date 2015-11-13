var MadLib = {
	$finalText: $('#final-text'),
	$form     : $('form'),
	words     : {},

	init: function() {
		this.$form.on('submit', this.createStory);
		$('.final-text-button').on('click', this.restart);
	},

	createStory: function(event) {
		event.preventDefault();
		var values = MadLib.$form.serializeArray();
		$.each(values, function(i, item) {
			MadLib.words[item.name] = item.value;
		});
		$(this)[0].reset();
		MadLib.displayStory();
	},

	storyText: function() {
		return "I enjoy long, " + MadLib.words.adjective1 
		+ " walks on the beach, getting " + MadLib.words.verb1
		+ " in the rain, and romantic, candle-lit " + MadLib.words.noun1
		+ ". I am looking for a " + MadLib.words.noun2
		+ " with a " + MadLib.words.adjective2
		+ " personality. They should have the physique of a " + MadLib.words.noun3
		+ " and I would prefer if they knew how to " + MadLib.words.verb2
		+ ", clean, and wash my " + MadLib.words.noun4 + "."
	},

	displayStory: function() {
		MadLib.$form.hide();
		MadLib.$finalText.show();
		MadLib.$finalText.prepend(MadLib.storyText);
	},

	restart: function() {
		MadLib.$finalText.hide();
		MadLib.$form.show();
		location.reload();
	}


}

MadLib.init();
