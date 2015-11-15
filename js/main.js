var MadLib = {
	$finalText: $('#final-text'),
	$form     : $('form'),
	words     : {},
	random    : _.random(1, 4),

	getStoryTemplate: function() {
		return _.template(this.templateString);
	},

	init: function() {
		this.templateString = $("#story" + MadLib.random).text();
		this.$form.on('submit', _.bind(this.createStory, this));
		$('.final-text-button').on('click', this.restart);
	},

	createStory: function(event) {
		var values = MadLib.$form.serializeArray();
		var storyTemplate = this.getStoryTemplate();
		event.preventDefault();
		$.each(values, function(i, item) {
			MadLib.words[item.name] = item.value;
		});
		MadLib.$form[0].reset();
		MadLib.displayStory(storyTemplate);
	},

	displayStory: function(storyTemplate) {
		MadLib.$form.hide();
		MadLib.$finalText.show();
		MadLib.$finalText.prepend(storyTemplate(MadLib.words));
	},

	restart: function() {
		MadLib.$finalText.hide();
		MadLib.$form.show();
		location.reload();
	}


}

MadLib.init();
