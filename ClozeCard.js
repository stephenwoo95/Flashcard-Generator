var ClozeCard = function(text,cloze){
	this.cloze = cloze;
	this.fullText = text;
	this.makePartial = function() {
		var start = text.indexOf(cloze);
		if(start == -1){
			console.log('Cloze Does not exist!');
		}
		var newStr = text.split('');
		newStr.splice(start,cloze.length,' ','(',' ','.','.','.',' ',')',' ');
		return newStr.join('');
	};
	this.partial = this.makePartial();
}

module.exports = ClozeCard;