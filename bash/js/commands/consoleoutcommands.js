function printDirectory(name){
	let a = document.createElement('a')
	a.className ="blue"
	a.href=`javascript:enterDir("${name}")`
	let linkText = document.createTextNode(name)
	a.appendChild(linkText)

	document.getElementById('console_out').appendChild(a)
}
function printMessage(msg, color){
	let a = document.createElement('a')
	a.className =color
	let linkText = document.createTextNode(msg)
	a.appendChild(linkText)
	document.getElementById('console_out').appendChild(a)
}
function printLink(path){
	let a = document.createElement('a')
	a.className = "cyan"
	a.target ="blank"
	a.href=getFileWithPath(path).getUrl()
	let linkText = document.createTextNode(getFileWithPath(path).getName())
	a.appendChild(linkText)
	document.getElementById('console_out').appendChild(a)
}

function clearConsoleOut(){
	let out = document.getElementById("console_out")
	while (out.firstChild) {
    	out.removeChild(out.firstChild);
	}
}

function fetch(){
	printMessage(user+'@bashrc', 'red')
	printMessage('OS: '+window.navigator.oscpu, 'orange')
	printMessage('Kernel: bashrc v 0.1', 'yellow')
	console.log(uptimeStart)
	console.log(new Date().getTime())
	let time = new Date().getTime() - uptimeStart
	let seconds = Math.floor(time/1000)
	let minutes = Math.floor(seconds/60)
	printMessage('Uptime: '+(minutes)+' minutes','green')
	printMessage('Resolution: '+$(window).width()+'x'+$(window).height(), 'pink')
	printMessage('DE: '+get_browser_info().name, 'darkblue')
}

function clear(){
	clearConsoleOut()
}

function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE ',version:(tem[1]||'')};
        }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }
