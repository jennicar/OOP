window.onload = function(){
	load_degrees();
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
		var agriculture_science = new Degree("Agriculture Science", "WCCC", "Traditional", ["Associate"], ["Bishop Campus"]);
		
		degrees.push(accounting); degrees.push(biology); degrees.push(computer_science); degrees.push(dance); degrees.push(economics); degrees.push(film); degrees.push(graphic_design); degrees.push(history); degrees.push(information_systems); degrees.push(addiction_studies); degrees.push(agriculture_science);
		
		var _degrees = new Degree("", "", "", [], []);
		_degrees.display_degrees(degrees);
	}

/*
<div class="row program-search-list">
	<div class="col-sm-4">
		<div class="program-list-item">
			<div class="program-list-heading">
				<h2>Accounting</h2>
				<img src="site://TEST - AO Academic Program Search/programs/images/accounting.jpg" alt="" />
			</div>
			<div class="program-list-details">
				<div class="program-details-options" align="center">
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/bachelor-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/master-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/minor-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/traditional-icon.png" alt="" />
				</div>
				<hr />
				<p class="program-details-department">Business</p>
				<p class="program-details-campus">Main Campus</p>
				<!--THESE TWO ELEMENTS WILL BE USED FOR SEARCH AND/OR ICONS, BUT ARE NOT IN USE >>
            Program Level:Bachelor&apos;sMaster&apos;sMinor
            Format:Traditional
            Keywords:accounting, accounting, public accounting, general accounting, master of business administration, 3+2, 3+2 program
            -->
				<a class="button-link" data-toggle="modal" data-target="#modal11">View Program Options</a>
			</div>
		</div>
	</div>
	<!-- This one brings in all of the awards for each program -->
	<div id="modal11" class="modal fade program-search-modal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" />
					<h2 class="modal-title">Accounting</h2>
					<p class="subtitle">Degrees and concentrations offered</p>
				</div>
				<div class="modal-body list-group">
					<a href="#3+2" class="list-group-item award-level-Master">
						<h3>3+2 Program</h3>
						<h4>Bachelor of Science + Master of Business Administration</h4>
					</a>
					<a href="#publicAccounting" class="list-group-item award-level-Bachelor">
						<h3>Public Accounting</h3>
						<h4>Bachelor of Science</h4>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="col-sm-4">
		<div class="program-list-item">
			<div class="program-list-heading">
				<h2>Addiction Studies</h2>
				<img src="site://TEST - AO Academic Program Search/programs/images/addiction-studies.jpg" alt="" />
			</div>
			<div class="program-list-details">
				<div class="program-details-options" align="center">
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/bachelor-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/master-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/minor-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/traditional-icon.png" alt="" />
				</div>
				<hr />
				<p class="program-details-department">Social and Behavioral Sciences</p>
				<p class="program-details-campus">Main Campus</p>
				<!--THESE TWO ELEMENTS WILL BE USED FOR SEARCH AND/OR ICONS, BUT ARE NOT IN USE >>
            Program Level:Minor
            Format:Traditional
            Keywords:addiction studies, addiction counselor, human services
            -->
				<a class="button-link" data-toggle="modal" data-target="#modal12">View Program Options</a>
			</div>
		</div>
	</div>
	<!-- This one brings in all of the awards for each program -->
	<div id="modal12" class="modal fade program-search-modal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" />
					<h2 class="modal-title">Addiction Studies</h2>
					<p class="subtitle">Degrees and concentrations offered</p>
				</div>
				<div class="modal-body list-group">
					<a href="#" class="list-group-item award-level-Minor">
						<h3>Addiction Studies</h3>
						<h4>Minor </h4>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="col-sm-4">
		<div class="program-list-item">
			<div class="program-list-heading">
				<h2>Agriculture Science</h2>
				<img src="site://TEST - AO Academic Program Search/programs/images/agriculture-science.jpg" alt="" />
			</div>
			<div class="program-list-details">
				<div class="program-details-options" align="center">
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/bachelor-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/master-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/minor-icon.png" alt="" />
					<img src="https://dev.coloradomesa.edu/wccc-program-pages/images/css/traditional-icon.png" alt="" />
				</div>
				<hr />
				<p class="program-details-department">Western Colorado Community College</p>
				<p class="program-details-campus">Bishop Campus</p>
				<!--THESE TWO ELEMENTS WILL BE USED FOR SEARCH AND/OR ICONS, BUT ARE NOT IN USE >>
            Program Level:Associate
            Format:Traditional
            Keywords:agriculture science, ag science, ag, sustainable agriculture, horticultural, livestock
            -->
				<a class="button-link" data-toggle="modal" data-target="#modal13">View Program Options</a>
			</div>
		</div>
	</div>
	<!-- This one brings in all of the awards for each program -->
	<div id="modal13" class="modal fade program-search-modal" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" />
					<h2 class="modal-title">Agriculture Science</h2>
					<p class="subtitle">Degrees and concentrations offered</p>
				</div>
				<div class="modal-body list-group">
					<a href="#more" class="list-group-item award-level-Associate">
						<h3>Ag Science</h3>
						<h4>Associate of Science</h4>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
*/