---
title: OpenAPI 3.0 definition of Coderbot API v3 v1.0
language_tabs: []
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="openapi-3-0-definition-of-coderbot-api-v3">OpenAPI 3.0 definition of Coderbot API v3 v1.0</h1>

> Scroll down for example requests and responses.

Base URLs:

* <a href="http://coderbot.local/api/v1">http://coderbot.local/api/v1</a>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-coderbot-configuration">CoderBot configuration</h1>

## api.loadSettings

<a id="opIdapi.loadSettings"></a>

> Code samples

`GET /settings`

*Load settings*

<h3 id="api.loadsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.saveSettings

<a id="opIdapi.saveSettings"></a>

> Code samples

`PUT /settings`

*Save settings*

> Body parameter

```json
{}
```

<h3 id="api.savesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Settings](#schemasettings)|true|Save Settings|

<h3 id="api.savesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.restoreSettings

<a id="opIdapi.restoreSettings"></a>

> Code samples

`POST /settings/restore`

*Restore settings to default*

<h3 id="api.restoresettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-photos-management">Photos management</h1>

## api.listPhotos

<a id="opIdapi.listPhotos"></a>

> Code samples

`GET /media`

*Get the list of all photos*

<h3 id="api.listphotos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.takePhoto

<a id="opIdapi.takePhoto"></a>

> Code samples

`POST /media`

*take a new photo*

<h3 id="api.takephoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.getPhoto

<a id="opIdapi.getPhoto"></a>

> Code samples

`GET /media/{name}`

*Get photo by name*

<h3 id="api.getphoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

<h3 id="api.getphoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Image in JPEG format|string|

<aside class="success">
This operation does not require authentication
</aside>

## api.savePhoto

<a id="opIdapi.savePhoto"></a>

> Code samples

`PUT /media/{name}`

*Save photo by name*

> Body parameter

```json
{
  "name": "string",
  "tag": "string"
}
```

<h3 id="api.savephoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[Photo](#schemaphoto)|true|Save Photo metadata|

<h3 id="api.savephoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.deletePhoto

<a id="opIdapi.deletePhoto"></a>

> Code samples

`DELETE /media/{name}`

*Delete photo by name*

<h3 id="api.deletephoto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.deletephoto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-video-management">Video management</h1>

## api.streamVideo

<a id="opIdapi.streamVideo"></a>

> Code samples

`GET /video/stream`

*Stream video*

<h3 id="api.streamvideo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.recVideo

<a id="opIdapi.recVideo"></a>

> Code samples

`POST /video/rec`

*Rec video*

<h3 id="api.recvideo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.stopVideo

<a id="opIdapi.stopVideo"></a>

> Code samples

`POST /video/stop`

*Stop rec video*

<h3 id="api.stopvideo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-program-management">Program management</h1>

## api.listPrograms

<a id="opIdapi.listPrograms"></a>

> Code samples

`GET /programs`

*Get the list of all the saved programs*

<h3 id="api.listprograms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.loadProgram

<a id="opIdapi.loadProgram"></a>

> Code samples

`GET /programs/{name}`

*Get the program with the specified name*

<h3 id="api.loadprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.loadprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.deleteProgram

<a id="opIdapi.deleteProgram"></a>

> Code samples

`DELETE /programs/{name}`

*Delete a program*

<h3 id="api.deleteprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.deleteprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.saveProgram

<a id="opIdapi.saveProgram"></a>

> Code samples

`PUT /programs/{name}`

*Save an existing program*

> Body parameter

```json
{
  "name": "string",
  "code": "string",
  "dom_code": "string",
  "default": true,
  "overwrite": true
}
```

<h3 id="api.saveprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[Program](#schemaprogram)|true|Program object|

<h3 id="api.saveprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Failed to save the program|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.runProgram

<a id="opIdapi.runProgram"></a>

> Code samples

`POST /programs/{name}/run`

*Execute the given program*

> Body parameter

```json
{
  "name": "string",
  "code": "string",
  "dom_code": "string",
  "default": true,
  "overwrite": true
}
```

<h3 id="api.runprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[Program](#schemaprogram)|true|Program object|

<h3 id="api.runprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.statusProgram

<a id="opIdapi.statusProgram"></a>

> Code samples

`GET /programs/{name}/status`

*Get the status of the given program*

<h3 id="api.statusprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.statusprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.stopProgram

<a id="opIdapi.stopProgram"></a>

> Code samples

`PATCH /programs/{name}/stop`

*Stop the given program*

<h3 id="api.stopprogram-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.stopprogram-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-activity-management">Activity management</h1>

## api.listActivities

