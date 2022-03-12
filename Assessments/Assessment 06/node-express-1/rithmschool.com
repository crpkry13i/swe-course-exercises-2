<!DOCTYPE html>
<html lang="en">
<head>

  <meta property="og:image" content="https://www.rithmschool.com/assets/logos/rithm_logo-f188d2545d88917c033e407f4f87b02e2a3f5cf5dfb60e626787785fa9c13774.svg"/>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Spend 16 weeks learning JavaScript, Python, and React in a class capped at 20 students. Learn quickly with experienced instructors. No tuition until you&#39;re hired">
  <meta name="author" content="Rithm School">


  <title>Rithm School</title>



  <link rel="stylesheet" media="all" href="/assets/application-5513cce246a238f41feaf57cd039a69018992d3dc114a2508d07c0076f30ce98.css" />

  <!-- Add a stylesheet tag for the name of the action -->
  <link rel="stylesheet" media="screen" href="/assets/main-69beda904921e3c333ed21f2aed0c331bf01b1bd1cf64ee9df327720a9ef7e99.css" />
  <link rel="stylesheet" media="screen" href="/assets/home-52765bcdba33dba1c2f2d9d18fd55feeef7a0403472dd2966f72989232008e7f.css" />


  <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-b8a8b6e18aa3c4ab274a51634adf4cc0603d04a13cfac11d5de1bcfc42cc82e7.ico" />
  <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="Se93dgchwI44mnetT2IA9mf+tnNWiW0tFSynIoJTNZ1s7eBIGBlFQEBAsBQnnrNUENQ4ik8SYVff46E3rRuX1w==" />

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KL8SB8D');</script>
<!-- End Google Tag Manager -->

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '214663358944902');
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1"
src="https://www.facebook.com/tr?id=214663358944902&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

<!-- Fullstory script -->

<style>.async-hide { opacity: 0 !important} </style>
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-T8LFJG2':true});</script>



  <script src="/assets/application-bee8d58e2516fef29c4b34937c425296d8a8852bdad64938ff9e5b98eca1eedb.js"></script>
  <script src="/assets/modernizr-9f5485cb25dd5942eda5959902194527f72789d762cf9bc1ffdf2bbf98b89f91.js"></script>

