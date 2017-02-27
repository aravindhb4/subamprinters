function windowResize(){
	$(window).resize(function(){
		var height = $(window).height();
		$('#Home.sections.container-fluid').css('height',height);
	});
}

function scrollEvents(){
	$('#centerTitle').removeClass('hide');
	$('#centerTitle').addClass('animate');
}

function navigateTo(targetURL) {
	$('.multipage').empty();
	var URL = "templates/"+targetURL+".html";
	$.ajax({
	  url: URL,
	  success: function(html){
	    $("#"+targetURL).append(html);
	  }
	});
}

function populateContactDetails(){
	$('.multipage').empty();
	$('#ContactUsSection').append('<div class="row"><h1 class="sectionTitle bold">Reach <span class="orange">Us</span></h1><div id="populateContactDetailsDiv" class="col-md-12 marginB20"></div></div>');
	$.ajax({
	  url: "templates/branchDetailsjson.json",
	  success: function(data){
	  	var branchDetailsjson = data;
	    for(index in branchDetailsjson){
			$('#populateContactDetailsDiv').append('<div class="col-md-4 col-sm-6 sectionContainer marginB20"><div class="sectionContainerTitle marginB20">'+branchDetailsjson[index].branchName+'</div><div class="sectionInnerContainer"><div class="sectionInnerContainerTitle marginB20">Contact Us</div><p><span class="bold">Incharge : </span>'+branchDetailsjson[index].Incharge+'</p><p class="marginB20">'+branchDetailsjson[index].Address+'</p><p class="marginB20">Ph : '+branchDetailsjson[index].PhoneNo+',<br> Cell : '+branchDetailsjson[index].CellNo+'</p><p class="marginB20"><span class="bold">E-mail :</span> '+branchDetailsjson[index].Email+'</p></div></div>');
		}
	  }
	});
}

