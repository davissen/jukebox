


// creating song constructor fucntion
 function Song(title, artist, source) {
 	this.title = title,
 	this.artist = artist,
 	this.source = source
}

// creating songs
var song1 = new Song ("The Piña Colada Song", "Rupert Holmes", "Audio/The pina colada song.mp3")
var song2 = new Song ("Ain't No Mountain High Enough", "Marvin Gaye & Tammi Terrel", "Audio/Marvin Gaye & Tammi Terrell - Ain't No Mountain High Enough.mp3")
var song3 = new Song ("Moonage Daydream", "David Bowie", "Audio/David Bowie - Moonage Daydream.mp3")
var song4 = new Song ("Fooled Around and Fell in Love", "Elvin Bishop", "Audio/Elvin Bishop - Fooled Around and Fell in Love.mp3")
var song5 = new Song ("Hooked On A Feeling", "Blue Swede", "Audio/Blue Swede - Hooked On A Feeling.mp3")
var song6 = new Song ("Ooh Child", "The Five Stairsteps", "Audio/ooh child.mp3")
var song7 = new Song ("I Want You Back", "The Jackson 5", "Audio/I Want You Back - The Jackson 5.mp3")

// creating jukebox constructor function
function Jukebox(){
	this.songs = [song1, song2, song3, song4, song5, song6, song7],
	this.i = 0
}

// load jukebox
Jukebox.prototype.load = function(){
	document.getElementById('aud').setAttribute('src', this.songs[this.i].source)
}

// play
Jukebox.prototype.play = function(){
	document.getElementById('aud').play()
}

// pause
Jukebox.prototype.pause = function(){
	document.getElementById('aud').pause()
}

// pause
Jukebox.prototype.stop = function(){
	document.getElementById('aud').pause()
	document.getElementById('aud').currentTime = 0
}

// next
Jukebox.prototype.next = function(){

	this.i++

	if (this.i > this.songs.length){
		this.i = 0
	}
	document.getElementById('aud').setAttribute('src', this.songs[this.i].source)
	document.getElementById('aud').play()
}

// previous
Jukebox.prototype.prev = function(){
	this.i -=1

	if (this.i < 0){
		this.i = this.songs.length
	}
	document.getElementById('aud').setAttribute('src', this.songs[this.i].source)
	document.getElementById('aud').play()
}

var jukebox1 = new Jukebox()

window.onload = function(){
	jukebox1.load()

}

document.getElementById("play").addEventListener("click", function() {
  jukebox1.play()
})
document.getElementById("stop").addEventListener("click", function() {
  jukebox1.stop()
})
document.getElementById("prev").addEventListener("click", function() {
  jukebox1.prev()
})
document.getElementById("next").addEventListener("click", function() {
  jukebox1.next()
})
document.getElementById("pause").addEventListener("click", function() {
  jukebox1.pause()
})












  