var src = ["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":2},"<main>","Box2DFlashAS3\\Box2DFlashAS3.rb","top",[],0,[],[1,["getglobal","$native"],["setglobal","$n"],2,["getglobal","$n"],["putstring","Box2D.Dynamics.*"],["send","import",1,null,0,null],["pop"],3,["getglobal","$n"],["putstring","Box2D.Collision.*"],["send","import",1,null,0,null],["pop"],4,["getglobal","$n"],["putstring","Box2D.Collision.Shapes.*"],["send","import",1,null,0,null],["pop"],5,["getglobal","$n"],["putstring","Box2D.Dynamics.Joints.*"],["send","import",1,null,0,null],["pop"],6,["getglobal","$n"],["putstring","Box2D.Dynamics.Contacts.*"],["send","import",1,null,0,null],["pop"],7,["getglobal","$n"],["putstring","Box2D.Common.Math.*"],["send","import",1,null,0,null],["pop"],8,["getglobal","$n"],["putstring","flash.events.*"],["send","import",1,null,0,null],["pop"],9,["getglobal","$n"],["putstring","flash.display.*"],["send","import",1,null,0,null],["pop"],10,["getglobal","$n"],["putstring","flash.text.*"],["send","import",1,null,0,null],["pop"],11,["getglobal","$n"],["putstring","General.*"],["send","import",1,null,0,null],["pop"],12,["getglobal","$n"],["putstring","TestBed.*"],["send","import",1,null,0,null],["pop"],14,["putnil"],["putnil"],["defineclass","Box2D",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":1},"<class:Box2D>","Box2DFlashAS3\\Box2DFlashAS3.rb","class",[],0,[],[15,["putnil"],["definemethod","initialize",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":1},"initialize","Box2DFlashAS3\\Box2DFlashAS3.rb","method",[],0,[],[16,["putobject",1],["setinstancevariable","@curr_id"],17,["putnil"],["setinstancevariable","@curr_test"],19,["putnil"],["send","add_fps_counter",0,null,24,null],["pop"],20,["putnil"],["send","add_sprite",0,null,24,null],["pop"],21,["putnil"],["send","add_instructions_text",0,null,24,null],["pop"],22,["putnil"],["send","add_about_text",0,null,24,null],["pop"],23,["putnil"],["send","add_input_fix_sprite",0,null,24,null],["pop"],24,["putnil"],["send","add_listener",0,null,24,null],["leave"]]],0],27,["putnil"],["definemethod","add_listener",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":2,"stack_max":6},"add_listener","Box2DFlashAS3\\Box2DFlashAS3.rb","method",["update"],0,[["break",null,"label_0","label_9","label_9",0]],["label_0",28,["putnil"],["getconstant","Proc"],["send","new",0,["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":1,"local_size":1,"stack_max":3},"block in add_listener","Box2DFlashAS3\\Box2DFlashAS3.rb","block",["evt"],[1,[],0,0,-1,-1,3],[["redo",null,"label_0","label_475","label_0",0],["next",null,"label_0","label_475","label_475",0]],["label_0",30,["getinstancevariable","@sprite"],["send","graphics",0,null,0,null],["send","clear",0,null,0,null],["pop"],33,["getglobal","$n"],["send","Input",0,null,0,null],["putobject",39],["send","isKeyPressed",1,null,0,null],["branchunless","label_50"],34,["getinstancevariable","@curr_id"],["putobject",1],["send","+",1,null,0,null],["setinstancevariable","@curr_id"],35,["putnil"],["setinstancevariable","@curr_test"],33,["jump","label_106"],"label_50",36,["getglobal","$n"],["send","Input",0,null,0,null],["putobject",37],["send","isKeyPressed",1,null,0,null],["branchunless","label_85"],37,["getinstancevariable","@curr_id"],["putobject",1],["send","-",1,null,0,null],["setinstancevariable","@curr_id"],38,["putnil"],["setinstancevariable","@curr_test"],36,["jump","label_106"],"label_85",40,["getglobal","$n"],["send","Input",0,null,0,null],["putobject",82],["send","isKeyPressed",1,null,0,null],["branchunless","label_106"],41,["putnil"],["setinstancevariable","@curr_test"],"label_106",45,["putnil"],["getinstancevariable","@curr_test"],["send","==",1,null,0,null],["branchunless","label_426"],46,["getinstancevariable","@curr_id"],["dup"],["opt_case_dispatch",[0,"label_276",1,"label_295",2,"label_314",3,"label_333",4,"label_352",5,"label_371",6,"label_390",7,"label_409"],"label_219"],48,["putobject",0],["topn",1],["send","===",1,null,0,null],["branchif","label_276"],51,["putobject",1],["topn",1],["send","===",1,null,0,null],["branchif","label_295"],54,["putobject",2],["topn",1],["send","===",1,null,0,null],["branchif","label_314"],57,["putobject",3],["topn",1],["send","===",1,null,0,null],["branchif","label_333"],60,["putobject",4],["topn",1],["send","===",1,null,0,null],["branchif","label_352"],63,["putobject",5],["topn",1],["send","===",1,null,0,null],["branchif","label_371"],66,["putobject",6],["topn",1],["send","===",1,null,0,null],["branchif","label_390"],69,["putobject",7],["topn",1],["send","===",1,null,0,null],["branchif","label_409"],"label_219",73,["pop"],["getinstancevariable","@curr_id"],["putobject",0],["send","<",1,null,0,null],["branchunless","label_254"],74,["putobject",7],["setinstancevariable","@curr_id"],75,["getglobal","$n"],["send","TestGears",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],73,["jump","label_426"],"label_254",77,["putobject",0],["setinstancevariable","@curr_id"],78,["getglobal","$n"],["send","TestBridge",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],73,["jump","label_426"],"label_276",80,["pop"],49,["getglobal","$n"],["send","TestBridge",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],80,["jump","label_426"],"label_295",["pop"],52,["getglobal","$n"],["send","TestExample",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],80,["jump","label_426"],"label_314",["pop"],55,["getglobal","$n"],["send","TestRagdoll",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],80,["jump","label_426"],"label_333",["pop"],58,["getglobal","$n"],["send","TestCompound",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],80,["jump","label_426"],"label_352",["pop"],61,["getglobal","$n"],["send","TestStack",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],80,["jump","label_426"],"label_371",["pop"],64,["getglobal","$n"],["send","TestCrank",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],80,["jump","label_426"],"label_390",["pop"],67,["getglobal","$n"],["send","TestPulley",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],80,["jump","label_426"],"label_409",["pop"],70,["getglobal","$n"],["send","TestGears",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@curr_test"],"label_426",84,["getinstancevariable","@curr_test"],["send","Update",0,null,0,null],["pop"],87,["getglobal","$n"],["send","Input",0,null,0,null],["send","update",0,null,0,null],["pop"],90,["getinstancevariable","@fps_counter"],["send","update",0,null,0,null],["pop"],91,["getglobal","$n"],["send","FRateLimiter",0,null,0,null],["putobject",30],["send","limitFrame",1,null,0,null],"label_475",["leave"]]],0,null],"label_9",["setlocal",2],94,["getglobal","$n"],["send","_root",0,null,0,null],["getglobal","$n"],["send","Event",0,null,0,null],["send","ENTER_FRAME",0,null,0,null],["getlocal",2],["putobject",false],["putobject",0],["putobject",true],["send","addEventListener",5,null,0,null],["leave"]]],0],97,["putnil"],["definemethod","add_fps_counter",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":3},"add_fps_counter","Box2DFlashAS3\\Box2DFlashAS3.rb","method",[],0,[],[98,["getglobal","$n"],["send","FpsCounter",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@fps_counter"],99,["getinstancevariable","@fps_counter"],["putobject",7],["send","x=",1,null,0,null],["pop"],100,["getinstancevariable","@fps_counter"],["putobject",5],["send","y=",1,null,0,null],["pop"],101,["getglobal","$n"],["send","Main",0,null,0,null],["getinstancevariable","@fps_counter"],["send","m_fpsCounter=",1,null,0,null],["pop"],102,["getglobal","$n"],["send","_root",0,null,0,null],["getinstancevariable","@fps_counter"],["putobject",0],["send","addChildAt",2,null,0,null],["leave"]]],0],105,["putnil"],["definemethod","add_sprite",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":1,"stack_max":2},"add_sprite","Box2DFlashAS3\\Box2DFlashAS3.rb","method",[],0,[],[106,["getglobal","$n"],["send","Sprite",0,null,0,null],["send","new",0,null,0,null],["setinstancevariable","@sprite"],107,["getglobal","$n"],["send","Main",0,null,0,null],["getinstancevariable","@sprite"],["send","m_sprite=",1,null,0,null],["pop"],108,["getglobal","$n"],["send","_root",0,null,0,null],["getinstancevariable","@sprite"],["send","addChild",1,null,0,null],["pop"],110,["getglobal","$n"],["send","Input",0,null,0,null],["getinstancevariable","@sprite"],["send","new",1,null,0,null],["dup"],["setinstancevariable","@input"],["leave"]]],0],113,["putnil"],["definemethod","add_instructions_text",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":3,"stack_max":7},"add_instructions_text","Box2DFlashAS3\\Box2DFlashAS3.rb","method",["instructions_text","instructions_text_format"],0,[],[115,["getglobal","$n"],["send","TextField",0,null,0,null],["send","new",0,null,0,null],["setlocal",3],117,["getglobal","$n"],["send","TextFormat",0,null,0,null],["putstring","Arial"],["putobject",16],["putobject",16777215],["putobject",false],["putobject",false],["putobject",false],["send","new",6,null,0,null],["setlocal",2],118,["getlocal",2],["getglobal","$n"],["send","TextFormatAlign",0,null,0,null],["send","RIGHT",0,null,0,null],["send","align=",1,null,0,null],["pop"],120,["getlocal",3],["getlocal",2],["send","defaultTextFormat=",1,null,0,null],["pop"],121,["getlocal",3],["putobject",140],["send","x=",1,null,0,null],["pop"],122,["getlocal",3],["putobject",4.5],["send","y=",1,null,0,null],["pop"],123,["getlocal",3],["putobject",495],["send","width=",1,null,0,null],["pop"],124,["getlocal",3],["putobject",61],["send","height=",1,null,0,null],["pop"],125,["getlocal",3],["putstring","Box2DFlashAS3 examples: \n'Left'\/'Right' arrows to go to previous\/next example. \n'R' to reset."],["send","text=",1,null,0,null],["pop"],126,["getglobal","$n"],["send","_root",0,null,0,null],["getlocal",3],["send","addChild",1,null,0,null],["leave"]]],0],130,["putnil"],["definemethod","add_about_text",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":3,"stack_max":7},"add_about_text","Box2DFlashAS3\\Box2DFlashAS3.rb","method",["aboutTextFormat","about_text"],0,[],[131,["getglobal","$n"],["send","TextFormat",0,null,0,null],["putstring","Arial"],["putobject",16],["putobject",52479],["putobject",true],["putobject",false],["putobject",false],["send","new",6,null,0,null],["setlocal",3],132,["getlocal",3],["getglobal","$n"],["send","TextFormatAlign",0,null,0,null],["send","RIGHT",0,null,0,null],["send","align=",1,null,0,null],["pop"],134,["getglobal","$n"],["send","TextField",0,null,0,null],["send","new",0,null,0,null],["setlocal",2],135,["getlocal",2],["getlocal",3],["send","defaultTextFormat=",1,null,0,null],["pop"],136,["getlocal",2],["putobject",434],["send","x=",1,null,0,null],["pop"],137,["getlocal",2],["putobject",71],["send","y=",1,null,0,null],["pop"],138,["getlocal",2],["putobject",200],["send","width=",1,null,0,null],["pop"],139,["getlocal",2],["putobject",30],["send","height=",1,null,0,null],["pop"],140,["getglobal","$n"],["send","Main",0,null,0,null],["getlocal",2],["send","m_aboutText=",1,null,0,null],["pop"],141,["getglobal","$n"],["send","_root",0,null,0,null],["getlocal",2],["send","addChild",1,null,0,null],["leave"]]],0],144,["putnil"],["definemethod","add_input_fix_sprite",["YARVInstructionSequence\/SimpleDataFormat",1,1,1,{"arg_size":0,"local_size":2,"stack_max":4},"add_input_fix_sprite","Box2DFlashAS3\\Box2DFlashAS3.rb","method",["inputFixSprite"],0,[],[147,["getglobal","$n"],["send","Sprite",0,null,0,null],["send","new",0,null,0,null],["setlocal",2],148,["getlocal",2],["send","graphics",0,null,0,null],["putobject",0],["putobject",0],["putobject",0],["send","lineStyle",3,null,0,null],["pop"],149,["getlocal",2],["send","graphics",0,null,0,null],["putobject",0],["putobject",0],["send","beginFill",2,null,0,null],["pop"],150,["getlocal",2],["send","graphics",0,null,0,null],["putobject",-10000],["putobject",-10000],["send","moveTo",2,null,0,null],["pop"],151,["getlocal",2],["send","graphics",0,null,0,null],["putobject",10000],["putobject",-10000],["send","lineTo",2,null,0,null],["pop"],152,["getlocal",2],["send","graphics",0,null,0,null],["putobject",10000],["putobject",10000],["send","lineTo",2,null,0,null],["pop"],153,["getlocal",2],["send","graphics",0,null,0,null],["putobject",-10000],["putobject",10000],["send","lineTo",2,null,0,null],["pop"],154,["getlocal",2],["send","graphics",0,null,0,null],["send","endFill",0,null,0,null],["pop"],155,["getglobal","$n"],["send","_root",0,null,0,null],["getlocal",2],["send","addChild",1,null,0,null],["leave"]]],0],["putnil"],["leave"]]],0],["pop"],159,["putnil"],["getconstant","Box2D"],["send","new",0,null,0,null],["leave"]]];