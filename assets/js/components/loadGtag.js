const loadGtag = ($) => {
    let scriptGtag = $(`   
    <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215780488-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'UA-215780488-1');
        </script>
    `) 
    setTimeout(() =>{ 
        $('head').prepend(scriptGtag); 
    },2000)
}

export default loadGtag