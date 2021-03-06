var type = 1;
var title = "Backyard BBQ";
var desc = "This project is for creating a new street, called <b>{job_location}<\/b> linked from the street you are standing on right now. You'll be pushing out the boundaries and expanding the world … and that is a good and noble thing to do.";
var completion = "<b>Create a new street: {job_location}<\/b><br><br>Hey buddy, that was a hard one, but with your help we were able to create that new street! You did {job_participation}% of the work, nice.<split butt_txt=\"View Rewards\" \/>Here's some stuff to thank you. Want to check out your handiwork? This teleport to {job_location} is on me.";

var duration = 0;
var claimable = 0;

var requirements = {
	"r593"	: {
		"bucket_id"	: "1",
		"group_id"	: "1",
		"type"		: "item",
		"class_id"	: "lemburger",
		"num"		: 100,
		"base_cost"	: 148,
		"desc"		: "Contribute Lemburgers - 100 needed!"
	},
	"r594"	: {
		"bucket_id"	: "1",
		"group_id"	: "1",
		"type"		: "item",
		"class_id"	: "wicked_bolognese_sauce",
		"num"		: 250,
		"base_cost"	: 59,
		"desc"		: "Contribute Wicked Bolognese Sauces - 250 needed!"
	},
	"r595"	: {
		"bucket_id"	: "1",
		"group_id"	: "1",
		"type"		: "item",
		"class_id"	: "pickle",
		"num"		: 1000,
		"base_cost"	: 21,
		"desc"		: "Contribute Pickles - 1000 needed!"
	},
	"r596"	: {
		"bucket_id"	: "1",
		"group_id"	: "2",
		"type"		: "work",
		"class_id"	: "mike_tyson_grill",
		"class_ids"	: {
			"0"	: "mike_tyson_grill"
		},
		"skill"		: "grilling_2",
		"num"		: 800,
		"base_cost"	: 14,
		"energy"	: 6,
		"wear"		: 3,
		"verb_name"	: "grill",
		"verb_past"	: "grilled",
		"desc"		: "Contribute work - 800 units needed with a Famous Pugilist Grill and Grilling II"
	},
	"r597"	: {
		"bucket_id"	: "1",
		"group_id"	: "2",
		"type"		: "work",
		"class_id"	: "saucepan",
		"class_ids"	: {
			"0"	: "saucepan"
		},
		"skill"		: "saucery_2",
		"num"		: 650,
		"base_cost"	: 11,
		"energy"	: 5,
		"wear"		: 1,
		"verb_name"	: "simmer",
		"verb_past"	: "simmered",
		"desc"		: "Contribute work - 650 units needed with a Saucepan and Saucery II"
	},
	"r598"	: {
		"bucket_id"	: "1",
		"group_id"	: "2",
		"type"		: "work",
		"class_id"	: "fruit_changing_machine",
		"class_ids"	: {
			"0"	: "fruit_changing_machine"
		},
		"skill"		: "masterchef_1",
		"num"		: 450,
		"base_cost"	: 14,
		"energy"	: 4,
		"wear"		: 4,
		"verb_name"	: "convert",
		"verb_past"	: "converted",
		"desc"		: "Contribute work - 450 units needed with a Fruit Changing Machine and Master Chef I"
	},
	"r599"	: {
		"bucket_id"	: "2",
		"group_id"	: "1",
		"type"		: "item",
		"class_id"	: "chillybusting_chili",
		"num"		: 150,
		"base_cost"	: 142,
		"desc"		: "Contribute Chilly-Busting Chilis - 150 needed!"
	},
	"r600"	: {
		"bucket_id"	: "2",
		"group_id"	: "1",
		"type"		: "item",
		"class_id"	: "super_veggie_kebabs",
		"num"		: 350,
		"base_cost"	: 58,
		"desc"		: "Contribute Super Veggie Kebabs - 350 needed!"
	},
	"r601"	: {
		"bucket_id"	: "2",
		"group_id"	: "1",
		"type"		: "item",
		"class_id"	: "simple_bbq",
		"num"		: 200,
		"base_cost"	: 86,
		"desc"		: "Contribute Simple BBQs - 200 needed!"
	},
	"r602"	: {
		"bucket_id"	: "2",
		"group_id"	: "2",
		"type"		: "work",
		"class_id"	: "frying_pan",
		"class_ids"	: {
			"0"	: "frying_pan"
		},
		"skill"		: "cheffery_3",
		"num"		: 850,
		"base_cost"	: 12,
		"energy"	: 5,
		"wear"		: 2,
		"verb_name"	: "fry",
		"verb_past"	: "fried",
		"desc"		: "Contribute work - 850 units needed with a Frying Pan and Cheffery III"
	},
	"r603"	: {
		"bucket_id"	: "2",
		"group_id"	: "2",
		"type"		: "work",
		"class_id"	: "knife_and_board",
		"class_ids"	: {
			"0"	: "knife_and_board"
		},
		"skill"		: "ezcooking_2",
		"num"		: 750,
		"base_cost"	: 11,
		"energy"	: 4,
		"wear"		: 2,
		"verb_name"	: "chop",
		"verb_past"	: "chopped",
		"desc"		: "Contribute work - 750 units needed with a Knife & Board and EZ Cooking II"
	},
	"r604"	: {
		"bucket_id"	: "2",
		"group_id"	: "2",
		"type"		: "work",
		"class_id"	: "blender",
		"class_ids"	: {
			"0"	: "blender"
		},
		"skill"		: "blending_2",
		"num"		: 890,
		"base_cost"	: 10,
		"energy"	: 5,
		"wear"		: 2,
		"verb_name"	: "blend",
		"verb_past"	: "blended",
		"desc"		: "Contribute work - 890 units needed with a Blender and Blending II"
	}
};


