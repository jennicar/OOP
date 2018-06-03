/*
DISPLAY/DATA FUNCTIONS

Coded by Jennica Ramones
Affiliated with Colorado Mesa University
Last updated: June 2018

note: should be in js folder
*/

// degree information
	function Degree(n, d, f, p, l){
		this.name = n;
		this.dept = d;
		this.format = f;
		this.program = p;
		this.location = l;
		this.keywords = '';
	}
    
    Degree.prototype = {
    	constructor: Degree,
		display_degrees:function(_degrees){
			for (var i = 0; i < _degrees.length; i++){
				// if you don't want the fade in effect, you can change it to show()
				$("#" + _degrees[i].name.replace(/ /g, '')).fadeIn();
			}
		}, 
		hide_degrees:function(_degrees){
			for (var i = 0; i < _degrees.length; i++){
				// if you don't want the fade out effect, you can change it to hide()
				$("#" + _degrees[i].replace(/ /g, '')).fadeOut();
			}
		}
    }
	
	// loading and displaying degrees
	function load_degrees(){
		// when adding degrees, make sure the degree name here matches the div id on the html page, avoid using symbols, did not account for it
		var accounting = new Degree("Accounting", "Business", "Online", ["Bachelor", "Master's"], ["Main Campus"]);
		accounting.keywords = "accounting public accounting general accounting master of business administration 3+2, 3+2 program";
		var addiction_studies = new Degree("Addiction Studies", "Social and Behavioral Sciences", "Traditional", ["Minor"], ["Main Campus"]);
		addiction_studies.keywords = "addiction studies addiction counselor human services"
		var agriculture_science = new Degree("Agriculture Science", "WCCC", "Online", ["Associate", "Master's"], ["Bishop Campus"]);
		agriculture_science.keywords = "agriculture science ag science ag sustainable agriculture horticultural livestock";
		
		degrees.push(accounting); degrees.push(addiction_studies); degrees.push(agriculture_science);
		
		var _degrees = new Degree("", "", "", [], []);
		degrees.sort(compare);
		_degrees.display_degrees(degrees);
	}
	
	// for sorting by degree name
	function compare(a, b){
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	}