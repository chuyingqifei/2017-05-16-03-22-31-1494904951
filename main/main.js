module.exports = function main(input) {
    var lcdDatabase1 = new Array(10);
	lcdDatabase1[0] = '._.';
	lcdDatabase1[1] = '...';
	lcdDatabase1[2] = '._.';
	lcdDatabase1[3] = '._.';
	lcdDatabase1[4] = '...';
	lcdDatabase1[5] = '._.';
	lcdDatabase1[6] = '._.';
	lcdDatabase1[7] = '._.';
	lcdDatabase1[8] = '._.';
	lcdDatabase1[9] = '._.';
	var lcdDatabase2 = new Array(10);
	lcdDatabase2[0] = '|.|';
	lcdDatabase2[1] = '..|';
	lcdDatabase2[2] = '._|';
	lcdDatabase2[3] = '._|';
	lcdDatabase2[4] = '|_|';
	lcdDatabase2[5] = '|_.';
	lcdDatabase2[6] = '|_.';
	lcdDatabase2[7] = '..|';
	lcdDatabase2[8] = '|_|';
	lcdDatabase2[9] = '|_|';
	var lcdDatabase3 = new Array(10);
	lcdDatabase3[0] = '|_|';
	lcdDatabase3[1] = '..|';
	lcdDatabase3[2] = '|_.';
	lcdDatabase3[3] = '._|';
	lcdDatabase3[4] = '..|';
	lcdDatabase3[5] = '._|';
	lcdDatabase3[6] = '|_|';
	lcdDatabase3[7] = '..|';
	lcdDatabase3[8] = '|_|';
	lcdDatabase3[9] = '..|';
	var lcdDataBase = new Array(3);
	lcdDataBase[0] = lcdDatabase1;
	lcdDataBase[1] = lcdDatabase2;
	lcdDataBase[2] = lcdDatabase3;
	
	var len = input.length;
	var result = "";
	for(var i = 0;i<3;i++){
		for(var j = 0;j<len;j++){
			if(j == len -1 ){
				result += (lcdDataBase[i][parseInt(input.charAt(j))] +"\n");
			}
			else{
				result += (lcdDataBase[i][parseInt(input.charAt(j))] +" ");	
			}
			
		}
	}
	
    return result;
};

