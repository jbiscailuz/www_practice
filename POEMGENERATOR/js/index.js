// HELP CREDITS:
// Vatanay
// Sarah Page
//https://codereview.stackexchange.com/questions/156874/node-js-automatic-poem-generator

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Text Interface ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// create element for submitting and showing

function responsiveChat(element) {
  $(element).html('<form class="chat"><span></span><div class="messages"></div><input type="text" placeholder="Your message"><input type="submit" value="Send"></form>');

  // shows recent messages (already written and then updates at the bottom to show new ones)

  function showLatestMessage() {
    $(element).find('.messages').scrollTop($(element).find('.messages').height());
  }
  showLatestMessage();

  // makes elements work

  $(element + ' input[type="text"]').keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $(element + ' input[type="submit"]').click();
    }
  });

  $(element + ' input[type="submit"]').click(function(event) {
    event.preventDefault();
    var message = $(element + ' input[type="text"]').val();

    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Poem Generator ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    // string of options (words)

    var articles = "The, All of the, Most of the, Some of the, My, Your, His, Her, Their, Our, Everybody's, Almost all of the, That, I knew that the, We knew that the, She knew that the, He knew that the, They knew that the".split(",");
    var HAPPYnouns = "morning,light, feeling, beauty, love, expression, message, happiness".split(",");
    var SADnouns = "darkness, night, feeling, ugliness, hatred, resentment, message, sadness, anger, frustration".split(",");
    var pastnfuture = "was, had been, will be, could be, might be, should have been, would have been, could have been".split(",");
    var HAPPYadjectives = "cheerful, joyous, delighted, glad, elated, peacful, true, overjoyed, blessed, a friend, love, overjoyed, serene, peacful, delighted, ecstatic, enchanting, mine, yours, his, hers, theirs, ours, fortunate, understood, mine, interesting, mutual, artistic, musical".split(",");
    var SADadjectives = "unhappy, mysterious, lonely, unfortunate, intricate, confusing, gloomy, false, fake, a lie, a stranger, grey, bitter, mournful, wistful, somber, heartbroken, mine, yours, his, hers, theirs, ours, lonely, misunderstood, mine, scared, singular, sorrow, unhappy".split(",");

    var x;

    var a = articles[Math.floor(Math.random() * articles.length)];
    var Hn = HAPPYnouns[Math.floor(Math.random() * HAPPYnouns.length)];
    var Sn = SADnouns[Math.floor(Math.random() * SADnouns.length)];

    var final = a + " " + Hn + Sn;

    // for loop determines the poem ("random" sentence postions and LENGTH)

    for (x = 0; x < 4; x++) {
      var art = articles[Math.floor(Math.random() * articles.length)];
      var nH = HAPPYnouns[Math.floor(Math.random() * HAPPYnouns.length)];
      var nS = SADnouns[Math.floor(Math.random() * SADnouns.length)];
      var pnf = pastnfuture[Math.floor(Math.random() * pastnfuture.length)];
      var adjH = HAPPYadjectives[Math.floor(Math.random() * HAPPYadjectives.length)];
      var adjS = SADadjectives[Math.floor(Math.random() * SADadjectives.length)];

      // text input (feeling) determines type of sentence

      if (message.indexOf('Happy') >= 0) {
        final += art + " " + nH + " " + pnf + " " + adjH + ".\n";
        if (x % 4 == 3) {
          final += "\n";
        }
      }

      if (message.indexOf('Sad') >= 0) {
        final += art + " " + nS + " " + pnf + " " + adjS + ".\n";
        if (x % 4 == 3) {
          final += "\n";
        }
      }

    }

    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// Text Interface ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////


    // show message sent (class="miMensaje") and received (class="deEllos")
    if ($(element + ' input[type="text"]').val()) {
      $(element + ' div.messages').append(
        '<div class="message"><div class="miMensaje"><p>' +
        message + "</div>" + '<div class="deEllos"><p>' +
        final + "</div>");
      // loading but its not working 100%
      setTimeout(function() {
        $(element + ' > span').addClass("ruedita");
      }, 100);
      setTimeout(function() {
        $(element + ' > span').removeClass("ruedita");
      }, 2000);
    }
    $(element + ' input[type="text"]').val("");
    showLatestMessage();

  });
}

// make sure there are texts in the phone when opening website:
//// element is type (text)
//// origin determines if its from the person receiving the texts (viewer of page / miMensaje) or from other person ("computer" / deEllos)
//// message is the actual text

function ChatSET(element, origin, message) {

  var originClass;
  if (origin == 'me') {
    originClass = 'miMensaje';
  } else {
    originClass = 'deEllos';
  }
  $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p></div></div>');
}

// Activates chatbox
responsiveChat('.responsive-html5-chat');

// Already set text messages
ChatSET('.chat', 'you', 'So you like poetry...');
ChatSET('.chat', 'me', 'Yes, I love it!');
ChatSET('.chat', 'you', 'I will write you a poem, I just need your help.');
ChatSET('.chat', 'me', 'Sure with what?');
ChatSET('.chat', 'you', 'Text me how you are feeling');
