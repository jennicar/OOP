// degree information
	function Degree(n, d, f, p, l){
		this.name = n;
		this.dept = d;
		this.format = f;
		this.program = p;
		this.location = l;
	}
    
    Degree.prototype = {
    	constructor: Degree,
		display_degrees:function(_degrees){
			var div = document.getElementById('degrees_grid');
			var html = "";
			var img_path = 'img/placeholder.png';
			
			_degrees.sort(compare);
			
			for (var i = 0; i < _degrees.length; i++){
				html += "<div id='" + degrees[i].name.replace(/ /g, '').toLowerCase() + "' class='wrapper'>";
				html += "<div class='frame'><img src='" + img_path + "'/></div>";
				html += "<div class='icons'><img src='" + img_path + "'/><img src='" + img_path + "'/><img src='" + img_path + "'/></div><div>";
				html += "<ul><li>" + _degrees[i].name + "</li>"
				html += "<li>Program levels offered: <br>";
				html += _degrees[i].program.join(', ') + "</li>";
				html += "</ul></div><button id='view_options'>View Program Options</button></div>";
			}
			div.innerHTML = html;
		}, 
		testing:function(){
			alert(this.name + this.dept + this.format + this.program);
		}
    }
	
	// loading and displaying degrees
	function load_degrees(){
		var accounting = new Degree("Accounting", "Business", "Online", ["Bachelor", "Minor"], ["Montrose Campus"]);
		var biology = new Degree("Biology", "Biological Sciences", "Traditional", ["Bachelor", "Associate", "Minor"], ["Main Campus"]);
		var computer_science = new Degree("Computer Science", "Computer Science, Mathematics, and Statistics", "Traditional", ["Bachelor", "Associate", "Minor", "Certificate"], ["Bishop Campus"]);
		var dance = new Degree("Dance", "Theatre Arts", "Online", ["Bachelor", "Minor"], ["Main Campus"]);
		var economics = new Degree("Economics", "Business", "Traditional", ["Bachelor", "Minor"], ["Montrose Campus"]);
		var film = new Degree("Film", "Art and Design", "Traditional", ["Bachelor"], "Montrose Campus");
		var graphic_design = new Degree("Graphic Design", "Art and Design", "Traditional", ["Bachelor", "Minor"], ["Main Campus"]);
		var history = new Degree("History", "Social and Behavioral Sciences", "Online", ["Bachelor", "Minor"], ["Montrose Campus"]);
		var information_systems = new Degree("Information Systems", "Business", "Traditional", ["Bachelor"], ["Main Campus"]);
		var addiction_studies = new Degree("Addiction Studies", "Social and Behavioral Sciences", "Traditional", ["Minor"], ["Main Campus"]);
		var agriculture_science = new Degree("Agriculture Science", "WCCC", "Online", ["Associate"], ["Bishop Campus"]);
		
		degrees.push(accounting); degrees.push(biology); degrees.push(computer_science); degrees.push(dance); degrees.push(economics); degrees.push(film); degrees.push(graphic_design); degrees.push(history); degrees.push(information_systems); degrees.push(addiction_studies); degrees.push(agriculture_science);
		
		var _degrees = new Degree("", "", "", [], []);
		degrees.sort(compare);
		_degrees.display_degrees(degrees);
	}
	
	// for sorting by degree name
	function compare(a, b){
		let comparison = 0;
		if (a.name < b.name) comparison = -1;
		if (a.name > b.name) comparison = 1;
		return comparison;
	}