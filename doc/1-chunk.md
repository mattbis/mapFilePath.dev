1. it only has this kind of incremental scalar type thing .. a or 1. such that the blocks make some sense. This is really easy to do in the algorithms also. 

a. decide on chunk size of the output as its processed

i. `--chunk -entries 8192` stop on 8192 entries
ii. `--chunk -size 8192mb` chunk in block segmentation
ii. `--chunk -size 8192b` chunk ..

b. control the output chunk name
  1. `--chunk-filename-pattern` `-cfp`
    i. `mapFilePath --cfp null,1` === filename, index => `mapFilePath-1.json`
    ii. `mapFilePath --cfp word,1` === filename, index => `word-1.json`, `2`, `11`
    iii. `mapFilePath --cfp word,a` === filename, index => `word-a.json`, `b`, `aa`
