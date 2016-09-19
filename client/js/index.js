
/* an object for processing the form located in index.html   */
var IndexHTMLCode = {
    radioId : 'otherCelebrationType',
    inputTagId : 'otherDescription',
    valid : function(){
        var otherTag = document.getElementById(this.radioId);
        var inputTag = document.getElementById(this.inputTagId);
        if(otherTag == null || inputTag == null) throw new Error('unable to access dom elements in IndexHTMLCode.valid() function');
        
        var otherChecked = otherTag.checked;
        var inputTagHasData = inputTag.innerHTML.length > 0;
        
        return !otherChecked || inputTagHasData; //either other is not checked or the user has put data into the input
    }
};

