//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


/* var nlp = window.nlp_compromise; */
var i = 1;
var counter = 0;

var messages = [], //array that hold the record of each string in chat
  username = "",
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Quill' //name of the chatbot
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
var log = document.createElement("p");

var welcomeMessages = [
  "You logged in because you'd like to talk about an upsetting experience of yours. Let's give ourselves a minute to think about it before we talk.",
  "You're here because you want to talk about your feelings. Let's think for a moment to get ourselves ready for the talk.",
  "I'm glad you're here to share your feelings with me. Let's sit down quietly for a minute to get ourselves ready."
];

var readyStatements = [
  "Okay, I'm ready. Type in 'yes' if you're ready.",
  "Alright. I'm good to go. Are you? Type in 'yes' if you'd like to start.",
  "Good. When you feel ready, please type in 'yes'."
];

var questions = [
  ["Now, would you tell me about the event that has caused you a significant emotional upheaval?", 1],
  ["Really let go and explore your feelings and thoughts about it.", 2],
  ["How may this event be related to your childhood, your relationships with parents or people you have loved or love now, or even your career?", 3],
  ["How is this experience related to who you would like to become, who you have been in the past, or who you are now?", 4],
  ["Okay, I'd like to talk more, but I think it's time to wrap up our time. How do you feel after writing today?", 5]
];

var feedback = [
  "I see.",
  "Alright.",
  "That's understandable.",
  "That's quite tough.",
  "Um-hmm. I'd like to continue.",
  "Okay, let's get it.",
  "I can tell.",
	"Please go on.",
	"I know how you feel.",
	"I’d appreciate some more detail.",
	"Yeah, I’m with you.",
	"I understand how you feel.",
	"It’s only natural you think that way.",
	"Right. I’m with you.",
	"I’d feel just about the same.",
	"I can feel you.",
	"I know what you mean.",
	"Let’s take it further.",
	"Okay, I want to understand how you feel.",
	"If I were you, I’d feel just as you do."
];

var ending = [
  "It's been pleasure talking to you today.",
  "You've got courage talking about such things today.",
  "Please come back again to share.",
  "I'd like to help again. Talk to you soon!"
];

//edit this function to change what the chatbot says
function chatbotWelcome() {
  talking = true;
  botMessage = "Hi, " + username + ". " + welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
}

function chatbotReady() {
  talking = true;
  botMessage = readyStatements[Math.floor(Math.random() * readyStatements.length)];
}

function chatbotBye() {
  talking = true;
  botMessage = ending[Math.floor(Math.random() * ending.length)];
}

function chatbotError() {
  talking = true;
  botMessage = "Our session has ended. Let's talk again next time!";
}

function chatbotResponse() {
  talking = true;
  if (counter === 0) {
    console.log(counter);
    botMessage = questions[counter][0];
  } else if (counter === 4) {
    console.log(counter);
    botMessage = questions[counter][0];
  } else if (counter < 5) {
    console.log(counter);
    botMessage = feedback[Math.floor(Math.random() * feedback.length)] + " " + questions[counter][0];
  }
}
/*
  botMessage = feedback[Math.floor(Math.random()*feedback.length)]+" "+questions[0][0]; //the default message
	*/
if (lastUserMessage === 'name') {
  botMessage = 'My name is ' + botName;
}
//****************************************************************

//this runs each time enter is pressed.
//It controls the overall input and output
function welcome() {
  if (document.getElementById("chatbox").value != "") {
    // get user name
    lastUserMessage = document.getElementById("chatbox").value;
    username = lastUserMessage.split(" ").slice(-1);
    document.getElementById("chatbox").value = "";

    // print user name
    messages.push("<b>" + username + ":</b> " + lastUserMessage);
		document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
		document.getElementById('chatscreen').scrollTop = 9999999;
		//document.getElementById("chatscreen").appendChild(log);
    //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
    console.log("chatbot:" + i);

    // print bot welcome response 
    setTimeout(function() {
      chatbotWelcome();
      messages.push("<b>" + botName + ":</b> " + botMessage);
      i = i + 1;
			document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
			document.getElementById('chatscreen').scrollTop = 9999999;
		 	//document.getElementById("chatscreen").appendChild(log);
      //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
      console.log("chatbot:" + i);
    }, 1000);

    // print bot ready response 
    setTimeout(function() {
      chatbotReady();
      messages.push("<b>" + botName + ":</b> " + botMessage);
      i = i + 1;
			document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
			document.getElementById('chatscreen').scrollTop = 9999999;
			//document.getElementById("chatscreen").appendChild(log);
      //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
      console.log("chatbot:" + i);
    }, 5000);
  }
}

