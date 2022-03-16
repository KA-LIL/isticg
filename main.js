window.onload = function(){
	if (localStorage.getItem('theme') == null){
		document.getElementById("choice").style.display = "block"		
	}else{
		document.getElementById("dark_light").href = "https://cdn.jsdelivr.net/gh/KA-LIL/isticg@main/"+localStorage.getItem('theme')+".min.css"
		document.getElementById("dark_light_switch").src = "../"+localStorage.getItem('theme')+".png"
	}
}

function theme(dl){
	localStorage.setItem('theme',dl)
	document.getElementById("choice").style.display = "none"
}

function bg(dl){
	document.getElementById("dark_light").href = "https://cdn.jsdelivr.net/gh/KA-LIL/isticg@main/"+dl+".min.css"
	document.getElementById("dark_light_switch").src = "../"+dl+".png"
}

function dark_light(){
	if (localStorage.getItem('theme') === 'dark'){
		document.getElementById("dark_light").href = "https://cdn.jsdelivr.net/gh/KA-LIL/isticg@main/light.min.css"
		localStorage.setItem('theme', 'light')
		document.getElementById("dark_light_switch").src = '../light.png'
	} else{
		document.getElementById("dark_light").href = "https://cdn.jsdelivr.net/gh/KA-LIL/isticg@main/dark.min.css"
		localStorage.setItem('theme', 'dark')
		document.getElementById("dark_light_switch").src = '../dark.png'
	}
}