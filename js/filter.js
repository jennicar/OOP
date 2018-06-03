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
        if (dept_val !== 'Department') filter.dept_val = dept_val;       
        if (program_val !== null) filter.program_val = program_val;
        if (location_val !== null) filter.location_val = location_val;
                 		 
        filter.filter_values();
        filter.display_filters();
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
		// displays the filters and handles onclick events
		display_filters:function(){
			var div = document.getElementById('filter_div');
			var filter = new Filter(this.format_val);
			filter.dept_val = this.dept_val;
			filter.program_val = this.program_val;
			filter.location_val = this.location_val;
			div.style.visibility = 'visible';
			
			// department filter
			if (this.dept_val !== ''){
				var filter_dept = document.getElementById('filter_dept');
				filter_dept.innerHTML = this.dept_val;
				filter_dept.style.display = 'inline-block';
				
				$('#filter_dept').click(function(){
					filter.dept_val = '';
					filter.filter_values();
					filter_dept.style.display = 'none';
				});
			}
			// format filter
			if (this.format_val === "Online"){
				var filter_format = document.getElementById('filter_format');
				filter_format.innerHTML = this.format_val;
				filter_format.style.display = 'inline-block';
				
				$('#filter_format').click(function(){
					filter.format_val = 'Traditional';
					filter.filter_values();
					filter_format.style.display = 'none';
				});
			}
			// program levels filters
			if (this.program_val.length !== 0){
				var filter_program = document.getElementById('filter_program');
				var tempArray = [];
				var html = '';
				
				filter_program.style.display = 'inline_block';
				tempArray = this.program_val.toString().split(',');
				
				for (var i = 0; i < tempArray.length; i++){
					var divID = tempArray[i];
					if (tempArray[i] === "Master's") divID = 'Masters';
					html += "<div id='filter_" + divID + "' class='filter'>" + tempArray[i] + '</div>';
				}
				filter_program.innerHTML = html;
				for (var j = 0; j < tempArray.length; j++){
					$('#filter_' + tempArray[j].replace(/[^\w\s]/g, '')).click(function(){
						var temp = this.id.slice(7);
						var index = tempArray.indexOf(temp);
						var program_val = tempArray;
						program_val.splice(index, 1);
						filter.program_val = program_val;
						filter.filter_values();
						
						document.getElementById(this.id).style.display = 'none';
					});
				}
			}
			// location filters
			if (this.location_val.length !== 0){
				var filter_location = document.getElementById('filter_location');
				var tempArray = [];
				var html = '';
				
				filter_location.style.display = 'inline_block';
				tempArray = this.location_val.toString().split(',');
				for (var i = 0; i < tempArray.length; i++){
					html += "<div id='filter_" + tempArray[i].replace(/ /g, '') + "' class='filter'>" + tempArray[i] + '</div>';
				}
				filter_location.innerHTML = html;
				for (var j = 0; j < tempArray.length; j++){
					$('#filter_' + tempArray[j].replace(/ /g, '')).click(function(){
						var temp = this.id.slice(7);
						var index = tempArray.indexOf(temp);
						var location_val = tempArray;
						location_val.splice(index, 1);
						filter.location_val = location_val;
						filter.filter_values();
						
						document.getElementById(this.id).style.display = 'none';
					});
				}
			}
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
				else nonmatches.push(degrees[i].name.replace(/ /g, ''));
			}
			
			var _degrees = new Degree("", "", "", [], []);
			_degrees.hide_degrees(nonmatches);
			_degrees.display_degrees(matches);
			
		},
	}