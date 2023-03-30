## wip: something like api:

- `q`
- `q [str]`
- `q [topic] [str]`
- `q * [bits]`
- `qtopic` ==> ** mod:
- `qatts`
- `qstats`
- `qheader`
- `qcontent`
- `qblock`

### ports
`getPort`|`port` 
`setPortPolicy` set a blanket policy tree that effects the others, then you change it for each thing if you want
`_setDefaultFromFilter` create port from a filter type  that searches everthing
`setPortCachePolicy` stop it using shared caches for diff and sync
`setDestructorPolicy` make it not care
`setTransformerPolicy` set what the transformer does

### all
`setManifest`|`manifest` sets a whole load of things in one go
`setMode`
`setAttributes`
`setFilterCachePolicy`
- SEMAPHORES `start`|`stop`|`pause`
`setPhase`
`getPhase`
`forcePhase`
`exhaust`
`immediate`
`forget`
`order`
`flush`
`_combine`
`_merge`
`_split`

`PORT_MASQUERADE_SERIAL` forces all ports and channels in them to actually be a mono serial machine ( for debugging ) 
`PORT_CHANNEL_DUMP` forces `var/dump` for debugging
`PHASE_PRE`
`PHASE_POST`
`CHANNEL_SIDE` include to allow channels to share data, or set it for the runtime bindings... its faster included. I think. ITs teh default... this is only in a build i guess.. 
`CHANNEL_ISOLATE` dont use any shared caches or structures.

### filters can apply to ports and channels...
`setChannelFilter`|`filter`|`no-filter`
`setFilter`
`getFilter`
`setFilterManifest`
`getFilterFromMode`
`getFilterFromAttributes`

### channels
`getChannel`|`channel`
`setTopic`|`topic`
`setChannelMode`
`setChannelAttributes`
`setChannelCachePolicy`

### processing
`setPq`|`pq`
`setHq`|`hq`
`setOq`|`oq`
`setHqRecord`
`setPqRecord`
`setOqRecord`

### output
`setTransformer`
`getTransformer`
`getTransformers`
`getOutputPolicy`
`setOutputPolicy`

### runner/runtime/policy
`setScheduler`
`setChannelLimit`
`setChannelPolicy` this means a channel can share results from another channel ( within a port ) 
`setTopicLimit`
`setDiffLimit`
`setTransformerLimit`
`setGarbagePolicy`
`setResident`
`setCachePolicy` overrides or should be first, if the others need some customisation.. or you just use `setManifest` on the port.

#### implied, part of it, etc.. or programmable.. 

`Indexer`
`TopicIndexer`
`Stream`
`Writer`
`SlothWriter`


### from prev versions:
`delay`
`lfo`

### for all channels:
`mono`|`serial`|`threaded`
- `setOrder` this can really slow it down
- `PHASE_POST setOrder`


### drafts

The above depends on C, Cpp, Go or Rust since that is the only languages id even attempt this with. Havent decided.

This is intended as just a very fancy way to control how the searching, mapping, indexing, caching, diff works... And is meant for a complex application like the other projects I am thinking about. 

A port is binding to the engine... which is included or a daemon.
A channel is a stream.
A channel is a isolated request from the topic complexity
A channel is a way to request the same topic but in differing live queries.
A topic is a struct, that matches the included build headers... it only matches the default build or a custom one ( since I would not want a giant exe tbh ) - differring via the binding into another language would make it silly.. and this is why this part is likely only a subset at first ( `-images [media-type]` , `-audio [media-type]` )

A topic can be a type of perm query.
A topic can be queried.
A channels topic results can be merged if the channels have the same filter.

A channel will share its physical data.
A channel will share its fs data.
A channel can not share any data.

A filter controls. How channels or ports. respond. Such that a filter can apply across the app or library. Or be used in a channel. The filter effects the pipeline. And cannot be undone. 

A pq will set a type of record that orders the results, and controls what responds first. Or how things are resolved.. in a type of walk manifest.

App can use a new channel to stop the others, merge the results and exhaust. So that you can make it prioritise input from cli. Or leave it to resolve. 

App or library can combine channels or split them for some fragmentation.. 

- traits 
  `[[allow channel to use diff]]`
  `[[allow channel to cache topic]]`

#### todo I am not sure what language and also need to improve the fluent concepts.. 
