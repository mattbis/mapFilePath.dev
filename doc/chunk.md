todo - not happy with this and i forgot about subargs.. style... 

i.`--chunk`
  1. `--chunk-filename-pattern` `-cfp`
    i. `mapFilePath --cfp null,1` === filename, index => `mapFilePath.1.json`
    ii. `mapFilePath --cfp word,1` === filename, index => `word.1.json`, `11`
    iii. `mapFilePath --cfp word,a` === filename, index => `word.a.json`, `aa`
    iv. `mapFilePath --cfp -hash 8` === filename => `[unique-hash-8-chars]` ( this only works if -hash is immediate after --cfp )
