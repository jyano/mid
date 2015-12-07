$l('box.js file')
BOX=function(){
 $l('BOX')
	 $('<canvas id="playground" width="500" height="200" ></canvas>').A()
	 
	  
		 var b2Vec2 = Box2D.Common.Math.b2Vec2,
				 b2BodyDef = Box2D.Dynamics.b2BodyDef,
				 b2Body = Box2D.Dynamics.b2Body,
				 b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
				 b2World = Box2D.Dynamics.b2World,
				 b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
				 b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
				 b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
		 var world = new b2World(
				 new b2Vec2(0, 10), //gravity vector
				 true
		 );
		 var fixDef = new b2FixtureDef;
		 fixDef.shape = new b2PolygonShape;
		 fixDef.density = 1.0;
		 fixDef.friction = 0.5;
		 fixDef.restitution = .5;
		 fixDef.shape.SetAsArray([
					 new b2Vec2(-1, 0),
					 new b2Vec2(0, -1),
					 new b2Vec2(1, 0)], 3
		 ); //triangle shape
		 var bodyDef = new b2BodyDef;
		 bodyDef.type = b2Body.b2_staticBody;
		 bodyDef.position.Set(7, 7);
		 world.CreateBody(bodyDef).CreateFixture(fixDef);
		 var debugDraw = new b2DebugDraw();
		 debugDraw.SetSprite(document.getElementById("playground").getContext("2d"));
		 debugDraw.SetDrawScale(20.0);
		 debugDraw.SetFillAlpha(0.5);
		 debugDraw.SetLineThickness(1.0);
		 debugDraw.SetFlags(b2DebugDraw.e_shapeBit);
		 world.SetDebugDraw(debugDraw);
		 bodyDef.type = b2Body.b2_dynamicBody;
		 var i = 0;
		 setInterval(function () {
			 fixDef.shape = new b2CircleShape(.5); //circle shape
			 bodyDef.position.Set(7, 0);
			 var body = world.CreateBody(bodyDef);
			 body.CreateFixture(fixDef);
			 body.ApplyImpulse(new b2Vec2(i++ % 2 ? 0.5 : -0.5, 0), body.GetWorldCenter()); //Push the shape slightly
		 }, 1000);
		 setInterval(function () {
			 world.Step(1 / 60, 10, 10);
			 world.DrawDebugData();
			 world.ClearForces();
		 }, 1000 / 60);
 
 }