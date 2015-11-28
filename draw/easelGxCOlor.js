
cjs.HSL = function (a, b, c) {
		
		return U(a)?
				HSL(M.r() * 360, 100, 50): 
				cjs.Graphics.getHSL(a, b, c)
	
}
 