function onComplete(pc, multiplier){ // generated from rewards
	var rewards = {};
	rewards.xp = pc.stats_add_xp(Math.round(7500 * multiplier), false, {type: 'job_complete', job: this.class_tsid});
	rewards.mood = pc.metabolics_add_mood(Math.round(7500 * multiplier));
	rewards.energy = pc.metabolics_add_energy(Math.round(7500 * multiplier));
	pc.stats_add_favor_points("all", Math.round(150 * multiplier));
	rewards.favor = [];
	rewards.favor.push({giant: "all", points: Math.round(150 * multiplier)});
	rewards.items = [];
	rewards.recipes = [];
	return rewards;
}
var rewards = {
	"xp"		: 7500,
	"mood"		: 7500,
	"energy"	: 7500,
	"favor"		: {
		"0"	: {
			"giant"		: "all",
			"points"	: 150
		}
	}
};

function applyPerformanceRewards(pc){ // generated from rewards
	var rewards = {};
	rewards.xp = pc.stats_add_xp(50, false, {type: 'job_complete_performance', job: this.class_tsid});
	rewards.mood = pc.metabolics_add_mood(20);
	rewards.energy = pc.metabolics_add_energy(10);
	rewards.items = [];
	rewards.recipes = [];
	var items = pc.runDropTable("street_creation_rewards_a");
	for (var i in items){
		if (items[i].class_id){
			rewards.items.push({class_tsid: items[i].class_id, label: items[i].label, count: items[i].count});
		}else if (items[i].currants){
			if (!rewards.currants) rewards.currants = 0;
			rewards.currants += items[i].currants;
		}else if (items[i].favor){
			if (!rewards.favor) rewards.favor = [];
			rewards.favor.push(items[i].favor);
		}
	}
	var items = pc.runDropTable("street_creation_trophies");
	for (var i in items){
		if (items[i].class_id){
			rewards.items.push({class_tsid: items[i].class_id, label: items[i].label, count: items[i].count});
		}else if (items[i].currants){
			if (!rewards.currants) rewards.currants = 0;
			rewards.currants += items[i].currants;
		}else if (items[i].favor){
			if (!rewards.favor) rewards.favor = [];
			rewards.favor.push(items[i].favor);
		}
	}
	return rewards;
}
var performance_percent = 0;
var performance_cutoff = 5;
var performance_rewards = {
	"xp"		: 50,
	"mood"		: 20,
	"energy"	: 10,
	"drop_table"	: {
		"0"	: {
			"class_tsid"	: "street_creation_trophies",
			"label"		: "A Street Creator Trophy Piece",
			"count"		: 1
		}
	}
};

// generated ok (NO DATE)
