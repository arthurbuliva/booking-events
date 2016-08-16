
// start document.ready
jQuery(document).ready(function() {

    // 01. 
    jQuery(function() {
        jQuery(".menu-item-toggle").click(function(){
            jQuery("body").toggleClass("modal");
            jQuery(".page-header").toggleClass("modal");
            jQuery(".page-header-inner").toggleClass("modal");
            jQuery(".page-header-holder").toggleClass("modal");
            return false;
        });
    });


    // 02. 
    jQuery(function() {

    });


    // 03. 
    jQuery(function() {

    });


    // chrome
    if (bowser.chrome) {
        document.getElementsByTagName('body')[0].className+=' chrome'
    }

    // safari
    else if (bowser.safari) {
        document.getElementsByTagName('body')[0].className+=' safari'
    }

    // firefox
    else if (bowser.firefox) {
        document.getElementsByTagName('body')[0].className+=' firefox'
    }

    // opera
    else if (bowser.opera) {
        document.getElementsByTagName('body')[0].className+=' opera'
    }

    // msedge
    else if (bowser.msedge) {
        document.getElementsByTagName('body')[0].className+=' msedge'
    }

    // msie
    else if (bowser.msie) {
        document.getElementsByTagName('body')[0].className+=' msie'
    }

    // unknown
    else {
        document.getElementsByTagName('body')[0].className+=' unknown'
    }

});
// end document.ready

