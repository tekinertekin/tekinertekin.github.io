

window.init = function(){
    var camera = new Camera();
    camera.position = [0, 0, -3];
    camera.lookAt = [0.0, 0.0, 0.0];

   /* var program1 = new Program('color-vs', 'color-fs');
    program1.setVertexPositionAttributeName("aVertexPosition");
    program1.setVertexColorAttributeName("aVertexColor");

    var material1 = new Material(program1);

    var pyramid = new SceneObject(createPyramidMesh(), material1);

    pyramid.localPosition = [2, 0, 0];

    var fTexture = new Texture('https://webglfundamentals.org/webgl/resources/f-texture.png');
    
    var texturedProgram = new Program('textured-vs', 'textured-fs');
    texturedProgram.setVertexPositionAttributeName("aVertexPosition");
    texturedProgram.setTextureCoordinateAttributeName("aTextureCoord");
    
    var texturedMaterial = new Material(texturedProgram);
    texturedMaterial.setTexture(fTexture);

    window.box = new SceneObject(createBoxMesh(), texturedMaterial); 
    pyramid.parent = box;*/

   /* var lightProgram = new Program('directionalLight-vs', 'directionalLight-fs');

    lightProgram.setVertexPositionAttributeName("aVertexPosition");
    lightProgram.setVertexNormalAttributeName("aVertexNormal");

    lightProgram.setDiffuseProductUniformName("uDiffuseProduct");
    lightProgram.setSpecularProductUniformName("uSpecularProduct");
    lightProgram.setAmbientProductUniformName("uAmbientProduct");
    lightProgram.setShininessUniformName("uShininess");

    var material = new Material(lightProgram);
    //material.diffuseColor = [1,0,0,1];

    loadObjMesh("https://zumrakavafoglu.github.io/files/bca611-cg/models/smoothSphere.obj",function(mesh){
        window.sphere = new SceneObject(mesh, material); 
       // window.sphere.localPosition = [2,0,0]

    });*/

   /* var perFragmentLightProgram = new Program('directionalLight2-vs', 'directionalLight2-fs');

    perFragmentLightProgram.setVertexPositionAttributeName("aVertexPosition");
    perFragmentLightProgram.setVertexNormalAttributeName("aVertexNormal");

    perFragmentLightProgram.setDiffuseProductUniformName("uDiffuseProduct");
    perFragmentLightProgram.setSpecularProductUniformName("uSpecularProduct");
    perFragmentLightProgram.setAmbientProductUniformName("uAmbientProduct");
    perFragmentLightProgram.setShininessUniformName("uShininess");

    var material2 = new Material(perFragmentLightProgram);
   // material2.diffuseColor = [1,0,0,1];


    loadObjMesh("https://zumrakavafoglu.github.io/files/bca611-cg/models/smoothSphere.obj",function(mesh2){
        window.sphere2 = new SceneObject(mesh2, material2); 
       // window.sphere2.localPosition = [-2,0,0]
    });*/
	
	new Light(LightType.Point);
    
    var perFragmentLightProgramWithTexture = new Program('directionalLightWithTexture-vs', 'directionalLightWithTexture-fs');

    perFragmentLightProgramWithTexture.setVertexPositionAttributeName("aVertexPosition");
    perFragmentLightProgramWithTexture.setVertexNormalAttributeName("aVertexNormal");
    perFragmentLightProgramWithTexture.setTextureCoordinateAttributeName("aTextureCoord");

    perFragmentLightProgramWithTexture.setDiffuseProductUniformName("uDiffuseProduct");
    perFragmentLightProgramWithTexture.setSpecularProductUniformName("uSpecularProduct");
    perFragmentLightProgramWithTexture.setAmbientProductUniformName("uAmbientProduct");
    perFragmentLightProgramWithTexture.setShininessUniformName("uShininess");

    var woodTexture = new Texture('https://tekinertekin.github.io/wood.jpg');

    var material1 = new Material(perFragmentLightProgramWithTexture);
    material1.setTexture(woodTexture);
	
	var pinkTexture = new Texture('https://tekinertekin.github.io/pink.jpg');

    var material2 = new Material(perFragmentLightProgramWithTexture);
    material2.setTexture(pinkTexture);
	
	var redTexture = new Texture('https://tekinertekin.github.io/red.jpg');

    var material3 = new Material(perFragmentLightProgramWithTexture);
    material3.setTexture(redTexture);
	
	var blackTexture = new Texture('https://tekinertekin.github.io/black.jpg');

    var material4 = new Material(perFragmentLightProgramWithTexture);
    material4.setTexture(blackTexture);
	
	var adamTexture = new Texture('https://tekinertekin.github.io/adam.png');

    var material5 = new Material(perFragmentLightProgramWithTexture);
    material5.setTexture(adamTexture);

	
	loadObjMesh("https://tekinertekin.github.io/vazo.obj",function(mesh){
        window.bunny = new SceneObject(mesh, material2);
		window.bunny.localPosition = [-5,-1,10];
		window.bunny.scale = [0.4,0.4,0.4];
       // window.sphere2.localPosition = [-2,0,0]
    });
	
	loadObjMesh("https://tekinertekin.github.io/masa.obj",function(mesh)
	{
        window.masa = new SceneObject(mesh, material1); 
        window.masa.localPosition = [-6,-5,10];
		window.masa.scale = [1,1,1.5];
    });
	
    
	loadObjMesh("https://tekinertekin.github.io/sandalye.obj",function(mesh)
	{
        window.sandalye = new SceneObject(mesh, material1);
		window.sandalye.localPosition = [-3,-3,9];
    });
	
	loadObjMesh("https://tekinertekin.github.io/sandalye.obj",function(mesh)
	{
        window.sandalye1 = new SceneObject(mesh, material1);
		window.sandalye1.localPosition = [-8,-3,9];
		window.sandalye1.localEulerAngles = [0,180,0];
		
		//window.sandalye.scale = [,0.8,0.8];
    });
	
	loadObjMesh("https://tekinertekin.github.io/zemin.obj",function(mesh)
	{
        window.zemin = new SceneObject(mesh, material4);
		window.zemin.localPosition = [0,-5,10];
		window.zemin.scale = [3,3,3];
		
		//window.sandalye.scale = [,0.8,0.8];
    });
	
	loadObjMesh("https://tekinertekin.github.io/kanepe.obj",function(mesh)
	{
        window.kanepe = new SceneObject(mesh, material3);
		window.kanepe.localPosition = [6,-3,10];
		window.kanepe.localEulerAngles = [0,180,0];
		
		//window.sandalye.scale = [,0.8,0.8];
    });
	
	loadObjMesh("https://tekinertekin.github.io/masa.obj",function(mesh)
	{
        window.sehpa = new SceneObject(mesh, material1); 
        window.sehpa.localPosition = [0,-5,17];
		window.sehpa.scale = [1,0.5,0.5];

    });
	
	loadObjMesh("https://tekinertekin.github.io/adam.obj",function(mesh)
	{
        window.adam = new SceneObject(mesh, material5); 
        window.adam.localPosition = [0,-3,8];
		window.adam.localEulerAngles = [0,90,0];
    });
	
	loadObjMesh("https://tekinertekin.github.io/kol.obj",function(mesh)
	{
        window.kol = new SceneObject(mesh, material5); 
        window.kol.localPosition = [0,3.3,-0.5];
		window.kol.localEulerAngles = [270,180,0];
		window.kol.parent = window.adam;
    });
	
	loadObjMesh("https://tekinertekin.github.io/vazo.obj",function(mesh){
        window.fener = new SceneObject(mesh, material2);
		window.fener.localPosition = [0,2,-3.2];
		window.fener.scale = [0.1,0.1,0.1];
		window.fener.parent = window.kol;
       // window.sphere2.localPosition = [-2,0,0]
    });

    

    var slider1 = createSlider("Pos X : ", 0, -7, 7, function(){

        window.adam.localPosition[0] = this.value;
    });

    var dirXSlider = createSlider("Pos Z : ", 0, -7, 7, function(){
        window.adam.localPosition[2] = parseInt(this.value) + 8;
    });

    var dirYSlider = createSlider("Rotate X : ", 0, -45, 45, function(){
        window.kol.localEulerAngles[2] = this.value;

    });

    var dirZSlider = createSlider("Rotate Y : ", 0, -45, 45, function(){
        window.kol.localEulerAngles[0] =  parseInt(this.value) + 270;

    });

	var slider2 = createSlider("Light X : ", 0, -10, 10, function(){

        window.light.position[0] = this.value;
    });
	var slider3 = createSlider("Light Y : ", 0, -10, 10, function(){

        window.light.position[1] = this.value;
    });
	var slider4 = createSlider("Light Z : ", 0, -10, 10, function(){

        window.light.position[2] = this.value;
    });
}

window.update = function(){
    window.mainCamera.update();

    drawSceneObjects();
}
