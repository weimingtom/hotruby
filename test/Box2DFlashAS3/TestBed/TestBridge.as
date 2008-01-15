﻿/*
* Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/


package TestBed{
	
	
	
	import Box2D.Dynamics.*;
	import Box2D.Collision.*;
	import Box2D.Collision.Shapes.*;
	import Box2D.Dynamics.Joints.*;
	import Box2D.Dynamics.Contacts.*;
	import Box2D.Common.*;
	import Box2D.Common.Math.*;
	
	
	
	public class TestBridge extends Test{
		
		public function TestBridge(){
			
			// Set Text field
			Main.m_aboutText.text = "Bridge";
			
			var ground:b2Body = m_world.m_groundBody;
			var i:int;
			
			// Bridge
			{
				var sd:b2BoxDef = new b2BoxDef();
				sd.extents.Set(24 / m_physScale, 5 / m_physScale);
				sd.density = 20.0;
				sd.friction = 0.2;
				
				var bd:b2BodyDef = new b2BodyDef();
				bd.AddShape(sd);
				
				var jd:b2RevoluteJointDef = new b2RevoluteJointDef();
				const numPlanks:int = 10;
				
				var prevBody:b2Body = ground;
				for (i = 0; i < numPlanks; ++i)
				{
					bd.position.Set((100 + 22 + 44 * i) / m_physScale, 250 / m_physScale);
					var body:b2Body = m_world.CreateBody(bd);
					
					jd.anchorPoint.Set((100 + 44 * i) / m_physScale, 250 / m_physScale);
					jd.body1 = prevBody;
					jd.body2 = body;
					m_world.CreateJoint(jd);
					
					prevBody = body;
				}
				
				jd.anchorPoint.Set((100 + 44 * numPlanks) / m_physScale, 250 / m_physScale);
				jd.body1 = prevBody;
				jd.body2 = ground;
				m_world.CreateJoint(jd);
			}
			
			
			
			
			
			
			
			
			// Spawn in a bunch of crap
			for (i = 0; i < 5; i++){
				var bodyDef:b2BodyDef = new b2BodyDef();
				var boxDef:b2BoxDef = new b2BoxDef();
				boxDef.density = 1.0;
				// Override the default friction.
				boxDef.friction = 0.3;
				boxDef.restitution = 0.1;
				boxDef.extents.Set((Math.random() * 5 + 10) / m_physScale, (Math.random() * 5 + 10) / m_physScale);
				bodyDef.position.Set((Math.random() * 400 + 120) / m_physScale, (Math.random() * 150 + 50) / m_physScale);
				bodyDef.rotation = Math.random() * Math.PI;
				bodyDef.AddShape(boxDef);
				m_world.CreateBody(bodyDef);
				
			}
			for (i = 0; i < 5; i++){
				var bodyDefC:b2BodyDef = new b2BodyDef();
				var circDef:b2CircleDef = new b2CircleDef();
				circDef.density = 1.0;
				circDef.radius = (Math.random() * 5 + 10) / m_physScale;
				// Override the default friction.
				circDef.friction = 0.3;
				circDef.restitution = 0.1;
				bodyDefC.position.Set((Math.random() * 400 + 120) / m_physScale, (Math.random() * 150 + 50) / m_physScale);
				bodyDefC.rotation = Math.random() * Math.PI;
				bodyDefC.AddShape(circDef);
				m_world.CreateBody(bodyDefC);
				
			}
			for (i = 0; i < 15; i++){
				var bodyDefP:b2BodyDef = new b2BodyDef();
				var polyDef:b2PolyDef = new b2PolyDef();
				if (Math.random() > 0.66){
					polyDef.vertexCount = 4;
					polyDef.vertices[0].Set((-10 -Math.random()*10) / m_physScale, ( 10 +Math.random()*10) / m_physScale);
					polyDef.vertices[1].Set(( -5 -Math.random()*10) / m_physScale, (-10 -Math.random()*10) / m_physScale);
					polyDef.vertices[2].Set((  5 +Math.random()*10) / m_physScale, (-10 -Math.random()*10) / m_physScale);
					polyDef.vertices[3].Set(( 10 +Math.random()*10) / m_physScale, ( 10 +Math.random()*10) / m_physScale);
				}
				else if (Math.random() > 0.5){
					polyDef.vertexCount = 5;
					polyDef.vertices[0].Set(0, (10 +Math.random()*10) / m_physScale);
					polyDef.vertices[2].Set((-5 -Math.random()*10) / m_physScale, (-10 -Math.random()*10) / m_physScale);
					polyDef.vertices[3].Set(( 5 +Math.random()*10) / m_physScale, (-10 -Math.random()*10) / m_physScale);
					polyDef.vertices[1].Set((polyDef.vertices[0].x + polyDef.vertices[2].x), (polyDef.vertices[0].y + polyDef.vertices[2].y));
					polyDef.vertices[1].Multiply(Math.random()/2+0.8);
					polyDef.vertices[4].Set((polyDef.vertices[3].x + polyDef.vertices[0].x), (polyDef.vertices[3].y + polyDef.vertices[0].y));
					polyDef.vertices[4].Multiply(Math.random()/2+0.8);
				}
				else{
					polyDef.vertexCount = 3;
					polyDef.vertices[0].Set(0, (10 +Math.random()*10) / m_physScale);
					polyDef.vertices[1].Set((-5 -Math.random()*10) / m_physScale, (-10 -Math.random()*10) / m_physScale);
					polyDef.vertices[2].Set(( 5 +Math.random()*10) / m_physScale, (-10 -Math.random()*10) / m_physScale);
				}
				polyDef.density = 1.0;
				polyDef.friction = 0.3;
				polyDef.restitution = 0.1;
				bodyDefP.position.Set((Math.random() * 400 + 120) / m_physScale, (Math.random() * 150 + 50) / m_physScale);
				bodyDefP.rotation = Math.random() * Math.PI;
				bodyDefP.AddShape(polyDef);
				m_world.CreateBody(bodyDefP);
			}
			
		}
		
		
		//======================
		// Member Data 
		//======================
	}
	
}