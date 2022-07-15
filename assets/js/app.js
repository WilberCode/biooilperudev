 
 
var $ = jQuery.noConflict(); 
import menuMobile from  './components/menuMobile'  
import insertIcons from  './components/insertIcons'  
import loadGtag from './components/loadGtag';
jQuery(function ($) {  
    $(document).ready(function () {  
        menuMobile($)   // Menu Mobile: Show menu and hidde    
        insertIcons($)  // Insert icons svg  
        loadGtag($)
    });   
  
});
 