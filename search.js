var degrees = [];
var online_check = false;

window.onload = function(){
	load_degrees();
	var search = document.getElementById('search_btn');
	search.onclick = function(){
		var dept_val = $('#dept_val option:selected').text();
		var program_val = $('#program_val').val();
		var location_val = $('#location_val').val();
		
		//sessionStorage.setItem('dept_val', dept_val);
		
		if (online_check == false) var filter = new Filter('Traditional');
		else if (online_check == true) var filter = new Filter('Online');
		if (dept_val !== 'Department') filter.set_dept_val(dept_val);		
		if (program_val !== null) filter.set_program_val(program_val);
		if (location_val !== null) filter.set_location_val(location_val);
		
		var div = document.getElementById('testing_div');		
		var test = sessionStorage.getItem('dept_val');
		
		
		//window.location.reload();
		div.innerHTML = test;
		
		filter.filter_values();
		filter.display_filters();
	}
	
	var view_details = document.getElementById('view_options');
	view_details.onclick = function(){
		var popup = new Description("", "", "", []);
		popup.display_degrees(degrees);
	}
	var online_btn = document.getElementById('format_btn');
	online_btn.onclick = function(){
		if (online_check == false) online_check = true;
		else online_check = false;
	}
}

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
	
	// filter functions
	function Filter(f){
		this.keyword_val = '';
		this.dept_val = '';
		this.format_val = f;
		this.program_val = [];
		this.location_val = [];
	}
	
	Filter.prototype = {
		constructor: Filter, 
		set_dept_val:function(d){
			this.dept_val = d;
		}, 
		set_program_val:function(p){
			this.program_val.push(p);
		}, 
		set_location_val:function(l){
			this.location_val.push(l);
		}, 
		display_filters:function(){
			var div = document.getElementById('filter_div');
			div.style.visibility = 'visible';
			
			var tempArray = [];
			var html = '';
			var filter = new Filter('');
			
			if (this.dept_val !== '') html += "<div onclick='delete_filter(this.id)' id='" + this.dept_val.replace(/ /g, '').replace(/[^\w\s]/g, '') + "' class='filter'>" + this.dept_val + "</div>";
			html += "<div id='" + this.format_val + "' class='filter'>" + this.format_val + "</div>";
			if (this.program_val.length !== 0) {
				tempArray = this.program_val.toString().split(',');
				for (var i = 0; i < tempArray.length; i++){
					html += "<div id='" + tempArray[i].replace(/[^\w\s]/g, '') + "' class='filter'>" + tempArray[i] + "</div>";
				}
			}
			if (this.location_val.length !== 0) {
				tempArray = this.location_val.toString().split(',');
				for (var i = 0; i < tempArray.length; i++){
					html += "<div id='" + tempArray[i].replace(/ /g, '') + "' class='filter'>" + tempArray[i] + "</div>";
				}
			}
			
			div.innerHTML = html;
		}, 

		filter_values:function(){
			var check = false; var check_program = false; var check_location = false;
			var tempArray = []; var tempArray2 = [];
			var tempProgram = this.program_val.toString();
			var tempLocation = this.location_val.toString();
			var matches = [];
			for (var i = 0; i < degrees.length; i++){
				check = false; check_program = false; check_location = false;
				// department empty, program level empty, location empty, format traditional
				if ((this.dept_val === '') && (this.program_val.length === 0) && (this.location_val.length === 0) && (this.format_val === 'Traditional')) check = true;
				// department empty, program level empty, location empty, format online
				else if ((this.dept_val === '') && (this.program_val.length === 0) && (this.location_val.length === 0) && (this.format_val === degrees[i].format)) check = true;
				// department empty, program level empty, location filled, format traditional
				else if ((this.dept_val === '') && (this.program_val.length === 0) && (this.location_val.length !== 0) && (this.format_val === 'Traditional')){
					tempArray = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempLocation.includes(tempArray[j])) check = true;
					}
				}
				// department empty, program level empty, location filled, format online
				else if ((this.dept_val === '') && (this.program_val.length === 0) && (this.location_val.length !== 0) && (this.format_val === degrees[i].format)){
					tempArray = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempLocation.includes(tempArray[j])) check = true;
					}
				}
				// department empty, program level filled, location empty, format traditional
				else if ((this.dept_val === '') && (this.program_val.length !== 0) && (this.location_val.length === 0) && this.format_val === 'Traditional'){
					tempArray = degrees[i].program;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check = true; 
					}
				}
				// department empty, program level filled, location empty, format online
				else if ((this.dept_val === '') && (this.program_val.length !== 0) && (this.location_val.length === 0) && this.format_val === degrees[i].format){
					tempArray = degrees[i].program;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check = true; 
					}
				}
				// department empty, program level filled, location filled, format traditional
				else if ((this.dept_val === '') && (this.program_val.length !== 0) && (this.location_val.length !== 0) && this.format_val === 'Traditional'){
					tempArray = degrees[i].program;
					tempArray2 = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check_program = true;
					}
					for (var k = 0; k < tempArray2.length; k++){
						if (tempLocation.includes(tempArray2[k])) check_location = true;
					}
					if (check_program === true && check_location === true) check = true;
				}
				// department empty, program level filled, location filled, format online
				else if ((this.dept_val === '') && (this.program_val.length !== 0) && (this.location_val.length !== 0) && this.format_val === degrees[i].format){
					tempArray = degrees[i].program;
					tempArray2 = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check_program = true;
					}
					for (var k = 0; k < tempArray2.length; k++){
						if (tempLocation.includes(tempArray2[k])) check_location = true;
					}
					if (check_program === true && check_location === true) check = true;
				}
				// department filled, program level empty, location empty, format traditional
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length === 0) && (this.location_val.length === 0) && this.format_val === 'Traditional') check = true;
				// department filled, program level empty, location empty, format online
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length === 0) && (this.location_val.length === 0) && this.format_val === degrees[i].format) check = true;
				// department filled, program level empty, location filled, format traditional
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length === 0) && (this.location_val.length !== 0) && (this.format_val === 'Traditional')) {
					tempArray = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempLocation.includes(tempArray[j])) check = true;
					}
				}
				// department filled, program level empty, location filled, format online
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length === 0) && (this.location_val.length !== 0) && (this.format_val === degrees[i].format)) {
					tempArray = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempLocation.includes(tempArray[j])) check = true;
					}
				}
				// department filled, program level filled, location empty, format traditional
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length !== 0) && (this.location_val.length === 0) && (this.format_val === 'Traditional')) {
					tempArray = degrees[i].program;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check = true;
					}
				}
				// department filled, program level filled, location empty, format online
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length !== 0) && (this.location_val.length === 0) && (this.format_val === degrees[i].format)) {
					tempArray = degrees[i].program;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check = true;
					}
				}
				// department filled, program level filled, location filled, format traditional
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length !== 0) && (this.location_val.length !== 0) && (this.format_val === 'Traditional')) {
					tempArray = degrees[i].program;
					tempArray2 = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check_program = true;
					}
					for (var k = 0; k < tempArray2.length; k++){
						if (tempLocation.includes(tempArray2[k])) check_location = true;
					}
					if (check_program === true && check_location === true) check = true;
				}
				// department filled, program level filled, location filled, format online
				else if ((this.dept_val === degrees[i].dept) && (this.program_val.length !== 0) && (this.location_val.length !== 0) && (this.format_val === degrees[i].format)) {
					tempArray = degrees[i].program;
					tempArray2 = degrees[i].location;
					for (var j = 0; j < tempArray.length; j++){
						if (tempProgram.includes(tempArray[j])) check_program = true;
					}
					for (var k = 0; k < tempArray2.length; k++){
						if (tempLocation.includes(tempArray2[k])) check_location = true;
					}
					if (check_program === true && check_location === true) check = true;
				}
				
				if (check == true) matches.push(degrees[i]);
			}
			var _degrees = new Degree("", "", "", [], []);
			_degrees.display_degrees(matches);
		}, 
		testing:function(){
			alert(this.keyword_val + this.dept_val + this.format_val); }
	}
	
		function delete_filter(id){
			alert(id);
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
		_degrees.display_degrees(degrees);
	}
	