<!-- start Mixpanel --><script type="text/javascript">(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("5080e5eebdaa906ad44bebec9a917acb");</script><!-- end Mixpanel -->



<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-B4LH2W96TB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B4LH2W96TB');
</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-81714915-1', 'auto');
  ga('require', 'GTM-T8LFJG2');

  ga('send', 'pageview');
</script>

</head>
<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KL8SB8D"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


  <a id="banner-alert" target="_blank" href="/private-prep">
<div data-event-name="click_cta" data-label="location" data-event-label="banner" class="container">
    <p type="button" class="close" >&times;</p>
    <span class="banner-text">Looking to prepare for our full time course? Check out our free two week Private Prep course! <u>Click here to apply.</u></span>
  </div>
</a>

    <nav data-event-name="click_cta" data-label="location" data-event-label="navbar" id="mainNav" class="navbar navbar-default navbar-custom ">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span><i class="fa fa-2x fa-bars"></i>
            </button>

            <div class="navbar-button">
              <a class="navbar-brand" data-event-name="click_cta" data-label="page" data-event-label="homepage" href="/">
                  <img height="45" alt="rithm school company logo" title="Rithm School Logo" src="/assets/logos/rithm_logo-f188d2545d88917c033e407f4f87b02e2a3f5cf5dfb60e626787785fa9c13774.svg" />
</a>            </div>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="javascript:void(0)">
                  Learn Full Time&nbsp;<span class="caret"></span>
</a>                <ul class="dropdown-menu dropdown-menu-left">
                    <li data-event-name="click_cta" data-label="page" data-event-label="covid"><a id="#covid" href="/covid">Coronavirus Response</a>
                    <li data-event-name="click_cta" data-label="page" data-event-label="program"><a id="#details" href="/program">Program Details</a>
                    <li data-event-name="click_cta" data-label="page" data-event-label="admissions"><a id="#admissions" href="/admissions">Admissions and Course Dates</a></li>
                    <li data-event-name="click_cta" data-label="page" data-event-label="program"><a id="#tuition" href="/tuition">Tuition</a>
                    <li data-event-name="click_cta" data-label="page" data-event-label="curriculum"><a id="#curriculum" href="/curriculum">Curriculum</a></li>
                    <li data-event-name="click_cta" data-label="page" data-event-label="company-projects"><a id="#company_projects" href="/company-projects">Company Projects</a></li>
                    <li data-event-name="click_cta" data-label="page" data-event-label="outcomes"><a id="#outcomes" href="/outcomes">Outcomes + Job Support</a></li>
                    <li data-event-name="click_cta" data-label="page" data-event-label="faq"><a id="#faq" href="/faq">FAQs</a></li>
                    <li data-event-name="click_cta" data-label="page" data-event-label="apply"><a id="#apply" href="/apply">Apply Now</a></li>
                  </ul>
              </li>
              <li class="dropdown">
                <a href="javascript:void(0)">
                  Workshops + Events&nbsp;<span class="caret"></span>
</a>                <ul class="dropdown-menu dropdown-menu-left">
                      <li><a id="#private_prep" href="/private-prep">Private Prep</a>
                    <li><a id="#workshops" href="/events">All Events</a></li>
                  </ul>
              </li>
                <li data-event-name="free-online-courses">
                  <a id="#online-courses" href="/courses">Free Online Courses</a>
                </li>
                  <li class="dropdown">
                    <a href="javascript:void(0)">
                      For Companies&nbsp;<span class="caret"></span>
</a>                  <ul class="dropdown-menu dropdown-menu-left">
                    <li>
                      <a id="#curriculum-licensing" href="/curriculum-licensing">Curriculum Licensing</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a id="#team" href="/team">Our Team</a>
                </li>
                <li>
                  <a id="#blog" href="/blog">Blog</a>
                </li>
                <li>
                    <a class="apply-now btn" id="apply" data-event-name="apply_button_clicked" href="/apply">Apply Now</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
</nav>


<div class="container">
  
  
<header id="home-image">
    <div class="intro-text full-width home">
        <video autoplay="autoplay" muted="muted" loop="loop" poster="/assets/rithm_home-f63798b4c0f0564ce55c4710b1b58e1d41eb5c0d86e992c851f89146905d0c4e.jpg"><source src="/assets/rithm_home-d8ae6c07f4173a176240510f3a1f536868a8e35b90906d400fddf595cdcafc83.mp4" /><source src="/assets/rithm_home-1e418a0a323d76cb4b982c10e7264f4467db80fcc0b01380a74225472b1332e4.webm" /></video>
        <div class="header-text">
          <h1 class="col-xs-12 col-md-12 heading">{&nbsp;Become a Software Engineer. Online learning, personalized.&nbsp;}</h1>
          <h4 class="text-muted">Next courses start May 23rd and July 11th in person and online.</h4>
        </div>
    </div>
</header>

<!-- Section :: Overview with Icons -->
<section id="overview">
  <div class="row" id="icon-row">
    <div class="col-md-4 text-center">
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg class="home-logo" width:225, height:100 viewBox="0 0 67 74" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
        <title>Apple</title>
        <desc>An image of an apple.</desc>
        <defs></defs>
        <g id="apple-svg" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop:-Homepage,-Adding-Icons" transform="translate(-110.000000, -319.000000)" stroke="#F94848">
                <g id="apple" transform="translate(111.000000, 320.000000)">
                    <path class="path" d="M34.7962384,17.62365 C31.9029826,11.6379 32.1992616,4.6269 38.2321686,1.75515 C47.7108314,-2.7561 51.5805988,2.79765 64.95775,3.2679 C56.954436,13.91415 58.8968779,20.38515 49.4182151,24.89715 C43.386064,27.76815 37.6894942,23.6094 34.7962384,17.62365 L34.7962384,17.62365 Z" id="Stroke-1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path class="path" d="M64.4306453,3.46995 L30.6729709,19.53795" id="Stroke-3" stroke-width="1.5" stroke-linecap="round"></path>
                    <path class="path" d="M50.7098256,24.23025 L39.5948256,15.7845" id="Stroke-5" stroke-width="1.5" stroke-linecap="round"></path>
                    <path class="path" d="M54.780564,20.2968 L45.2799826,13.07805" id="Stroke-7" stroke-width="1.5" stroke-linecap="round"></path>
                    <path class="path" d="M58.1463547,15.52605 L51.21025,10.2558" id="Stroke-9" stroke-width="1.5" stroke-linecap="round"></path>
                    <path class="path" d="M39.4867442,1.15815 L39.1670349,15.04665" id="Stroke-11" stroke-width="1.5" stroke-linecap="round"></path>
                    <path class="path" d="M45.1261744,0.469875 L44.8533256,12.340125" id="Stroke-13" stroke-width="1.5" stroke-linecap="round"></path>
                    <path class="path" d="M50.9823721,0.85125 L50.7828372,9.51825" id="Stroke-15" stroke-width="1.5" stroke-linecap="round"></path>
                    <path class="path" d="M22.6797849,8.1024 C27.7815291,11.3559 30.4382151,15.7239 30.4382151,25.82715" id="Stroke-17" stroke-width="1.5"></path>
                    <path class="path" d="M51.2115349,23.734125 C56.6881628,26.231625 61.0182209,31.640625 61.0182209,38.573625 C61.0182209,48.225375 50.0264186,71.890125 38.8350814,71.890125 C35.0378721,71.890125 30.6292093,69.643125 30.6292093,69.643125 L30.4326977,69.643125 C30.4326977,69.643125 26.0240349,71.890125 22.2268256,71.890125 C11.0354884,71.890125 0.0436860465,48.225375 0.0436860465,38.573625 C0.0436860465,28.921125 8.437,22.222875 16.6315349,22.222875 C23.3597907,22.222875 30.4326977,25.220625 30.4326977,25.220625 L30.6292093,25.220625 C30.6292093,25.220625 34.1467674,23.729625 38.5803721,22.850625" id="Stroke-19" stroke-width="1.58625"></path>
                </g>
            </g>
        </g>
    </svg>
      <h4 class="service-heading">Small Class Size</h4>
      <p class="text-muted">We cap our classes at 18 students. All of our instructors have years of teaching and development experience.</p>
      <a href="/program">Learn more about our program</a>
    </div>
    <div class="col-md-4 text-center">
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg class="home-logo" enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Tools</title>
        <desc>An image of a hammer and a wrench.</desc>
        <defs></defs>
        <g>
            <path class="path" d="   M110.6,206.2c1.3,0.1,2.6,0.4,3.8,1c1.8,1,4,0.7,5.5-0.8l49.1-49.1c2.2-2.2,2.2-5.8,0-8c-2.7-2.7-2.7-7.1,0-9.8l13.4-13.4   c2.7-2.7,7.1-2.7,9.8,0l4,4l32-32c7.7-7.7,7.7-20.1,0-27.7l-42.6-42.6c-7.7-7.7-20.1-7.7-27.7,0l-32,32l3.3,3.3   c3.5,3.5,3.5,9.3,0,12.8l-10.3,10.3c-3.5,3.5-9.3,3.5-12.8,0c-1.8-1.8-4.7-1.8-6.5,0l-49.8,49.8c-1.8,1.8-1.8,4.8,0,6.6   c1.8,1.8,2.1,4.7,0.6,6.9C-13.9,244.5,31.7,291,31.7,291c5.7-41.6,40.8-80.2,75.2-84.8C108,206.1,109.4,206.1,110.6,206.2z" fill="none" stroke="#F94848" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10"/>
            <path class="path" d="   M444.1,412.7L186.2,174.3l-46.8,46.8l238.3,257.9c13.1,14,35.2,14.4,48.8,0.8l18.4-18.4C458.5,447.9,458.1,425.8,444.1,412.7z" fill="none" stroke="#F94848" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10"/>
            <path class="path" d="   M100.6,427.5c-14.3,14.3-14.3,37.4,0,51.7l0,0c14.3,14.3,37.4,14.3,51.7,0l102.6-102.6l-49.7-53.7L100.6,427.5z" fill="none" stroke="#F94848" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="10"/>
            <path class="path" d="   M493.4,151.4l-55.9,55.9c-4.3,4.3-10.8,5.7-16.5,3.6l-31.3-11.7c-4.2-1.6-7.6-4.9-9.1-9.1l-11.7-31.3c-2.1-5.7-0.7-12.2,3.6-16.5   l55.9-55.9c-29.4-7.2-61.7,0.7-84.5,23.8c-25.1,25.4-31.7,62.4-19.9,93.9l-36.1,36.1l53.7,49.7l34-34c31.7,12,68.9,5.2,94.4-20.3   C492.8,212.7,500.6,180.6,493.4,151.4z" fill="none" stroke="#F94848" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke="#F94848" stroke-width="10"/>
        </g>
    </svg>
      <h4 class="service-heading">Real World Projects</h4>
      <p class="text-muted">Graduate with a diverse portfolio. Along with your own projects, you'll work with companies to gain valuable real-world experience.</p>
      <a href="/company-projects">Learn more about our projects</a>
    </div>
    <div class="col-md-4 text-center">
      <?xml version="1.0" ?><svg class="home-logo" data-name="Layer 1" id="Layer_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><title/>
  <g fill="none" stroke="#F94848" stroke-width="1.8" stroke-linecap="round" >
    <circle cx="50" cy="50" r="48"/>
    <line x1="50" y1="12" x2="50" y2="88"/>
    <path d="M50 50 A 15 15 0 1 1 65 35 M 50 50 A 15 15 0 1 1 35 65">
  </g>
</svg>
      <h4 class="service-heading">We Invest in You</h4>
      <p class="text-muted">Don't pay us until you've got a job. With our deferred tuition model, you don't pay us until you're making at least $60,000 as an engineer.</p>
      <a href="/tuition">How to pay for Rithm</a>
    </div>
  </div>
</section>

<section id="outcomes">
  <div class="service-heading">
    <h2 class="outcomes-heading-text">&nbsp;
    Here's what we believe in: &nbsp;</h2>
  </div>
  <div class="row text-white">
    <div class="col-md-4 text-center">
      <?xml version="1.0" encoding="UTF-8"?>
<svg width="68px" height="98px" viewBox="0 0 68 98" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
    <title>Group 5</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <polygon id="path-1" points="33.9797815 98 0 98 0 0.5 33.9797815 0.5 67.9595631 0.5 67.9595631 98 33.9797815 98"></polygon>
    </defs>
    <g id="March-2017-Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop:-The-Program" transform="translate(-234.000000, -979.000000)">
            <g id="Group-5" transform="translate(193.000000, 972.000000)">
                <rect id="Rectangle-2-Copy-2" x="0" y="0" width="140" height="110"></rect>
                <g id="backpack-icon" transform="translate(41.000000, 6.000000)">
                    <g id="Group-3" transform="translate(0.000000, 0.500000)">
                        <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="Clip-2"></g>
                        <path d="M65.8843,77 L57.8553,77 L57.8553,51.625 L10.1053,51.625 L10.1053,77 L2.0743,77 L2.0743,42.692 C2.0743,32.614 7.3483,23.75 15.2753,18.697 C15.4233,18.646 15.5453,18.56 15.6493,18.457 C19.9783,15.792 25.0703,14.25 30.5173,14.25 L37.4433,14.25 C42.8893,14.25 47.9823,15.792 52.3113,18.458 C52.4133,18.559 52.5333,18.643 52.6783,18.693 C60.6083,23.746 65.8843,32.611 65.8843,42.692 L65.8843,77 Z M12.1053,60.102 L55.8553,60.102 L55.8553,53.625 L12.1053,53.625 L12.1053,60.102 Z M12.1053,62.102 L48.1413,62.102 L48.1413,68.5 C48.1413,69.053 48.5883,69.5 49.1413,69.5 C49.6943,69.5 50.1413,69.053 50.1413,68.5 L50.1413,62.102 L55.8553,62.102 L55.8553,85.714 L12.1053,85.714 L12.1053,62.102 Z M60.2353,96 L7.7253,96 C4.6103,96 2.0743,93.466 2.0743,90.351 L2.0743,79 L10.1053,79 L10.1053,87.714 L57.8553,87.714 L57.8553,79 L65.8843,79 L65.8843,90.351 C65.8843,93.466 63.3503,96 60.2353,96 L60.2353,96 Z M2.0053,7.856 C1.9903,7.808 2.0033,7.768 2.0183,7.744 C2.0313,7.719 2.0583,7.687 2.1073,7.675 L9.7763,5.731 C9.8553,5.713 9.9233,5.755 9.9463,5.824 L13.7503,17.301 C11.1073,19.052 8.7543,21.204 6.7743,23.67 L2.0053,7.856 Z M37.3553,12.25 L30.6053,12.25 L30.6053,8.791 C30.6053,7.527 31.6323,6.5 32.8963,6.5 L35.0643,6.5 C36.3273,6.5 37.3553,7.527 37.3553,8.791 L37.3553,12.25 Z M26.6053,8.791 C26.6053,5.322 29.4263,2.5 32.8953,2.5 L35.0643,2.5 C38.5323,2.5 41.3553,5.322 41.3553,8.791 L41.3553,12.51 C40.6943,12.425 40.0283,12.358 39.3553,12.316 L39.3553,8.791 C39.3553,6.425 37.4303,4.5 35.0643,4.5 L32.8963,4.5 C30.5303,4.5 28.6053,6.425 28.6053,8.791 L28.6053,12.316 C27.9323,12.358 27.2653,12.425 26.6053,12.51 L26.6053,8.791 Z M58.0133,5.824 C58.0363,5.754 58.1143,5.713 58.1843,5.731 L65.8523,7.675 C65.9023,7.688 65.9283,7.719 65.9423,7.744 C65.9623,7.779 65.9663,7.816 65.9543,7.855 L61.1843,23.67 C59.2053,21.204 56.8523,19.052 54.2093,17.301 L58.0133,5.824 Z M62.8603,25.039 L67.8683,8.434 C68.0373,7.876 67.9693,7.266 67.6833,6.759 C67.3973,6.252 66.9083,5.88 66.3443,5.737 L58.6763,3.792 C57.5903,3.515 56.4663,4.133 56.1143,5.195 L52.4583,16.227 C49.6673,14.637 46.6043,13.473 43.3553,12.831 L43.3553,8.791 C43.3553,4.219 39.6353,0.5 35.0643,0.5 L32.8953,0.5 C28.3233,0.5 24.6053,4.219 24.6053,8.791 L24.6053,12.831 C21.3553,13.473 18.2923,14.637 15.5013,16.227 L11.8443,5.195 C11.4933,4.134 10.3693,3.517 9.2833,3.792 L1.6143,5.737 C1.0513,5.88 0.5643,6.252 0.2773,6.758 C-0.0097,7.265 -0.0777,7.875 0.0903,8.433 L5.0993,25.039 C5.1563,25.228 5.2703,25.381 5.4103,25.501 C2.0483,30.397 0.0743,36.317 0.0743,42.692 L0.0743,90.351 C0.0743,94.568 3.5063,98 7.7253,98 L60.2353,98 C64.4523,98 67.8843,94.568 67.8843,90.351 L67.8843,42.692 C67.8843,36.317 65.9113,30.397 62.5483,25.501 C62.6883,25.381 62.8033,25.228 62.8603,25.039 L62.8603,25.039 Z" id="Fill-1" fill="black" mask="url(#mask-2)"></path>
                    </g>
                    <path d="M39.2056,36.313 L34.8616,40.657 C34.3766,41.142 33.5846,41.144 33.0976,40.657 L28.7536,36.313 C28.2676,35.827 28.2676,35.035 28.7536,34.548 L33.0976,30.205 C33.3406,29.961 33.6596,29.84 33.9786,29.84 C34.2996,29.84 34.6186,29.961 34.8616,30.205 L39.2056,34.548 C39.6916,35.035 39.6916,35.827 39.2056,36.313 L39.2056,36.313 Z M36.2756,28.791 C35.0096,27.522 32.9476,27.524 31.6836,28.791 L27.3396,33.134 C26.0726,34.4 26.0726,36.461 27.3396,37.727 L31.6836,42.071 C32.3156,42.704 33.1476,43.021 33.9796,43.021 C34.8106,43.021 35.6426,42.704 36.2756,42.071 L40.6196,37.727 C41.8866,36.461 41.8866,34.4 40.6196,33.134 L36.2756,28.791 Z" id="Fill-4" fill="black"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
      <h2 class="outcomes-stat">Extensive Job Support</h2>
      <p>Multiple weeks of our program are devoted to the job search and we have a dedicated Career Services Manager throughout and after the program.</p>
      <a class="outcomes-cta-link text-white" target="_blank" href="/outcomes">Learn about our Job Support</a>
    </div>
    <div class="col-md-4 text-center">
      <?xml version="1.0" ?><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><title/><path fill="none" stroke="black" stroke-width="1.8" d="
  M94.09,42.89
  L51.56,21.62
  a3.83,3.83,0,0,0-3.13,0
  L5.91,42.89
  a1.32,1.32,0,0,0,0,2.51
  l6.43,3.21

  V84.15
  a2.8,2.8,0,0,0-1.11,1.17
  L8.11,90.94
  A2.81,2.81,0,0,0,10.62,95
  h4.63
  a2.81,2.81,0,0,0,2.52-4.07
  L13.7,84.82
  a2.8,2.8,0,0,0-1.11-1.17

  M12.23,48.61
  L48.43,66.66
  a3.83,3.83,0,0,0,3.13,0
  L94.09,45.4
  a1.32,1.32,0,0,0,0-2.51

  M21.89,53.11
  V70.76
  c0,3.94,3,7.6,8.42,10.31,5.28,2.64,12.28,4.09,19.71,4.09
  s14.43-1.45,19.71-4.09
  c5.43-2.71,8.42-6.38,8.42-10.31
  V53.38
  l16-8
  a1.32,1.32,0,0,0,0-2.51
  "
/></svg>

      <h2 class="outcomes-stat">Ethical Admissions</h2>
      <p>Our program is challenging and we are selective, but we do the hard work in admissions and intend for every student who is admitted to graduate.</p>
      <a class="outcomes-cta-link text-white" href="/admissions">Learn about our Admissions Process</a>
    </div>
    <div class="col-md-4 text-center">
      <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg enable-background="new 1 1 128 128" width="128" height="128" version="1.1" viewBox="1 1 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="black" stroke-width="1.8"><path d="M118.1,96.855c0,6.314-5.977,11.344-12.35,11.344   H23.53c-6.374,0-11.63-5.029-11.63-11.344V46.825c0-6.315,5.256-10.625,11.63-10.625h82.22c6.373,0,12.35,4.31,12.35,10.625V96.855   z" /><line  x1="11.9" x2="117.9" y1="95.6" y2="95.6"/><path d="M84.779,36.2c0.063,0,0.111-0.979,0.111-1.53   c0-7.158-5.803-12.869-12.961-12.869H55.731c-7.157,0-12.959,5.711-12.959,12.869c0,0.552,0.045,1.53,0.113,1.53H84.779z" /><path d="M102.711,36.2H26.57   c-7.158,0-14.67,3.373-14.67,10.53v11.34c0,7.158,5.713,14.129,12.87,14.129h24.521c-0.022-1.799-0.041-1.074-0.041-1.35   c0-4.922,3.99-9.45,8.91-9.45H69.5c4.918,0,8.91,4.528,8.91,9.45c0,0.275-0.02-0.449-0.039,1.35h26.139   c7.156,0,13.59-6.971,13.59-14.129V46.73C118.1,39.573,109.867,36.2,102.711,36.2z" /><path d="M78.41,70.4c0,4.918-3.625,9-8.1,9h-12.96   c-4.473,0-8.1-4.082-8.1-9l0,0c0-4.918,3.627-9,8.1-9h12.96C74.785,61.4,78.41,65.482,78.41,70.4L78.41,70.4z" /></g></svg>
      <h2 class="outcomes-stat">Doing Right By Students</h2>
      <p>We understand that burnout is real, and we create an experience that is sustainable for our students and staff. Our program runs from 9:30-6:00pm.</p>
      <a class="outcomes-cta-link text-white" target="_blank" href="https://www.coursereport.com/schools/rithm-school">See what our Alumni are Saying</a>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="testimonials-container">
    <div class="service-heading">
      <h2>&nbsp;What our graduates are saying &nbsp;</h2>
    </div>
    <div class="row">
      <div class="testimonials col-md-4">
        <blockquote>I almost never had to wait to get an answer to a question.</blockquote>
        <div class="testimonial-info">
          <img src="/assets/home/katiek-e163e38a7b7b2b2a679bec8885760226230c8220cf7501f0a9cbcf8cc819e56d.png" />
            <span class="testimonials-name">Katie Krieger</span>
            <span class="testimonials-post">Software Engineer at Classpass</span>
        </div>
      </div>
      <div class="testimonials col-md-4">
        <blockquote>Rithm has some of the best instructors that you will come across.</blockquote>
        <div class="testimonial-info">
          <img src="/assets/home/arthurk-0fe6e7747f69cb22a5776d0f8dc4bd979ff9d158d4b2b5758ec6aaf49efd39ad.png" />
            <span class="testimonials-name">Arthur Kam</span>
            <span class="testimonials-post">Software Engineer at Palantir</span>
        </div>
      </div>
      <div class="testimonials col-md-4">
        <blockquote>I honestly don't believe I could've learned more in any other environment.</blockquote>
        <div class="testimonial-info">
          <img src="/assets/home/torret-1ab1209644ba7c401303b10ce5d839a38f1df3fb094752b95babc93f48a5a116.png" />
            <span class="testimonials-name">Torre Taylor</span>
            <span class="testimonials-post">Senior Software Developer at CoStar Group</span>
        </div>
      </div>
    </div> <!-- closes row -->
</section>

<link rel="stylesheet" media="screen" href="/assets/cta_banner-c6e6d511b406cd3aeb1c485e0a338c8d23a72c3fc0d0ab45b4603e391a31be98.css" />


<div class="row cta-banner">
  <div id="hero-background" class="full-width">
    <div class="row">
      <div class="col-lg-12">
        <h2>Get Started with Rithm School</h2>
      </div>
      <div class="col-lg-12">
        <a class="btn btn-cta-left" href="/admissions">Learn More About Admissions</a>
        <a class="btn btn-cta-right" href="https://calendly.com/rithmadmissions/rithm-school-chat">Chat with Admissions</a>
      </div>
    </div>
  </div>
</div>

<section id="blogs">
   <div class="service-heading">
    <h2 class="outcomes-heading">What&#39;s happening at Rithm?</h2>
  </div>
    <div class="row">
        <article class="card col-md-4">
          <a href="/blog/2022-scholarship">
            <h4>
              Announcing Rithm&#39;s 2022 Scholarship Fund
            </h4>
              <time pubdate="" datetime="2021-12-08 14:55:46 UTC"></time>
            <h5>
              <small>December 08, 2021</small>
            </h5>
</a>        </article>
        <article class="card col-md-4">
          <a href="/blog/october-2021-womens-scholarship-fund">
            <h4>
              October 2021 Women&#39;s Scholarship Fund
            </h4>
              <time pubdate="" datetime="2021-08-18 20:38:59 UTC"></time>
            <h5>
              <small>August 18, 2021</small>
            </h5>
</a>        </article>
        <article class="card col-md-4">
          <a href="/blog/r19-100-outcomes-within-4-months-of-graduating">
            <h4>
              R19: 100% Outcomes Within 4 Months Of Graduating
            </h4>
              <time pubdate="" datetime="2021-07-13 21:21:05 UTC"></time>
            <h5>
              <small>July 13, 2021</small>
            </h5>
</a>        </article>
    </div>
      <div class="row">
        <article class="card col-md-4">
          <a href="/blog/student-interview-clever-counsel-company-projects">
            <h4>
              Student Interview: R20 On Remote Company Projects 
            </h4>
              <time pubdate="" datetime="2021-05-25 23:55:52 UTC"></time>
            <h5>
              <small>May 25, 2021</small>
            </h5>
</a>        </article>
        <article class="card col-md-4">
          <a href="/blog/good-ideas-for-better-variable-names">
            <h4>
              Good Ideas for Better Variable Names
            </h4>
              <time pubdate="" datetime="2021-05-04 21:10:26 UTC"></time>
            <h5>
              <small>May 04, 2021</small>
            </h5>
</a>        </article>
        <article class="card col-md-4">
          <a href="/blog/typescript-how-to-get-started">
            <h4>
              TypeScript: How To Get Started
            </h4>
              <time pubdate="" datetime="2021-04-21 17:07:39 UTC"></time>
            <h5>
              <small>April 21, 2021</small>
            </h5>
</a>        </article>
    </div>
  
</section>

<script src="/assets/home-04024382391bb910584145d8113cf35ef376b55d125bb4516cebeb14ce788597.js"></script>

</div>

  
<!-- Chatra {literal} -->
<script>
    var countries = ["Australia", "Canada", "United States", "United Kingdom", "Ireland", "New Zealand", "Israel", "Sweden", "Denmark", "Netherlands", "Hong Kong", "Finland", "Austria", "Norway", "Germany","Singapore"]
    ChatraID = 'B32ypJxDbLRq5RhQ2';
    ChatraGroupID = 'eXDapncP5vKAcBDr5';
    var key = "3c90912af13c55003cd9990c1db175ad"
    // if they are not in the array we cache that in localStorage and noop
    if(localStorage.getItem("nvc") === "true"){
    }
    // if they are in the array just load the Chatra box
    else if(localStorage.getItem("vc") === "true"){
      (function(d, w, c) {
                var n = d.getElementsByTagName('script')[0],
                    s = d.createElement('script');
                w[c] = w[c] || function() {
                    (w[c].q = w[c].q || []).push(arguments);
                };
                s.async = true;
                s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
                    + '//call.chatra.io/chatra.js';
                n.parentNode.insertBefore(s, n);
            })(document, window, 'Chatra');
    // otherwise get their location and set them as vc or nvc if they are in the array or not
    } else {
       $.getJSON("https://api.ipstack.com/check?access_key=" + key).then(function(data){
        if(countries.includes(data.country_name)){
            localStorage.setItem("vc", true)
            (function(d, w, c) {
                var n = d.getElementsByTagName('script')[0],
                    s = d.createElement('script');
                w[c] = w[c] || function() {
                    (w[c].q = w[c].q || []).push(arguments);
                };
                s.async = true;
                s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
                    + '//call.chatra.io/chatra.js';
                n.parentNode.insertBefore(s, n);
            })(document, window, 'Chatra');
        } else {
          localStorage.setItem("nvc") === "true"
        }
    })
}
   
</script>
<!-- /Chatra {/literal} -->
<script>
window.ChatraSetup = {
    colors: {
        buttonText: '#ffffff', // chat button text color
        buttonBg: '#F86161'    // chat button background color
    }
};

// // REMOVED when parallax was added
// We only want to delay the chat on the homepage
// so the animation has time to load.
// if (window.location.pathname === '/') {
//   Chatra("hide");
//   setTimeout(function() {
//     Chatra("show");
//   }, 2600);
// }
</script>

  <footer data-event-name="click_cta" data-label="location" data-event-label="page_bottom">
  <div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-4 text-center">
            <a style="padding:0;" class="footer-logo" href="/">
              <img class="logo" width="120" height="58" alt="rithm school company logo" title="Rithm School Logo" src="/assets/logos/rithm_logo-f188d2545d88917c033e407f4f87b02e2a3f5cf5dfb60e626787785fa9c13774.svg" />
</a>            <span>
                <a class="text-muted faq-url" href="/cdn-cgi/l/email-protection#e68f888089a6948f928e8b95858e89898ac885898b">info@rithmschool.com</a>
            </span>
        </div>
        <div class="col-md-6 col-sm-8">
          <div class="text-center email_signup_heading">
              <p data-event-name="click_email_link" class="lead">Interested in meetups, courses and free content?</p>
              <button name="button" type="submit" class="btn" id="mailing-list" data-event-name="join_mailing_list">Join mailing list</button>
          </div>
          <p class="lead text-center thank_you"></p>
        </div>
        <div class="col-md-3 col-sm-4 text-center">
          <ul class="list-inline social-buttons">
              <li data-event-name="click_cta" data-label="click_social_link" data-event-label="twitter"><a target="_blank" href="https://www.twitter.com/rithmschool"><i class="fa fa-twitter"></i></a>
              </li>
              <li data-event-name="click_cta" data-label="click_social_link" data-event-label="facebook"><a target="_blank" href="https://www.facebook.com/rithmschool"><i class="fa fa-facebook"></i></a>
              </li>
              <li data-event-name="click_cta" data-label="click_social_link" data-event-label="linkedin"><a target="_blank" href="https://www.linkedin.com/company/rithm-school"><i class="fa fa-linkedin"></i></a>
              </li>
          </ul>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-12  text-center">
          <a class="text-muted" href="/privacy">Privacy Policy</a> |
          <a class="text-muted" href="/terms">Terms of Service</a> |
          <a class="text-muted" href="/consumer-resource">Consumer Resource</a>
          <span class="copyright">&copy; Rithm Inc. 500 Sansome Street Suite 300 San Francisco, CA 94111. All rights reserved. </span>
      </div>
    </div>
  </div>
</footer>

  
<!-- link that opens popup -->
<a style="display:none;" class="popup-with-form" href="#unlock-form">Open form</a>

<!-- form itself -->
<div class="thank_you"></div>
<div class="container">
  <form id="unlock-form" class="card mfp-hide white-popup-block" >
<input type="hidden" name="authenticity_token" id="authenticity_token" value="EpsgmY736WfrCtsUttP7q7R+x7T3Icbpl4mHrSBYeQw3mbenkc9sqZPQHK3eL0gJw1RJTe66ypNdRoG4DxDbRg==" />  <div id="modal-email-known" style="display:none;">
    <h1 class="text-center">Signed up already? Please enter your email to confirm.</h1>
    <div class="email-errors text-center"></div>
    <hr class="modal--bar">
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <div class="form-group">
          <input class="form-control" placeholder="Email" type="email" id="confirm-email-input">
          <p class="help-block text-danger"></p>
        </div>
      </div>
    </div>
    <button id="confirm-email" type="submit" class="btn btn-xl">Sign In</button>
    <div class="text-center">
      <a href="javascript:void(0)" style="margin-top:-20px; display:block;" class="modal-go-back">Go Back</a>
    </div>
  </div>
  <div id="modal-first-part" class="row">
    <h1 class="text-center">Get 200+ hours of free content, tutorials, and screencasts</h1>
      <div class="col-sm-offset-2 col-sm-8">
        <hr class="modal--bar">
          <h5 class="text-center">Share your email, and we'll give you a confirmation code to unlock all of our materials. No spam, we promise.</h5>
          <div class="errors text-center"></div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <input autofocus="autofocus" required="required" class="form-control" placeholder="First Name" type="text" name="first" id="first">
                <p class="help-block text-danger"></p>
              </div>
            </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input required="required" class="form-control" placeholder="Last Name" type="last" name="last" id="last">
                  <p class="help-block text-danger"></p>
                </div>
              </div>
            </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <input class="form-control" placeholder="Email Address" required="required" type="email" name="email" id="email">
                <p class="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <button type="submit" class="next-button btn btn-xl">Next</button>
          <a class="text-center email-known" href="javascript:void(0)">Already signed up?</a>
    </div>
  </div>
    <div id="modal-second-part" style="display:none;">
      <h1 class="text-center">Tell us more about yourself</h1>
        <div class="col-sm-offset-2 col-sm-8">
          <hr class="modal--bar">
          <h5 class="text-center">Please answer these two questions to help us build the perfect Rithm experience for you.</h5>
          <div class="errors text-center"></div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            How would you define your skill as a developer?
            <label for="Beginner"><input type="radio" class="radio" name="skill" id="Beginner" value='Beginner' required checked/> Beginner</label>
            <label for="Intermediate"><input type="radio" class="radio" name="skill" id="Intermediate" value='Intermediate'/>Intermediate </label>
            <label for="Advanced"><input type="radio" class="radio" name="skill" id="Advanced" value='Advanced'>Advanced </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            Would you like to learn more about Rithm School's in-person courses and how to apply?
            <label for="yes"><input type="radio" class="radio" name="learn" id="yes" value="Yes" required checked/> Yes</label>
            <label for="no"><input type="radio" class="radio" name="learn" id="no" value="No" > No</label>
            <p class="help-block text-danger"></p>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-xl">Get Content</button>
    </div>
  </div>
      <div id="modal-third-part" style="display:none;">
        <h1 class="text-center"></h1>
          <div class="col-sm-offset-2 col-sm-8">
            <hr class="modal--bar">
            <h5 class="text-center"></h5>
          </div>
      </div>
  </form>
  </div>





<!-- Google Code for Purchase Conversion Page -->

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></body>
</html>
