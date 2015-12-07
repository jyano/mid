b2d = Box2D
b2B = b2Body = b2d.Dynamics.b2Body
b2d.Math = b2.Common.Math
b2d.Joints = BXJ = b2d.Dynamics.Joints
b2d.bodyDef = b2BodyDef = b2d.Dynamics.b2BodyDef
b2FixtureDef = b2d.Dynamics.b2FixtureDef
b2d.fixture = b2Fixture = b2d.Dynamics.b2Fixture
b2d.World = b2World = b2d.Dynamics.b2World
b2d.DebugDraw = b2DebugDraw = b2d.Dynamics.b2DebugDraw
b2B = b2Body = b2d.Dynamics.b2Body
sB = b2Body.b2_staticBody
dB = b2Body.b2_dynamicBody
b2d.Joints = BXJ = b2d.Dynamics.Joints
b2d.bodyDef = b2BodyDef = b2d.Dynamics.b2BodyDef
b2FixtureDef = b2d.Dynamics.b2FixtureDef
b2d.fixture = b2Fixture = b2d.Dynamics.b2Fixture
b2d.World = b2World = b2d.Dynamics.b2World
b2d.DebugDraw = b2DebugDraw = b2d.Dynamics.b2DebugDraw
shB = b2d.DebugDraw.e_shapeBit
jB = b2d.DebugDraw.e_jointBit
b2d.joint = bJ = b2d.Joints.b2Joint
b2d.jointDef = bJD = b2d.Joints.b2JointDef
b2d.distanceJoint = bDJ = b2d.Joints.b2DistanceJoint
b2d.mouseJointDef = b2MouseJointDef = b2d.Dynamics.Joints.b2MouseJointDef
b2d.massData = b2MassData = b2d.Collision.Shapes.b2MassData
b2d.AABB = b2AABB = b2d.Collision.b2AABB
b2d.Shapes = b2d.Collision.Shapes //BXS=
b2d.PolygonShape = b2PolygonShape = b2d.Shapes.b2PolygonShape
b2d.CircleShape = b2CircleShape = b2d.Shapes.b2CircleShape
b2d.Segment = b2d.Collision.b2Segment
b2d.Collision.b2Simplex
b2d.Collision.b2Bound
b2d.Collision.b2AABB
b2d.Collision.b2BoundValues
b2d.Collision.b2ContactID
b2d.Collision.b2ContactPoint
b2d.Collision.b2Distance
b2d.Collision.b2DistanceInput
b2d.Collision.b2DistanceOutput
b2d.Collision.b2DistanceProxy
b2d.Collision.b2DynamicTree
b2d.Collision.b2DynamicTreeNode
b2d.Collision.b2DynamicTreePair
b2d.Collision.b2RayCastInput
b2d.Collision.b2RayCastOutput
//  b2d.Dynamics.Controllers.b2ControllerEdge
b2d.Controllers = b2d.Dynamics.Controllers
b2d.Math = b2.Common.Math
b2d.Mat22 = b2d.Math.b2Mat22
b2d.Mat33 = b2d.Math.b2Mat33
b2d.joint = b2d.Joints.b2Joint
b2d.jointDef = b2d.Joints.b2JointDef
b2d.distanceJoint = bDJ = b2d.Joints.b2DistanceJoint
b2d.mouseJointDef = b2MouseJointDef = b2d.Dynamics.Joints.b2MouseJointDef
b2d.massData = b2MassData = b2d.Collision.Shapes.b2MassData
b2d.AABB = b2AABB = b2d.Collision.b2AABB
b2d.Shapes = b2d.Collision.Shapes
b2d.PolygonShape = b2PolygonShape = b2d.Shapes.b2PolygonShape
b2d.CircleShape = b2CircleShape = b2d.Shapes.b2CircleShape;
(function v() {
	V = function (x, y, x2, y2) {
		var g = G(arguments),
				x = g[0], y = g[1], x2 = g[2], y2 = g[3],
				vec
		if (A(x)) {
			y2 = x[3];
			x2 = x[2];
			y = x[1];
			x = x[0]
		}
		if (N(y2)) {
			x = (x - x2) / 2;
			y = (y - y2) / 2
		}
		else if (O(x)) {
			y = F(x.Y) ? x.Y() : x.y
			x = F(x.X) ? x.X() : x.x
		}
		x = N(x) ? x : 0
		y = N(y) ? y : x
		vec = new b2d.Common.Math.b2Vec2(x, y)
		if (g.n || g.d) {
			vec = vec.div()
		}
		if (g.p || g.m) {
			vec = vec.mult()
		}
		return vec
	}
	var v = b2d.Common.Math.b2Vec2.prototype
	v.m = v.mult = function (num) {
		num = N(num) ? num : 30
		var v = _.clone(this)
		v.Multiply(num)
		return v
	}
	v.d = v.div = function (num) {
		num = N(num) ? num : 30
		return this.mult(1 / num)
	}
	v.add = function (x, y) {
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 1
		y = N(y) ? y : x
		var v = V(this.x + x, this.y + y)
		return v
	}
	v.sub = function (x, y) {
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 1;
		y = N(y) ? y : x
		var v = V(this.x - x, this.y - y)
		return v
	}
	v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
}())
b2d.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
b2d.AB = AABB = AB = function (a, b, c, d) {
	var ab = new b2AABB()
	ab.lowerBound.Set(a, b)
	ab.upperBound.Set(c, d)
	return ab
}
b2d.AB0001 = AB001 = function (a, b) {
	return AB(a - .001, b - .001, a + .001, b + .001)
}
b2d.isShape = function (h) {
	var typ
	if (O(h)) {
		typ = h.constructor.name
		return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
	}
}
l = b2d.Dynamics.b2ContactListener.prototype
cx = b2d.Dynamics.Contacts.b2Contact.prototype
j = b2d.Joints.b2Joint.prototype
w = b2d.World.prototype
jd = b2d.Joints.b2JointDef.prototype
f = b2d.Dynamics.b2Fixture.prototype
fD = b2d.Dynamics.b2FixtureDef.prototype
bD = b2.Dynamics.b2BodyDef.prototype
b = b2.Dynamics.b2Body.prototype
$df.cF = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	return o
}
b2d = Box2D
b2d.Fixture = b2d.Dynamics.b2Fixture
b2B = b2Body = b2d.Dynamics.b2Body
b2d.Joints = BXJ = b2d.Dynamics.Joints
b2d.bodyDef = b2BodyDef = b2d.Dynamics.b2BodyDef
b2FixtureDef = b2d.Dynamics.b2FixtureDef
b2d.fixture = b2Fixture = b2d.Dynamics.b2Fixture
b2d.World = b2World = b2d.Dynamics.b2World
b2d.DebugDraw = b2DebugDraw = b2d.Dynamics.b2DebugDraw
b2d.joint = bJ = b2d.Joints.b2Joint
b2d.jointDef = bJD = b2d.Joints.b2JointDef
b2d.distanceJoint = bDJ = b2d.Joints.b2DistanceJoint
b2d.mouseJointDef = b2MouseJointDef = b2d.Dynamics.Joints.b2MouseJointDef
b2d.massData = b2MassData = b2d.Collision.Shapes.b2MassData
b2d.AABB = b2AABB = b2d.Collision.b2AABB
b2d.Shapes = b2d.Collision.Shapes //BXS=
b2d.PolygonShape = b2PolygonShape = b2d.Shapes.b2PolygonShape
b2d.CircleShape = b2CircleShape = b2d.Shapes.b2CircleShape
b2d.Segment = b2d.Collision.b2Segment
b2d.Collision.b2Simplex
b2d.Collision.b2Bound
b2d.Collision.b2AABB
b2d.Collision.b2BoundValues
b2d.Collision.b2ContactID
b2d.Collision.b2ContactPoint
b2d.Collision.b2Distance
b2d.Collision.b2DistanceInput
b2d.Collision.b2DistanceOutput
b2d.Collision.b2DistanceProxy
b2d.Collision.b2DynamicTree
b2d.Collision.b2DynamicTreeNode
b2d.Collision.b2DynamicTreePair
b2d.Collision.b2RayCastInput
b2d.Collision.b2RayCastOutput
b2d.ControllerEdge = b2d.Dynamics.Controllers.b2ControllerEdge
b2d.Controllers = b2d.Dynamics.Controllers
b2d.Math = b2d.Common.Math
b2d.Mat22 = b2d.Math.b2Mat22
b2d.Mat33 = b2d.Math.b2Mat33
b2d.FixtureDef = b2d.Dynamics.b2FixtureDef
b2d.PrismaticJointDef = b2d.Joints.b2PrismaticJointDef
b2d.RevoluteJointDef = b2d.Joints.b2RevoluteJointDef
b2d.RevoluteJoint = b2d.Joints.b2RevoluteJoint
b2d.Body = b2d.Dynamics.b2Body
b2d.Fixture = b2d.Dynamics.b2Fixture
b2d.ConstantAccelController = b2d.Dynamics.Controllers.b2ConstantAccelController
b2d.BuoyancyController = new b2d.Dynamics.Controllers.b2BuoyancyController
b2d.Fixture = b2d.Dynamics.b2Fixture
b2d.FixtureDef = b2d.Dynamics.b2FixtureDef
b2d.p = function () {
	aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
	b = b2d.Body.prototype
	bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Dynamics.Controllers.b2BuoyancyController
	bD = b2d.Dynamics.b2BodyDef.prototype
	cx = b2d.Dynamics.Contacts.b2Contact.prototype
	cxI = b2d.Dynamics.b2ContactImpulse.prototype
	ct = cjs.Container.prototype
	co = b2d.Dynamics.Controllers.b2Controller.prototype
	c = HTMLCanvasElement.prototype
	cH = b2d.CircleShape.prototype
	dd = b2d.Dynamics.b2DebugDraw.prototype
	dJD = b2d.Joints.b2DistanceJointDef.prototype
	dJ = b2d.Joints.b2Joint.prototype
	eD = cjs.EventDispatcher.prototype
	f = b2d.Fixture.prototype
	fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
	fd = fD = b2d.FixtureDef.prototype
	gCo = b2d.Dynamics.Controllers.b2GravityController.prototype
	gx = cjs.Graphics.prototype
	h = cjs.Shape.prototype
	i = cjs.DisplayObject.prototype
	jD = b2d.Joints.b2JointDef.prototype
	j = b2d.Joints.b2Joint.prototype
	l = b2d.Dynamics.b2ContactListener.prototype
	mJ = b2d.Joints.b2MouseJoint.prototype
	mJD = b2d.Joints.b2MouseJointDef.prototype
	mc = cjs.MovieClip.prototype
	flDa = b2d.Dynamics.b2FilterData.prototype
	pH = b2d.PolygonShape.prototype
	pJ = b2d.Joints.b2PrismaticJoint.prototype
	pJD = pd = b2d.Joints.b2PrismaticJointDef.prototype
	pD = gpcas.geometry.PolyDefault.prototype//////////////////
	ps = gpcas.geometry.PolySimple.prototype/////////////////////////
	q = cjs.LoadQueue.prototype
	rJD = b2d.RevoluteJointDef.prototype
	rJ = b2d.RevoluteJoint.prototype
	st = s = cjs.Stage.prototype
	sS = ss = cjs.SpriteSheet.prototype
	sSB = cjs.SpriteSheetBuilder.prototype
	sp = s = cjs.Sprite.prototype
	tl = cjs.Timeline.prototype
	t = cjs.Text.prototype
	tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
	tw = cjs.Tween.prototype
	v = b2d.Common.Math.b2Vec2.prototype
	w = b2d.World.prototype
	wJD = b2d.Joints.b2WeldJointDef
	wJ = b2d.Joints.b2WeldJoint
	x = ctx = xx = CanvasRenderingContext2D.prototype
	xGr = CanvasGradient.prototype
}
b2d.p()
b2d.cn = b2d.controls = {}
b2d = Box2D
b2d.Cm = b2d.Common
b2d.M = b2d.Math = b2d.Cm.Math
b2d.C = b2d.Collision
b2d.D = b2d.Dynamics
b2d.Hs = b2d.Shapes = b2d.C.Hs = b2d.C.Shapes
b2d.Cxs = b2d.D.Cxs = b2d.D.Contacts
b2d.Js = b2d.Joints = b2d.D.Joints
b2d.Cos = b2d.Controllers = b2d.D.Cos = b2d.D.Controllers
b2d.W = b2d.World = b2World = b2d.D.b2World
b2d.DD = b2d.DebugDraw = b2DebugDraw = b2d.D.b2DebugDraw
b2d.BD = b2d.bodyDef = b2BodyDef = b2d.D.b2BodyDef
b2d.FD = b2d.FixtureDef = b2FixtureDef = b2FixtureDef = b2d.D.b2FixtureDef
b2d.F = b2d.Fixture = b2d.D.Fixture = b2Fixture = b2d.D.b2Fixture
b2d.B = b2d.Body = b2d.D.Body = b2Body = b2d.D.b2Body
b2d.JD = b2d.jointDef = bJD = b2d.Js.b2JointDef
b2d.J = b2d.Joint = b2d.joint = bJ = b2d.Js.b2Joint
b2d.Cx = b2d.Contact = b2d.Cxs.b2Contact
b2d.AB = b2d.AABB = b2AABB = b2d.C.b2AABB
b2d.M2 = b2d.Mat22 = b2d.M.b2Mat22
b2d.M3 = b2d.Mat33 = b2d.M.b2Mat33
b2d.PJD = b2d.PrismaticJointDef = b2d.Js.b2PrismaticJointDef
b2d.RJD = b2d.RevoluteJointDef = b2d.Js.b2RevoluteJointDef
b2d.MJD = b2d.mouseJointDef = b2MouseJointDef = b2d.Js.b2MouseJointDef
b2d.RJ = b2d.RevoluteJoint = b2d.Js.b2RevoluteJoint
b2d.DJ = b2d.distanceJoint = bDJ = b2d.Js.b2DistanceJoint
b2d.massData = b2MassData = b2d.C.Hs.b2MassData
b2d.PolygonShape = b2PolygonShape = b2d.Hs.b2PolygonShape
b2d.CircleShape = b2CircleShape = b2d.Hs.b2CircleShape
b2d.Segment = b2d.C.b2Segment
b2d.AB = b2d.C.b2AABB
b2d.ControllerEdge = b2d.Cos.b2ControllerEdge
b2d.ConstantAccelController = b2d.Cos.b2ConstantAccelController
b2d.BuoyancyController = new b2d.Cos.b2BuoyancyController
$df.cF = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	return o
}
b2d.p = function () {
	b2d.D = b2d.Dynamics
	aCo = b2d.Cos.b2ConstantAccelController.prototype
	b = b2d.Body.prototype
	bCo = b2d.Cos.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Cos.b2BuoyancyController
	bD = b2d.BD.prototype
	cx = b2d.D.Contacts.b2Contact.prototype
	cxI = b2d.D.b2ContactImpulse.prototype
	ct = cjs.Container.prototype
	co = b2d.Cos.b2Controller.prototype
	c = HTMLCanvasElement.prototype
	cH = b2d.CircleShape.prototype
	dd = b2d.D.b2DebugDraw.prototype
	dJD = b2d.Joints.b2DistanceJointDef.prototype
	dJ = b2d.Joints.b2Joint.prototype
	eD = cjs.EventDispatcher.prototype
	f = b2d.Fixture.prototype
	fCo = b2d.Cos.b2ConstantForceController.prototype
	fd = fD = b2d.FixtureDef.prototype
	gCo = b2d.Cos.b2GravityController.prototype
	gx = cjs.Graphics.prototype
	h = cjs.Shape.prototype
	i = cjs.DisplayObject.prototype
	jD = b2d.Joints.b2JointDef.prototype
	j = b2d.Joints.b2Joint.prototype
	l = b2d.D.b2ContactListener.prototype
	mJ = b2d.Joints.b2MouseJoint.prototype
	mJD = b2d.Joints.b2MouseJointDef.prototype
	mc = cjs.MovieClip.prototype
	flDa = b2d.D.b2FilterData.prototype
	pH = b2d.PolygonShape.prototype
	pJ = b2d.Js.b2PrismaticJoint.prototype
	pJD = pd = b2d.Js.b2PrismaticJointDef.prototype
	pD = gpcas.geometry.PolyDefault.prototype//////////////////
	ps = gpcas.geometry.PolySimple.prototype/////////////////////////
	q = cjs.LoadQueue.prototype
	rJD = b2d.RevoluteJointDef.prototype
	rJ = b2d.RevoluteJoint.prototype
	st = s = cjs.Stage.prototype
	sS = ss = cjs.SpriteSheet.prototype
	sSB = cjs.SpriteSheetBuilder.prototype
	sp = s = cjs.Sprite.prototype
	tl = cjs.Timeline.prototype
	t = cjs.Text.prototype
	tCo = b2d.Cos.b2TensorDampingController.prototype
	tw = cjs.Tween.prototype
	v = b2d.Common.Math.b2Vec2.prototype
	w = b2d.World.prototype
	wJD = b2d.Js.b2WeldJointDef
	wJ = b2d.Js.b2WeldJoint
	x = ctx = xx = CanvasRenderingContext2D.prototype
	xGr = CanvasGradient.prototype
}
b2d.p()
b2d.cn = b2d.controls = {}
function b2dC() {
	b2d.C.b2Simplex
	b2d.C.b2Bound
	b2d.C.b2BoundValues
	b2d.C.b2ContactID
	b2d.C.b2ContactPoint
	b2d.C.b2Distance
	b2d.C.b2DistanceInput
	b2d.C.b2DistanceOutput
	b2d.C.b2DistanceProxy
	b2d.C.b2DynamicTree
	b2d.C.b2DynamicTreeNode
	b2d.C.b2DynamicTreePair
	b2d.C.b2RayCastInput
	b2d.C.b2RayCastOutput
};
b2dC()
//
b2d.C = b2d.Collision
$bD = function (x, y) {
	var v = V(x, y)
	var bD = new b2d.BD()
	bD.XY(N(v.x, 0), N(v.y, 0))
	return bD.dyn()
}
$dB = function (x, y) {
	return $bD(x, y).dyn()
}//$dBD =   b2d.bD =   b2d.dBD =
$sB = $sBD = b2d.S = b2d.sB = b2d.stat = function (x, y) {
	return $bD(x, y).stat()
}//
$kB = $kBD = b2d.kD = function (x, y) {
	return $bD(x, y).T(1)
}
b2d.tB = b2d.toBody = function (b) {
	return b2d.iB(b) ? b :
			b2d.iF(b) ? b.B() :
					null
}
b2d.iV = b2d.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
b2d.iH = function (h) {
	var typ
	if (O(h)) {
		typ = h.constructor.name
		return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
	}
}
b2d.iBD = b2d.isBDef = function (bd) {
	return O(bd) && F(bd.b2BodyDef)
}
b2d.iB = b2d.isB = b2d.isBody = function (b) {
	if (O(b)) {
		return b.constructor.name == 'b2Body'
	}
}
b2d.iFD = b2d.isFD = function (fD) {
	return O(fD) && fD.b2FixtureDef
}
b2d.iF = function (f) {
	if (!f) {
		return false
	}
	return f.constructor.name == "b2Fixture"
}
$L('libShorts', 'globalizingSome', 'protosOb', 'globalProtos')

