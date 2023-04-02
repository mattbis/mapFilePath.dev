# mapFilePath.dev
.. 
now I realise actually beyond 0 this will require too much time we have to decide on the language... Gotta checkout some more versions firstr.. since everytime we get something roughly right it provokes many thoughts.. about the ultimate version. Each language has many benefits and cons... 

So a static compile is definitely preferred to produce variants. This could instead pipeline to llvm and make hte others.. 
In any case.. a namespace/module/class/funtions/consts approach is best.

1. generating it from a main rs, c src or cpp makes sense to me since for 0 i think we can just use gpt.. 
  i. im veering on consolidation
2. concentrating on this also helps the main project
3. scripting variants arent important other than for ci.. and a kinda base test on my system ( its the reason for it ) 

### motions
1. consolidate everything into 2 main variants `scripting` and `source`
  i. scripting goes up to edition 2. 
  ii. source is only supported in main language to 8.
  iii. some attempt is made to make it cross compile.