function bye() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";

    // print user name
    messages.push("<b>" + username + ":</b> " + lastUserMessage);
		i=i+1;
		document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
		document.getElementById('chatscreen').scrollTop = 9999999;
		//document.getElementById("chatscreen").appendChild(log);
    //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
    console.log("user:" + i);

    setTimeout(function() {
      chatbotBye();
      messages.push("<b>" + botName + ":</b> " + botMessage);
			i=i+1;
			document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
		 	document.getElementById('chatscreen').scrollTop = 9999999;
			//document.getElementById("chatscreen").appendChild(log);
      //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
      console.log("chatbot:"+i);
    }, 1000);
  }
}

function error() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";

    // print user name
    messages.push("<b>" + username + ":</b> " + lastUserMessage);
		i=i+1;
		document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
		document.getElementById('chatscreen').scrollTop = 9999999;
		//document.getElementById("chatscreen").appendChild(log);
    //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
    console.log("user:" + i + "DONE!");

    setTimeout(function() {
      chatbotError();
      messages.push("<b>" + botName + ":</b> " + botMessage);
			i=i+1;
			document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
		 	document.getElementById('chatscreen').scrollTop = 9999999;
			//document.getElementById("chatscreen").appendChild(log);
      //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
      console.log("chatbot:"+i+"DONE!");
    }, 1000);
  }
}

function answer() {
  if (i < 3) {
    console.log(">>>Phase 1<<<");
    welcome();
  } else if (i >= 3 && i < 13) {
    console.log(">>>Phase 2<<<");
    newEntry();
  } else if (i >= 13 && i < 16) {
    console.log(">>>Phase 3<<<");
    bye();
  } else {
		console.log(">>>FINISHED<<<");
		error();
	}
}

function newEntry() {
  //if the message from the user isn't empty then run 
  lastUserMessage = document.getElementById("chatbox").value;
  if (lastUserMessage != "") {
    // store user input 
    //lastUserMessage = document.getElementById("chatbox").value;
    //lastUserMessage = lastUserMessage.toLowerCase();
    // clear textbox
    document.getElementById("chatbox").value = "";
    messages.push("<b>" + username + ":</b> " + lastUserMessage);
		i = i + 1;
		document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
		document.getElementById('chatscreen').scrollTop = 9999999;
		//document.getElementById("chatscreen").appendChild(log);
    //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
    console.log("user:" + i);

    // convert user input to lowercase 
    //lastUserMessage = lastUserMessage.toLowerCase();
    //console.log(lastUserMessage);

    // if user says yes, continue 
    if (lastUserMessage.toLowerCase() === "no") {
      setTimeout(function() {
      botMessage = "Maybe next time."
      messages.push("<b>" + botName + ":</b> " + botMessage);
      i = i + 1;
			document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
			document.getElementById('chatscreen').scrollTop = 9999999;
			//document.getElementById("chatscreen").appendChild(log);
      //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
      console.log("chatbot:" + i);
    }, 2000);
			/*setTimeout(function() {
        chatbotResponse();
        messages.push("<b>" + botName + ":</b> " + botMessage);
        i = i + 1;
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
        console.log("chatbot:" + i);
        counter = counter + 1;
      }, 2000);*/
    } else {
      setTimeout(function() {
				chatbotResponse();
        messages.push("<b>" + botName + ":</b> " + botMessage);
        i = i + 1;
				document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
				document.getElementById('chatscreen').scrollTop = 9999999;
				//document.getElementById("chatscreen").appendChild(log);
        //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
        console.log("chatbot:" + i);
        counter = counter + 1;
      }, 2000);
    }
  } else {
    setTimeout(function() {
      botMessage = "Something went wrong!"
      messages.push("<b>" + botName + ":</b> " + botMessage);
      i = i + 1;
			document.getElementById("chatscreen").innerHTML+="<p>"+messages[messages.length-1];
			document.getElementById('chatscreen').scrollTop = 9999999;
			//document.getElementById("chatscreen").appendChild(log);
      //document.getElementById("chatlog" + i).innerHTML = messages[messages.length - 1];
      console.log("chatbot:" + i);
    }, 2000);
  }
}



//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    answer();
  }

  /*
	if (key == 13 || key == 3) {
    //runs this function when enter is pressed
   welcome();
	 /* newEntry() 
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }*/

}
//document.getElementById("chatbox").value = lastUserMessage;


//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}

