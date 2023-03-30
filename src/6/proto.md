- something like:-
`getPort`|`port`
`getChannel`|`channel`
`orderByPq`
`orderByManifest`
`setTopic`|`topic`
`setPq`|`pq`
`stop`|`pause`
`setPqRecord`
`setTransformer`
`setScheduler`
`setChannelLimit`
`setTopicLimit`
`setDiffLimit`
`setTransformerLimit`
`setGarbagePolicy`
`exhaust`
`immediate`
`order`
`flush`
`_combine`
`_merge`
`_split`
`PORT_MASQUERADE_SERIAL` forces all ports and channels in them to actually be a mono serial machine ( for debugging ) 
`PORT_CHANNEL_DUMP` forces `var/dump` for debugging

from prev versions:
`delay`
`lfo`

for all channels:
`mono`|`serial`|`threaded`



The above depends on Cpp, Go or Rust since that is the only languages id even attempt this with. Havent decided.

This is intended as just a very fancy way to control how the searching, mapping, indexing, caching, diff works... And is meant for a complex application like the other projects I am thinking about. 

A port is binding to the engine... which is included or a daemon. 
A channel is a isolated request from the topic complexity
A channel is a way to request the same topic but in differing live queries.
A topic is a struct, that matches the included build headers... it only matches the default build or a custom one ( since I would not want a giant exe tbh ) - differring via the binding into another language would make it silly.. and this is why this part is likely only a subset at first ( `-images [media-type]` , `-audio [media-type]` ) 

A pq will set a type of record that orders the results, and controls what responds first. Or how things are resolved.. in a type of walk manifest.

App can use a new channel to stop the others, merge the results and exhaust. So that you can make it prioritise input from cli. Or leave it to resolve. 

App or library can combine channels or split them for some fragmentation.. 

- traits 
  `[[allow channel to use diff]]`
  `[[allow channel to cache topic]]`
  
`Indexer`
`TopicIndexer`
`Stream`
`Writer`

#### todo I am not sure what language and also need to improve the fluent concepts.. 
