Sprites = {}
Sprites.char = {
	framerate: 24,
	images: ["/char.png"],
	frames: [
		[0, 0, 256, 256, 0, -159, -138],
		[256, 0, 256, 256, 0, -159, -138],
		[512, 0, 256, 256, 0, -159, -138],
		[768, 0, 256, 256, 0, -159, -138],
		[1024, 0, 256, 256, 0, -159, -138],
		[1280, 0, 256, 256, 0, -159, -138],
		[1536, 0, 256, 256, 0, -159, -138],
		[0, 256, 256, 256, 0, -159, -138],
		[256, 256, 256, 256, 0, -159, -138],
		[512, 256, 256, 256, 0, -159, -138]],
	animations: {
		df: {"frames": [0]},
		jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1, next: false},
		die: {"frames": [4, 5], speed: .1, next: false},
		hurt: {"frames": [4, 4, 4, 5, 5, 5, 4, 4, 5, 5, 4, 5, 0], speed: .4, next: false},
		fly: {"frames": [6, 6, 7, 8, 9], speed: .3},
		nuts: {frames: [3, 8, 2, 9, 2, 4, 5, 6, 5, 4, 5, 3]}
	}
}
Sprites.char2 = {
	framerate: 24,
	images: ["/char2.png"],
	"frames": [
		[0, 0, 256, 256, 0, -159, -138],
		[256, 0, 256, 256, 0, -159, -138],
		[512, 0, 256, 256, 0, -159, -138],
		[768, 0, 256, 256, 0, -159, -138],
		[1024, 0, 256, 256, 0, -159, -138],
		[1280, 0, 256, 256, 0, -159, -138],
		[1536, 0, 256, 256, 0, -159, -138],
		[0, 256, 256, 256, 0, -159, -138],
		[256, 256, 256, 256, 0, -159, -138],
		[512, 256, 256, 256, 0, -159, -138]
	],
	animations: {
		df: {"frames": [0]},
		jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1, next: false},
		die: {"frames": [4, 5], speed: .1, next: false},
		hurt: {"frames": [4, 4, 4, 5, 5, 5, 4, 4, 5, 5, 4, 5, 0], speed: .4, next: false},
		fly: {"frames": [6, 6, 7, 8, 9], speed: .3},
		nuts: {frames: [3, 8, 2, 9, 2, 4, 5, 6, 5, 4, 5, 3]}
	}
}
