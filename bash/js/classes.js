function Directory (path) {
	var self = {}
	self.path = path

	self.getName = function (){
		return this.path.match(dirNameExp)[0]
	}
	self.getPath = function (){
		return this.path
	}
	self.getSubdirNames = function (){
		let names = []
		for (let dir of allDirectories){
			let myPath = this.path.split('/')
			let subPath = dir.getPath().split('/')
			subPath.pop()

			if(myPath.join('/') == subPath.join('/')){
				names.push(dir.getName())
			}
		}
		return names
	}

	self.isEmpty = function (){
		return this.getSubdirNames().length == 0 && this.getLinkNames().length == 0
	}
	self.getLinkNames = function (){
		let names = []
		for (let file of allFiles){
			let myPath = this.path.split('/')
			let subPath = file.getPath().split('/')
			subPath.pop()

			if(myPath.join('/') == subPath.join('/')){
				names.push(file.getPath())
			}
		}
		return names
	}
	return self
}

function Link (path, url) {
	var self = {}
	self.url = url
	self.path = path

	self.getUrl = function(){
		return this.url
	}
	self.getPath = function(){
		return this.path
	}

	self.getName = function(){
		return this.path.match(dirNameExp)[0]
	}
	return self
}

function Command (name, description, usage) {
	var self = {}
	self.name = name
	self.description = description
	self.usage = usage

	self.getName = function(){
		return this.name
	}

	self.getHelp = function(){
		return this.description
	}

	self.getUsage = function(){
		return this.usage
	}

	return self
}

function Timer(){
	var self = {}
	self.starttime = 0
	self.endtime = 0
	self.running = false
	self.isReset = true

	self.getTime = function() {
		if(this.running){
			return new Date().getTime() - this.starttime
		}else {
			if(this.isReset){
				return 0
			}
			return this.endtime - this.starttime	
		}
		
	}

	self.start = function() {
		this.running = true
		this.isReset = false
		this.starttime = new Date().getTime()
	}
	self.stop = function(){
		this.running = false
		this.endtime = new Date().getTime()
		this.time =  this.endtime - this.starttime

	}
	self.reset = function(){
		if(this.running){
			this.starttime =new Date().getTime()
		} else {
			this.isReset=true
		}
		
	}
	return self
}