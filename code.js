var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76bf470b-616a-4df4-8fb4-9d00069e57a0","92c768d4-9535-4707-a326-a3858792301f","ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f","10a445b9-17d4-408a-9b28-d8d33b943d12","3fdaa2a6-66f0-4018-bd6e-81f7cf56f981","079bbdcb-c7b0-4319-8b50-95e65c031020","f53f9343-31d6-4539-bc3d-ac6f3005879f","7f894736-d3e5-4f2d-8370-ef6d31f9debf","a6f662fe-22cc-4d1d-85f1-14bca38c2781","e1ad87ea-6f12-4900-ab8d-d27725a9be77","4f1e38d5-4c2a-477e-8d51-85f9ac771807","e00b898f-e821-4283-9c02-0006c47398c9"],"propsByKey":{"76bf470b-616a-4df4-8fb4-9d00069e57a0":{"name":"fruit2","sourceUrl":null,"frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":12,"version":"aKmguY8k3HDFXSu6vOflRqCy7TWMpNky","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/76bf470b-616a-4df4-8fb4-9d00069e57a0.png"},"92c768d4-9535-4707-a326-a3858792301f":{"name":"fruit3","sourceUrl":null,"frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"fPO3JH9TXaYJJUsPaJilH5n_0IOqcJxD","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/92c768d4-9535-4707-a326-a3858792301f.png"},"ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f":{"name":"alienGreen_badge_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword","sourceUrl":null,"frameSize":{"x":99,"y":108},"frameCount":1,"looping":true,"frameDelay":12,"version":"BLWNvIVYWKZr8vbteHSCbXpIWdxKhps3","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":108},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"3fdaa2a6-66f0-4018-bd6e-81f7cf56f981":{"name":"broken","sourceUrl":null,"frameSize":{"x":99,"y":108},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZzqS4.n2ldd7oqq4wWLWbbLMESQYAJf_","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":108},"rootRelativePath":"assets/3fdaa2a6-66f0-4018-bd6e-81f7cf56f981.png"},"079bbdcb-c7b0-4319-8b50-95e65c031020":{"name":"fruit1","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"f53f9343-31d6-4539-bc3d-ac6f3005879f":{"name":"fruit4","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"gameover","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"a6f662fe-22cc-4d1d-85f1-14bca38c2781":{"name":"bomb","sourceUrl":null,"frameSize":{"x":175,"y":241},"frameCount":1,"looping":true,"frameDelay":12,"version":"f1ncG38h8cARzDjZkK.1trWKrIXGrU2S","loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":241},"rootRelativePath":"assets/a6f662fe-22cc-4d1d-85f1-14bca38c2781.png"},"e1ad87ea-6f12-4900-ab8d-d27725a9be77":{"name":"background","sourceUrl":null,"frameSize":{"x":1024,"y":683},"frameCount":1,"looping":true,"frameDelay":12,"version":"fbttRmw4AQve_cDpOfbUnPdmvjxm57YG","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":683},"rootRelativePath":"assets/e1ad87ea-6f12-4900-ab8d-d27725a9be77.png"},"4f1e38d5-4c2a-477e-8d51-85f9ac771807":{"name":"fruit5","sourceUrl":"assets/api/v1/animation-library/gamelab/sQHJooT7FCHR4GwCaJiJ4pboCUUmi__1/category_food/cherry.png","frameSize":{"x":132,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"sQHJooT7FCHR4GwCaJiJ4pboCUUmi__1","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sQHJooT7FCHR4GwCaJiJ4pboCUUmi__1/category_food/cherry.png"},"e00b898f-e821-4283-9c02-0006c47398c9":{"name":"fruit6","sourceUrl":"assets/api/v1/animation-library/gamelab/CWDIiQkwYp.eDP8XXbtxWVrDIIuJY4G_/category_food/lemon.png","frameSize":{"x":300,"y":246},"frameCount":1,"looping":true,"frameDelay":2,"version":"CWDIiQkwYp.eDP8XXbtxWVrDIIuJY4G_","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":246},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CWDIiQkwYp.eDP8XXbtxWVrDIIuJY4G_/category_food/lemon.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Game States
var PLAY = 1;
var END = 0;
var gameState = 1;

//creating background
var x = createSprite(200,200);
x.setAnimation("background");

//Creating sword
var sword = createSprite(200,200,10,10);
sword.setAnimation("sword");
sword.scale = 0.7;
sword.setCollider("circle",0,0,20);


//Score and Groups
var score = 0;
var fruitGroup = createGroup();
var bombGroup = createGroup();

function draw() {
  
  background(rgb(51, 0, 51 ));
  
  
if(gameState === PLAY){  
 // Moving sword with mouse
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
  fruits();
  bombs();
  
  drawSprites();
  
  fill("red");
  textSize(35);
  textFont("Bradley Hand ITC Reguluar");
  text("Score:" + score,260,45);
  
  if (sword.isTouching(fruitGroup)) {
    fruitGroup.destroyEach();
    playSound("assets/category_whoosh/heavy_sword_whoosh.mp3", false);
    score = score + 2;  
  }
  
  if (sword.isTouching(bombGroup)) {
    bombGroup.destroyEach();
    sword.setAnimation("broken");
    fruitGroup.destroyEach();
    playSound("assets/category_male_voiceover/game_over_male.mp3", false);
    gameState = END;
 
  }
  
 
}

else if(gameState === END ){
  
  Gameover();
  drawSprites();
  fill("red");
  textSize(35);
  textFont("Bradley Hand ITC Reguluar");
  text("Score:" + score,260,45);
}
//global functions
//fruit function  
 function fruits() {
  if (World.frameCount%50 === 0){
   var position = randomNumber(1,2) ;
   var fruit = createSprite(400,randomNumber(0,310),10,10);
   var rand = randomNumber(1,6);
   fruit.setAnimation("fruit" + rand);
   fruit.scale = 0.2;
   fruit.velocityX = -6;
   fruit.lifetime = 65;
   if (position === 1) {
     fruit.x = 400;
     fruit.velocityX = -(7+(score/10));
     
   } else 
   {
     if(position === 2)
      fruit.x = 0;
      fruit.velocityX = 7+(score/10);
      
     
   }
   
   fruitGroup.add(fruit);
 }
 }
 
 //bomb function
 function bombs() {
   if (World.frameCount%120 === 0){
   var position = randomNumber(1,2) ;
   var bomb = createSprite(400,randomNumber(0,310),10,10);
   bomb.setAnimation("bomb");
   bomb.scale = 0.3;
   bomb.velocityX = -6;
   bomb.lifetime = 65;
  if (position === 1) {
     bomb.x = 400;
     bomb.velocityX = -(8+(score/10));
     
   } else 
   {
     if(position === 2)
      bomb.x = 0;
      bomb.velocityX = 8+(score/10);
      
     
   }
   bombGroup.add(bomb);
}  
}

//gameover function
function Gameover() {
var over =  createSprite(200,195,10,10);
over.setAnimation("gameover");
over.scale = 0.5;
}

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
