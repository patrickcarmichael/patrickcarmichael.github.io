const isAbsolutePathExp = /^\~/

function ls(args){
	if(args[0] == undefined){
		let dirs = curr_dir.getSubdirNames()
		let links = curr_dir.getLinkNames()
		for (let x of dirs) printDirectory(x)
		for (let x of links) printLink(x)
	} else {
		let tempDir
		if(isAbsolutePathExp.test(args[0])){
			tempDir = getDirWithPath(args[0])
		} else {
			tempDir = getDirWithPath(curr_dir.getPath()+separator+args[0])
		}
		let dirs = tempDir.getSubdirNames()
		let links = tempDir.getLinkNames()
		for (let x of dirs) printDirectory(x)
		for (let x of links) printLink(x)
	}
}



function mkdir(args){
	if(!args[0]){
		printMessage("mkdir: missing operand", "red")
		printMessage("Try 'man mkdir' for more information", "red")
		return
	}
	if(!mkdirHelper(args[0])){
		printMessage("cannot create directory '"+args[0]+"': File exists", "red")
	}
}

function rmdir(args){
	if(!args[0]){
		printMessage("rmdir: missing operand", "red")
		printMessage("Try 'man rmdir' for more information", "red")
		return
	}
	let result = rmdirHelper(args[0])
	//Dir does not exist
	if(result == 0){
		printMessage("failed to remove '"+args[0]+"': No such file or directory", "red")
	//Dir is not empty
	}else if (result == 1){
		printMessage("failed to remove '"+args[0]+"': Directory not empty", "red")
	}
}

function touch(args){
	if(!args[0]){
		printMessage("touch: missing file operand", "red")
		printMessage("Try 'man touch' for more information", "red")
		return
	}
	if(!touchHelper(args[0], args[1])){
		printMessage("cannot create file '"+args[0]+"': File exists", "red")	
	}
}

function rm(args){
	if(!args[0]){	
		printMessage("rm: missing operand", "red")
		printMessage("Try 'man rm' for more information", "red")
		return
	}
	if(!rmHelper(args[0])){
		printMessage("failed to remove '"+args[0]+"': No such file or directory", "red")
	}
}

//-------------------------------------helpers-------------------------------------

function mkdirHelper(path){
	//check if submitted path is absolute
	if(isAbsolutePathExp.test(path)){
		//Check if path is not already taken
		if(dirExists(path)){
			return false
		}
		//check if path is viable
		if(pathIsAvailable(path)){
			allDirectories.push(Directory(path))
			storeConfigToLocalStorage()
			currentSubDirectoryNames = curr_dir.getSubdirNames()
			console.log(currentSubDirectoryNames)
			return true	
		}
		
	} else {
		let newPath = curr_dir.getPath() + separator + path
		return mkdirHelper(newPath)
	}
}

function rmdirHelper(path){
	if(isAbsolutePathExp.test(path)){
		//Check if dir exists and is not empy
		if(!dirExists(path)){
			return 0
		}
		if(!getDirWithPath(path).isEmpty){
			return 1
		}
		for(let i =0;i<allDirectories.length;i++){
			if(allDirectories[i].getPath() == path){
				allDirectories.splice(i,1)
				storeConfigToLocalStorage()
				currentSubDirectoryNames = curr_dir.getSubdirNames()
				return 2
			}
		}
	} else {
		//build absolute path and make recursive call
		let newPath = curr_dir.getPath() + separator + path
		return rmdirHelper(newPath)
	}
}

function touchHelper(path, url){
	//check if submitted path is absolute
	if(isAbsolutePathExp.test(path)){
		//Check if path is not already taken
		if(fileExists(path)){
			return false
		}
		//check if path is viable
		if(pathIsAvailable(path)){
			allFiles.push(Link(path, url))
			storeConfigToLocalStorage()
			return true	
		}
		
	} else {
		//build absolute path and make recursive call
		let newPath = curr_dir.getPath() + separator + path
		return touchHelper(newPath, url)
	}
}

function rmHelper(path){
	if(isAbsolutePathExp.test(path)){
		//Check if file exists
		if(!fileExists(path)){
			return false
		}
		for(let i =0;i<allFiles.length;i++){
			if(allFiles[i].getPath() == path){
				allFiles.splice(i,1)
				storeConfigToLocalStorage()
				return true
			}
		}
	} else {
		let newPath = curr_dir.getPath() + separator + path
		return rmHelper(newPath)
	}
}

//--------------------------------Utility-------------------------------------

/*
Check if an Absolute path is already in the file system
*/
function dirExists(path){
	for (let dir of allDirectories){
		if(dir.getPath() == path){
			return true
		}
	}
	return false
}

function fileExists(path){
	for (let file of allFiles){
		if(file.getPath() == path){
			return true
		}
	}
	return false
}

function getDirWithPath(path){
	for (let dir of allDirectories){
		if(dir.getPath() == path){
			return dir
		}
	}
	return null
}

function getFileWithPath(path){
	for (let file of allFiles){
		if(file.getPath() == path){
			return file
		}
	}
	return null
}

function pathIsAvailable(path){
	for(let i = 0;i<allDirectories.length;i++){	
			let temp = path.split('/')
			temp.pop()
			temp = temp.join('/')
			if(temp == allDirectories[i].getPath()){
				//Path is viable
				return true
			}
		}
		//Did not find a parent directory that matches the path until the name
		return false
}