function populateBranchDetails(){
	$('.multipage').empty();
	$('#ContactUsSection').append('<div class="row"><h1 class="sectionTitle bold">Our <span class="orange">Locations</span></h1><div id="populateBranchDetailsDiv" class="col-md-12 marginB20"></div></div>');
	$.ajax({
	  url: "templates/branchDetailsjson.json",
	  success: function(data){
	  	var branchDetailsjson = data;
	    for(index in branchDetailsjson){
			$('#populateBranchDetailsDiv').append('<h4 class="col-md-12 serviceTitle">'+ branchDetailsjson[index].branchName +'</h4>');
			$('#populateBranchDetailsDiv').append('<div class="col-md-12"><div class="col-md-4 sectionContainer marginB20"><div class="sectionInnerContainer sandalBG"><div class="sectionInnerContainerTitle marginB20">Services offered</div><div class="servicesOfferedDiv" id="servicesOfferedDiv'+[index]+'"></div></div></div><div class="col-md-4 sectionContainer marginB20"><div class="sectionInnerContainer grayBG"><div class="sectionInnerContainerTitle marginB20">Machines Used</div><div class="machinesUsedDiv" id="machinesUsedDiv'+[index]+'"></div></div></div><div class="col-md-4 sectionContainer marginB20"><div class="sectionInnerContainer orangeBG"><div class="sectionInnerContainerTitle marginB20">Contact Us</div><p><span class="bold">Incharge : </span>'+branchDetailsjson[index].Incharge+'</p><p class="marginB20">'+branchDetailsjson[index].Address+'</p><p class="marginB20">Ph : '+branchDetailsjson[index].PhoneNo+',<br> Cell : '+branchDetailsjson[index].CellNo+'</p><p class="marginB20"><span class="bold">E-mail :</span> '+branchDetailsjson[index].Email+'</p></div></div></div>');
			for(i=0;i<branchDetailsjson[index].Services.length;i++){
				$('#servicesOfferedDiv'+[index]).append('<p class="bullets">'+ branchDetailsjson[index].Services[i] +'</p>');
			}
			for(j=0;j<branchDetailsjson[index].Machines.length;j++){
				$('#machinesUsedDiv'+[index]).append('<p class="bullets">'+ branchDetailsjson[index].Machines[j] +'</p>');
			}
			var temp = [index]
			$('#servicesOfferedDiv'+[index]).append('<div class="row buttonDiv"><div class="innerButtonDiv"><div class="buttons modalbuttons" onclick="javascript:openServicesModal('+temp+')">Know More</div></div></div>');
			$('#machinesUsedDiv'+[index]).append('<div class="row buttonDiv"><div class="innerButtonDiv"><div class="buttons modalbuttons" onclick="javascript:openMachinesModal('+temp+')">Know More</div></div></div>');
		}
	  }
	});
}
function populateServices(){
	$('.multipage').empty();
	$('#Services').append('<div class="row"><h1 class="sectionTitle bold">We <span class="orange">Do</span></h1><div id="populateServicesDiv" class="col-md-12 marginB20"></div></div>');
	$.ajax({
	  url: "templates/branchDetailsjson.json",
	  success: function(data){
	  	var branchDetailsjson = data;
		$('#populateServicesDiv').append('<h4 class="col-md-12 serviceTitle">Multi Color Offset Printing</h4>');
	    for(index in branchDetailsjson[0].multiColorOffsetPrinting){
			$('#populateServicesDiv').append('<div class="col-md-4 col-sm-6 sectionContainer marginB20"><div id="sectionInnerContainer1'+ [index] +'" class="sectionInnerContainer"><div class="serviceTitleCenter marginB20">'+ branchDetailsjson[0].multiColorOffsetPrinting[index] +'</div></div></div>');
			$('#sectionInnerContainer1'+[index]).append('<div class="row buttonDiv"><div class="innerButtonDiv"><div class="buttons" onclick="javascript:populateContactDetails();">Contact Us</div></div></div>');
		}
		$('#populateServicesDiv').append('<h4 class="col-md-12 serviceTitle">Other Services</h4>');
	    for(index in branchDetailsjson[0].otherServices){
			$('#populateServicesDiv').append('<div class="col-md-4 col-sm-6 sectionContainer marginB20"><div id="sectionInnerContainer2'+ [index] +'" class="sectionInnerContainer"><div class="serviceTitleCenter marginB20">'+ branchDetailsjson[0].otherServices[index] +'</div></div></div>');
			$('#sectionInnerContainer2'+[index]).append('<div class="row buttonDiv"><div class="innerButtonDiv"><div class="buttons" onclick="javascript:populateContactDetails();">Contact Us</div></div></div>');
		}
	  }
	});
}
function modalEvents(){
	// Get the modal
	var modal = document.getElementById('myModal');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	setTimeout(function(){
		$('#myModal.modal').css('display','inline-flex');
	}, 500);

	// When the user clicks on <span> (x), close the modal
	$('.modal .close, #modalClose').click(function(){
		modal.style.display = "none";
	});

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	$('#multiServices, #otherServices, #machineDiv').empty();
}
function openServicesModal(branchName){
	$('#modalBodyTitle').text('Services');
	$.ajax({
	  url: "templates/branchDetailsjson.json",
	  success: function(data){
	  	var servicesOffered = data;
	    for(index in servicesOffered[branchName].multiColorOffsetPrinting){
			$('#multiServices').append('<p>'+ servicesOffered[branchName].multiColorOffsetPrinting[index] +'</p>');
		}
		for(index in servicesOffered[branchName].otherServices){
			$('#otherServices').append('<p>'+ servicesOffered[branchName].otherServices[index] +'</p>');
		}
		$('#modalTitle').text(servicesOffered[branchName].branchNameModal);
	  }
	});
	modalEvents();
}
function openMachinesModal(branchName){
	$('#modalBodyTitle').text('Machineries');
	$.ajax({
	  url: "templates/branchDetailsjson.json",
	  success: function(data){
	  	var servicesOffered = data;
	    for(index in servicesOffered[branchName].machineDetails){
			$('#machineDiv').append('<div class="row"><div class="col-md-6" id="machineDesc'+ [index] +'"></div><div class="col-md-6" id="machineBg" style="height:200px;background-color: #ccc;"></div><div class="col-md-12 machineborder"></div></div>');
			$('#machineDesc'+ [index]).append('<p class="machineName marginB20">'+ servicesOffered[branchName].machineDetails[index].machineName +'</p>');
			$('#machineDesc'+ [index]).append('<p class="machineBenefits marginB10">Benefits</p>');
			$('#machineDesc'+ [index]).append('<p class="machinecontent marginB10">'+ servicesOffered[branchName].machineDetails[index].machineBenefits +'</p>');
			$('#machineDesc'+ [index]).append('<p class="machineFeatures marginB10">Features</p>');
			$('#machineDesc'+ [index]).append('<p class="machinecontent marginB10">'+ servicesOffered[branchName].machineDetails[index].machineFeatures +'</p>');
		}
		$('#modalTitle').text(servicesOffered[branchName].branchNameModal);
	  }
	});
	modalEvents();
	triggerSlider();
}
function triggerSlider(){
	var jssor_1_SlideoTransitions = [
	  [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
	  [{b:1900,d:2000,x:-379,e:{x:7}}],
	  [{b:1900,d:2000,x:-379,e:{x:7}}],
	  [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
	];

	var jssor_1_options = {
	  $AutoPlay: true,
	  $SlideDuration: 800,
	  $SlideEasing: $Jease$.$OutQuint,
	  $CaptionSliderOptions: {
		$Class: $JssorCaptionSlideo$,
		$Transitions: jssor_1_SlideoTransitions
	  },
	  $ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$
	  },
	  $BulletNavigatorOptions: {
		$Class: $JssorBulletNavigator$
	  }
	};

	var jssor_1_slider = new $JssorSlider$("sliderEvents", jssor_1_options);

	/*responsive code begin*/
	/*you can remove responsive code if you don't want the slider scales while window resizing*/
	function ScaleSlider() {
		var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
		if (refSize) {
			refSize = Math.min(refSize, 1920);
			jssor_1_slider.$ScaleWidth(refSize);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}
	ScaleSlider();
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	/*responsive code end*/
}