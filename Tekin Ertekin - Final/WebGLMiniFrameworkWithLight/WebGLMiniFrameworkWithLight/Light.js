function Light(lightType = LightType.Directional){
    
    this.type = lightType;

    if(this.type == LightType.Directional || this.type == LightType.Spot){
        this.direction = [0, -1, 0];
    }
    else if(this.type == LightType.Point || this.type == LightType.Spot){
	this.direction = [0, -1, 0];
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
			var pos = [0,0,0,1];
			var modelMatrix = window.fener.calculateModelMatrix();
			var mvMatrix = mat4.create();
            mvMatrix = mat4.multiply(mvMatrix, camera.viewMatrix, modelMatrix);
            pos = mat4.multiply(pos,mvMatrix,pos);
			var direction3 = [pos[0],pos[1],pos[2]];
            program.setUniform3fv("uLightPosition", direction3);
			program.setUniform3fv("uLightDir", this.direction);
        }
    }
}

window.LightType = {
    Directional : 0,
    Point : 1,
    Spot : 2
};