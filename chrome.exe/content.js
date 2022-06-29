const generateSTYLES = (link) => {
    return `
        <link rel='stylesheet' type='text/css' href="${link}">
        <script>
        const url = "https://api.quotable.io/random";
        function generateQuote(){
          fetch(url)
          .then(function(data) {
              return data.json();
          })  
          .then(function(data){    
              document.getElementById("quote").innerHTML = data.content;
              document.querySelector(".author").innerHTML = "- " + data.author;
          })
          .catch(function(err) {
              console.log(err); 
          });
        }
        setInterval(generateQuote(), 10000);
        </script>
    `;
};

const generateHTML = (pageName, quote, author) => {
    return `
    <div class="flex-container">
    <div class="sliding-background"></div> 
    <div id="content">
      <div id="stratheadwrap">
        <div id="starthead">
          <h1 class="main" data-text="FOCUS">FOCUS</h1>
          <p> studying > ${pageName} </p>
          <div id="quotenauthor">
          <div id="quote">
            ${quote}
          </div>
          <div class="author">
            ${author}
          </div>
          </div>
        </div>
    </div>
</div>
    `;
};

var quote 

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("youtube", "Of all the things which wisdom provides to make us entirely happy, much the greatest is the possession of friendship.", "- Epicurus");
        break;
    case "www.twitch.tv":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("twitch", "Genuine sincerity opens people's hearts, while manipulation causes them to close.", "- Daisaku Ikeda");
        break;
    case "www.dailymotion.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("dailymotion", "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do.", "- Kahlil Gibran");
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("netflix", "He has no enemies, but is intensely disliked by his friends.", "- Oscar Wilde");
        break;
    case "www.primevideo.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("prime video", "No garden is without its weeds.","- Thomas Fuller");
        break;
    case "www.disneyplus.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("disney+", "Friendship often ends in love, but love in friendship - never.","- Albert Camus");
        break;
    case "www.funimation.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("funimation", "What lies behind us and what lies before us are tiny matters compared to what lies within us.","- Ralph Waldo Emerson");
        break;
    case "www.crunchyroll.com=":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("crunchyroll", "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.","- Amelia Earhart");
        break;
    case "www.hulu.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("hulu", "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world.","- Blaise Pascal");
        break;
    case "www.hbomax.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("hbomax", "Love at first sight is easy to understand; it's when two people have been looking at each other for a lifetime that it becomes a miracle.","- Amy Bloom");
        break;
    case "www.peacocktv.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("peacocktv", "The secret of getting ahead is getting started.","- Mark Twain");
        break;
    case "www.addictinggames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("addicting games", "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.","- Anaïs Nin");
        break;
    case "poki.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("poki", "The ultimate promise of technology is to make us master of a world that we command by the push of a button.","- Volker Grassmuck");
        break;
    case "www.arkadium.com/free-online-games":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("arkadium", "Never interrupt your enemy when he is making a mistake.","- Napoleon");
        break;
    case "www.aol.com/games":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("aol", "You're not obligated to win. You're obligated to keep trying to do the best you can every day.","- Marian Wright Edelman");
        break;
    case "kizi.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("kizi", "Friendship may, and often does, grow into love, but love never subsides into friendship.","- Lord Byron");
        break;
    case "www.coolmathgames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("cool math games","We do not quit playing because we grow old, we grow old because we quit playing.","- Oliver Wendell Holmes Jr." );
        break;
    case "www.crazygames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("crazy games", "There is no friendship, no love, like that of the parent for the child.","- Henry Ward Beecher");
        break;
    case "gameforge.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("gameforge", "Divide each difficulty into as many parts as is feasible and necessary to resolve it.","- René Descartes");
        break;
    case "www.kiloo.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("kiloo", "In separateness lies the world's great misery, in compassion lies the world's true strength.","- Buddha");
        break;
    case "www.miniplay.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("miniplay", "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.","- Oliver Wendell Holmes Jr.");
        break;
    case "www.agame.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("agame", "When you doubt your power, you give power to your doubt.", "- Honoré de Balzac");
        break;
    case "lagged.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("lagged", "Small opportunities are often the beginning of great enterprises.","Demosthenes");
        break;
    case "www.silvergames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("silvergames", "We are made wise not by the recollection of our past, but by the responsibility for our future.","Bernard Shaw");
        break;
    case "gamaverse.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("gamaverse", "When you learn, teach. When you get, give.","Maya Angelou");
        break;
    case "classic.minecraft.net":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("minecraft", "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.","- Daisaku Ikeda");
        break;
    case "www.playjolt.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("playjolt", "The pain passes, but the beauty remains.","Pierre-Auguste Renoir");
        break;
    case "paperminecraft.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("paper minecraft", "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that, so it goes on flying anyway.","- Mary Kay Ash");
        break;
    case "diep.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("diep", "Never find fault with the absent.","- Alexander Pope");
        break;
    case "slither.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("slither", "Neatness begets order; but from order to taste there is the same difference as from taste to genius, or from love to friendship.","- Johann Kaspar Lavater");
        break;
    case "zombsroyale.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("zombs royale", "We lost because we told ourselves we lost.","- Leo Tolstoy");
        break;
    case "lordz.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("lordz", "He who knows that enough is enough will always have enough.","- Laozi");
        break;
    case "agar.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("agar", "All wisdom does not reside in Delhi.","- P. Chidambaram");
        break;
    case "krunker.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("krunker", "I believe in one thing only, the power of human will.","- Joseph Stalin");
        break;
    case "hole-io.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("hole-io", "The essence of true friendship is to make allowance for another's little lapses.","- Ovid");
        break;
    case "mope.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("mope", "Read as you taste fruit or savor wine, or enjoy friendship, love or life.","- George Herbert");
        break;
    case "warbot.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("warbot", "Of all the things which wisdom provides to make us entirely happy, much the greatest is the possession of friendship.","- Epicurus");
        break;
    case "iogames.onl":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("iogames", "You, yourself, as much as anybody in the entire universe, deserve your love and affection.","- Buddha");
        break;
    case "moomoo.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("moomoo", "Do not go where the path may lead, go instead where there is no path and leave a trail.","- Ralph Waldo Emerson");
        break;
    case "brutal.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("brutal", "Never mistake activity for achievement.","- John Wooden");
        break;
    case "gartic.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("gartic", "Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind.","- Henry James");
        break;
    case "discordapp.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("discord", "Do all things with love.","- Og Mandino");
        break; 
    case "amazon.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("amazon", "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.","- Buddha");
        break;
    case "roblox.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("roblox", "We are Divine enough to ask and we are important enough to receive.","- Wayne Dyer");
        break;
    case "imdb.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("movies", "Difficulties increase the nearer we get to the goal.","- Johann Wolfgang von Goethe");
        break;
    case "pinterest.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("pinterest", "Only do what your heart tells you.","- Princess Diana");
        break;
    case "play.google.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("google play", "Time you enjoy wasting, was not wasted.","- John Lennon");
        break;
    case "lichess.org":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("lichess", "Men are disturbed not by things, but by the view which they take of them.","- Epictetus");
        break;
    case "www.chess.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("chess.com", "True knowledge exists in knowing that you know nothing.","- Isocrates");
        break;
    case "chess24.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("chess24", "Life is a learning experience, only if you learn.","- Yogi Berra");
        break;
}