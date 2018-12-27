const separator = '/'
const dirNameExp =  /[\w|\~]+$/
const containsSlashCheckExp = /\//

const allCommands = [
	Command("locate","search anythin on the internet", "locate [query]"),
	Command("pwd","Print working directory",'pwd'),
	Command("ls","List contents of working directory","ls"),
	Command("cd","change directory","cd [..| |path]"),
	Command("mkdir","create new directory", "mkdir [path]"),
	Command("rmdir","remove directory", "rm dir [path]"),
	Command("touch","crate new file (link)", "touch [patch]"),
	Command("rm","remove file (link)","rm [path]"),
	Command("clear","clear output","clear"),
	Command("echo", "repeat something","echo [phrase]"),
	Command("time","get current date and time","time"),
	Command("timer","start and stop a timer", "timer [start|stop|reset|get]"),
	Command("todo", "manage todo list","not done yet"), // todo lol
	Command("commands","get list of commands", "commands"),
	Command("man", "get help for a command", "man [comand]"),
	Command("pageDesc","description of the startpage", "pageDesc"),
	Command("flip",'Flip that flippin table',"flip"),
	Command('useradd','Set your username for display :)'),
	Command('fetch','system information')
	]

var allDirectories = []
var currentSubDirectoryNames = []
var allFiles = []
var myTimer = Timer()
var user = ''
var uptimeStart = 0

var curr_dir = undefined


/*
*Parse user input query from command line and execute command
*/
function parseQuery() {
	let query = document.getElementById('input_field').value
	let command = query.split(' ')[0]
	let args = query.split(' ').slice(1)
	clearConsoleOut()
	var fn = window[command]
	//Check if input is a command
	if(typeof fn === 'function'){
		fn(args)
	//Else check if input is a bookmark
	} else if(getALlLinkNames().indexOf(command)>=0) {
		for (let file of allFiles){
			if(file.getName() == command){
				window.open(file.getUrl())
			}
		}
	} else {
		console.log(typeof fn)
		printMessage("command not found: "+command, "red")
	}
	document.getElementById('input_field').value = ''
	let linkBox = document.getElementById('console_out')
	if(linkBox.childNodes.length==0){
		console.log('empty')
		linkBox.classList.add('hide')
		linkBox.classList.remove('show')
	} else {
		linkBox.classList.add('show')
		linkBox.classList.remove('hide')
	}
}

function updatewd(){
	document.getElementById('location').textContent = curr_dir.getPath()
}

function init() {
	uptimeStart = new Date().getTime()
	loadConfigFromLocalStorage()
	for (let d of allDirectories){
		if(d.getPath() == '~'){
			curr_dir = d
		}
	}

	if (curr_dir === undefined){
		curr_dir = Directory('~')
		allDirectories.push(curr_dir)
		updatewd()
		printMessage("Hey there! - If you're new to the page try 'commands' for a list of commands!", "green")
		let linkBox = document.getElementById('console_out')
		linkBox.classList.add('show')
		linkBox.classList.remove('hide')
	}
	let newSpan = document.createElement('span')
	newSpan.className ='blue'
	let uName = document.createTextNode('anon'+'@bashrc')
	if (user != ''){
		uName = document.createTextNode(user+'@bashrc')
	}
	newSpan.appendChild(uName)
	document.getElementById('tilde').insertBefore(newSpan, document.getElementById('tilde').children[0]);
	currentSubDirectoryNames = curr_dir.getSubdirNames()

	let commandLine = document.getElementById('container')
	commandLine.classList.add('show')
	commandLine.classList.remove('hidden')
	// _init()


}

//--------------------Saving & Restoring file system from localstorage------------------------

function loadConfigFromLocalStorage(){
	let dirs = JSON.parse(window.localStorage.getItem("directories"))
	let storedUser = JSON.parse(window.localStorage.getItem("user"))
	if(storedUser){
		user = storedUser
	}
	if(!dirs){
		return
	}
	for (let d of dirs){
		allDirectories.push(Directory(d.path))
	}
	let files = JSON.parse(window.localStorage.getItem("files"))
	for (let f of files){
		allFiles.push(Link(f.path,f.url))
	}
}

function storeConfigToLocalStorage(){
	window.localStorage.setItem("directories", JSON.stringify(allDirectories))
	window.localStorage.setItem("files", JSON.stringify(allFiles))
	window.localStorage.setItem('user', JSON.stringify(user))
}