<a id="opIdapi.listActivities"></a>

> Code samples

`GET /activities`

*Get the list of all the saved activities*

<h3 id="api.listactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.saveAsNewActivity

<a id="opIdapi.saveAsNewActivity"></a>

> Code samples

`POST /activities`

*Save a new activity*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "default": true,
  "stock": true
}
```

<h3 id="api.saveasnewactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Activity](#schemaactivity)|true|Create new Activity|

<h3 id="api.saveasnewactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Failed to save the activity|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.loadActivity

<a id="opIdapi.loadActivity"></a>

> Code samples

`GET /activities/{name}`

*Get the activity with the specified name*

<h3 id="api.loadactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|default|query|string|false|none|

<h3 id="api.loadactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.saveActivity

<a id="opIdapi.saveActivity"></a>

> Code samples

`PUT /activities/{name}`

*Save the activity with the specified name*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "default": true,
  "stock": true
}
```

<h3 id="api.saveactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[Activity](#schemaactivity)|true|Update Activity|

<h3 id="api.saveactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.deleteActivity

<a id="opIdapi.deleteActivity"></a>

> Code samples

`DELETE /activities/{name}`

*Delete an activity*

<h3 id="api.deleteactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.deleteactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-music-extensions">Music extensions</h1>

## api.listMusicPackages

<a id="opIdapi.listMusicPackages"></a>

> Code samples

`GET /music/packages`

*List Music Packages*

<h3 id="api.listmusicpackages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.deleteMusicPackage

<a id="opIdapi.deleteMusicPackage"></a>

> Code samples

`DELETE /music/packages/{name}`

*Delete Music Package*

<h3 id="api.deletemusicpackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.deletemusicpackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-system-operations">System operations</h1>

## api.updateFromPackage

<a id="opIdapi.updateFromPackage"></a>

> Code samples

`POST /system/update`

*Update CoderBot from package*

> Body parameter

```yaml
{}

```

<h3 id="api.updatefrompackage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Update Activity|

<h3 id="api.updatefrompackage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|ok|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|upload failed|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.get_status

<a id="opIdapi.get_status"></a>

> Code samples

`GET /system/status`

*Bot general informations, execution status and reset log file*

<h3 id="api.get_status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Bot status|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.testCoderbot

<a id="opIdapi.testCoderbot"></a>

> Code samples

`POST /system/test`

*Tests CoderBot components.*

> Body parameter

```yaml
{}

```

<h3 id="api.testcoderbot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Update Activity|

<h3 id="api.testcoderbot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Test ended.|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.get_info

<a id="opIdapi.get_info"></a>

> Code samples

`GET /system/info`

*Bot general informations and execution status*

<h3 id="api.get_info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Bot status|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.halt

<a id="opIdapi.halt"></a>

> Code samples

`POST /system/halt`

*Halt system (system shutdown)*

<h3 id="api.halt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|accepted|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.reset

<a id="opIdapi.reset"></a>

> Code samples

`POST /system/reset`

*Reset all local configuration to factory state*

<h3 id="api.reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.restart

<a id="opIdapi.restart"></a>

> Code samples

`POST /system/restart`

*Restart backend*

<h3 id="api.restart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|accepted|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.reboot

<a id="opIdapi.reboot"></a>

> Code samples

`POST /system/reboot`

*Reboot all device*

<h3 id="api.reboot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|accepted|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-direct-control">Direct control</h1>

## api.stop

<a id="opIdapi.stop"></a>

> Code samples

`POST /control/stop`

*Stops the bot motors*

<h3 id="api.stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successfully stopped the motors|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.move

<a id="opIdapi.move"></a>

> Code samples

`POST /control/move`

*Moves the bot forward or backward.*

> Body parameter

```json
{
  "speed": -100,
  "elapse": -1
}
```

<h3 id="api.move-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|Movement speed and duration or distance|

<h3 id="api.move-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Sent command to the bot GPIO.|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.turn

<a id="opIdapi.turn"></a>

> Code samples

`POST /control/turn`

*Make a turn with the motors*

> Body parameter

```json
{
  "speed": -100,
  "elapse": -1
}
```

<h3 id="api.turn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|Movement Speed and duration or distance|

<h3 id="api.turn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Sent command to the bot GPIO.|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.speak

<a id="opIdapi.speak"></a>

> Code samples

`POST /control/speak`

*Pronounce a phrase*

> Body parameter

```json
{
  "text": "string",
  "locale": "st"
}
```

<h3 id="api.speak-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Movement Speed and duration|
|» text|body|string|true|text to be "spoken"|
|» locale|body|string|true|locale of text to be "spoken"|

