i.`--chunk`
  1. `--chunk-filename-pattern` `-cfp`
    i. `mapFilePath --cfp null,1` === filename, index => `mapFilePath.1.json`
    ii. `mapFilePath --cfp word,1` === filename, index => `word.1.json`
    iii. `mapFilePath --cfp word,a` === filename, index => `word.a.json`
