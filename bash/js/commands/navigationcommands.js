function cd(args){
	switch(args[0]){
		case "..":
			upDir()
			break
		case undefined:
			homeDir()
			break
		default:
			if(!enterDir(args[0])){
				printMessage("no such file or directory: "+args[0], "red")
			}
			break
	}
}

function enterDir(path){
	if(isAbsolutePathExp.test(path)){
		if(dirExists(path)){
			for (let dir of allDirectories){
				if(dir.getPath() == path){
					curr_dir = dir
					updatewd()
					currentSubDirectoryNames = curr_dir.getSubdirNames()
					clearConsoleOut()
					return true
				}
			}
		} else {
			return false
		}
		
	} else {
		let newPath = curr_dir.getPath() + separator + path
		if(dirExists(newPath)){
			for (let dir of allDirectories){
				if(dir.getPath() == newPath){
					curr_dir = dir
					updatewd()
					currentSubDirectoryNames = curr_dir.getSubdirNames()
					clearConsoleOut()
					return true
				}
			}
		} else {
			return false
		}
	}

}

function homeDir(){
	for (let dir of allDirectories){
		if(dir.getPath() == '~'){
			curr_dir = dir
			updatewd()
			currentSubDirectoryNames = curr_dir.getSubdirNames()
			clearConsoleOut()		
		}
	}
}

function upDir(){
	//Make sure we are not on the home directory
	if(!(curr_dir.getPath() == '~')){
		let newPath = curr_dir.getPath().split('/')
		newPath.pop()
		newPath = newPath.join('/')
		enterDir(newPath)
	}
}