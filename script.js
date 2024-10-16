 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("head") || input.includes("hi")) {
      output = "Headache,S10+F1+Ver1,L1+WE,S5+C5,Allargy";
    } else if (input.includes("throat")) {
      output = "C13+P3+WE,P1+S5+C5,Ver1+L1.";
    } else if (input.includes("langs")) {
      output = "P3+S1,Ver2+C13,F1+YE";
    } else if (input.includes("fever")) {
      output = "VER1+F1+S1 VIRAL FEVER,L1+S1O+A1 DAIGESTIVE,WE+VEN1+S5 +C5,CLAIMET";
    } else if (input.includes("wound")) {
      output = "S5+C5+VEN1,L1+F1+L1,murivpani,GE.";
    } else if (input.includes("sex")) {
      output = "Ven1+Ver1,Ven1+L1,parmbariam";
    } else if (input.includes("asthma")) {
      output = "P1+S1+A3,P3+BE+F1";
    } else if (input.includes("allergy")) {
      output = "P1+S1+RE,P4+F1+WE,All type of allergy";
    } else if (input.includes("digestive")) {
      output = "S1+A3+VER1+RE,S10+WE+SY+L1";
    } else if (input.includes("skin")) {
      output = "APP+S5+C5,C3+S3+A2+VEN1";
    } else if (input.includes("speak")) {
      output = " Speak disorder,VER1+S1+L2,SY+WE";
    } else if (input.includes("diabetes")) {
      output = "S2+C17+VEN1,S6+WE+S1";
    } else if (input.includes("vertigo")) {
      output = "S2+C17+VEN2,S6+WE+S2";
    } else if (input.includes("diarrhea")) {
      output = "C10+S10, VER1+WE";
    } else if (input.includes("Abdomin")) {
      output = "Abdominal pain.C10+S10,VER1+WE";
    } else if (input.includes("Heart")) {
      output = "Heart burm.S1+L1+A3,VER1+S10+C10,SLASS+A3,";
    } else if (input.includes("vomiting")) {
      output = "S1+L1+A3+VER1,S10+C10+SLASS+A3";
    } else if (input.includes("tonsils")) {
      output = "Acute tonsils.C13+S1+P3,A3+F1+GE,C5+S5";
    } else if (input.includes("dephtheria")) {
      output = "C13+S1+P4,A3+F1+GE";
    } else if (input.includes("pain")) {
      output = "muscular pain,P1+F2+A3,S5+CS+WE";
    } else if (input.includes("ear")) {
      output = "All kind of ear problems,S1+C3+BE,S5+C5+F1";
    } else if (input.includes("rhinitis")) {
      output = "Allergic rhinitis,S10+F1+P1+GE,S5+C5+A2+RE";
    } else if (input.includes("obesity")) {
      output = "S1+L1+C2,S10+SY+WE";
    } else if (input.includes("nerve")) {
      output = "S5+C5+GE,L3+S2+WE,VNE1+RE";
    } else if (input.includes("epilepsy")) {
      output = "S10+VER1+WE,F1+C5+L2";
    } else if (input.includes("hair")) {
      output = "Hair problems.S2+F2+A3,App+RE+Ven1+S3";
    } else if (input.includes("bp")) {
      output = "Hypertension,A3+S6+FI,YE+WE+C6+BE";
    } else if (input.includes("low")) {
      output = "A1+S6+C2,C6+L2+RE+BE";
    } else if (input.includes("kidney")) {
      output = "C17+LI+SI,S6+C6+WE";
    } else if (input.includes("Jaundice")) {
      output = "S2+S5+C5,F1+S10+WE";
    } else if (input.includes("eye")) {
      output = "S12+C5+BE+YE+APP";
    
    } else if (input.includes("piles")) {
      output = "AI+SI+C10,Verl+LI+Slass+BE";
    } else if (input.includes("joint")) {
      output = "joint pain,S2+L2+A3,C5+C6+RE,S6";
    } else if (input.includes("urine")) {
      output = "S5+C1,S6+C6";
    } else if (input.includes("bladder")) {
      output = "A2+WE+S2+,S6+C2";
    } else if (input.includes("male")) {
      output = "Sexual weakness of male.S1-LI+A3,Ven1+WE+RE+S3,SY";
    } else if (input.includes("hart")) {
      output = "S6+C2+C6+YE,S2+WE+C17";
    } else if (input.includes("liver")) {
      output = "S5+C5+F1,S10+WE,S2";
    } else if (input.includes("nasal")) {
      output = "Nasal polypus,C4+Ven 1+ Ver1+L2+GE";
    } else if (input.includes("anaemia")) {
      output = "S1+We+A3,S10+F1+VER1,S5+YE";
    } else if (input.includes("amoenorrhoa")) {
      output = "S1+C4+L1,S2+VER1+WE+C3,S9+C2";
    } else if (input.includes("dysentry")) {
      output = "S10+C10,VER+WE";
    } else if (input.includes("acne")) {
      output = "S3+A2+L1,S10+S5+C5,A3";
    } else if (input.includes("bronchis")) {
      output = "S1+Ver1+Linf1,C5+RE+S10+P1";
    } else if (input.includes("boils")) {
      output = "C7+A1+C4,RE+S5+C5,";
    } else if (input.includes("tb")) {
      output = "S1+C5+L1,VER1+C1+P1+F1";
    } else if (input.includes("cholera")) {
      output = "S1+WE+S-LASS+C15,S10+A3+LI ,S5+F1+VER+YE";
    } else if (input.includes("Cancer")) {
      output = "S1+WE+Ven1,A2+C1+L1,VER1+P1+F1";
    } else if (input.includes("blood")) {
      output = "A1+C13+S1,VER2+L1+A2+GE";
    } else if (input.includes("typhoid")) {
      output = "F1+Ver1+S6+C6, RE+A2+C4, C5,";
    } else if (input.includes("acidity")) {
      output = "S10+C10,S15+L1+BE.";
    } else if (input.includes("leucorrhoea")) {
      output = "S1+C2+F1,S2+VER1+YE+C3,S10+VEN1+BE";
    } else if (input.includes("mumps")) {
      output = "C5+S5+A2,Linf1+Ven1+GE";
    } else if (input.includes("limph")) {
      output = "S1+S2+S5+RE+YE";


    } else if (input.includes("thonda")) {
      output = "C13+P3+WE,P1+S5+C5,Ver1+L1.";
    } else if (input.includes("chuma")) {
      output = "P3+S1,Ver2+C13,F1+YE";
    } else if (input.includes("pani")) {
      output = "VER1+F1+S1 VIRAL FEVER,L1+S1O+A1 DAIGESTIVE,WE+VEN1+S5 +C5,CLAIMET";
    } else if (input.includes("muriv")) {
      output = "S5+C5+VEN1,L1+F1+L1,murivpani,GE.";
    
    } else if (input.includes("alargy")) {
      output = "P1+S1+RE,P4+F1+WE,All type of allergy";
    } else if (input.includes("vayar")) {
      output = "S1+A3+VER1+RE,S10+WE+SY+L1";
    } else if (input.includes("chori")) {
      output = "APP+S5+C5,C3+S3+A2+VEN1";
    } else if (input.includes("vikk")) {
      output = " Speak disorder,VER1+S1+L2,SY+WE";
    } else if (input.includes("shugar")) {
      output = "S2+C17+VEN1,S6+WE+S1";
    } else if (input.includes("thalakarakam")) {
      output = "S2+C17+VEN2,S6+WE+S2";
    } else if (input.includes("vayattilninnupok")) {
      output = "C10+S10, VER1+WE";
    } else if (input.includes("kudal")) {
      output = "Abdominal pain.C10+S10,VER1+WE";
    } else if (input.includes("hrdayam")) {
      output = "Heart burm.S1+L1+A3,VER1+S10+C10,SLASS+A3,";
    } else if (input.includes("chardi")) {
      output = "S1+L1+A3+VER1,S10+C10+SLASS+A3";
    } else if (input.includes("tonci")) {
      output = "Acute tonsils.C13+S1+P3,A3+F1+GE,C5+S5";
    } else if (input.includes("diftheeriya")) {
      output = "C13+S1+P4,A3+F1+GE";
    } else if (input.includes("vedana")) {
      output = "muscular pain,P1+F2+A3,S5+CS+WE";
    } else if (input.includes("chevi")) {
      output = "All kind of ear problems,S1+C3+BE,S5+C5+F1";
    } else if (input.includes("mookk")) {
      output = "Allergic rhinitis,S10+F1+P1+GE,S5+C5+A2+RE";
    } else if (input.includes("thadi")) {
      output = "S1+L1+C2,S10+SY+WE";
    } else if (input.includes("naramb")) {
      output = "S5+C5+GE,L3+S2+WE,VNE1+RE";
    } else if (input.includes("apasmaram")) {
      output = "S10+VER1+WE,F1+C5+L2";
    } else if (input.includes("mudi")) {
      output = "Hair problems.S2+F2+A3,App+RE+Ven1+S3";
    } else if (input.includes("prashar")) {
      output = "Hypertension,A3+S6+FI,YE+WE+C6+BE";
    } else if (input.includes("kuravprashar")) {
      output = "A1+S6+C2,C6+L2+RE+BE";
    } else if (input.includes("kidni")) {
      output = "C17+LI+SI,S6+C6+WE";
    } else if (input.includes("manjapitham")) {
      output = "S2+S5+C5,F1+S10+WE";
    } else if (input.includes("kannu")) {
      output = "S12+C5+BE+YE+APP";
    
    } else if (input.includes("molakuru")) {
      output = "AI+SI+C10,Verl+LI+Slass+BE";
    } else if (input.includes("ellu")) {
      output = "joint pain,S2+L2+A3,C5+C6+RE,S6";
    } else if (input.includes("mootram")) {
      output = "S5+C1,S6+C6";
    } else if (input.includes("motrasanji")) {
      output = "A2+WE+S2+,S6+C2";
    } else if (input.includes("aanungal")) {
      output = "Sexual weakness of male.S1-LI+A3,Ven1+WE+RE+S3,SY";
    } else if (input.includes("hartnenjuvedana")) {
      output = "S6+C2+C6+YE,S2+WE+C17";
    } else if (input.includes("karal")) {
      output = "S5+C5+F1,S10+WE,S2";
    } else if (input.includes("mookk")) {
      output = "Nasal polypus,C4+Ven 1+ Ver1+L2+GE";
    } else if (input.includes("rekthakurav")) {
      output = "S1+We+A3,S10+F1+VER1,S5+YE";
    } else if (input.includes("arthavam")) {
      output = "S1+C4+L1,S2+VER1+WE+C3,S9+C2";
    } else if (input.includes("vayarilakkam")) {
      output = "S10+C10,VER+WE";
    } else if (input.includes("mukakkuru")) {
      output = "S3+A2+L1,S10+S5+C5,A3";
    } else if (input.includes("brongatis")) {
      output = "S1+Ver1+Linf1,C5+RE+S10+P1";
    } else if (input.includes("kuru")) {
      output = "C7+A1+C4,RE+S5+C5,";
    } else if (input.includes("kshayam")) {
      output = "S1+C5+L1,VER1+C1+P1+F1";
    } else if (input.includes("kolara")) {
      output = "S1+WE+S-LASS+C15,S10+A3+LI ,S5+F1+VER+YE";
    } else if (input.includes("kansar")) {
      output = "S1+WE+Ven1,A2+C1+L1,VER1+P1+F1";
    } else if (input.includes("raktham")) {
      output = "A1+C13+S1,VER2+L1+A2+GE";
    } else if (input.includes("taifoid")) {
      output = "F1+Ver1+S6+C6, RE+A2+C4, C5,";
    } else if (input.includes("punnu")) {
      output = "S10+C10,S15+L1+BE.";
    } else if (input.includes("vellapok")) {
      output = "S1+C2+F1,S2+VER1+YE+C3,S10+VEN1+BE";
    } else if (input.includes("mundi")) {
      output = "C5+S5+A2,Linf1+Ven1+GE";
    } else if (input.includes("limph")) {
      output = "S1+S2+S5+RE+YE";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else if (input.includes("dilsha")) {
      output = "paayipatthi";
    } else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });