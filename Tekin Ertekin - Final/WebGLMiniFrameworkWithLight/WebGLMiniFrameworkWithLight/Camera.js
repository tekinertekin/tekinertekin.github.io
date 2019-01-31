window.globalUp = [0, 1, 0];

function Camera(renderTexture=null){
	
	if(renderTexture){
        if(!window.renderTextureCameras)
            window.renderTextureCameras = [];
        
        window.renderTextureCameras.push(this);
        this.renderTexture = renderTexture;
        this.aspect = this.renderTexture.width / this.renderTexture.height;
    }else{
        window.mainCamera = this;
        this.aspect = canvas.width / canvas.height;
    }

    this.position = [0, 0, 0];
    this.lookAt = [0, 0, 0];

    this.near = 0.1;
    this.far = 100.0;
    this.fieldOfViewY = 45;

    this.viewMatrix = mat4.create(),
    this.projectionMatrix = mat4.create();
	
	this.ignoredSceneObjects = [];
    
    this.update = function(){
        this.clearScene();
        this.viewMatrix = this.calculateViewMatrix(this.lookAt, this.position, window.globalUp); 
		
		drawSceneObjects(this);
    }
	
	this.ignoreSceneObject = function(sceneObject){
        this.ignoredSceneObjects.push(sceneObject);
    }

    this.clearScene = function(){
		if(this.renderTexture){
            //for rendering to renderTexture's frameBuffer
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.renderTexture.frameBuffer);
            gl.viewport(0, 0, this.renderTexture.width, this.renderTexture.height);
            //used for checking if source and target textures are different
            window.Camera.activeRenderTexture = this.renderTexture;
        }
        else{
            //for directly rendering to canvas
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, canvas.width, canvas.height);
            window.Camera.activeRenderTexture = null;
        }
        gl.clearColor(0.0, 0.0, 0.0, 1.0); 	
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);

        gl.viewport(0, 0, canvas.width, canvas.height);
        mat4.perspective(this.projectionMatrix, this.fieldOfViewY, this.aspect, this.near, this.far);
    }

    this.calculateViewMatrix = function(at, eye, up){
        n = math.subtract(eye, at);
        n = math.divide(n, math.norm(n));
        u = math.cross(up, n);
        u = math.divide(u, math.norm(u));
        v = math.cross(n, u);
    
        eyeDotU = -math.dot(eye, u);
        eyeDotV = -math.dot(eye, v);
        eyeDotN = -math.dot(eye, n);
    
        u.push(eyeDotU);
        v.push(eyeDotV);
        n.push(eyeDotN);
    
        var viewMatrix = mat4.fromValues(u[0], u[1], u[2], u[3], v[0], v[1], v[2], v[3], n[0], n[1], n[2], n[3], 0, 0, 0, 1);
        var viewMatrix = mat4.transpose(viewMatrix, viewMatrix);

        return viewMatrix;
    }
}