$(document).ready (function () {
	counter = 0;
	var timer;
	var story1 = "Five little monkeys jumping on the bed. One fell off and bumped his head. Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!!!'";
	var story2 = "Four little monkeys jumping on the bed. One fell off and bumped his head. Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!!!'";
	var story3 = "Three little monkeys jumping on the bed. One fell off and bumped his head. Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!!!'";
	var story4 = "Two little monkeys jumping on the bed. One fell off and bumped his head. Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!!!'";
	var story5 = "One little monkey jumping on the bed. One fell off and bumped his head. Mama called the doctor and the doctor said, 'No more monkeys jumping on the bed!!!'";
	storycollect = [story1,story2,story3,story4,story5]
	var storyArr =[];
	addStoryToPage(storycollect[counter]);
	getname ();
	getcolor ();

	});


function makeStory(str){
	console.log(str);
	var storyArray = str.split(" ");
	var elements = storyArray.map(function(word){
		return $("<span class='words'><a href='#'>" + word +"</a></span>")[0]
	});
	return elements;
}



function addStoryToPage(currentstory){
	$(".vertical #wordlink").remove()
	var el = $("<p id='wordlink' class='text-center'></p>")
	$(".vertical").append(el)
	storyArr = makeStory(currentstory);
	storyArr.forEach(function(val){
			el.append(val);
		});
}
// nextpage

$("#nextpage").on("click", function(e){
	console.log (counter);
	counter++;

	if (counter > 0 && counter < 5) {
		addStoryToPage(storycollect[counter])
	}
	});
	


	$("button").on("click", function(e){	
		p = 0
		e.preventDefault();
		storyArr.forEach(function(val,index){
			val.setAttribute("class","words")
		});
		clearTimeout(timer);
		highLight(p,storyArr);
		});
		getsound();

	function highLight(p,array) {
		if (p < array.length) {
			timer = setTimeout(function(){
				$(array[p]).toggleClass("words_selected");
				if (p > 0) {$(array[p-1]).attr("class", "words");}
				p++;
				highLight(p,array);
				},1000)
			}
		}


	function getsound() {
		$("#wordlink a").on("click", function(e){
			console.log(this.innerText)
			var wordsound = this.innerText;
			var url = "http://translate.google.com/translate_tts?tl=en&q=" + wordsound;
			
			var html = "<audio controls autoplay style = 'display:none'><source src=" + url +"></audio>";
			var soundplay = $(this).append(html);
 		});
	}

function getname () {$("#namebutton").on("click", function(e){
	var n = $("#name").val();
	console.log(n);
	$(".heading1").empty();
	var t = 'Hi ' + n + ', What would you like to read today?';

	$(".heading1").append(t);
		
	});
}


function getcolor () {$("#colbutton").on("click", function(e){
	var m = $("#color").val();
	console.log(m);
		
	$(".pagert").css("background-color",m);
	$(".pagelt").css("background-color",m);
	});
}




	

	


















		 	



