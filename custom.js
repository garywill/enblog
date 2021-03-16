//console.log("hugo blog Clarity theme custom js");

var onrd = new Array(); //on document ready

onrd.push(function() { // TODO jquery to js
    function onWindowResize() {
        var onwr = new Array();
        onwr.push(change_sidebar_status);
        for (var i = 0; i < onwr.length; ++i) {
            try {
                onwr[i]();
            } catch (err) {
                console.error(err);
            }
        }
    }
    onWindowResize();
    $(window).resize(onWindowResize);
    $(document).scroll(onWindowResize);
});

function change_sidebar_status() { // TODO jquery to js
    if ( $(".sidebar").offset().left >= ( $(".post_content").offset().left + $(".post_content").width() ) // desktop view 
        &&
        window.pageYOffset > $(".post_content").offset().top) {
        $(".sidebar").addClass("sideBar-float");
        $(".sidebar").addClass("shadowbox");
        $(".sidebar").height($(window).height() - 20);
        $(".sidebar").css({
            left: $(".post_content").width() + $(".post_content").offset().left
        });
    } else {
        $(".sidebar").removeClass("sideBar-float");
        $(".sidebar").removeClass("shadowbox");
        $(".sidebar").height("");
        $(".sidebar").css({
            left: ''
        });
    }
}

onrd.push(function(){
    setTimeout(function(){
        var script_tag = document.createElement("script");
        script_tag.src = "https://s4.cnzz.com/z_stat.php?id=1279759554&web_id=1279759554" ; 
        document.body.appendChild(script_tag);
    },1000);
}); 

onrd.push(function(){
    setTimeout(function(){
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
            var u="https://hellomtm.versioncheck.workers.dev/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '5']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
    },1000);
}); 

/*
onrd.push(function(){
    const article = document.getElementsByClassName("post_content")[0];
    if (article) {
        var donate_section = document.createElement("p");
        donate_section.innerHTML = `
        <div style="text-align: center; font-size: 80%;">
        All articles are original (except for those specially claimed) and copyrighted. Copying without permission is forbidden.
        </div>
        <h2>Buy me a coffee</h2>
        <p>Your donation will be an impetus for me!</p>
        <p>
        <a href="https://github.com/garywill/receiving/blob/master/receiving_methods.md" target="_blank"><img src="https://raw.githubusercontent.com/garywill/receiving/master/receivingcode.png"></img></a>
        </p>
        `;
        article.appendChild(donate_section);
    }
}); 
*/

window.onload = function(){
    //console.log("onload");
    for (var i=0; i<onrd.length; ++i)
    {
        //console.log(onrd[i]);
        //setTimeout( onrd[i] ,10+2*i);
        try{
            onrd[i]();
        }catch(err){
            console.error(err);
        }
    }
};
