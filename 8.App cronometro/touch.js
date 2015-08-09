


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
        <title>zepto/src/touch.js at master · madrobby/zepto</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe121-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (e1c0c3f392) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4F9C770A:70C9:158884:52A25456" name="octolytics-dimension-request_id" /><meta content="5254921" name="octolytics-actor-id" /><meta content="misuher" name="octolytics-actor-login" /><meta content="1b2391f50bc5406ee100e9dd352424545b80933d9e89f7e55de95eefc5a92cad" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="DJMvxjDUJa5bOxjyUnMiBrhZFPLTlUxJtAXgJbz08jg=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-89b251df5033a74afafac24f25b07e96d2326484.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-45a4a048b3f5c79db2c5257a0c5e668061ba871d.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5970f5a0a3dcc441d5f7ff74326ffd59bbe9388e.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-15e6ccca7f9932becee772f42ebe53ffbc5f3f0a.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="b104b82bfec55c2fcedae781438dcc0d">

        <link data-pjax-transient rel='permalink' href='/madrobby/zepto/blob/c074a94f0f26dc946f1c501f5f45d603adada44d/src/touch.js'>
  <meta property="og:title" content="zepto"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/madrobby/zepto"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API"/>

  <meta name="description" content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API" />

  <meta content="3390" name="octolytics-dimension-user_id" /><meta content="madrobby" name="octolytics-dimension-user_login" /><meta content="924303" name="octolytics-dimension-repository_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="924303" name="octolytics-dimension-repository_network_root_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/madrobby/zepto/commits/master.atom" rel="alternate" title="Recent Commits to zepto:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="misuher"
      data-repo="madrobby/zepto"
      data-branch="master"
      data-sha="087e76c19cfd1d91598cf35d8760cbb1ebaf44b0"
  >

    <input type="hidden" name="nwo" value="madrobby/zepto" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/misuher" class="name">
        <img height="20" src="https://2.gravatar.com/avatar/77bb9182085ad16897924b77a06ecb59?d=https%3A%2F%2Fidenticons.github.com%2F5d4a9754b6b9317786dbef4daa41ace9.png&amp;r=x&amp;s=140" width="20" /> misuher
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="madrobby/zepto">This repository</span>
    </li>
      <li>
        <a href="/madrobby/zepto/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="DJMvxjDUJa5bOxjyUnMiBrhZFPLTlUxJtAXgJbz08jg=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="924303" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/madrobby/zepto/watchers">
        319
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/madrobby/zepto/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/madrobby/zepto/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/madrobby/zepto/stargazers">
        5,914
      </a>
  </div>

  </li>


        <li>
          <a href="/madrobby/zepto/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/madrobby/zepto/network" class="social-count">1,000</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/madrobby" class="url fn" itemprop="url" rel="author"><span itemprop="title">madrobby</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/madrobby/zepto" class="js-current-repository js-repo-home-link">zepto</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/madrobby/zepto" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /madrobby/zepto">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/madrobby/zepto/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /madrobby/zepto/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>26</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/madrobby/zepto/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /madrobby/zepto/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>9</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/madrobby/zepto/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /madrobby/zepto/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/madrobby/zepto/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /madrobby/zepto/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/madrobby/zepto/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /madrobby/zepto/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/madrobby/zepto/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /madrobby/zepto/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/madrobby/zepto.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/madrobby/zepto.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:madrobby/zepto.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:madrobby/zepto.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/madrobby/zepto" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/madrobby/zepto" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/madrobby/zepto/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:b5abaeabf23fb32b01b095d14caa8ae4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/madrobby/zepto/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/blob/benchmark/src/touch.js"
                 data-name="benchmark"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="benchmark">benchmark</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/blob/gh-pages/src/touch.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/blob/master/src/touch.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/blob/mocha/src/touch.js"
                 data-name="mocha"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="mocha">mocha</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.1/src/touch.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.0/src/touch.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.0rc1/src/touch.js"
                 data-name="v1.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0rc1">v1.0rc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.0/src/touch.js"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.8/src/touch.js"
                 data-name="v0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.8">v0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.7/src/touch.js"
                 data-name="v0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.7">v0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.6/src/touch.js"
                 data-name="v0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.6">v0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.5/src/touch.js"
                 data-name="v0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.5">v0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.4/src/touch.js"
                 data-name="v0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.4">v0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.3/src/touch.js"
                 data-name="v0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.3">v0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.2/src/touch.js"
                 data-name="v0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.2">v0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.1.1/src/touch.js"
                 data-name="v0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1.1">v0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.1/src/touch.js"
                 data-name="v0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.1">v0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">zepto</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">touch.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/touch.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://1.gravatar.com/avatar/cf287bd57ec416f58baa2454fdd28e1e?d=https%3A%2F%2Fidenticons.github.com%2F8ed36a8485e30937b99c0d247e9c3832.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/madrobby" rel="author">madrobby</a></span>
    <time class="js-relative-date" datetime="2013-11-25T10:11:28-08:00" title="2013-11-25 10:11:28">November 25, 2013</time>
    <div class="commit-title">
        <a href="/madrobby/zepto/commit/9a5f23ec217c90331511c7ffff5c9f0d507eb9c2" class="message" data-pjax="true" title='Support IE11 touch events, closes #854 and #860.

