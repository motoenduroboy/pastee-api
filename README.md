# pasteeAPI [![Build Status](https://travis-ci.org/motoenduroboy/pasteeAPI.svg?branch=master)](https://travis-ci.org/motoenduroboy/pasteeAPI)
An API to communicate with paste.ee (Unoffical)

## Install
```
npm install pastee-api
```

## Usage
### Create A Paste
```javascript
  let Pastee = new PasteeAPI('YOUR TOKEN');

  Pastee.paste({"contents" : "What ever you want", "name": "A new Paste", "expire": 100}).then(res => {
    
  }).catch(err => {

  });
```
#### Paste object
* contents - The content of the Paste (Required)
* name - The name of the paste (Not Required)
* expire - The time in seconds (Not Required)

#### Return Object
* id - the id of the paste
* link - link to the paste
* success - true or false

### ~~Retrieve A Paste~~ (Coming Soon)
