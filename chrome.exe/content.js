const generateSTYLES = (link) => {
    return `
        <link rel='stylesheet' type='text/css' href="${link}">
    `;
};



const generateHTML = (pageName) => {
    return `
  <div class="flex-container">
    <div id="content">
      <div id="stratheadwrap">
        <div id="starthead">
          <h1 class="main" data-text="FOCUS">FOCUS</h1>
          <p>studying > ${pageName} </p>
          <div id="quotenauthor">
          <div id="quote">
                "Don't forget: life is a race, if you don't run fast, you'll get trampled."
          </div>
          <div class="author">
               - Anonymous
          </div>
          </div>
        </div>
        </div>
    </div>
    <div class="sliding-background"></div>
</div>

<script src="https://FocusPocus.bw7898.repl.co/quote.js"></script>
    `;
};

var quote 

switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("youtube", "\"\"");
        break;
    case "www.twitch.tv":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("twitch", );
        break;
    case "www.dailymotion.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("dailymotion", );
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("netflix", );
        break;
    case "www.primevideo.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("prime video", );
        break;
    case "www.disneyplus.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("disney+");
        break;
    case "www.funimation.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("funimation");
        break;
    case "www.crunchyroll.com=":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("crunchyroll");
        break;
    case "www.hulu.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("hulu");
        break;
    case "www.hbomax.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("hbomax");
        break;
    case "www.peacocktv.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("peacocktv");
        break;
    case "www.addictinggames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("addicting games");
        break;
    case "poki.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("poki");
        break;
    case "www.arkadium.com/free-online-games":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("arkadium");
        break;
    case "www.aol.com/games":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("aol");
        break;
    case "kizi.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("kizi");
        break;
    case "www.coolmathgames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("not-cool math games");
        break;
    case "www.crazygames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("v crazy games");
        break;
    case "gameforge.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("gameforge");
        break;
    case "www.kiloo.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("kiloo");
        break;
    case "www.miniplay.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("miniplay");
        break;
    case "www.agame.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("agame");
        break;
    case "lagged.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("lagged");
        break;
    case "www.silvergames.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("silvergames");
        break;
    case "gamaverse.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("gamaverse");
        break;
    case "classic.minecraft.net":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("minecraft");
        break;
    case "www.playjolt.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("playjolt");
        break;
    case "paperminecraft.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("paper minecraft");
        break;
    case "diep.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("diep");
        break;
    case "slither.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("slither");
        break;
    case "zombsroyale.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("zombs royale");
        break;
    case "lordz.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("lordz");
        break;
    case "agar.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("agar");
        break;
    case "krunker.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("krunker");
        break;
    case "hole-io.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css"); 
        document.body.innerHTML = generateHTML("hole-io");
        break;
    case "mope.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("mope");
        break;
    case "warbot.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("warbot");
        break;
    case "iogames.onl":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("iogames");
        break;
    case "moomoo.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("moomoo");
        break;
    case "brutal.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("brutal");
        break;
    case "gartic.io":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("gartic");
        break;
    case "discordapp.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("discord");
        break; 
    case "amazon.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("amazon");
        break;
    case "roblox.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("roblox");
        break;
    case "imdb.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("movies");
        break;
    case "pinterest.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("pinterest");
        break;
    case "play.google.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("google play");
        break;
    case "lichess.org":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("lichess");
        break;
    case "www.chess.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("chess.com");
        break;
    case "chess24.com":
        document.head.innerHTML = generateSTYLES("https://focuspocus.bw7898.repl.co/style.css");
        document.body.innerHTML = generateHTML("chess24");
        break;
}
