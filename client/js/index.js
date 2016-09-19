
/* an object for processing the form located in index.html   */
var IndexHTMLCode = {
    radioId : 'otherCelebrationType',
    inputTagId : 'otherDescription',
    errorTagId : 'userWarning',
    valid : function(){
        var otherTag    = document.getElementById(this.radioId);
        var inputTag    = document.getElementById(this.inputTagId);
        var warningTag  = document.getElementById(this.errorTagId);
        if(otherTag == null || inputTag == null || warningTag == null) throw new Error('unable to access dom elements in IndexHTMLCode.valid() function');
        
        var otherChecked = otherTag.checked;
        var inputTagHasData = inputTag.value.length > 0;
        
        var isValid = !otherChecked || inputTagHasData;
        
        if(!isValid){
            alert('warning: you have checked "other" in "Celebration type" but have not included a description');
            warningTag.style.display = 'block';
        }else warningTag.style.display = 'none';
        
        return isValid; //either other is not checked or the user has put data into the input
    }
};

