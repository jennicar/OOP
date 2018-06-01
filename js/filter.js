var degrees = [];
var online_check = false;

window.onload = function(){
	load_degrees();
	var search = document.getElementById('search_btn');
	search.onclick = function(){
		var dept_val = $('#dept_val option:selected').text();
		var program_val = $('#program_val').val();
		var location_val = $('#location_val').val();
		
		if (online_check == false) var filter = new Filter('Traditional');
		else if (online_check == true) var filter = new Filter('Online');
		if (dept_val !== 'Department') filter.set_dept_val(dept_val);		
		if (program_val !== null) filter.set_program_val(program_val);
		if (location_val !== null) filter.set_location_val(location_val);
		
		filter.filter_values();
	}
	
	var online_btn = document.getElementById('format_btn');
	online_btn.onclick = function(){
		if (online_check == false) online_check = true;
		else online_check = false;
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
			var matches = []; var nonmatches = [];
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
				else if (check == false) nonmatches.push(degrees[i].name.replace(/ /g, ''));
			}
			
			alert(matches);
			
			var _degrees = new Degree("", "", "", [], []);
			_degrees.hide_degrees(nonmatches);
			_degrees.display_degrees(matches);
		}, 
		testing:function(){
			alert(this.keyword_val + this.dept_val + this.format_val); }
	}