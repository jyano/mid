 
 eD = cjs.EventDispatcher.prototype
 
 eD.dE = eD.dispatchEvent
 eD.hEL = eD.hasEventListener
 eD.O = eD.off
 eD.o = eD.on
 eD.rAEL=eD.removeAllEventListeners
 eD.rEL = eD.removeEventListener
 eD.tS = eD.toString
 eD.wT = eD.willTrigger
 eD.aEL = eD.addEventListener
 eD.init = function () {
	 
	 //note: 'initialize' is the only STATIC method of eventDispatcher
		this.initialize.apply(this, arguments)
		return this
	}
 
 