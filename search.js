window.onload = load_degrees;  

var degrees = [];

    function Degree(n, d, f, p){
		this.name = n;
    	this.dept = d;
    	this.format = f;
		this.programLvl = p;
    }
    
    Degree.prototype = {
    	constructor: Degree,
		testing:function(){
			alert(this.name + this.dept + this.format + this.programLvl);
		}
    }
	
	function Filter(d, f){
		this.keyword_val = "";
		this.dept_val = d;
		this.format_val = f;
	}
	
	Filter.prototype = {
		constructor: Filter, 
		set_keyword_val:function(k){
			if (k.length !== 0) this.keyword_val = k; }, 
		filter_keyword:function(){
			var regex = new RegExp(this.keyword_val, "gi");
			var array = degrees;
			var matches = [];
			for (var j = 0; j < array.length; j++){
				if (array[j].name.match(regex)) matches.push(array[j].name.replace(/ /g, '').toLowerCase());
			}
			return matches;
		}, 
		filter_values:function(){
			var check = false;
			var matches = [];
			var keyword = this.filter_keyword();
			for (var i = 0; i < degrees.length; i++){
				if ((degrees[i].dept.replace(/ /g, '').toLowerCase() === this.dept_val) && (degrees[i].format.toLowerCase() === this.format_val) && (this.keyword_val.length === 0)) {
					matches.push(degrees[i]);
				}
				else if ((degrees[i].dept.replace(/ /g, '').toLowerCase() === this.dept_val) && (degrees[i].format.toLowerCase() === this.format_val) && (this.keyword_val.length !== 0)){
					if (keyword.includes(degrees[i].name.replace(/ /g, '').toLowerCase())) matches.push(degrees[i]);
					else break;
				}
			}
			var str = JSON.stringify(matches, null, 4);
			// alert(str);
			display_degrees(matches);
		}, 
		testing:function(){
			alert(this.keyword_val + this.dept_val + this.format_val); }
	}
	
	function inherit_prototype(child, parent){
		var copy_parent = Object.create(parent.prototype);
		copy_parent.constructor = child;
		child.prototype = copy_parent;
	}
	
	function Filtering(d, f){
		Filter.call(this, d, f);
	}
	inherit_prototype(Filtering, Filter);
	
	var search = document.getElementById('search_btn');
	search.onclick = function(){
		var keyword_val = $('#search_input').val().replace(/ /g, '').replace(/[^\w\s]|_/g, '');
		var dept_val = $('#dept_val option:selected').text().replace(/ /g, '').toLowerCase();
		var format_val = $('#format_val option:selected').text().toLowerCase();
		
		var filter = new Filter(dept_val, format_val);
		filter.set_keyword_val(keyword_val);
		filter.filter_values();
	}
	
	function load_degrees(){
		var accounting = new Degree("Accounting", "Business", "Online", ["Bachelor", "Minor"]);
		var biology = new Degree("Biology", "Biological Sciences", "Traditional", ["Bachelor", "Associate", "Minor"]);
		var computer_science = new Degree("Computer Science", "Computer Science, Mathematics, and Statistics", "Traditional", ["Bachelor", "Associate", "Minor", "Certificate"]);
		var dance = new Degree("Dance", "Theatre Arts", "Online", ["Bachelor", "Minor"]);
		var economics = new Degree("Economics", "Business", "Traditional", ["Bachelor", "Minor"]);
		var film = new Degree("Film", "Art and Design", "Traditional", ["Bachelor"]);
		var graphic_design = new Degree("Graphic Design", "Art and Design", "Traditional", ["Bachelor", "Minor"]);
		var history = new Degree("History", "Social and Behavioral Sciences", "Online", ["Bachelor", "Minor"]);
		var information_systems = new Degree("Information Systems", "Business", "Traditional", ["Bachelor"]);
		
		degrees.push(accounting); degrees.push(biology); degrees.push(computer_science); degrees.push(dance); degrees.push(economics); degrees.push(film); degrees.push(graphic_design); degrees.push(history); degrees.push(information_systems);
		
		display_degrees(degrees);
		var str = JSON.stringify(degrees, null, 4);
		// alert(str);
	}
	
	function display_degrees(_degrees){
		var div = document.getElementById('degrees_grid');
		var html = "";
		var img_path = "https://www.happyceliac.com/wp-content/uploads/2018/02/placeholder-image.png";
		
		for (var i = 0; i < _degrees.length; i++){
			html += "<div id='" + degrees[i].name.replace(/ /g, '').toLowerCase() + "' class='wrapper'>";
			html += "<div class='frame'><img src='" + img_path + "'/></div>";
			html += "<div class='icons'><img src='" + img_path + "'/><img src='" + img_path + "'/><img src='" + img_path + "'/></div><div>";
			html += "<ul><li>" + _degrees[i].name + "</li>"
			html+= "<li>Program levels offered: <br>";
			html += _degrees[i].programLvl.join(', ') + "</li>";
			html += "</ul></div><button id='view_options' onclick='display_modal()'>View Program Options</button></div>";
		}
		
		div.innerHTML = html;
	}