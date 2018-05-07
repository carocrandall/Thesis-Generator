var backgroundImage;

var entryOne = ['sentimental value', 'Rhythms of the digital and analog worlds', '...rituals and methods of ‘eating on the go', 'How we can create a better informed and directed dialogue between developers and the public','natural metaphors','Hype culture / streetwear culture', 'how to cope with anxiety in our daily life', 'methods and strategies to reclaim a space', 'manufacturing in music', 'empowering stay at home parents','human-machine interactions in a world of rapidly advancing automation/data saturation', 'Awareness of the mundane moments and habits', 'minor details in daily life', 'My project is to study frequency.','the ways of maximizing the value of food', 'build connection and sense of belonging for people who feel lonely','graphic design’s role in our understanding of truth, myth, and history','The potential of smell in storytelling', 'How to inject meaningful rituals into everyday life', 'What happens when objects are designed for what they are designed not to do', 'Radicalizing planned obsolescence, searching for the phantasmagoric object', 'The fashion and outfit matching for blind people', 'MARK MAKING'];
var entryTwo = ['to affect the longevity of objects', 'create a critical viewpoint on how we think about technology', '...inform new values and relationships with food', 'enfranchise communities in deciding what theyir neighborhood turns into while creating adequate development for a growing population', ' to explore various type of access within compositions', 'be critical about how consumerism and spectacle operate through hype, as well as what they mean in society', 'In order to how people engage with the product in their anxious time', 'in order to curate shows and exhibitions with the language of graphic design', 'explore the evolution of physical instruments', 'to empower Stay-At-Home-Parents in being proactive in combating negative emotions, social isolation and feeling unvalued', 'study how that has an impact on the form of work in time to come', 'highlights some acts to aware people about habits and moments', 'understand these minor details', 'Visualize how people’s frequncy are changed by others factors','raise an awareness and shift behavioral mindsets about food waste', 'interrupt the cycle of bad digital habits formation', 'Understand and reveal the authoritative power of design', 'Discover the potential of smell', 'in order to explore more method represent information', 'have a more qualified life', 'Force a user to consider that which they had not thought of before. To bring to light the taken for granted and overlooked', 'help them organize their clothes and go shopping', 'BETTER DRAW'];
var entryThree = ['the curation of possessions', 'everyday life', '...urban settings, like food carts, kiosks, trucks', 'in San Francisco','photograms','anywhere','In our daily life', 'in anywhere, physical, spritual, mind', 'the digital music age', 'in California', 'urban cities, across cultures.', 'daily life', 'my daily life', 'A room', 'individual household', 'physical interactions', 'Our collective narratives', 'All kinds of scenarios', 'SF', 'the modern society', 'Everyday life', 'both physically stores and online', 'GRAPHIC DESIGN'];


function preload() {
 // for (var i = 0; i < 6; i++) {
  //  thesisImages[i] = loadImage('images/inspo' + i + '.jpg');
//  }
}


function setup() {
  createCanvas(1921, 1081);
  Cera = loadFont("fonts/CeraMedium.otf");
  Sentinel = loadFont("fonts/SentinelLightItalic.otf");
  backgroundImage = loadImage("images/backgroundimage.jpg")
  
}

function draw() {
// image(backgroundImage,0,0,0);
//  fill(255);
//  noStroke();
//  rect(0,0,900,100);
//  fill(0);
 // textFont(Cera, 16);
  //text("Thesis Generator", 25, 25);
  //textFont(Sentinel, 14);
  //var s = "Press the button to make a thesis.";
  //text(s, 40, 40, 500, 200);

 
}

function mouseClicked() {
    background(backgroundImage);

  u = floor(random(0,entryOne.length));
  t = floor(random(0,entryTwo.length));
  g = floor(random(0,entryThree.length));
  
 print(entryOne[u]);
 fill(255,255,255);
 textFont(Cera, 15);
 text(entryOne[u], 300,550, 400);
 text(entryTwo[t], 775, 550, 400 );
 text(entryThree[g], 1250, 550, 400 );
}