function libShorts(){
b2d = Box2D //divide by 30 to get meters //all bx-obs have reg at center
b2d.D = b2d.Dynamics
b2d.C = b2d.Collision
b2d.Cm = b2d.Common
b2d.M = b2d.Math = b2d.Cm.Math
b2d.Cxs = b2d.Contacts = b2d.D.Contacts
b2d.Cos = b2d.Controllers = b2d.D.Controllers
b2d.Js = b2d.Jts = b2d.Joints = b2d.D.Joints
b2d.Hs = b2d.H = b2d.Shapes = b2d.C.Shapes
b2d.W = b2d.World = b2d.D.b2World
b2d.FD = b2d.FixtureDef = b2d.D.b2FixtureDef
b2d.F = b2d.Fixture = b2d.fixture = b2d.D.b2Fixture
b2d.B = b2d.Body = b2d.D.b2Body
b2d.BD = b2d.BodyDef = b2d.bodyDef = b2d.D.b2BodyDef
b2d.DD = b2d.DebugDraw = b2d.D.b2DebugDraw
b2d.V = b2d.V2 = b2d.Vec2 = b2d.M.b2Vec2
b2d.AB = b2d.AABB = b2d.C.b2AABB
b2d.M2 = b2d.Mat22 = b2d.M.b2Mat22
b2d.M3 = b2d.Mat33 = b2d.M.b2Mat33
b2d.WM = b2d.WorldManifold = b2d.C.b2WorldManifold
b2d.PH = b2d.PolygonShape = b2PolygonShape = b2d.H.b2PolygonShape
b2d.CH = b2d.CircleShape = b2CircleShape = b2d.H.b2CircleShape
b2d.MD = b2d.massData = b2MassData = b2d.H.b2MassData
b2d.Cx = b2d.Contact = b2d.Cxs.b2Contact
b2d.CL = b2d.ContactListener = b2d.D.b2ContactListener
b2d.JD = b2d.JtD = b2d.JointDef = b2d.Js.b2JointDef
b2d.J = b2d.Jt = b2d.Joint = b2d.Js.b2Joint
b2d.DJ = b2d.distanceJoint = b2d.Js.b2DistanceJoint
b2d.MJD = b2d.MouseJointDef = b2d.Js.b2MouseJointDef
b2d.MJ = b2d.MouseJoint = b2d.Js.b2MouseJoint
b2d.Co = b2d.Controller = b2d.Cos.b2Controller
b2d.CFC = b2d.ConstantForceController = b2d.Cos.b2ConstantForceController
b2d.GC = b2d.GravityController = b2d.Cos.b2GravityController
b2d.TDC = b2d.TensorDampingController = b2d.Cos.b2TensorDampingController
b2d.CAC = b2d.ConstantAccellController = b2d.Cos.b2ConstantAccelController
b2d.BC = b2d.BuoyancyController = b2d.Cos.b2BuoyancyController
}
function globalizingSome() {
	b2MouseJointDef = b2d.MJ
	b2AABB = b2d.AB
	b2DebugDraw = b2d.DD
	b2FixtureDef = b2d.FD
	b2BodyDef = b2d.BD
	b2Fixture = b2d.F
	b2Body = b2d.B
	b2World = b2d.W
}
function protosOb() {
	$pt = {}
	$pt.dD = b2d.DD.prototype
	$pt.v = b2d.Vec2.prototype
	$pt.l = $pt.cL = b2d.CL.prototype
	$pt.b = b2d.B.prototype
	$pt.f = b2d.F.prototype
	$pt.cx = b2d.Cx.prototype
	$pt.w = b2d.W.prototype
	$pt.bD = bD = b2d.BD.prototype
	$pt.fD = fd = b2d.FD.prototype
	$pt.jD = b2d.JD.prototype
	$pt.j = b2d.J.prototype
	$pt.mJD = $pt.mD = b2d.MJD.prototype
	$pt.mJ = b2d.MJ.prototype
	$pt.bH = b2d.Hs.b2Shape.prototype;
	$pt.cH = b2d.CircleShape.prototype
	$pt.pH = b2d.PolygonShape.prototype
	$pt.co = b2d.Co.prototype
	$pt.gCo = b2d.GC.prototype
	$pt.bCo = b2d.BC.prototype
	$pt.fCo = b2d.CFC.prototype
	$pt.aCo = b2d.CAC.prototype
	$pt.tCo = b2d.TDC.prototype
}
function globalProtos(){
$PT = function () {
	dD = $pt.dD
	v = $pt.v
	w = $pt.w;
	fd = fD = $pt.fD;
	bD = $pt.bD;
	b = $pt.b;
	f = $pt.f
	cx = $pt.cx
	l = cL = $pt.l
	bH = $pt.bH;
	cH = $pt.cH;
	pH = $pt.pH
	co = $pt.co;
	fCo = $pt.fCo;
	aCo = $pt.aCo;
	gCo = $pt.gCo
	tCo = $pt.tCo;
	bCo = $pt.bCo
	jD = $pt.jD
	j = $pt.j
	j = b2d.J.prototype
	mJD = $pt.mJD
	mJ = $pt.mJ
}
$PT()
}