<h3 id="api.speak-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|phrase received|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="openapi-3-0-definition-of-coderbot-api-v3-cnn-models">CNN Models</h1>

## api.listCNNModels

<a id="opIdapi.listCNNModels"></a>

> Code samples

`GET /cnnmodels`

*list of CNN Models*

<h3 id="api.listcnnmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|CNN Models as JSON Object|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.trainCNNModel

<a id="opIdapi.trainCNNModel"></a>

> Code samples

`POST /cnnmodels`

*train new CNN Model*

> Body parameter

```json
{}
```

<h3 id="api.traincnnmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|CNN Model parameters|

<h3 id="api.traincnnmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|CNN Models as JSON Object|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.getCNNModel

<a id="opIdapi.getCNNModel"></a>

> Code samples

`GET /cnnmodels/{name}`

*get CNN Model*

<h3 id="api.getcnnmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.getcnnmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|CNN Model as JSON Object|None|

<aside class="success">
This operation does not require authentication
</aside>

## api.deleteCNNModel

<a id="opIdapi.deleteCNNModel"></a>

> Code samples

`DELETE /cnnmodels/{name}`

*delete CNN Model*

<h3 id="api.deletecnnmodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="api.deletecnnmodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|CNN Model deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_MoveParamsElapse">MoveParamsElapse</h2>
<!-- backwards compatibility -->
<a id="schemamoveparamselapse"></a>
<a id="schema_MoveParamsElapse"></a>
<a id="tocSmoveparamselapse"></a>
<a id="tocsmoveparamselapse"></a>

```json
{
  "speed": -100,
  "elapse": -1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|speed|number|true|none|0 to 100 represent a forward movement (100 being the maximum speed), while 0 to -100 is a backward movement (-100 being the maximu speed)|
|elapse|number|true|none|Duration of the movement. 0 doesn't move the coderbot.|

<h2 id="tocS_MoveParamsDistance">MoveParamsDistance</h2>
<!-- backwards compatibility -->
<a id="schemamoveparamsdistance"></a>
<a id="schema_MoveParamsDistance"></a>
<a id="tocSmoveparamsdistance"></a>
<a id="tocsmoveparamsdistance"></a>

```json
{
  "speed": -100,
  "distance": 1000
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|speed|number|true|none|0 to 100 represent a forward movement (100 being the maximum speed), while 0 to -100 is a backward movement (-100 being the maximu speed)|
|distance|number|true|none|Target distqnce in mm.|

<h2 id="tocS_TurnParamsElapse">TurnParamsElapse</h2>
<!-- backwards compatibility -->
<a id="schematurnparamselapse"></a>
<a id="schema_TurnParamsElapse"></a>
<a id="tocSturnparamselapse"></a>
<a id="tocsturnparamselapse"></a>

```json
{
  "speed": -100,
  "elapse": -1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|speed|number|true|none|0 to 100 represent a forward movement (100 being the maximum speed), while 0 to -100 is a backward movement (-100 being the maximu speed)|
|elapse|number|true|none|Duration of the movement. 0 doesn't move the coderbot.|

<h2 id="tocS_TurnParamsDistance">TurnParamsDistance</h2>
<!-- backwards compatibility -->
<a id="schematurnparamsdistance"></a>
<a id="schema_TurnParamsDistance"></a>
<a id="tocSturnparamsdistance"></a>
<a id="tocsturnparamsdistance"></a>

```json
{
  "speed": -100,
  "distance": 100000
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|speed|number|true|none|0 to 100 represent a forward movement (100 being the maximum speed), while 0 to -100 is a backward movement (-100 being the maximu speed)|
|distance|number|true|none|Target distqnce in mm.|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_Photo">Photo</h2>
<!-- backwards compatibility -->
<a id="schemaphoto"></a>
<a id="schema_Photo"></a>
<a id="tocSphoto"></a>
<a id="tocsphoto"></a>

```json
{
  "name": "string",
  "tag": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|tag|string|false|none|none|

<h2 id="tocS_Program">Program</h2>
<!-- backwards compatibility -->
<a id="schemaprogram"></a>
<a id="schema_Program"></a>
<a id="tocSprogram"></a>
<a id="tocsprogram"></a>

```json
{
  "name": "string",
  "code": "string",
  "dom_code": "string",
  "default": true,
  "overwrite": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|code|string|true|none|none|
|dom_code|string|false|none|none|
|default|boolean|false|none|none|
|overwrite|boolean|false|none|none|

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "name": "string",
  "description": "string",
  "default": true,
  "stock": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|true|none|none|
|default|boolean|true|none|none|
|stock|boolean|true|none|none|

