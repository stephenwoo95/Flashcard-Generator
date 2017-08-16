var ClozeCard = function(text,cloze){}
	ClozeCard.prototype.cloze = cloze;
	ClozeCard.prototype.fullText = text;
	ClozeCard.prototype.partial = function() {
		var start = text.indexOf(cloze);
		if(start == -1){
			return console.log('Does not exist!');
		}
		var mid = text.splice(start,cloze.length);
		return mid.splice(start,0,' ( ... ) ');
	};

module.exports = ClozeCard;