IE11 no longer supports older (IE10) "MSPointerEvents", going
with vendor-prefix less "pointerevents" instead.'>Support IE11 touch events, closes</a> <a href="https://github.com/madrobby/zepto/issues/854" class="issue-link" title="Touch event handling broken in IE11">#854</a> <a href="/madrobby/zepto/commit/9a5f23ec217c90331511c7ffff5c9f0d507eb9c2" class="message" data-pjax="true" title='Support IE11 touch events, closes #854 and #860.

IE11 no longer supports older (IE10) "MSPointerEvents", going
with vendor-prefix less "pointerevents" instead.'>and</a> <a href="https://github.com/madrobby/zepto/pull/860" class="issue-link" title="[FIXED] issue #854: touch events handling broken in IE11 release">#860</a><a href="/madrobby/zepto/commit/9a5f23ec217c90331511c7ffff5c9f0d507eb9c2" class="message" data-pjax="true" title='Support IE11 touch events, closes #854 and #860.

IE11 no longer supports older (IE10) "MSPointerEvents", going
with vendor-prefix less "pointerevents" instead.'>.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>16</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="madrobby" href="/madrobby/zepto/commits/master/src/touch.js?author=madrobby"><img height="20" src="https://1.gravatar.com/avatar/cf287bd57ec416f58baa2454fdd28e1e?d=https%3A%2F%2Fidenticons.github.com%2F8ed36a8485e30937b99c0d247e9c3832.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="hunterloftis" href="/madrobby/zepto/commits/master/src/touch.js?author=hunterloftis"><img height="20" src="https://0.gravatar.com/avatar/8f356ebb1b2eb81dcfa42974d4f2d308?d=https%3A%2F%2Fidenticons.github.com%2Fe2adfa703c302941c4d2b399c462ba79.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="charsleysa" href="/madrobby/zepto/commits/master/src/touch.js?author=charsleysa"><img height="20" src="https://2.gravatar.com/avatar/362608c500980dabff45707db6b0e09a?d=https%3A%2F%2Fidenticons.github.com%2Ff3d551096145980f8329a30af2d47a47.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="gobhi" href="/madrobby/zepto/commits/master/src/touch.js?author=gobhi"><img height="20" src="https://0.gravatar.com/avatar/a79b900d2331ef465d397f306fd3e9c9?d=https%3A%2F%2Fidenticons.github.com%2Fb93b52c7f2b9080b81cadc898b08aaa1.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mislav" href="/madrobby/zepto/commits/master/src/touch.js?author=mislav"><img height="20" src="https://2.gravatar.com/avatar/8f93a872e399bc1353cc8d4e791d5401?d=https%3A%2F%2Fidenticons.github.com%2F7ce3284b743aefde80ffd9aec500e085.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="joaodubas" href="/madrobby/zepto/commits/master/src/touch.js?author=joaodubas"><img height="20" src="https://1.gravatar.com/avatar/744fdf6754d94f2c3daa614b36e6584c?d=https%3A%2F%2Fidenticons.github.com%2Faeca6f6db3693e36434b38af6e683b9a.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kossnocorp" href="/madrobby/zepto/commits/master/src/touch.js?author=kossnocorp"><img height="20" src="https://0.gravatar.com/avatar/ea65515f1891fc76f23b1f1e879de19c?d=https%3A%2F%2Fidenticons.github.com%2Ff1d32765fb6215ed9ba20bd9e59733b8.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kpdecker" href="/madrobby/zepto/commits/master/src/touch.js?author=kpdecker"><img height="20" src="https://2.gravatar.com/avatar/1d0a77e7fa25279e2ec61a6f802b2862?d=https%3A%2F%2Fidenticons.github.com%2F0cb9827e5625394fd612b96fffc9b357.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="riklomas" href="/madrobby/zepto/commits/master/src/touch.js?author=riklomas"><img height="20" src="https://2.gravatar.com/avatar/f4c6e90d04fbea660387fd53f0a707c0?d=https%3A%2F%2Fidenticons.github.com%2F4c32296316cec19d27f62e4e8db15430.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mattheworiordan" href="/madrobby/zepto/commits/master/src/touch.js?author=mattheworiordan"><img height="20" src="https://0.gravatar.com/avatar/223395b4fdae9ca2b8512f8c1378d705?d=https%3A%2F%2Fidenticons.github.com%2F07aa69970a284c5948c3a34ed5e4e0b1.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sstephenson" href="/madrobby/zepto/commits/master/src/touch.js?author=sstephenson"><img height="20" src="https://2.gravatar.com/avatar/5b9fe87ec1faa67a4599782930f45ec9?d=https%3A%2F%2Fidenticons.github.com%2F92f54963fc39a9d87c2253186808ea61.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="bjoernwibben" href="/madrobby/zepto/commits/master/src/touch.js?author=bjoernwibben"><img height="20" src="https://1.gravatar.com/avatar/dc485f1783b441a3cb6aba8f8c0132e9?d=https%3A%2F%2Fidenticons.github.com%2Fb71e7b479ca5de9e554e2f01d62da818.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="juandopazo" href="/madrobby/zepto/commits/master/src/touch.js?author=juandopazo"><img height="20" src="https://2.gravatar.com/avatar/6f3c114e2ddb15bb2357083c1a3ab4a9?d=https%3A%2F%2Fidenticons.github.com%2Fbedd197b58d2e6cd5d725bafccb46931.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="davidkaneda" href="/madrobby/zepto/commits/master/src/touch.js?author=davidkaneda"><img height="20" src="https://0.gravatar.com/avatar/4f731655f6de1f6728c716448e0ba634?d=https%3A%2F%2Fidenticons.github.com%2F6a1cf9ff786388fe8796c57ec63d1075.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="danjordan" href="/madrobby/zepto/commits/master/src/touch.js?author=danjordan"><img height="20" src="https://1.gravatar.com/avatar/aa387a3669705a4ff6c0bebf2b16826a?d=https%3A%2F%2Fidenticons.github.com%2F25c9e33a373224d8c2d0d2a40bda2b35.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="tobibo" href="/madrobby/zepto/commits/master/src/touch.js?author=tobibo"><img height="20" src="https://1.gravatar.com/avatar/65b5b27fa9d4d4f51d74272c77de81ff?d=https%3A%2F%2Fidenticons.github.com%2F9bf0d3bdd603a5945e9bb1d40d7702f7.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/cf287bd57ec416f58baa2454fdd28e1e?d=https%3A%2F%2Fidenticons.github.com%2F8ed36a8485e30937b99c0d247e9c3832.png&amp;r=x&amp;s=140" width="24" />
            <a href="/madrobby">madrobby</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/8f356ebb1b2eb81dcfa42974d4f2d308?d=https%3A%2F%2Fidenticons.github.com%2Fe2adfa703c302941c4d2b399c462ba79.png&amp;r=x&amp;s=140" width="24" />
            <a href="/hunterloftis">hunterloftis</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/362608c500980dabff45707db6b0e09a?d=https%3A%2F%2Fidenticons.github.com%2Ff3d551096145980f8329a30af2d47a47.png&amp;r=x&amp;s=140" width="24" />
            <a href="/charsleysa">charsleysa</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/a79b900d2331ef465d397f306fd3e9c9?d=https%3A%2F%2Fidenticons.github.com%2Fb93b52c7f2b9080b81cadc898b08aaa1.png&amp;r=x&amp;s=140" width="24" />
            <a href="/gobhi">gobhi</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/8f93a872e399bc1353cc8d4e791d5401?d=https%3A%2F%2Fidenticons.github.com%2F7ce3284b743aefde80ffd9aec500e085.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mislav">mislav</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/744fdf6754d94f2c3daa614b36e6584c?d=https%3A%2F%2Fidenticons.github.com%2Faeca6f6db3693e36434b38af6e683b9a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/joaodubas">joaodubas</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/ea65515f1891fc76f23b1f1e879de19c?d=https%3A%2F%2Fidenticons.github.com%2Ff1d32765fb6215ed9ba20bd9e59733b8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kossnocorp">kossnocorp</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/1d0a77e7fa25279e2ec61a6f802b2862?d=https%3A%2F%2Fidenticons.github.com%2F0cb9827e5625394fd612b96fffc9b357.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kpdecker">kpdecker</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/f4c6e90d04fbea660387fd53f0a707c0?d=https%3A%2F%2Fidenticons.github.com%2F4c32296316cec19d27f62e4e8db15430.png&amp;r=x&amp;s=140" width="24" />
            <a href="/riklomas">riklomas</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/223395b4fdae9ca2b8512f8c1378d705?d=https%3A%2F%2Fidenticons.github.com%2F07aa69970a284c5948c3a34ed5e4e0b1.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mattheworiordan">mattheworiordan</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/5b9fe87ec1faa67a4599782930f45ec9?d=https%3A%2F%2Fidenticons.github.com%2F92f54963fc39a9d87c2253186808ea61.png&amp;r=x&amp;s=140" width="24" />
            <a href="/sstephenson">sstephenson</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/dc485f1783b441a3cb6aba8f8c0132e9?d=https%3A%2F%2Fidenticons.github.com%2Fb71e7b479ca5de9e554e2f01d62da818.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bjoernwibben">bjoernwibben</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/6f3c114e2ddb15bb2357083c1a3ab4a9?d=https%3A%2F%2Fidenticons.github.com%2Fbedd197b58d2e6cd5d725bafccb46931.png&amp;r=x&amp;s=140" width="24" />
            <a href="/juandopazo">juandopazo</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/4f731655f6de1f6728c716448e0ba634?d=https%3A%2F%2Fidenticons.github.com%2F6a1cf9ff786388fe8796c57ec63d1075.png&amp;r=x&amp;s=140" width="24" />
            <a href="/davidkaneda">davidkaneda</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/aa387a3669705a4ff6c0bebf2b16826a?d=https%3A%2F%2Fidenticons.github.com%2F25c9e33a373224d8c2d0d2a40bda2b35.png&amp;r=x&amp;s=140" width="24" />
            <a href="/danjordan">danjordan</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/65b5b27fa9d4d4f51d74272c77de81ff?d=https%3A%2F%2Fidenticons.github.com%2F9bf0d3bdd603a5945e9bb1d40d7702f7.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tobibo">tobibo</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>166 lines (145 sloc)</span>
        <span>5.885 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/madrobby/zepto/edit/master/src/touch.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/madrobby/zepto/raw/master/src/touch.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/madrobby/zepto/blame/master/src/touch.js" class="button minibutton ">Blame</a>
          <a href="/madrobby/zepto/commits/master/src/touch.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/madrobby/zepto/delete/master/src/touch.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">//     Zepto.js</span></div><div class='line' id='LC2'><span class="c1">//     (c) 2010-2013 Thomas Fuchs</span></div><div class='line' id='LC3'><span class="c1">//     Zepto.js may be freely distributed under the MIT license.</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">){</span></div><div class='line' id='LC6'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">touch</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touchTimeout</span><span class="p">,</span> <span class="nx">tapTimeout</span><span class="p">,</span> <span class="nx">swipeTimeout</span><span class="p">,</span> <span class="nx">longTapTimeout</span><span class="p">,</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">longTapDelay</span> <span class="o">=</span> <span class="mi">750</span><span class="p">,</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gesture</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">swipeDirection</span><span class="p">(</span><span class="nx">x1</span><span class="p">,</span> <span class="nx">x2</span><span class="p">,</span> <span class="nx">y1</span><span class="p">,</span> <span class="nx">y2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">x2</span><span class="p">)</span> <span class="o">&gt;=</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">y2</span><span class="p">)</span> <span class="o">?</span> <span class="p">(</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">x2</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;Left&#39;</span> <span class="o">:</span> <span class="s1">&#39;Right&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="p">(</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">y2</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;Up&#39;</span> <span class="o">:</span> <span class="s1">&#39;Down&#39;</span><span class="p">)</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">longTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">longTapTimeout</span> <span class="o">=</span> <span class="kc">null</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">last</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;longTap&#39;</span><span class="p">)</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">cancelLongTap</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">longTapTimeout</span><span class="p">)</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">longTapTimeout</span><span class="p">)</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">longTapTimeout</span> <span class="o">=</span> <span class="kc">null</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">cancelAll</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">touchTimeout</span><span class="p">)</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">touchTimeout</span><span class="p">)</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tapTimeout</span><span class="p">)</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">tapTimeout</span><span class="p">)</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">swipeTimeout</span><span class="p">)</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">swipeTimeout</span><span class="p">)</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">longTapTimeout</span><span class="p">)</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">longTapTimeout</span><span class="p">)</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touchTimeout</span> <span class="o">=</span> <span class="nx">tapTimeout</span> <span class="o">=</span> <span class="nx">swipeTimeout</span> <span class="o">=</span> <span class="nx">longTapTimeout</span> <span class="o">=</span> <span class="kc">null</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC36'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isPrimaryTouch</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">pointerType</span> <span class="o">==</span> <span class="s1">&#39;touch&#39;</span> <span class="o">||</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">pointerType</span> <span class="o">==</span> <span class="nx">event</span><span class="p">.</span><span class="nx">MSPOINTER_TYPE_TOUCH</span><span class="p">)</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="nx">event</span><span class="p">.</span><span class="nx">isPrimary</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isPointerEventType</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">type</span><span class="p">){</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;pointer&#39;</span><span class="o">+</span><span class="nx">type</span> <span class="o">||</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">==</span> <span class="s1">&#39;mspointer&#39;</span><span class="o">+</span><span class="nx">type</span><span class="p">)</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">now</span><span class="p">,</span> <span class="nx">delta</span><span class="p">,</span> <span class="nx">deltaX</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">deltaY</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">firstTouch</span><span class="p">,</span> <span class="nx">_isPointerType</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;MSGesture&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gesture</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">MSGesture</span><span class="p">()</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gesture</span><span class="p">.</span><span class="nx">target</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">)</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;MSGestureEnd&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">swipeDirectionFromVelocity</span> <span class="o">=</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">velocityX</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;Right&#39;</span> <span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityX</span> <span class="o">&lt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;Left&#39;</span> <span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityY</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;Down&#39;</span> <span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityY</span> <span class="o">&lt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;Up&#39;</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">swipeDirectionFromVelocity</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipe&#39;</span><span class="p">)</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipe&#39;</span><span class="o">+</span> <span class="nx">swipeDirectionFromVelocity</span><span class="p">)</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;touchstart MSPointerDown pointerdown&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">((</span><span class="nx">_isPointerType</span> <span class="o">=</span> <span class="nx">isPointerEventType</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="s1">&#39;down&#39;</span><span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="nx">isPrimaryTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">))</span> <span class="k">return</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">firstTouch</span> <span class="o">=</span> <span class="nx">_isPointerType</span> <span class="o">?</span> <span class="nx">e</span> <span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">touches</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">x2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clear out touch movement data if we have it sticking around</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This can occur if touchcancel doesn&#39;t fire due to preventDefault, etc.</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">x2</span> <span class="o">=</span> <span class="kc">undefined</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">y2</span> <span class="o">=</span> <span class="kc">undefined</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">now</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">now</span><span class="p">()</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delta</span> <span class="o">=</span> <span class="nx">now</span> <span class="o">-</span> <span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">last</span> <span class="o">||</span> <span class="nx">now</span><span class="p">)</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;tagName&#39;</span> <span class="k">in</span> <span class="nx">firstTouch</span><span class="p">.</span><span class="nx">target</span> <span class="o">?</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">firstTouch</span><span class="p">.</span><span class="nx">target</span> <span class="o">:</span> <span class="nx">firstTouch</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">)</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touchTimeout</span> <span class="o">&amp;&amp;</span> <span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">touchTimeout</span><span class="p">)</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">x1</span> <span class="o">=</span> <span class="nx">firstTouch</span><span class="p">.</span><span class="nx">pageX</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">y1</span> <span class="o">=</span> <span class="nx">firstTouch</span><span class="p">.</span><span class="nx">pageY</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">delta</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">delta</span> <span class="o">&lt;=</span> <span class="mi">250</span><span class="p">)</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">isDoubleTap</span> <span class="o">=</span> <span class="kc">true</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">last</span> <span class="o">=</span> <span class="nx">now</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">longTapTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">longTap</span><span class="p">,</span> <span class="nx">longTapDelay</span><span class="p">)</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// adds the current touch contact for IE gesture recognition</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">gesture</span> <span class="o">&amp;&amp;</span> <span class="nx">_isPointerType</span><span class="p">)</span> <span class="nx">gesture</span><span class="p">.</span><span class="nx">addPointer</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">pointerId</span><span class="p">);</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;touchmove MSPointerMove pointermove&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">((</span><span class="nx">_isPointerType</span> <span class="o">=</span> <span class="nx">isPointerEventType</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="s1">&#39;move&#39;</span><span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="nx">isPrimaryTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">))</span> <span class="k">return</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">firstTouch</span> <span class="o">=</span> <span class="nx">_isPointerType</span> <span class="o">?</span> <span class="nx">e</span> <span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cancelLongTap</span><span class="p">()</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">x2</span> <span class="o">=</span> <span class="nx">firstTouch</span><span class="p">.</span><span class="nx">pageX</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">y2</span> <span class="o">=</span> <span class="nx">firstTouch</span><span class="p">.</span><span class="nx">pageY</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deltaX</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">x2</span><span class="p">)</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deltaY</span> <span class="o">+=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">y2</span><span class="p">)</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;touchend MSPointerUp pointerup&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">((</span><span class="nx">_isPointerType</span> <span class="o">=</span> <span class="nx">isPointerEventType</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="s1">&#39;up&#39;</span><span class="p">))</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="nx">isPrimaryTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">))</span> <span class="k">return</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cancelLongTap</span><span class="p">()</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// swipe</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">touch</span><span class="p">.</span><span class="nx">x2</span> <span class="o">&amp;&amp;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">x1</span> <span class="o">-</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">x2</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">30</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">y2</span> <span class="o">&amp;&amp;</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">y1</span> <span class="o">-</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">y2</span><span class="p">)</span> <span class="o">&gt;</span> <span class="mi">30</span><span class="p">))</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">swipeTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipe&#39;</span><span class="p">)</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;swipe&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">swipeDirection</span><span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">x1</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">x2</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">y1</span><span class="p">,</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">y2</span><span class="p">)))</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// normal tap</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;last&#39;</span> <span class="k">in</span> <span class="nx">touch</span><span class="p">)</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// don&#39;t fire tap when delta position changed by more than 30 pixels,</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// for instance when moving to a point and back to origin</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">deltaX</span> <span class="o">&lt;</span> <span class="mi">30</span> <span class="o">&amp;&amp;</span> <span class="nx">deltaY</span> <span class="o">&lt;</span> <span class="mi">30</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// delay by one tick so we can cancel the &#39;tap&#39; event if &#39;scroll&#39; fires</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (&#39;tap&#39; fires before &#39;scroll&#39;)</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tapTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// trigger universal &#39;tap&#39; with the option to cancelTouch()</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (cancelTouch cancels processing of single vs double taps for faster &#39;tap&#39; response)</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="s1">&#39;tap&#39;</span><span class="p">)</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="p">.</span><span class="nx">cancelTouch</span> <span class="o">=</span> <span class="nx">cancelAll</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// trigger double tap immediately</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">isDoubleTap</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">)</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;doubleTap&#39;</span><span class="p">)</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// trigger single tap after 250ms of inactivity</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touchTimeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touchTimeout</span> <span class="o">=</span> <span class="kc">null</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">)</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;singleTap&#39;</span><span class="p">)</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">250</span><span class="p">)</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">touch</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">deltaY</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// when the browser window loses focus,</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// for example when a modal dialog is shown,</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// cancel all ongoing events</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;touchcancel MSPointerCancel pointercancel&#39;</span><span class="p">,</span> <span class="nx">cancelAll</span><span class="p">)</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// scrolling the window indicates intention of the user</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// to scroll, not tap or swipe, so cancel all ongoing events</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;scroll&#39;</span><span class="p">,</span> <span class="nx">cancelAll</span><span class="p">)</span></div><div class='line' id='LC159'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>&nbsp;&nbsp;<span class="p">;[</span><span class="s1">&#39;swipe&#39;</span><span class="p">,</span> <span class="s1">&#39;swipeLeft&#39;</span><span class="p">,</span> <span class="s1">&#39;swipeRight&#39;</span><span class="p">,</span> <span class="s1">&#39;swipeUp&#39;</span><span class="p">,</span> <span class="s1">&#39;swipeDown&#39;</span><span class="p">,</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;doubleTap&#39;</span><span class="p">,</span> <span class="s1">&#39;tap&#39;</span><span class="p">,</span> <span class="s1">&#39;singleTap&#39;</span><span class="p">,</span> <span class="s1">&#39;longTap&#39;</span><span class="p">].</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">eventName</span><span class="p">){</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span><span class="nx">eventName</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">){</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">eventName</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">}</span></div><div class='line' id='LC164'>&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC165'><span class="p">})(</span><span class="nx">Zepto</span><span class="p">)</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.04641s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/madrobby/zepto/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

