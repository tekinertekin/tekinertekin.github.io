function Light(lightType = LightType.Directional){
    
    this.type = lightType;

    if(this.type == LightType.Directional || this.type == LightType.Spot){
        this.direction = [1, 0, 0];
    }
    else if(this.type == LightType.Point || this.type == LightType.Spot){
        this.position = [0, 10, -6.5];
    }

    window.light = this;

    this.diffuseColor = [1.0 , 1.0 , 1.0 , 1.0];

    this.specularColor = [1.0 , 1.0 , 1.0 , 1.0];
    
    this.ambientColor = [0.2 , 0.2 , 0.2 , 1.0];

    this.sendLightTransformInfo = function(camera, program){
        if(this.type == LightType.Directional || this.type == LightType.Spot){
            var direction4 = [-this.direction[0], -this.direction[1], -this.direction[2], 0];
            mat4.multiply(direction4, camera.viewMatrix, direction4);
            var direction3 = [direction4[0],direction4[1],direction4[2]];
            program.setUniform3fv("uInverseLightDirection", direction3);
        }
        else if(this.type == LightType.Point || this.type == LightType.Spot)
		{
			var fenerposition = window.fener.calculateModelMatrix();
			//console.log(fenerposition);
			//var direction4 = [fenerposition[12], -fenerposition[13], fenerposition[14], 1];
            //direction4 = mat4.multiply(direction4, camera.viewMatrix, direction4);
			fenerposition = mat4.multiply(fenerposition, camera.viewMatrix, fenerposition);
			fenerposition = mat4.multiply(fenerposition, window.mainCamera.projectionMatrix, fenerposition);
            var direction3 = [fenerposition[12],fenerposition[13],fenerposition[14]];
            program.setUniform3fv("uLightPosition", direction3);
			
			
			//gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
			//var fenerposition = window.fener.calculateModelMatrix();
			//console.log(direction4);
			//var direction4 = [fenerposition[12], fenerposition[13], fenerposition[14], 0];
			//console.log(direction4);
			//var direction4 = [-this.position[0], -this.position[1], -this.position[2], 1];
			//console.log(direction4);
			//direction4 = mat4.multiply(direction4, camera.viewMatrix, direction4);
			
			//mat4.multiply(direction4, window.mainCamera.projectionMatrix, direction4);
			//console.log(direction4);
            //mat4.multiply(direction4, camera.viewMatrix, direction4);
			//
			
            //var direction3 = [direction4[0],direction4[1],-direction4[2]];
			//program.setUniform3fv("uLightPosition", direction3);
        }
    }
}

window.LightType = {
    Directional : 0,
    Point : 1,
    Spot : 2
};