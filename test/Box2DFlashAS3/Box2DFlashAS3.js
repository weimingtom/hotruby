var src = ["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":10,"stack_max":7},"<main>","Box2DFlashAS3\\Box2DFlashAS3.rb","top",["n","m_currId","m_currTest","m_input","update","instructions_text","instructions_text_format","m_aboutTextFormat","inputFixSprite"],0,[["break",null,"label_196","label_205","label_205",0]],[1,["getglobal","$native"],["setlocal",10],3,["getlocal",10],["putstring","Box2D.Dynamics.*"],["send","import",1,null,0,null],["pop"],4,["getlocal",10],["putstring","Box2D.Collision.*"],["send","import",1,null,0,null],["pop"],5,["getlocal",10],["putstring","Box2D.Collision.Shapes.*"],["send","import",1,null,0,null],["pop"],6,["getlocal",10],["putstring","Box2D.Dynamics.Joints.*"],["send","import",1,null,0,null],["pop"],7,["getlocal",10],["putstring","Box2D.Dynamics.Contacts.*"],["send","import",1,null,0,null],["pop"],8,["getlocal",10],["putstring","Box2D.Common.Math.*"],["send","import",1,null,0,null],["pop"],9,["getlocal",10],["putstring","flash.events.*"],["send","import",1,null,0,null],["pop"],10,["getlocal",10],["putstring","flash.display.*"],["send","import",1,null,0,null],["pop"],11,["getlocal",10],["putstring","flash.text.*"],["send","import",1,null,0,null],["pop"],12,["getlocal",10],["putstring","General.*"],["send","import",1,null,0,null],["pop"],13,["getlocal",10],["putstring","TestBed.*"],["send","import",1,null,0,null],["pop"],15,["getlocal",10],["send","Main",0,null,0,null],["getlocal",10],["send","FpsCounter",0,null,0,null],["send","new",0,null,0,null],["send","m_fpsCounter=",1,null,0,null],["pop"],16,["putobject",1],["setlocal",9],17,["putnil"],["setlocal",8],18,["getlocal",10],["send","Main",0,null,0,null],["putnil"],["send","m_sprite=",1,null,0,null],["pop"],19,["getlocal",10],["send","Main",0,null,0,null],["putnil"],["send","m_aboutText=",1,null,0,null],["pop"],21,["putnil"],["setlocal",7],"label_196",23,["putnil"],["getconstant","Proc"],["send","new",0,["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":1,"local_size":1,"stack_max":3},"block in <main>","Box2DFlashAS3\\Box2DFlashAS3.rb","block",["evt"],[1,[],0,0,-1,-1,3],[["redo",null,"label_0","label_539","label_0",0],["next",null,"label_0","label_539","label_539",0]],["label_0",25,["getdynamic",10,1],["send","Main",0,null,0,null],["send","m_sprite",0,null,0,null],["send","graphics",0,null,0,null],["send","clear",0,null,0,null],["pop"],28,["getdynamic",10,1],["send","Input",0,null,0,null],["putobject",39],["send","isKeyPressed",1,null,0,null],["branchunless","label_67"],29,["getdynamic",9,1],["putobject",1],["send","+",1,null,0,null],["setdynamic",9,1],30,["putnil"],["setdynamic",8,1],28,["jump","label_129"],"label_67",31,["getdynamic",10,1],["send","Input",0,null,0,null],["putobject",37],["send","isKeyPressed",1,null,0,null],["branchunless","label_106"],32,["getdynamic",9,1],["putobject",1],["send","-",1,null,0,null],["setdynamic",9,1],33,["putnil"],["setdynamic",8,1],31,["jump","label_129"],"label_106",35,["getdynamic",10,1],["send","Input",0,null,0,null],["putobject",82],["send","isKeyPressed",1,null,0,null],["branchunless","label_129"],36,["putnil"],["setdynamic",8,1],"label_129",40,["putnil"],["getdynamic",8,1],["send","==",1,null,0,null],["branchunless","label_474"],41,["getdynamic",9,1],["dup"],["opt_case_dispatch",[0,"label_308",1,"label_329",2,"label_350",3,"label_371",4,"label_392",5,"label_413",6,"label_434",7,"label_455"],"label_244"],43,["putobject",0],["topn",1],["send","===",1,null,0,null],["branchif","label_308"],46,["putobject",1],["topn",1],["send","===",1,null,0,null],["branchif","label_329"],49,["putobject",2],["topn",1],["send","===",1,null,0,null],["branchif","label_350"],52,["putobject",3],["topn",1],["send","===",1,null,0,null],["branchif","label_371"],55,["putobject",4],["topn",1],["send","===",1,null,0,null],["branchif","label_392"],58,["putobject",5],["topn",1],["send","===",1,null,0,null],["branchif","label_413"],61,["putobject",6],["topn",1],["send","===",1,null,0,null],["branchif","label_434"],64,["putobject",7],["topn",1],["send","===",1,null,0,null],["branchif","label_455"],"label_244",68,["pop"],["getdynamic",9,1],["putobject",0],["send","<",1,null,0,null],["branchunless","label_283"],69,["putobject",7],["setdynamic",9,1],70,["getdynamic",10,1],["send","TestGears",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],68,["jump","label_474"],"label_283",72,["putobject",0],["setdynamic",9,1],73,["getdynamic",10,1],["send","TestBridge",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],68,["jump","label_474"],"label_308",75,["pop"],44,["getdynamic",10,1],["send","TestBridge",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],75,["jump","label_474"],"label_329",["pop"],47,["getdynamic",10,1],["send","TestExample",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],75,["jump","label_474"],"label_350",["pop"],50,["getdynamic",10,1],["send","TestRagdoll",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],75,["jump","label_474"],"label_371",["pop"],53,["getdynamic",10,1],["send","TestCompound",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],75,["jump","label_474"],"label_392",["pop"],56,["getdynamic",10,1],["send","TestStack",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],75,["jump","label_474"],"label_413",["pop"],59,["getdynamic",10,1],["send","TestCrank",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],75,["jump","label_474"],"label_434",["pop"],62,["getdynamic",10,1],["send","TestPulley",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],75,["jump","label_474"],"label_455",["pop"],65,["getdynamic",10,1],["send","TestGears",0,null,0,null],["send","new",0,null,0,null],["setdynamic",8,1],"label_474",79,["getdynamic",8,1],["send","Update",0,null,0,null],["pop"],82,["getdynamic",10,1],["send","Input",0,null,0,null],["send","update",0,null,0,null],["pop"],85,["getdynamic",10,1],["send","Main",0,null,0,null],["send","m_fpsCounter",0,null,0,null],["send","update",0,null,0,null],["pop"],86,["getdynamic",10,1],["send","FRateLimiter",0,null,0,null],["putobject",30],["send","limitFrame",1,null,0,null],"label_539",["leave"]]],0,null],"label_205",["setlocal",6],89,["getlocal",10],["send","_root",0,null,0,null],["getlocal",10],["send","Event",0,null,0,null],["send","ENTER_FRAME",0,null,0,null],["getlocal",6],["putobject",false],["putobject",0],["putobject",true],["send","addEventListener",5,null,0,null],["pop"],91,["getlocal",10],["send","Main",0,null,0,null],["send","m_fpsCounter",0,null,0,null],["putobject",7],["send","x=",1,null,0,null],["pop"],92,["getlocal",10],["send","Main",0,null,0,null],["send","m_fpsCounter",0,null,0,null],["putobject",5],["send","y=",1,null,0,null],["pop"],93,["getlocal",10],["send","_root",0,null,0,null],["getlocal",10],["send","Main",0,null,0,null],["send","m_fpsCounter",0,null,0,null],["putobject",0],["send","addChildAt",2,null,0,null],["pop"],95,["getlocal",10],["send","Main",0,null,0,null],["getlocal",10],["send","Sprite",0,null,0,null],["send","new",0,null,0,null],["send","m_sprite=",1,null,0,null],["pop"],96,["getlocal",10],["send","_root",0,null,0,null],["getlocal",10],["send","Main",0,null,0,null],["send","m_sprite",0,null,0,null],["send","addChild",1,null,0,null],["pop"],98,["getlocal",10],["send","Input",0,null,0,null],["getlocal",10],["send","Main",0,null,0,null],["send","m_sprite",0,null,0,null],["send","new",1,null,0,null],["setlocal",7],102,["getlocal",10],["send","TextField",0,null,0,null],["send","new",0,null,0,null],["setlocal",5],104,["getlocal",10],["send","TextFormat",0,null,0,null],["putstring","Arial"],["putobject",16],["putobject",16777215],["putobject",false],["putobject",false],["putobject",false],["send","new",6,null,0,null],["setlocal",4],105,["getlocal",4],["getlocal",10],["send","TextFormatAlign",0,null,0,null],["send","RIGHT",0,null,0,null],["send","align=",1,null,0,null],["pop"],107,["getlocal",5],["getlocal",4],["send","defaultTextFormat=",1,null,0,null],["pop"],108,["getlocal",5],["putobject",140],["send","x=",1,null,0,null],["pop"],109,["getlocal",5],["putobject",4.5],["send","y=",1,null,0,null],["pop"],110,["getlocal",5],["putobject",495],["send","width=",1,null,0,null],["pop"],111,["getlocal",5],["putobject",61],["send","height=",1,null,0,null],["pop"],112,["getlocal",5],["putstring","Box2DFlashAS3 examples: \n'Left'\/'Right' arrows to go to previous\/next example. \n'R' to reset."],["send","text=",1,null,0,null],["pop"],113,["getlocal",10],["send","_root",0,null,0,null],["getlocal",5],["send","addChild",1,null,0,null],["pop"],116,["getlocal",10],["send","Main",0,null,0,null],["getlocal",10],["send","TextField",0,null,0,null],["send","new",0,null,0,null],["send","m_aboutText=",1,null,0,null],["pop"],117,["getlocal",10],["send","TextFormat",0,null,0,null],["putstring","Arial"],["putobject",16],["putobject",52479],["putobject",true],["putobject",false],["putobject",false],["send","new",6,null,0,null],["setlocal",3],118,["getlocal",3],["getlocal",10],["send","TextFormatAlign",0,null,0,null],["send","RIGHT",0,null,0,null],["send","align=",1,null,0,null],["pop"],119,["getlocal",10],["send","Main",0,null,0,null],["send","m_aboutText",0,null,0,null],["getlocal",3],["send","defaultTextFormat=",1,null,0,null],["pop"],120,["getlocal",10],["send","Main",0,null,0,null],["send","m_aboutText",0,null,0,null],["putobject",434],["send","x=",1,null,0,null],["pop"],121,["getlocal",10],["send","Main",0,null,0,null],["send","m_aboutText",0,null,0,null],["putobject",71],["send","y=",1,null,0,null],["pop"],122,["getlocal",10],["send","Main",0,null,0,null],["send","m_aboutText",0,null,0,null],["putobject",200],["send","width=",1,null,0,null],["pop"],123,["getlocal",10],["send","Main",0,null,0,null],["send","m_aboutText",0,null,0,null],["putobject",30],["send","height=",1,null,0,null],["pop"],124,["getlocal",10],["send","_root",0,null,0,null],["getlocal",10],["send","Main",0,null,0,null],["send","m_aboutText",0,null,0,null],["send","addChild",1,null,0,null],["pop"],128,["getlocal",10],["send","Sprite",0,null,0,null],["send","new",0,null,0,null],["setlocal",2],129,["getlocal",2],["send","graphics",0,null,0,null],["putobject",0],["putobject",0],["putobject",0],["send","lineStyle",3,null,0,null],["pop"],130,["getlocal",2],["send","graphics",0,null,0,null],["putobject",0],["putobject",0],["send","beginFill",2,null,0,null],["pop"],131,["getlocal",2],["send","graphics",0,null,0,null],["putobject",-10000],["putobject",-10000],["send","moveTo",2,null,0,null],["pop"],132,["getlocal",2],["send","graphics",0,null,0,null],["putobject",10000],["putobject",-10000],["send","lineTo",2,null,0,null],["pop"],133,["getlocal",2],["send","graphics",0,null,0,null],["putobject",10000],["putobject",10000],["send","lineTo",2,null,0,null],["pop"],134,["getlocal",2],["send","graphics",0,null,0,null],["putobject",-10000],["putobject",10000],["send","lineTo",2,null,0,null],["pop"],135,["getlocal",2],["send","graphics",0,null,0,null],["send","endFill",0,null,0,null],["pop"],136,["getlocal",10],["send","_root",0,null,0,null],["getlocal",2],["send","addChild",1,null,0,null],["leave"]]];
