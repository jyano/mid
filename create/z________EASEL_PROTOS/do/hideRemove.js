 
 
dO.rm = dO.remove =function () {
	var dO = this
	if ( O(dO) && O(dO.parent)) {
		dO.parent.removeChild(dO)
	}
	
	return dO
}  
 
 

dO.hd = dO.hide = function () {
	return this.vsb(0)
}
 