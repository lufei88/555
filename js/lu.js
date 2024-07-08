<!DOCTYPE html>
<html lang='zh-CN'>
<head>
<title>js/lu.js · DODBOY/88 - Gitee.com</title>
<meta content='on' http-equiv='x-dns-prefetch-control'>
<link href='//e.gitee.com' rel='dns-prefetch'>
<link href='//files.gitee.com' rel='dns-prefetch'>
<link href='//toscode.gitee.com' rel='dns-prefetch'>
<link href='https://cn-assets.gitee.com' rel='dns-prefetch'>
<link href='https://portrait.gitee.com' rel='dns-prefetch'>
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="https://cn-assets.gitee.com/assets/favicon-9007bd527d8a7851c8330e783151df58.ico" />
<link rel="canonical" href="https://gitee.com/dodboy/88" />
<meta content='gitee.com/dodboy/88 git https://gitee.com/dodboy/88.git' name='go-import'>
<meta charset='utf-8'>
<meta content='always' name='referrer'>
<meta content='Gitee' property='og:site_name'>
<meta content='Object' property='og:type'>
<meta content='https://gitee.com/dodboy/88/blob/master/js/lu.js' property='og:url'>
<meta content='https://gitee.com/static/images/logo_themecolor.png' itemprop='image' property='og:image'>
<meta content='js/lu.js · DODBOY/88 - Gitee.com' itemprop='name' property='og:title'>
<meta content='Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 1200万的开发者选择 Gitee。' property='og:description'>
<meta content='码云,Gitee,代码托管,Git,Git@OSC,Gitee.com,开源,内源,项目管理,版本控制,开源代码,代码分享,项目协作,开源项目托管,免费代码托管,Git代码托管,Git托管服务' name='Keywords'>
<meta content='Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 1200万的开发者选择 Gitee。' itemprop='description' name='Description'>
<meta content='pc,mobile' name='applicable-device'>

<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="YbchGkKsltoSSCK8hUh38N6qwRj0IxcqOzFX6Hoc9Vxs0k0UCH1mWYp7amYk9LWozz46Dkj3c4cbxbCpMTNYCA==" />

<link rel="stylesheet" media="all" href="https://cn-assets.gitee.com/assets/application-b429676c43f961d3dfb9a62b92d7e148.css" />
<script>
//<![CDATA[
window.gon = {};gon.locale="zh-CN";gon.sentry_dsn=null;gon.baidu_register_hm_push=null;gon.sensor={"server_url":"https://haveaniceday.gitee.com:3443/sa?project=production","sdk_url":"https://cn-assets.gitee.com/assets/static/sensors-sdk-2f850fa5b654ad55ac0993fda2f37ba5.js","page_type":"其他"};gon.info={"controller_path":"blob","action_name":"show","current_user":false};gon.tour_env={"current_user":null,"action_name":"show","original_url":"https://gitee.com/dodboy/88/blob/master/js/lu.js","controller_path":"blob"};gon.http_clone="https://gitee.com/dodboy/88.git";gon.user_project="dodboy/88";gon.manage_branch="管理分支";gon.manage_tag="管理标签";gon.enterprise_id=0;gon.create_reaction_path="/dodboy/88/reactions";gon.ipipe_base_url="https://go-api.gitee.com";gon.artifact_base_url="https://go-repo.gitee.com";gon.gitee_go_remote_url="https://go.gitee.com/assets";gon.gitee_go_active=false;gon.current_project_is_mirror=false;gon.show_repo_comment=false;gon.diagram_viewer_path="https://diagram-viewer.giteeusercontent.com";gon.ref="master";
//]]>
</script>
<script src="https://cn-assets.gitee.com/assets/static/sensor-6269b9ad61bbcdaff20078e5dcff62d5.js"></script>
<script src="https://cn-assets.gitee.com/assets/static/sentry-5.1.0-a823fb0be1b61c5d7ca4a89f0536cb0a.js"></script>
<script src="https://cn-assets.gitee.com/assets/application-41226c6a36ee674dcabaa6eb9b9e2a26.js"></script>
<script src="https://cn-assets.gitee.com/assets/lib/jquery.timeago.zh-CN-4a4818e98c1978d2419ab19fabcba740.js"></script>

<link rel="stylesheet" media="all" href="https://cn-assets.gitee.com/assets/projects/application-46b94c31ba11ae8c37eacce2bdb5603e.css" />
<script src="https://cn-assets.gitee.com/assets/projects/app-9e2d277091428536167de1d8fba0e8cb.js"></script>

<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>
  var title = document.title.replace(/( - Gitee| - 码云)$/, '')
      imgUrl = '';
  
  document.addEventListener('DOMContentLoaded', function(event) {
    var imgUrlEl = document.querySelector('.readme-box .markdown-body > img, .readme-box .markdown-body :not(a) > img');
    imgUrl = imgUrlEl && imgUrlEl.getAttribute('src');
  
    if (!imgUrl) {
      imgUrlEl = document.querySelector('meta[itemprop=image]');
      imgUrl = imgUrlEl && imgUrlEl.getAttribute('content');
      imgUrl = imgUrl || "https://gitee.com/static/images/logo_themecolor.png";
    }
  
    wx.config({
      debug: false,
      appId: "wxff219d611a159737",
      timestamp: "1720449069",
      nonceStr: "82e355e64ded578a0847df42ccac3357",
      signature: "26fabc0272eb62a7bc5e99870c752683adc4d52d",
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
      ]
    });
  
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: "https://gitee.com/dodboy/88/blob/master/js/lu.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgUrl // 分享图标
      });
      wx.onMenuShareAppMessage({
        title: title, // 分享标题
        link: "https://gitee.com/dodboy/88/blob/master/js/lu.js", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        desc: document.querySelector('meta[name=Description]').getAttribute('content'),
        imgUrl: imgUrl // 分享图标
      });
    });
    wx.error(function(res){
      console.error('err', res)
    });
  })
</script>

<script type='text/x-mathjax-config'>
MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [["$$","$$"],["\\[","\\]"]],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreClass: "container|files",
    processClass: "markdown-body"
  }
});
</script>
<script src="https://cn-assets.gitee.com/uploads/resources/MathJax-2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

<script>
  (function () {
    var messages = {
      'zh-CN': {
        addResult: '增加 <b>{term}</b>',
        count: '已选择 {count}',
        maxSelections: '最多 {maxCount} 个选择',
        noResults: '未找到结果',
        serverError: '连接服务器时发生错误'
      },
      'zh-TW': {
        addResult: '增加 <b>{term}</b>',
        count: '已選擇 {count}',
        maxSelections: '最多 {maxCount} 個選擇',
        noResults: '未找到結果',
        serverError: '連接服務器時發生錯誤'
      }
    }
  
    if (messages[gon.locale]) {
      $.fn.dropdown.settings.message = messages[gon.locale]
    }
  }());
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
  document.addEventListener("error", function (ev) {
    var elem = ev.target;
    if (elem.tagName.toLowerCase() === 'img') {
      elem.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAAAAACIM/FCAAACh0lEQVR4Ae3ch5W0OgyG4dt/mQJ2xgQPzJoM1m3AbALrxzrf28FzsoP0HykJEEAAAUQTBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEkKK0789+GK/I2ezfQB522PnS1qc8pGgXvr4tE4aY0XOUWlGImThWgyCk6DleixzE7qwBkg/MGiDPlVVAyp1VQGrPKiACDhFI6VkF5LmzCki+sg7IwDoglnVAil0IMkeG9CyUiwsxLFUVFzJJOQaKCjFCDN9RXMjIX7W6ztZXZDKKCyn8sWJvH+nca7WHDN9lROlAliPH9iRKCPI4cswFJQWxB46toLQgQ9jhn5QYZA9DOkoMUoQde5YapAxDWkoNYsOQR3KQd9CxUnIQF4S49CB9ENKlBxmDEKsFUgMCCCCAAHIrSF61f6153Ajy8nyiPr8L5MXnmm4CyT2fzN4DUvHZ+ntA2tOQBRBAAAEEEEAAAQQQ7ZBaC6TwSiDUaYHQ2yuB0MN+ft+43whyrs4rgVCjBUKTFshLC6TUAjGA3AxSaYFYLZBOC2RUAsk8h5qTg9QcbEoOsoQhQ2qQhsO5xCD5dgB5JQaZ+KBKGtKecvR81Ic0ZDjByKdDx0rSEDZ/djQbH+bkIdvfJFm98BfV8hD2zprfVdlu9PxVeyYAkciREohRAplJCaRSAplJCcQogTjSAdlyHRBvSAekJR0QRzogA+mADJkOiCPSAPEtqYBshlRAXC43hxix2QiOuEZkVERykGyNo9idIZKE0HO7XrG6OiMShlDWjstVzdPgXtUH9v0CEidAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQP4HgjZxTpdEii0AAAAASUVORK5CYII=";
    }
  }, true);
</script>
</head>

<body class='git-project lang-zh-CN'>
<header class='common-header fixed noborder' id='git-header-nav'>
<div class='ui container'>
<div class='ui menu header-menu header-container'>
<div class='git-nav-expand-bar'>
<i class='iconfont icon-mode-table'></i>
</div>
<div class='gitee-nav__sidebar'>
<div class='gitee-nav__sidebar-container'>
<div class='gitee-nav__sidebar-top'>
<div class='gitee-nav__avatar-box'></div>
<div class='gitee-nav__buttons-box'>
<a class="ui button small fluid orange" href="/login">登录</a>
<a class="ui button small fluid basic is-register" href="/signup">注册</a>
</div>
</div>
<div class='gitee-nav__sidebar-middle'>
<div class='gitee-nav__sidebar-list'>
<ul>
<li class='gitee-nav__sidebar-item'>
<a href="/explore"><i class='iconfont icon-ic-discover'></i>
<span class='gitee-nav__sidebar-name'>开源</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/enterprises"><i class='iconfont icon-ic-enterprise'></i>
<span class='gitee-nav__sidebar-name'>企业版</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/education"><i class='iconfont icon-ic-education'></i>
<span class='gitee-nav__sidebar-name'>高校版</span>
</a></li>
<li class='gitee-nav__sidebar-item split-line'></li>
<li class='gitee-nav__sidebar-item'>
<a href="/search"><i class='iconfont icon-ic-search'></i>
<span class='gitee-nav__sidebar-name'>搜索</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/help"><i class='iconfont icon-help-circle'></i>
<span class='gitee-nav__sidebar-name'>帮助中心</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/terms"><i class='iconfont icon-file'></i>
<span class='gitee-nav__sidebar-name'>使用条款</span>
</a></li>
<li class='gitee-nav__sidebar-item'>
<a href="/about_us"><i class='iconfont icon-issuepx'></i>
<span class='gitee-nav__sidebar-name'>关于我们</span>
</a></li>
</ul>
</div>
</div>
<div class='gitee-nav__sidebar-bottom'>
<div class='gitee-nav__sidebar-close-button'>
<i class='fa fa-angle-double-left'></i>
</div>
</div>
</div>
</div>

<!-- /todo 10周年活动结束后 恢复 -->
<div class='item gitosc-logo'>
<a href="https://gitee.com"><img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='28' src='/static/images/logo.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='95'>
<img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='28' src='/static/images/logo-black.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='95'>
</a></div>
<a title="开源" class="item " href="/explore">开源
</a><a title="企业版" class="item " sa_evt="click_GiteeCommunity_tab_En" href="/enterprises">企业版
</a><a title="高校版" class="item " href="/education">高校版
</a><a title="私有云" class="item" target="_blank" href="https://gitee.cn?utm_source=giteecom">私有云
</a><a title="Gitee AI" class="item mr-3" id="gitee-blog" target="_blank" href="https://ai.gitee.com/?utm_sources=site_nav">Gitee AI
<sup class='ui red label'>
NEW
</sup>
</a><div class='center responsive-logo'>
<a href="https://gitee.com"><img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline image' height='24' src='/static/images/logo.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='85'>
<img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='ui inline black image' height='24' src='/static/images/logo-black.svg?t=158106664' title='Gitee - 基于 Git 的代码托管和研发协作平台' width='85'>
</a></div>
<div class='right menu userbar right-header' id='git-nav-user-bar'>
<form class="ui item" id="navbar-search-form" data-text-require="搜索关键字不能少于1个" data-text-filter="搜索格式不正确" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<input type="hidden" name="type" id="navbar-search-type" />
<input type="hidden" name="fork_filter" id="fork_filter" value="on" />
<div class='ui search header-search'>
<input type="text" name="q" id="navbar-search-input" value="" class="prompt" placeholder="搜开源" />
</div>
</form>

<script>
  var can_search_in_repo = 1,
      repo = "VFhwWmQwNUVZekJOZW1Sb1RucFplbHBuUFQxaE56WXpaZz09YTc2M2Y=",
      reponame = "dodboy/88";
  
  $(function() {
    var $search = $('#navbar-search-form .ui.search');
    $search.search({
      apiSettings: {
        url: '/search/relative_project?q={query}',
        onResponse: function (res) {
          if (res && res.status === 200 && res.data) {
            var query = htmlSafe($search.search('get value'));
  
            res.data.map(function (item) {
              item.path_ns = '/' + item.path_ns;
              item.icon = 'iconfont icon-project-public';
            });
            res.data.unshift({
              name_ns: "在全站搜索 <b class='hl'>" + query +"</b> 相关项目",
              path_ns: '/search?fork_filter=on&q=' + query,
              icon: 'iconfont icon-search'
            });
            return res;
          } else {
            return { data: [] };
          }
        }
      },
      fields: {
        results: 'data',
        description: 'name_ns',
        url: 'path_ns',
        icon: 'icon'
      },
      minCharacters: 1,
      maxResults: 10,
      searchDelay: 250,
      showNoResults: false,
      transition: 'fade'
    });
  });
</script>

<div class='ui item' id='feature-update-notice'>
<div class='notice-update-icon'>
<a class="notice-update-popup click-knowed" title="" href="javascript:void(0)"><img alt="功能更新" title="" class="bubl_icon bubl-off-icon" src="https://cn-assets.gitee.com/assets/bulb_off-24ee940be20998aace89a3f040cbc704.svg" />
<img alt="功能更新" title="" class="bubl_icon bubl-on-icon" src="https://cn-assets.gitee.com/assets/bulb_on-3986b1dc417285398e3d15671bd8f261.svg" />
</a></div>
<div class='feature-update-notice-panel menu'>
<div class='notice-img'>
<img alt="" title="" class="notice-img-show" src="" />
</div>
<div class='notice-update-title'></div>
<div class='notice-update-des'></div>
<div class='notice-btn-list d-flex-between'>
<button name="button" type="button" class="ui basic orange button btn-notice btn-knowed click-knowed" style="margin-right: 0">我知道了</button>
<a class="ui button orange btn-notice btn-details click-knowed" target="_blank" href="">查看详情</a>
</div>
</div>
</div>

<a class="item git-nav-user__login-item" sa_evt="login_show" sa_referrer_url="" sa_referrer_action="站导航右上角-登录按钮" sa_referrer_type="其他" href="/login">登录
</a><a class="item git-nav-user__register-item" sa_evt="register_show" sa_referrer_url="" sa_referrer_action="站导航右上角-注册按钮" sa_referrer_type="其他" href="/signup">注册
</a><script>
  $('.destroy-user-session').on('click', function() {
    $.cookie('access_token', null, { path: '/' });
  })
</script>

</div>
</div>
</div>
</header>
<script>
  Gitee.initNavbar()
  Gitee.initRepoRemoteWay()
  $.cookie('user_locale',null)
</script>

<script>
  var userAgent = navigator.userAgent;
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  if(isLessIE11){
    var can_access = ""
    if (can_access != "true"){
      window.location.href = "/incompatible.html";
    }
  }
</script>

<div class='fixed-notice-infos'>
<div class='all-messages'>
<div class='ui info message' id='git-bulletin'>
<a href=https://wj.qq.com/s2/14795837/1e1d/ target='_blank'>【Gitee Al】奖池超20万人民币，欢迎每个有想法的你！AI应用开发大赛火热报名中，点击立即报名~</a>
<i class='icon remove' id='remove-bulletin'></i>
</div>
</div>
<div class='ui container'>
<div class='flash-messages' id='messages-container'></div>
</div>
<script>
  (function() {
    $(function() {
      var $error_box, alertTip, notify_content, notify_options, template;
      template = '<div data-notify="container" class="ui {0} message" role="alert">' + '<i data-notify="dismiss" class="close icon"></i>' + '<span data-notify="message">{2}</span>' + '</div>';
      notify_content = null;
      notify_options = {};
      alertTip = '';
      $error_box = $(".flash_error.flash_error_box");
      if (notify_options.type === 'error' && $error_box.length > 0 && !$.isEmptyObject(notify_content.message)) {
        if (notify_content.message === 'captcha_fail') {
          alertTip = "验证码不正确";
        } else if (notify_content.message === 'captcha_expired') {
          alertTip = "验证码已过期，请点击刷新";
        } else if (notify_content.message === 'not_found_in_database') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'not_found_and_show_captcha') {
          alertTip = "帐号或者密码错误";
        } else if (notify_content.message === 'phone_captcha_fail') {
          alertTip = "手机验证码不通过";
        } else {
          alertTip = notify_content.message;
        }
        return $error_box.html(alertTip).show();
      } else if (notify_content) {
        if ("show" === 'third_party_binding') {
          return $('#third_party_binding-message').html(notify_content.message).addClass('ui message red');
        }
        notify_options.delay = 3000;
        notify_options.template = template;
        notify_options.offset = {
          x: 10,
          y: 30
        };
        notify_options.element = '#messages-container';
        return $.notify(notify_content, notify_options);
      }
    });
  
  }).call(this);
</script>

</div>
<script>
  (function() {
    $(function() {
      var setCookie;
      setCookie = function(name, value) {
        $.cookie(name, value, {
          path: '/',
          expires: 365
        });
      };
      $('#remove-bulletin, #remove-bulletin-dashboard').on('click', function() {
        setCookie('remove_bulletin', "gitee-maintain-1720417181");
        $('#git-bulletin').hide();
      });
      $('#remove-member-bulletin').on('click', function() {
        setCookie('remove_member_bulletin', "gitee_member_bulletin");
        $(this).parent().hide();
      });
      return $('#remove-gift-bulletin').on('click', function() {
        setCookie('remove_gift_bulletin', "gitee-gift-bulletin");
        $(this).parent().hide();
      });
    });
  
  }).call(this);
</script>
<script>
  function closeMessageBanner(pthis, type, val) {
    var json = {}
  
    val = typeof val === 'undefined' ? null : val
    $(pthis).parent().remove()
    if (type === 'out_of_enterprise_member') {
      json = {type: type, data: val}
    } else if (type === 'enterprise_overdue') {
      json = {type: type, data: val}
    }
    $.post('/profile/close_flash_tip', json)
  }
</script>

<div class='site-content'>
<div class='git-project-header'>
<div class='fixed-notice-infos'>
<div class='ui info icon floating message green' id='fetch-ok' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
代码拉取完成，页面将自动刷新
</div>
</div>
</div>
<div class='ui info icon floating message error' id='fetch-error' style='display: none'>
<div class='content'>
<div class='header status-title'>
<i class='info icon status-icon'></i>
<span class='error_msg'></span>
</div>
</div>
</div>
</div>
<div class='ui container'>

<div class='git-project-header-details'>
<div class='git-project-header-container'>
<div class='git-project-header-actions'>
<div class='ui tiny modal project-donate-modal' id='project-donate-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>捐赠</div>
<div class='content'>
捐赠前请先登录
</div>
<div class='actions'>
<a class='ui blank button cancel'>取消</a>
<a class='ui orange ok button' href='/login'>前往登录</a>
</div>
</div>
<div class='ui small modal wepay-qrcode'>
<i class='iconfont icon-close close'></i>
<div class='header'>
扫描微信二维码支付
<span class='wepay-cash'></span>
</div>
<div class='content weqcode-center'>
<img id='wepay-qrcode' src=''>
</div>
<div class='actions'>
<div class='ui cancel blank button'>取消</div>
<div class='ui ok orange button'>支付完成</div>
</div>
</div>
<div class='ui mini modal' id='confirm-alipay-modal'>
<div class='header'>支付提示</div>
<div class='content'>
将跳转至支付宝完成支付
</div>
<div class='actions'>
<div class='ui approve orange button'>确定</div>
<div class='ui blank cancel button'>取消</div>
</div>
</div>

<span class='ui buttons basic watch-container'>
<div class='ui dropdown button js-project-watch' data-watch-type='unwatch'>
<input type='hidden' value=''>
<i class='iconfont icon-watch'></i>
<div class='text'>
Watch
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<a data-value="unwatch" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/dodboy/88/unwatch"><i class='iconfont icon-msg-read'></i>
不关注
</a><a data-value="watching" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/dodboy/88/watch"><i class='iconfont icon-msg-read'></i>
关注所有动态
</a><a data-value="releases_only" class="disabled item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/dodboy/88/release_only_watch"><i class='iconfont icon-msg-read'></i>
仅关注版本发行动态
</a><a data-value="ignoring" class="item" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Watch" sa_referrer_type="其他" rel="nofollow" data-method="post" href="/dodboy/88/ignoring_watch"><i class='iconfont icon-msg-read'></i>
关注但不提醒动态
</a></div>
</div>
<style>
  .js-project-watch .text .iconfont {
    display: none; }
  .js-project-watch a, .js-project-watch a:hover {
    color: #000; }
  .js-project-watch .item > .iconfont {
    visibility: hidden;
    margin-left: -10px; }
  .js-project-watch .selected .iconfont {
    visibility: visible; }
  .js-project-watch .menu {
    margin-top: 4px !important; }
</style>
<script>
  $('.js-project-watch').dropdown({
    action: 'select',
    onChange: function(value, text, $selectedItem) {
      var type = value === 'unwatch' ? 'Watch' : 'Watching';
      $(this).children('.text').text(type);
      $(this).dropdown('set selected', value)
    }
  });
</script>

<a class="ui button action-social-count" title="1" href="/dodboy/88/watchers">1
</a></span>
<span class='basic buttons star-container ui'>
<a class="ui button star" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Star" sa_referrer_type="其他" href="/login"><i class='iconfont icon-star'></i>
Star
</a><a class="ui button action-social-count " title="0" href="/dodboy/88/stargazers">0
</a></span>
<span class='ui basic buttons fork-container' title='无权 Fork 此仓库'>
<a class="ui button fork" title="你必须登录后才可以fork一个仓库" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="Fork" sa_referrer_type="其他" href="/login"><i class='iconfont icon-fork'></i>
Fork
</a><a class="ui button action-social-count disabled-style" title="0" href="/dodboy/88/members">0
</a></span>
</div>
<h2 class='git-project-title mt-0 mb-0'>
<span class="project-title"><i class="project-icon iconfont icon-project-public" title="这是一个公开仓库"></i> <a title="DODBOY" class="author" href="/dodboy">DODBOY</a>/<a title="88" class="repository" target="" style="padding-bottom: 0px; margin-right: 4px" sa_evt="repoClick" sa_location="其他" sa_url="" sa_repo_id="36047437" href="/dodboy/88">88</a></span><span class="project-badges"><style>
  .gitee-modal {
    width: 500px !important; }
</style>
</span>
<input type="hidden" name="project_title" id="project_title" value="DODBOY/88" />
</h2>
</div>
</div>
</div>
<script>
  var title_import_url = "https://gitcode.com/DODBOY/88.git";
  var title_post_url = "/dodboy/88/update_import";
  var title_fork_url = "/dodboy/88/sync_fork";
  var title_project_path = "88";
  var title_p_name = "88";
  var title_p_id= "36047437";
  var title_description = "";
  var title_form_authenticity_token = "x1pwSUqF4y51leQwUis+9V9AEQzY4T9zlM2xHCy/aQDKPxxHAFQTre2mrOrzl/ytTtTqGmQ1W960OVZdZ5DEVA==";
  var watch_type = "unwatch";
  var checkFirst = false;
  
  $('.js-project-watch').dropdown('set selected', watch_type);
  $('.checkbox.sync-wiki').checkbox();
  $('.checkbox.sync-prune').checkbox();
  $('.checkbox.team-member-checkbox').checkbox();
</script>
<style>
  i.loading, .icon-sync.loading {
    -webkit-animation: icon-loading 1.2s linear infinite;
    animation: icon-loading 1.2s linear infinite;
  }
  .qrcode_cs {
    float: left;
  }
  .check-sync-wiki {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .sync-wiki-warn {
    color: #e28560;
  }
</style>

<div class='git-project-nav'>
<div class='ui container'>
<div class='ui secondary pointing menu'>
<a class="item active " href="/dodboy/88"><i class='iconfont icon-code'></i>
代码
</a><a class="item " href="/dodboy/88/issues"><i class='iconfont icon-task'></i>
Issues
<span class='ui mini circular label'>
0
</span>
</a><a class="item " href="/dodboy/88/pulls"><i class='iconfont icon-pull-request'></i>
Pull Requests
<span class='ui mini circular label'>
0
</span>
</a><a class="item " href="/dodboy/88/wikis"><i class='iconfont icon-wiki'></i>
Wiki
</a><a class="item  " href="/dodboy/88/graph/master"><i class='iconfont icon-statistics'></i>
统计
</a><a class="item " href="/dodboy/88/gitee_go"><i class='iconfont icon-workflow'></i>
流水线
</a><div class='item'>
<div class='ui pointing top right dropdown git-project-service'>
<div>
<i class='iconfont icon-service'></i>
服务
<i class='dropdown icon'></i>
</div>
<div class='menu' style='display:none'>
<a class="item" href="/dodboy/88/pages"><img src="/static/images/logo-en.svg" alt="Logo en" />
<div class='item-title'>
Gitee Pages
</div>
</a><a class="item" href="/dodboy/88/javadoc"><img src="https://cn-assets.gitee.com/assets/maven-bd58aee84f266d64d4b8ce5b006a9fcf.png" alt="Maven" />
<div class='item-title'>
JavaDoc
</div>
</a><a class="item" href="/dodboy/88/phpdoc"><img src="https://cn-assets.gitee.com/assets/phpdoc-a99f87c2feaa2fd99e5065377a39487e.png" alt="Phpdoc" />
<div class='item-title'>
PHPDoc
</div>
</a><a class="item" href="/dodboy/88/quality_analyses?platform=sonar_qube"><img src="https://cn-assets.gitee.com/assets/sonar_mini-5e1b54bb9f6c951d97fb778ef623afea.png" alt="Sonar mini" />
<div class='item-title'>
质量分析
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4193"><img src="https://cn-assets.gitee.com/assets/jenkins_for_gitee-554ec65c490d0f1f18de632c48acc4e7.png" alt="Jenkins for gitee" />
<div class='item-title'>
Jenkins for Gitee
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4318"><img src="https://cn-assets.gitee.com/assets/cloudbase-1197b95ea3398aff1df7fe17c65a6d42.png?20200925" alt="Cloudbase" />
<div class='item-title'>
腾讯云托管
</div>
</a><a class="item" target="_blank" href="https://gitee.com/help/articles/4330"><img src="https://cn-assets.gitee.com/assets/cloud_serverless-686cf926ced5d6d2f1d6e606d270b81e.png" alt="Cloud serverless" />
<div class='item-title'>
腾讯云 Serverless
</div>
</a><a class="item" href="/dodboy/88/open_sca"><img src="https://cn-assets.gitee.com/assets/open_sca/logo-9049ced662b2f9936b8001e6f9cc4952.png" alt="Logo" />
<div class='item-title'>
悬镜安全
</div>
</a><a class="item" target="_blank" href="https://help.gitee.com/devops/connect/Aliyun-SAE"><img src="https://cn-assets.gitee.com/assets/SAE-f3aa9366a1e2b7fff4747402eb8f10c3.png" alt="Sae" />
<div class='item-title'>
阿里云 SAE
</div>
</a><a class="item" id="update-codeblitz-link" target="_blank" href="https://codeblitz.cloud.alipay.com/gitee/dodboy/88/tree/master/js/lu.js"><img style="width:100px;margin-top:4px" src="https://cn-assets.gitee.com/assets/Codeblitz-8824e38875a106e16e29ff57ec977b08.png" alt="Codeblitz" />
<div class='item-title'>
Codeblitz
</div>
</a><button class='ui orange basic button quit-button' id='quiting-button'>
我知道了，不再自动展开
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script>
  $('.git-project-nav .ui.dropdown').dropdown({ action: 'nothing' });
  var gitee_reward_config = JSON.parse(localStorage.getItem('gitee_reward_config') || null) || false
  var $settingText = $('.setting-text')
  // 如果没有访问过
  if(!gitee_reward_config) $settingText.addClass('red-dot')
  $('.git-project-service').dropdown({
    on: 'click',
    action: 'nothing',
    onShow: function () {
      const branch = 'master'
      let newUrl = `https://codeblitz.cloud.alipay.com/gitee/dodboy/88/tree/`
      const url = decodeURIComponent(window.location.pathname);
      const startIndex = url.indexOf('master');
      if (startIndex !== -1) {
        newUrl = newUrl + url.substring(startIndex); // 从分支名开始截取
      }else{
        newUrl = newUrl + branch
      }
      const linkElement = document.getElementById("update-codeblitz-link");
      linkElement.setAttribute("href", newUrl);
    },
  })
</script>
<style>
  .git-project-nav i.checkmark.icon {
    color: green;
  }
  #quiting-button {
    display: none;
  }
  
  .git-project-nav .dropdown .menu.hidden:after {
    visibility: hidden !important;
  }
</style>
<script>
  isSignIn = false
  isClickGuide = false
  $('#git-versions.dropdown').dropdown();
  $.ajax({
    url:"/dodboy/88/access/add_access_log",
    type:"GET"
  });
  $('#quiting-button').on('click',function() {
    $('.git-project-service').click();
    if (isSignIn) {
      $.post("/projects/set_service_guide")
    }
    $.cookie("Serve_State", true, { expires: 3650, path: '/'})
    $('#quiting-button').hide();
  });
  if (!(isClickGuide || $.cookie("Serve_State") == 'true')) {
    $('.git-project-service').click()
    $('#quiting-button').show()
  }
</script>

</div>
<div class='ui container'>
<div class='register-guide'>
<div class='register-container'>
<div class='regist'>
加入 Gitee
</div>
<div class='description'>
与超过 1200万 开发者一起发现、参与优秀开源项目，私有仓库也完全免费 ：）
</div>
<a class="ui orange button free-registion" sa_evt="register_show" sa_referrer_url="" sa_referrer_action="免费加入" sa_referrer_type="其他" href="/signup?from=project-guide">免费加入</a>
<div class='login'>
已有帐号？
<a href="/login?from=project-guide">立即登录</a>
</div>
</div>
</div>

<div class='git-project-content-wrapper'>

<div class='ui grid' id='project-wrapper'>
<div class='sixteen wide column' id='git-project-container'>
<div class='git-project-content' id='git-project-content'>
<div class='row'>
<div class='git-project-desc-wrapper'>
<div class='ui yellow message no-license' id='user-no-license-message'>
<div class='float-left' style='width: 95%;'>
该仓库未声明开源许可证文件（LICENSE），使用请关注具体项目描述及其代码上游依赖。
<i class='help circle icon'></i>
<div class='ui popup dark'>
项目仓库所选许可证以仓库主分支所使用许可证为准
</div>
</div>
<i class='remove icon' id='remove-no-license-message'></i>
<div class='clearfix'></div>
</div>
<script>
  $('.git-project-desc-wrapper .ui.dropdown').dropdown();
  if (false) {
    gon.project_new_blob_path = "/dodboy/88/new/master/js/lu.js"
    bindShowModal({
      el: $('.no-license .project-license__create'),
      complete: function(data, modal) {
        if (!data.haveNoChoice && !data.data) {
          Flash.show('请选择一项开源许可证')
        } else {
          location.href = gon.project_new_blob_path + '?license=' + data.data
        }
      },
      skip: function () {
        location.href = gon.project_new_blob_path + '?license'
      }
    });
  }
  
  $(".project-admin-action-box .reject").click(function() {
    var reason = $('[name=review-reject-reason]').val();
    if (!reason) {
      Flash.error('请选择不通过理由')
      return
    }
    $.ajax({
      type: 'POST',
      url: "/admin/shumei_content/shumei_check/reject_project_public",
      data: {
        reason: reason,
        status: 'rejected',
        project_id: 36047437
      },
      success: function(result){
        if(result.status == 'success'){
          window.location.reload();
        }else{
          Flash.error(result.message)
        }
      }
    })
  })
  
  $(".project-admin-action-box .approve").click(function(){
  
    $.ajax({
      type: 'POST',
      url: "/admin/shumei_content/shumei_check/reject_project_public",
      data: {
        status: 'approved',
        project_id: 36047437
      },
      success: function(result){
        if(result.status == 'success'){
          window.location.reload();
        }else{
          Flash.error(result.message)
        }
      }
    })
  })
  
  $(".project-admin-action-box .waiting").click(function(){
  
    $.ajax({
      type: 'POST',
      url: "/admin/shumei_content/shumei_check/reject_project_public",
      data: {
        status: 'waiting',
        project_id: 36047437
      },
      success: function(result){
        if(result.status == 'success'){
          window.location.reload();
        }else{
          Flash.error(result.message)
        }
      }
    })
  })
  
  $('i.help.circle.icon').popup({
    popup: '.no-license .ui.popup',
    position: 'right center'
  });
  
  $('#remove-no-license-message').on('click', function() {
    $.cookie("skip_repo_no_license_message_36047437", 'hide', { expires: 365 });
    $('#user-no-license-message').hide();
    return;
  });
</script>
</div>

</div>
<div class='git-project-bread' id='git-project-bread'>
<div class='ui horizontal list mr-1'>
<div class='item git-project-branch-item'>
<input type="hidden" name="path" id="path" value="js/lu.js" />
<div class='ui top left pointing dropdown gradient button dropdown-has-tabs' id='git-project-branch'>
<input type="hidden" name="ref" id="ref" value="master" />
<div class='default text'>
master
</div>
<i class='dropdown icon'></i>
<div class='menu'>
<div class='ui left icon input'>
<i class='iconfont icon-search dropdown-search-icon'></i>
<input class='search-branch' placeholder='搜索分支' type='text'>
</div>
<div class='tab-menu project-branch-tab-menu'>
<div class='tab-menu-actions d-align-center'>
<div class='tab-menu-action' data-tab='branches'>
<a class="ui link button" href="/dodboy/88/branches">管理</a>
</div>
<div class='tab-menu-action' data-tab='tags'>
<a class="ui link button" href="/dodboy/88/tags">管理</a>
</div>
</div>
<div class='tab-menu-item' data-placeholder='搜索分支' data-tab='branches'>
分支 (1)
</div>
</div>
<div class='tab scrolling menu' data-tab='branches' id='branches_panel'>
<div data-value="master" class="item"><span>master</span></div>
</div>
</div>
</div>
<style>
  .iconfont.icon-shieldlock {
    color: #8c92a4;
  }
  .dropdown-search-icon {
    position: absolute;
    top: 8px;
    left: 11px;
  }
</style>
<style>
  #git-project-branch .project-branch-tab-menu {
    width: 400px !important;
    margin: 0 16px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    border-bottom: 1px solid #dfe3e9 !important; }
  #git-project-branch .tab-menu-actions {
    position: absolute;
    right: 0px !important;
    bottom: 0.357em; }
  #git-project-branch .tab-menu-action {
    position: relative !important;
    right: 0px !important;
    bottom: 0px !important; }
  #git-project-branch .menu::after {
    display: none !important; }
</style>
<script>
  var $branchesDropdown = $('#branches_panel');
  var $tagsDropdown = $('#tags_panel');
  var $searchNameInput = $('.search-branch');
  var concurrentRequestLock = false;
  var filterXSS = window.filterXSS;
  var search_text = "";
  var branch_page_number = 1;
  var branch_total_pager = Math.ceil(1 / 20) || 1
  
  var flag_is_loading = false;
  var flag_page_number = 1;
  var flag_total_pager = Math.ceil(0 / 20) || 1
  
  $branchesDropdown.scroll(function() {
    var branchesPanel = document.getElementById('branches_panel');
    var numOfBranches = $branchesDropdown.children().length;
    if (branchesPanel.clientHeight + branchesPanel.scrollTop + 37 > branchesPanel.scrollHeight && numOfBranches < 1) {
      debounceLoadMoreBranches.call();
    }
  });
  function resetFlagVal() {
    flag_is_loading = false;
    flag_page_number = 1;
    flag_total_pager = 1;
  
    concurrentRequestLock = false
    search_text = "";
    branch_page_number = 1;
    branch_total_pager = 1
  }
  $searchNameInput.on('input', window.globalUtils.debouce(function (e) {
    resetFlagVal()
    var $currentTab = $('.tab-menu-action.active');
    var numOfBranches = $branchesDropdown.children().length;
    var searchWord = $searchNameInput.val().trim();
    search_text = searchWord
    if($currentTab.data('tab') === 'branches') {
      if (searchWord !== "") {
        loadData(searchWord,1);
      } else {
        loadData();
      }
    }
    var numOfTags = $tagsDropdown.children().length;
    if($currentTab.data('tab') === 'tags') {
      if (searchWord !== "") {
        fetchTags(searchWord,1);
      } else {
        fetchTags();
      }
    }
  }, 500));
  
  function toggleNoResultView($popPanel) {
    let no_data_html= `<div class='mt-1 mb-1 d-flex-center'> <span>暂无数据</span> </div>`
    $popPanel.append(no_data_html)
  }
  var debounceLoadMoreBranches = window.globalUtils.debouce(function () {
    if (concurrentRequestLock) return;
    branch_page_number += 1;
    if (branch_page_number > branch_total_pager) return;
    loadData(search_text, branch_page_number);
  }, 350);
  
  function loadData(search, page) {
    if (concurrentRequestLock) { return; }
    concurrentRequestLock = true;
  
    var searchParams = search || "";
    var pageParams = page || 1;
    $.ajax({
      url: "/" + gon.user_project + "/branches/names.json",
      type: 'GET',
      data: {
        search: searchParams,
        page: pageParams,
      },
      dataType: 'json',
      success: function (data) {
        branch_total_pager = data.total_pages;
        var html = '';
  
        if (pageParams === 1) {
          $branchesDropdown.empty();
        }
        data.branches.forEach(function (branch) {
          var protectRule = '';
          var branchName = filterXSS(branch.name);
          if(branch.branch_type.value === 1) {
            var rule = filterXSS(branch.protection_rule.wildcard);
            protectRule = `<i
                class="iconfont icon-shieldlock protected-branch-popup"
                data-title="受保护分支"
                data-content='保护规则： ${rule}'
              >
              </i>`
          }
          html += `<div data-value='${branchName}' class="item">
                    <span>${branchName}</span> ${protectRule}
                    </div>`
        });
        $branchesDropdown.append(html);
        $('.protected-branch-popup').popup()
        if (pageParams === 1 && data.count === 0) {
          toggleNoResultView($branchesDropdown);
        }
      },
      complete: function () {
        concurrentRequestLock = false;
      }
    });
  }
  
  
  
  $tagsDropdown.scroll(function() {
    var tagsPanel = document.getElementById('tags_panel');
    var numOfTags = $tagsDropdown.children().length;
    if (tagsPanel.clientHeight + tagsPanel.scrollTop + 37 > tagsPanel.scrollHeight && numOfTags < 0) {
      debounceLoadMore.call();
    }
  });
  var debounceLoadMore = window.globalUtils.debouce(function () {
    if (flag_is_loading) return;
    flag_page_number += 1;
    if (flag_page_number > flag_total_pager) return;
    fetchTags(search_text, flag_page_number);
  }, 350);
  
  function fetchTags(search, page) {
    var searchParams = search || "";
    var pageParams = page || 1;
  
    if (flag_is_loading) return;
    flag_is_loading = true;
  
    $.ajax({
      url: "/" + gon.user_project + "/tags/names.json",
      data: {
        search: searchParams,
        page: pageParams,
      },
      type: "GET",
      xhrFields: {
        withCredentials: true,
      },
      success: function (data) {
        flag_total_pager = data.total_pages;
        if (pageParams === 1) {
          $tagsDropdown.html('');
        }
        data.tags.forEach((tag) => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
          itemDiv.setAttribute('data-value', tag.name);
          itemDiv.innerText = window.filterXSS(tag.name);
          $tagsDropdown.append(itemDiv)
        });
        if (pageParams === 1 && data.count === 0) {
          toggleNoResultView($tagsDropdown);
        }
      },
      error: function () {
      },
      complete: function () {
        flag_is_loading = false;
      },
    });
  }
  $('.project-branch-tab-menu').on('click','.tab-menu-item', function (e) {
    var $currentTab = $(this).data('tab')
    if($currentTab === 'branches') {
      $searchNameInput.val('')
      search_text = '';
      loadData()
    }
    if($currentTab === 'tags') {
      $searchNameInput.val('')
      search_text = '';
      fetchTags();
    }
  })
</script>

<script>
  $(function () {
    Gitee.initTabsInDropdown($('#git-project-branch').dropdown({
      fullTextSearch: true,
      selectOnKeydown: false,
      action: function (text,value,el) {
        var oItemOrInitObject = el[0] || el
        var isNotSelect = oItemOrInitObject.dataset.tab && oItemOrInitObject.dataset.tab === 'branches'
        if(isNotSelect){
          console.warn("You didn't choose a branch")
          return
        }
        var path = $('#path').val();
        var href = ['/dodboy/88/tree', encodeURIComponent(value), path].join('/');
        window.location.href = href;
        return true
      },
      onNoResults: function (searchTerm) {
        //未找到结果
        return true
      },
    }));
    $('.protected-branch-popup').popup()
  })
</script>

</div>
</div>
<div class='git-project-right-actions pull-right'>
<div class='ui orange button' id='btn-dl-or-clone'>
克隆/下载
<i class='dropdown icon'></i>
</div>
<div class='ui small modal' id='git-project-download-panel'>
<i class='iconfont icon-close close'></i>
<div class='header'>
克隆/下载
</div>
<div class='content'>
<div class='ui secondary pointing menu mb-2 menu-container'>
<a class='item active' data-text='' data-type='http' data-url='https://gitee.com/dodboy/88.git'>HTTPS</a>
<a class='item' data-text='' data-type='ssh' data-url='git@gitee.com:dodboy/88.git'>SSH</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/dodboy/88/settings#function&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn' data-url=''>SVN</a>
<a class='item' data-text="该仓库未启用SVN访问，请仓库管理员前往【&lt;a target='_blank' href=/dodboy/88/settings#function&gt;仓库设置&lt;/a&gt;】开启。" data-type='svn_ssh' data-url=''>SVN+SSH</a>
<a class="ui basic orange button button-box unlogin-download-btn" sa_evt="loginInform_show" sa_referrer_url="" sa_referrer_action="克隆/下载" sa_referrer_type="其他" href="javascript:void(0);"><i class='icon download'></i>
下载ZIP
</a><div class='ui custom popup popup'>
<div class='popup-container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<a class="ui orange button ok icon" href="/login?from=download_repository_zip">立即登录
</a><a class="ui blank button cancel" href="/signup?from=download_repository_zip">没有帐号，去注册
</a></div>
</div>
</div>
<div class='ui fluid right labeled small input download-url-panel mb-2'>
<input type="text" name="project_url_clone" id="project_url_clone" value="https://gitee.com/dodboy/88.git" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#project_url_clone' id='btn-copy-project_clone_url1'></i>
</div>
</div>
<div class='tip-box mb-2'>
提示
</div>
<div class='mb-1 clone-url-title'>
下载代码请复制以下命令到终端执行
</div>
<div class='ui fluid right labeled small input download-url-panel mb-2'>
<input type="text" name="project_clone_url" id="project_clone_url" value="https://gitee.com/dodboy/88.git" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#project_clone_url' id='btn-copy-project_clone_url'></i>
</div>
</div>
<div class='ui fluid right labeled warning-text forbid-warning-text'>

</div>
<div class='http-ssh-item mb-2'>
<div>
为确保你提交的代码身份被 Gitee 正确识别，请执行以下命令完成配置
</div>
<div class='textarea-box mt-2'>
<textarea class='textarea-content-box' id='global-config-clone' readonly>git config --global user.name userName &#10git config --global user.email userEmail</textarea>
<i class='icon iconfont icon-clone mr-2 btn-copy-clone text-dark' data-clipboard-target='#global-config-clone' id='btn-copy-global-config'></i>
</div>
</div>
<div class='ssh-item item-panel-box'>
<div class='mb-2'>
初次使用 SSH 协议进行代码克隆、推送等操作时，需按下述提示完成 SSH 配置
</div>
<div class='mb-1'>
<span>1</span>
生成 RSA 密钥
</div>
<div class='ui fluid right labeled small input mb-2'>
<input type="text" name="ssh_keygen_clone" id="ssh_keygen_clone" value="ssh-keygen -t rsa" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#ssh_keygen_clone' id='btn-copy-ssh_keygen'></i>
</div>
</div>
<div class='mb-1'>
<span>2</span>
获取 RSA 公钥内容，并配置到<a href='/profile/sshkeys' target="_blank"> SSH公钥 </a> 中
</div>
<div class='ui fluid right labeled small input mb-2'>
<input type="text" name="id_rsa_clone" id="id_rsa_clone" value="cat ~/.ssh/id_rsa.pub" onclick="focus();select()" readonly="readonly" />
<div class='ui basic label copy-icon-box'>
<i class='icon iconfont icon-clone mr-0 btn-copy-clone' data-clipboard-target='#id_rsa_clone' id='btn-copy-d_rsa'></i>
</div>
</div>
</div>
<div class='svn-item item-panel-box'>
<div class='mb-1 mt-2'>
在 Gitee 上使用 SVN，请访问<a href='https://help.gitee.com/enterprise/code-manage/%E4%BB%A3%E7%A0%81%E6%89%98%E7%AE%A1/%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93/Gitee%20SVN%E6%94%AF%E6%8C%81' target="_blank"> 使用指南 </a>
</div>
</div>
<div class='http-item item-panel-box'>
<div class='mb-2 mt-2'>
使用 HTTPS 协议时，命令行会出现如下账号密码验证步骤。基于安全考虑，Gitee 建议<a href='/profile/personal_access_tokens' target="_blank"> 配置并使用私人令牌 </a>替代登录密码进行克隆、推送等操作
</div>
<div>Username for 'https://gitee.com': userName</div>
<div class='mb-1'>
<span>Password for 'https://userName@gitee.com':</span>
<span>#</span>
<span>
私人令牌
</span>
</div>
</div>
</div>
</div>
<style>
  #git-project-download-panel {
    top: 90px !important; }
    #git-project-download-panel input {
      color: #40485b !important; }
    #git-project-download-panel .textarea-box {
      width: 100%;
      height: 60px;
      color: #9d9d9d;
      border-radius: 2px;
      background-color: #F5F5F5 !important;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center; }
    #git-project-download-panel .menu-container {
      font-weight: bold;
      border-color: rgba(0, 0, 0, 0.1) !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important; }
      #git-project-download-panel .menu-container .item {
        padding: 7px 12px !important; }
    #git-project-download-panel .hr-item {
      color: rgba(39, 41, 43, 0.15) !important; }
    #git-project-download-panel .textarea-content-box {
      width: 100%;
      height: 60px;
      resize: none;
      border: 0px !important;
      background-color: #F5F5F5 !important;
      color: #40485b !important; }
    #git-project-download-panel .btn-copy-clone {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.87) !important; }
    #git-project-download-panel .copy-icon-box {
      background-color: #F5F5F5 !important;
      border-left: 0px !important; }
    #git-project-download-panel .button-box {
      border: 0px !important;
      float: right !important;
      padding-right: 0 !important; }
    #git-project-download-panel .tip-box {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
      padding-bottom: 4px;
      font-weight: 700; }
    #git-project-download-panel .popup-container {
      padding: 8px 12px 4px 12px;
      text-align: center;
      font-size: 14px; }
      #git-project-download-panel .popup-container .ok {
        margin: 12px auto;
        width: 25%;
        min-width: 125px;
        display: block; }
      #git-project-download-panel .popup-container .cancel {
        margin-left: 0; }
</style>
<script>
  $(function () {
    var $btnClone = $('#btn-dl-or-clone')
    var $modalDownload = $('#git-project-download-panel');
    var $input = $('#project_clone_url')
    var $inputUrl = $('#project_url_clone')
    var cloneUrlTitle= $('.clone-url-title')
  
    $('#btn-dl-or-clone').on('click', function (e) {
      e.preventDefault();
      $modalDownload.modal('show');
    })
  
    $modalDownload.find('.menu > .item').on('click', function(e) {
      var $item = $(this).addClass('active');
      $item.siblings().removeClass('active');
      var dataUrl = $item.attr('data-url');
      var cloneUrl = $item.attr('data-url');
      var dataType = $item.attr('data-type')
      var cloneToLocal = '下载代码请复制以下命令到终端执行'
      if(dataType=='http'){
        $modalDownload.find('.http-item').show();
        $('.content > .item-panel-box:not(.http-item)').hide();
        $modalDownload.find('.http-ssh-item').show();
        cloneUrl = 'git clone '+dataUrl
      }else if(dataType=='ssh'){
        $modalDownload.find('.ssh-item').show();
        $('.content > .item-panel-box:not(.ssh-item)').hide();
        $modalDownload.find('.http-ssh-item').show();
        cloneUrl = 'git clone '+dataUrl
      }else if(dataType=='svn') {
        $('.content > .item-panel-box:not(.svn-item)').hide();
        $modalDownload.find('.svn-item').show();
        $modalDownload.find('.http-ssh-item').hide();
        cloneUrl = 'svn checkout '+dataUrl
      }else {
        $('.content > .item-panel-box:not(.svn-item)').hide();
        $modalDownload.find('.svn-item').show();
        $modalDownload.find('.http-ssh-item').hide();
        cloneUrl = 'svn checkout '+dataUrl
      }
      if (dataUrl) {
        $modalDownload.find('.download-url-panel').show();
        $input.val(cloneUrl);
        $inputUrl.val(dataUrl)
        cloneUrlTitle.show();
        $modalDownload.find('.forbid-warning-text').html('');
      } else {
        $modalDownload.find('.download-url-panel').hide();
        //$modalDownload.find('.svn-item').hide();
        cloneUrlTitle.hide();
        $modalDownload.find('.forbid-warning-text').html($item.attr('data-text') || '');
      }
      $.cookie('remote_way', $item.attr('data-type'), { expires: 365, path: '/' });
    }).filter('[data-type="' + ($.cookie('remote_way') || 'http') + '"]').trigger('click');
  
    $('.btn-copy-clone').popup({
      content: '点击复制',
    }).on('click', function(e) {
      e.stopPropagation();
      return false;
    }).each(function(_, btnCopy) {
      var $btnCopy = $(btnCopy);
      new Clipboard(btnCopy).on('success', function() {
        $btnCopy.popup('destroy').popup({
          content: '已复制',
          on: 'manual'
        }).popup('show');
        setTimeout(function() {
          $btnCopy.popup('destroy').popup({
            content: '点击复制'
          });
        }, 2000);
      });
    });
    var $downloadBtn= $('.unlogin-download-btn')
    var $popupContainer = $('.popup-container')
    $downloadBtn.popup({
      popup : $('.custom.popup'),
      position   : 'bottom right',
    }).on('click', function(e) {
      $downloadBtn.popup('destroy').popup({
        popup : $('.custom.popup'),
        on: 'manual',
        position   : 'bottom right',
      }).popup('show');
      setTimeout(function() {
        $downloadBtn.popup('hide');
      }, 2000);
  
    })
  })
</script>

</div>
<div class='d-inline pull-right' id='git-project-root-actions'>
<div class='ui horizontal list repo-action-list d-flex d-align-center repo-action-list-right'>
<div class='item search-box-container'>
<div class='ui icon input search-input' id='search-box'>
<input class='search-file-name' id='search-file-name' maxlength='40' placeholder='搜索文件' type='text'>
</div>
<a class='d-flex d-align-center' id='search-file-btn'>
<span class='iconify' data-icon='gitee:search' style='font-size: 16px;color:#979CAC;margin-right:10px'></span>
</a>
<div class='filter-file-container' style='display: none;'></div>
</div>
<script>
  $('#git-tree-file').dropdown({
    action: 'hide',
    onHide: function () {
      $('.plus-box').removeClass('click-active')
    },
    onShow: function () {
      $('.plus-box').addClass('click-active')
    }
  });
  $('.disabled-upload-readonly').popup({
    content: "只读目录不允许上传文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-folder').popup({
    content: "只读目录不允许创建目录",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-file').popup({
    content: "只读目录不允许创建文件",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-create-submodule').popup({
    content: "只读目录不允许创建子模块",
    className: {
      popup: 'ui popup',
    },
    position: 'bottom center',
  })
  $('.disabled-upload-readonly, .disabled-create-folder, .disabled-create-file, .disabled-create-submodule').click(function() {
    return false
  })
</script>
<style>
  .disabled-upload-readonly, .disabled-create-file, .disabled-create-folder, .disabled-create-submodule {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
</style>

<div class='item toschina-content__hidden webIDE-box' data-content='Web IDE'>
<a class="ui d-flex d-align-center webide ml-1" target="_blank" href="/-/ide/project/dodboy/88/edit/master/-/js/lu.js"><span class='iconify' data-icon='gitee:computer' style='font-size: 16px;color:#979CAC;margin-right:12px'></span>
</a></div>
</div>
<script>
  $('.webIDE-box').popup()
</script>
<script src="https://cn-assets.gitee.com/assets/file_search/app-7488efdce7782c80c4936145b910d07e.js"></script>

</div>
<div class='breadcrumb_path path-breadcrumb-contrainer' id='git-project-breadcrumb'>
<div class='ui breadcrumb path project-path-breadcrumb' id='path-breadcrumb'>
<a data-direction="back" class="section repo-name" style="font-weight: bold" href="/dodboy/88/tree/master">88
</a><div class='divider'>
/
</div>
<strong>
<a data-direction="back" class="section" href="/dodboy/88/tree/master/js"><span class='cblue'>
js
</span>
</a></strong>
<div class='divider'>
/
</div>
<strong>
lu.js
</strong>
<i class='iconfont icon-clone' data-clipboard-text='js/lu.js' id='btn-copy-file-path'></i>
</div>
<style>
  #btn-copy-file-path {
    vertical-align: middle;
    cursor: pointer;
  }
</style>
<script>
  $btnCopy = $('#btn-copy-file-path')
  $btnCopy.popup({
    content: '复制路径'
  })
  
  if ($btnCopy[0]) {
    new Clipboard($btnCopy[0]).on('success', function() {
      $btnCopy.popup('destroy').popup({
        content: '已复制',
        on: 'manual'
      }).popup('show');
      setTimeout(function () {
        $btnCopy.popup('destroy').popup({
          content: '复制路径'
        });
      }, 2000)
    });
  }
</script>


</div>
<div class='ui horizontal list repo-action-list branches-tags' style='display: none;'>
<div class='item'>
<a class="ui blank button" href="/dodboy/88/branches"><i class='iconfont icon-branches'></i>
分支 1
</a></div>
<div class='item mr-3'>
<a class="ui blank button" href="/dodboy/88/tags"><i class='iconfont icon-tag'></i>
标签 0
</a></div>
</div>
</div>
<script src="https://cn-assets.gitee.com/webpacks/parse_blob_form_scheme-c196873aa4bc8cd09e53.bundle.js"></script>
<script>
  if(window.gon.locale == 'en')
    $('.branches-tags').css('margin-top', '12px')
   // 仓库页面切换路径时: 刷新 yaml 错误检查
  $(window).on('pjax-complete:file-show', function () {
    window.parseBlobFormScheme && window.parseBlobFormScheme($('.js-blob-data').data('blob'));
  });
</script>

<style>
  .ui.dropdown .menu > .header {
    text-transform: none; }
</style>
<script>
  $(function () {
    var $tip = $('#apk-download-tip');
    if (!$tip.length) {
      return;
    }
    $tip.find('.btn-close').on('click', function () {
      $tip.hide();
    });
  });
  (function(){
    function pathAutoRender() {
      var $parent = $('#git-project-bread'),
          $child = $('#git-project-bread').children('.ui.horizontal.list'),
          mainWidth = 0;
      $child.each(function (i,item) {
        mainWidth += $(item).width()
      });
      $('.breadcrumb.path.fork-path').remove();
      if (mainWidth > 995) {
        $('#path-breadcrumb').hide();
        $parent.append('<div class="ui breadcrumb path fork-path">' + $('#path-breadcrumb').html() + '<div/>')
      } else {
        $('#path-breadcrumb').show();
      }
    }
    window.pathAutoRender = pathAutoRender;
    pathAutoRender();
  })();
</script>

<div class='row column tree-holder' id='tree-holder'>
<div class='tree-content-holder' id='tree-content-holder'>
<div class='file_holder'>
<div class='file_title'>
<div class='blob-header-title'>
<div class='blob-description'>
<i class="iconfont icon-file"></i>
<span class='file_name' title='lu.js'>
lu.js
</span>
<small>4.79 KB</small>
</div>
<div class='options'><div class='ui mini buttons basic'>
<textarea name="blob_raw" id="blob_raw" style="display:none;">
var rule = {&#x000A;	title:&#39;路漫漫&#39;,&#x000A;	// host:&#39;https://www.96ba.com&#39;,&#x000A;	host:&#39;https://m.lmm52.com&#39;,&#x000A;	// url:&#39;/vod/show/id/fyclass/page/fypage.html&#39;,&#x000A;	url:&#39;/vod/show/id/fyclassfyfilter.html&#39;,&#x000A;	filterable:1,//是否启用分类筛选,&#x000A;	filter_url:&#39;{{fl.by}}/page/fypage{{fl.year}}&#39;,&#x000A;	filter:{&#x000A;		&quot;ribendongman&quot;:[{&quot;key&quot;:&quot;year&quot;,&quot;name&quot;:&quot;年份&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;全部&quot;,&quot;v&quot;:&quot;&quot;},{&quot;n&quot;:&quot;2024&quot;,&quot;v&quot;:&quot;/year/2024&quot;},{&quot;n&quot;:&quot;2023&quot;,&quot;v&quot;:&quot;/year/2023&quot;},{&quot;n&quot;:&quot;2022&quot;,&quot;v&quot;:&quot;/year/2022&quot;},{&quot;n&quot;:&quot;2021&quot;,&quot;v&quot;:&quot;/year/2021&quot;},{&quot;n&quot;:&quot;2020&quot;,&quot;v&quot;:&quot;/year/2020&quot;},{&quot;n&quot;:&quot;2019&quot;,&quot;v&quot;:&quot;/year/2019&quot;},{&quot;n&quot;:&quot;2018&quot;,&quot;v&quot;:&quot;/year/2018&quot;},{&quot;n&quot;:&quot;2017&quot;,&quot;v&quot;:&quot;/year/2017&quot;},{&quot;n&quot;:&quot;2016&quot;,&quot;v&quot;:&quot;/year/2016&quot;},{&quot;n&quot;:&quot;2015&quot;,&quot;v&quot;:&quot;/year/2015&quot;},{&quot;n&quot;:&quot;2014&quot;,&quot;v&quot;:&quot;/year/2014&quot;},{&quot;n&quot;:&quot;更早&quot;,&quot;v&quot;:&quot;/year/2013-1980&quot;}]},{&quot;key&quot;:&quot;by&quot;,&quot;name&quot;:&quot;排序&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;更新&quot;,&quot;v&quot;:&quot;/by/time&quot;},{&quot;n&quot;:&quot;人气&quot;,&quot;v&quot;:&quot;/by/hits&quot;},{&quot;n&quot;:&quot;评分&quot;,&quot;v&quot;:&quot;/by/score&quot;},{&quot;n&quot;:&quot;点赞&quot;,&quot;v&quot;:&quot;/by/up&quot;}]}],&#x000A;		&quot;guochandongman&quot;:[{&quot;key&quot;:&quot;year&quot;,&quot;name&quot;:&quot;年份&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;全部&quot;,&quot;v&quot;:&quot;&quot;},{&quot;n&quot;:&quot;2024&quot;,&quot;v&quot;:&quot;/year/2024&quot;},{&quot;n&quot;:&quot;2023&quot;,&quot;v&quot;:&quot;/year/2023&quot;},{&quot;n&quot;:&quot;2022&quot;,&quot;v&quot;:&quot;/year/2022&quot;},{&quot;n&quot;:&quot;2021&quot;,&quot;v&quot;:&quot;/year/2021&quot;},{&quot;n&quot;:&quot;2020&quot;,&quot;v&quot;:&quot;/year/2020&quot;},{&quot;n&quot;:&quot;2019&quot;,&quot;v&quot;:&quot;/year/2019&quot;},{&quot;n&quot;:&quot;2018&quot;,&quot;v&quot;:&quot;/year/2018&quot;},{&quot;n&quot;:&quot;2017&quot;,&quot;v&quot;:&quot;/year/2017&quot;},{&quot;n&quot;:&quot;2016&quot;,&quot;v&quot;:&quot;/year/2016&quot;},{&quot;n&quot;:&quot;2015&quot;,&quot;v&quot;:&quot;/year/2015&quot;},{&quot;n&quot;:&quot;2014&quot;,&quot;v&quot;:&quot;/year/2014&quot;},{&quot;n&quot;:&quot;更早&quot;,&quot;v&quot;:&quot;/year/2013-1980&quot;}]},{&quot;key&quot;:&quot;by&quot;,&quot;name&quot;:&quot;排序&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;更新&quot;,&quot;v&quot;:&quot;/by/time&quot;},{&quot;n&quot;:&quot;人气&quot;,&quot;v&quot;:&quot;/by/hits&quot;},{&quot;n&quot;:&quot;评分&quot;,&quot;v&quot;:&quot;/by/score&quot;},{&quot;n&quot;:&quot;点赞&quot;,&quot;v&quot;:&quot;/by/up&quot;}]}],&#x000A;		&quot;oumeidongman&quot;:[{&quot;key&quot;:&quot;year&quot;,&quot;name&quot;:&quot;年份&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;全部&quot;,&quot;v&quot;:&quot;&quot;},{&quot;n&quot;:&quot;2024&quot;,&quot;v&quot;:&quot;/year/2024&quot;},{&quot;n&quot;:&quot;2023&quot;,&quot;v&quot;:&quot;/year/2023&quot;},{&quot;n&quot;:&quot;2022&quot;,&quot;v&quot;:&quot;/year/2022&quot;},{&quot;n&quot;:&quot;2021&quot;,&quot;v&quot;:&quot;/year/2021&quot;},{&quot;n&quot;:&quot;2020&quot;,&quot;v&quot;:&quot;/year/2020&quot;},{&quot;n&quot;:&quot;2019&quot;,&quot;v&quot;:&quot;/year/2019&quot;},{&quot;n&quot;:&quot;2018&quot;,&quot;v&quot;:&quot;/year/2018&quot;},{&quot;n&quot;:&quot;2017&quot;,&quot;v&quot;:&quot;/year/2017&quot;},{&quot;n&quot;:&quot;2016&quot;,&quot;v&quot;:&quot;/year/2016&quot;},{&quot;n&quot;:&quot;2015&quot;,&quot;v&quot;:&quot;/year/2015&quot;},{&quot;n&quot;:&quot;2014&quot;,&quot;v&quot;:&quot;/year/2014&quot;},{&quot;n&quot;:&quot;更早&quot;,&quot;v&quot;:&quot;/year/2013-1980&quot;}]},{&quot;key&quot;:&quot;by&quot;,&quot;name&quot;:&quot;排序&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;更新&quot;,&quot;v&quot;:&quot;/by/time&quot;},{&quot;n&quot;:&quot;人气&quot;,&quot;v&quot;:&quot;/by/hits&quot;},{&quot;n&quot;:&quot;评分&quot;,&quot;v&quot;:&quot;/by/score&quot;},{&quot;n&quot;:&quot;点赞&quot;,&quot;v&quot;:&quot;/by/up&quot;}]}],&#x000A;		&quot;ribendonghuadianying&quot;:[{&quot;key&quot;:&quot;year&quot;,&quot;name&quot;:&quot;年份&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;全部&quot;,&quot;v&quot;:&quot;&quot;},{&quot;n&quot;:&quot;2024&quot;,&quot;v&quot;:&quot;/year/2024&quot;},{&quot;n&quot;:&quot;2023&quot;,&quot;v&quot;:&quot;/year/2023&quot;},{&quot;n&quot;:&quot;2022&quot;,&quot;v&quot;:&quot;/year/2022&quot;},{&quot;n&quot;:&quot;2021&quot;,&quot;v&quot;:&quot;/year/2021&quot;},{&quot;n&quot;:&quot;2020&quot;,&quot;v&quot;:&quot;/year/2020&quot;},{&quot;n&quot;:&quot;2019&quot;,&quot;v&quot;:&quot;/year/2019&quot;},{&quot;n&quot;:&quot;2018&quot;,&quot;v&quot;:&quot;/year/2018&quot;},{&quot;n&quot;:&quot;2017&quot;,&quot;v&quot;:&quot;/year/2017&quot;},{&quot;n&quot;:&quot;2016&quot;,&quot;v&quot;:&quot;/year/2016&quot;},{&quot;n&quot;:&quot;2015&quot;,&quot;v&quot;:&quot;/year/2015&quot;},{&quot;n&quot;:&quot;2014&quot;,&quot;v&quot;:&quot;/year/2014&quot;},{&quot;n&quot;:&quot;更早&quot;,&quot;v&quot;:&quot;/year/2013-1980&quot;}]},{&quot;key&quot;:&quot;by&quot;,&quot;name&quot;:&quot;排序&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;更新&quot;,&quot;v&quot;:&quot;/by/time&quot;},{&quot;n&quot;:&quot;人气&quot;,&quot;v&quot;:&quot;/by/hits&quot;},{&quot;n&quot;:&quot;评分&quot;,&quot;v&quot;:&quot;/by/score&quot;},{&quot;n&quot;:&quot;点赞&quot;,&quot;v&quot;:&quot;/by/up&quot;}]}],&#x000A;		&quot;guochandonghuadianying&quot;:[{&quot;key&quot;:&quot;year&quot;,&quot;name&quot;:&quot;年份&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;全部&quot;,&quot;v&quot;:&quot;&quot;},{&quot;n&quot;:&quot;2024&quot;,&quot;v&quot;:&quot;/year/2024&quot;},{&quot;n&quot;:&quot;2023&quot;,&quot;v&quot;:&quot;/year/2023&quot;},{&quot;n&quot;:&quot;2022&quot;,&quot;v&quot;:&quot;/year/2022&quot;},{&quot;n&quot;:&quot;2021&quot;,&quot;v&quot;:&quot;/year/2021&quot;},{&quot;n&quot;:&quot;2020&quot;,&quot;v&quot;:&quot;/year/2020&quot;},{&quot;n&quot;:&quot;2019&quot;,&quot;v&quot;:&quot;/year/2019&quot;},{&quot;n&quot;:&quot;2018&quot;,&quot;v&quot;:&quot;/year/2018&quot;},{&quot;n&quot;:&quot;2017&quot;,&quot;v&quot;:&quot;/year/2017&quot;},{&quot;n&quot;:&quot;2016&quot;,&quot;v&quot;:&quot;/year/2016&quot;},{&quot;n&quot;:&quot;2015&quot;,&quot;v&quot;:&quot;/year/2015&quot;},{&quot;n&quot;:&quot;2014&quot;,&quot;v&quot;:&quot;/year/2014&quot;},{&quot;n&quot;:&quot;更早&quot;,&quot;v&quot;:&quot;/year/2013-1980&quot;}]},{&quot;key&quot;:&quot;by&quot;,&quot;name&quot;:&quot;排序&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;更新&quot;,&quot;v&quot;:&quot;/by/time&quot;},{&quot;n&quot;:&quot;人气&quot;,&quot;v&quot;:&quot;/by/hits&quot;},{&quot;n&quot;:&quot;评分&quot;,&quot;v&quot;:&quot;/by/score&quot;},{&quot;n&quot;:&quot;点赞&quot;,&quot;v&quot;:&quot;/by/up&quot;}]}],&#x000A;		&quot;oumeidonghuadianying&quot;:[{&quot;key&quot;:&quot;year&quot;,&quot;name&quot;:&quot;年份&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;全部&quot;,&quot;v&quot;:&quot;&quot;},{&quot;n&quot;:&quot;2024&quot;,&quot;v&quot;:&quot;/year/2024&quot;},{&quot;n&quot;:&quot;2023&quot;,&quot;v&quot;:&quot;/year/2023&quot;},{&quot;n&quot;:&quot;2022&quot;,&quot;v&quot;:&quot;/year/2022&quot;},{&quot;n&quot;:&quot;2021&quot;,&quot;v&quot;:&quot;/year/2021&quot;},{&quot;n&quot;:&quot;2020&quot;,&quot;v&quot;:&quot;/year/2020&quot;},{&quot;n&quot;:&quot;2019&quot;,&quot;v&quot;:&quot;/year/2019&quot;},{&quot;n&quot;:&quot;2018&quot;,&quot;v&quot;:&quot;/year/2018&quot;},{&quot;n&quot;:&quot;2017&quot;,&quot;v&quot;:&quot;/year/2017&quot;},{&quot;n&quot;:&quot;2016&quot;,&quot;v&quot;:&quot;/year/2016&quot;},{&quot;n&quot;:&quot;2015&quot;,&quot;v&quot;:&quot;/year/2015&quot;},{&quot;n&quot;:&quot;2014&quot;,&quot;v&quot;:&quot;/year/2014&quot;},{&quot;n&quot;:&quot;更早&quot;,&quot;v&quot;:&quot;/year/2013-1980&quot;}]},{&quot;key&quot;:&quot;by&quot;,&quot;name&quot;:&quot;排序&quot;,&quot;value&quot;:[{&quot;n&quot;:&quot;更新&quot;,&quot;v&quot;:&quot;/by/time&quot;},{&quot;n&quot;:&quot;人气&quot;,&quot;v&quot;:&quot;/by/hits&quot;},{&quot;n&quot;:&quot;评分&quot;,&quot;v&quot;:&quot;/by/score&quot;},{&quot;n&quot;:&quot;点赞&quot;,&quot;v&quot;:&quot;/by/up&quot;}]}]&#x000A;	},&#x000A;	searchUrl:&#39;/vod/search/page/fypage/wd/**.html&#39;,&#x000A;	searchable: 2,//是否启用全局搜索,&#x000A;	quickSearch: 0,//是否启用快速搜索,&#x000A;	headers: {&#x000A;		&#39;User-Agent&#39;: &#39;MOBILE_UA&#39;,&#x000A;	},&#x000A;	class_parse:&#39;.container&amp;&amp;.tag.text-light;a&amp;&amp;Text;a&amp;&amp;href;.*/(.*?).html&#39;,&#x000A;	play_parse: true,&#x000A;	lazy:`js:&#x000A;		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)&lt;/)[1]);&#x000A;		var url = html.url;&#x000A;		var from = html.from;&#x000A;		if (/m3u8/.test(url)) {&#x000A;			input = url.split(&quot;&amp;&quot;)[0]&#x000A;		} else {&#x000A;			input&#x000A;		}&#x000A;	`,&#x000A;	limit: 6,&#x000A;	推荐:&#39;.owl-theme-jable .item;*;*;*;*&#39;,&#x000A;	一级:&#39;#mdym .col-6;h6&amp;&amp;Text;.lazyload&amp;&amp;data-src;.label&amp;&amp;Text;a&amp;&amp;href&#39;,&#x000A;	二级:{&#x000A;		&quot;title&quot;:&quot;h1&amp;&amp;Text;.video-info-aux&amp;&amp;Text&quot;,&#x000A;		&quot;img&quot;:&quot;.url_img&amp;&amp;src&quot;,&#x000A;		&quot;desc&quot;:&quot;.video-info-items--span:eq(3)&amp;&amp;Text;;;.video-info-actor:eq(1)&amp;&amp;Text;.video-info-actor:eq(0)&amp;&amp;Text&quot;,&#x000A;		&quot;content&quot;:&quot;.content-text&amp;&amp;Text&quot;,&#x000A;		&quot;tabs&quot;:&quot;.module-tab-content .tab-item&quot;,&#x000A;		&quot;lists&quot;:&quot;.scroll-content:eq(#id) a&quot;&#x000A;	},&#x000A;	搜索:&#39;*&#39;,&#x000A;}</textarea>
<a class="ui button" id="copy-text" href="#">一键复制</a>
<a class="ui button edit-blob" title="只有登陆后才可以编辑" href="/dodboy/88/edit/master/js/lu.js">编辑</a>
<a class="ui button edit-raw" target="_blank" href="/dodboy/88/raw/master/js/lu.js">原始数据</a>
<a class="ui button edit-blame" href="/dodboy/88/blame/master/js/lu.js">按行查看</a>
<a class="ui button edit-history" href="/dodboy/88/commits/master/js/lu.js">历史</a>
</div>
<script>
  window.gon.aiCodeParams = {
    pathWithNamespace: `dodboy/88`,
    blob: $("#blob_raw").val(),
    fileName: `js/lu.js`,
    id: `dc10b5d3aa28885ed4c67c99b028f3ca1bd1e760`,
    timeStamp: `1720449069`,
    userId: ``,
    sign: `KkZMdVxp8nIQMnGAWxydhWZyq+eDM0IB9mfBurv2SGFx7VKmWjDE94PcJUBYmHdXwI3zjmePq+UblX6WlVt+PNj+HfiNbRpzBZ0WoibfAr4=`,
  }
  window.gon.blobName = `"lu.js"`
  $('.js-code-parsing').dropdown({
    on: 'hover',
    action: 'hide',
    onHide: function () {
    },
    onShow: function () {
    }
  });
  $(".ai-code-dropdown-box").find('.item').on("click", function (e) {
    window.jqxhr && window.jqxhr.abort();
    window.aiLoadingTimer && clearTimeout(window.aiLoadingTimer);
    aiReqLoading = false
  
    window.Gitee.setFullscreen(true);
    $(".side-toolbar").hide();
    var $siteContent = $(".site-content");
    // 获取最小高度
    var minHeight = parseInt($siteContent.css("min-height"));
    // 获取当前高度
    var currentHeight = parseInt($siteContent.height());
    if (minHeight + 1 > currentHeight) {
      $("#code-parsing").css("height", currentHeight);
    }
  
    $("#git-project-container").addClass('git-transition-width');
    $("#project-wrapper").css("marginTop", "-24px");
    //$("#git-project-container").removeClass("sixteen wide column");
    //$("#git-project-container").addClass("twelve wide column");
    if(!$("#code-parsing").hasClass("code-parsing-box")){
      $("#git-project-container").attr("style", "width: 75% !important;");
    }
    $("#git-footer-main").css("margin-top", "14px");
    $("#code-parsing").addClass("code-parsing-box");
    $(".code-parsing-content").hide();
    $(".skeleton").show();
    $(".ai_code_btns_simple").hide();
  
    $("#code-parsing").find(".markdown-body").innerHTML='';
  
    aiCodeType = $(this).data("value");
    aiSubTitle = $(this).data("text");
    handleAiReqInit()
  });
</script>
<script>
  "use strict";
  try {
    if((gon.wait_fork!=undefined && gon.wait_fork==true) || (gon.wait_fetch!=undefined && gon.wait_fetch==true)){
      $('.edit-blob').popup({content:"当前仓库正在后台处理中,暂时无法编辑", on: 'hover', delay: { show: 200, hide: 200 }});
      $('.edit-blob').click(function(e){
        e.preventDefault();
      })
    }
  
    var setUrl = function() {
      var params = window.location.search
      if (params==undefined || $.trim(params).length==0) return;
      $('span.options').children('.basic').find('a').each(function(index,ele){
        var origin_href = $(ele).attr('href');
        if (origin_href!="#" && origin_href.indexOf('?') == -1){
          $(ele).attr('href',origin_href+params);
        }
      });
    }
  
    setUrl();
  
    var clipboard = null,
        $btncopy  = $("#copy-text");
  
    clipboard = new Clipboard("#copy-text", {
      text: function(trigger) {
        return $("#blob_raw").val();
      }
    })
  
    clipboard.on('success', function(e) {
      $btncopy.popup('hide');
      $btncopy.popup('destroy');
      $btncopy.popup({content: '已复制', position: 'bottom center'});
      $btncopy.popup('show');
    })
  
    clipboard.on('error', function(e) {
      var giteeModal = new GiteeModalHelper({okText: '确定'});
      giteeModal.alert("一键复制", '复制失败，请手动复制');
    })
  
    $(function() {
      $btncopy.popup({
        content: '点击复制',
        position: 'bottom center'
      })
    })
  
  } catch (error) {
    console.log('blob/action error:' + error);
  }
  
  $(".disabled-edit-readonly").popup({
    content: "只读文件不可编辑",
    className: {
      popup: "ui popup",
    },
    position: "bottom center",
  });
  $(".disabled-edit-readonly, .disabled-edit-status").click(function () {
    return false;
  });
  $(".has_tooltip").popup({
    position: "top center",
  });
</script>
<style>
  .disabled-edit-readonly, .disabled-edit-status {
    background-color: #dcddde !important;
    color: rgba(0, 0, 0, 0.4) !important;
    opacity: 0.3 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    cursor: default !important; }
  
  .drawio-iframe-code-card {
    position: relative; }
    .drawio-iframe-code-card textarea {
      width: 100%;
      height: 140px;
      resize: none; }
    .drawio-iframe-code-card .icon-clone {
      position: absolute;
      right: 32px;
      bottom: 32px; }
    .drawio-iframe-code-card iframe {
      border-radius: 2px;
      border: 1px solid #DEDEDF; }
</style>
</div>
</div>
<div class='blob-header-title mt-1 ubblock_tip'>
</div>
<div class='contributor-description'><span class='recent-commit' style='margin-top: 0.7rem'>
<a class="commit-author-link  js-popover-card " data-username="dongchenliu" href="/dongchenliu">dongchenys</a>
<span>提交于</span>
<span class='timeago commit-date' title='2024-04-28 08:30:43 +0000'>
2024-04-28 08:30
</span>
.
<a href="/dodboy/88/commit/58c66829d162428dbdf41e7bc637308b7865ec41">update js/lu.js.</a>
</span>
</div>
</div>
<div class='clearfix'></div>
<div class='file_content code'>
<div class='lines white'>
<div class='line-numbers'><a href='#L1' id='L1'>1</a><a href='#L2' id='L2'>2</a><a href='#L3' id='L3'>3</a><a href='#L4' id='L4'>4</a><a href='#L5' id='L5'>5</a><a href='#L6' id='L6'>6</a><a href='#L7' id='L7'>7</a><a href='#L8' id='L8'>8</a><a href='#L9' id='L9'>9</a><a href='#L10' id='L10'>10</a><a href='#L11' id='L11'>11</a><a href='#L12' id='L12'>12</a><a href='#L13' id='L13'>13</a><a href='#L14' id='L14'>14</a><a href='#L15' id='L15'>15</a><a href='#L16' id='L16'>16</a><a href='#L17' id='L17'>17</a><a href='#L18' id='L18'>18</a><a href='#L19' id='L19'>19</a><a href='#L20' id='L20'>20</a><a href='#L21' id='L21'>21</a><a href='#L22' id='L22'>22</a><a href='#L23' id='L23'>23</a><a href='#L24' id='L24'>24</a><a href='#L25' id='L25'>25</a><a href='#L26' id='L26'>26</a><a href='#L27' id='L27'>27</a><a href='#L28' id='L28'>28</a><a href='#L29' id='L29'>29</a><a href='#L30' id='L30'>30</a><a href='#L31' id='L31'>31</a><a href='#L32' id='L32'>32</a><a href='#L33' id='L33'>33</a><a href='#L34' id='L34'>34</a><a href='#L35' id='L35'>35</a><a href='#L36' id='L36'>36</a><a href='#L37' id='L37'>37</a><a href='#L38' id='L38'>38</a><a href='#L39' id='L39'>39</a><a href='#L40' id='L40'>40</a><a href='#L41' id='L41'>41</a><a href='#L42' id='L42'>42</a><a href='#L43' id='L43'>43</a><a href='#L44' id='L44'>44</a><a href='#L45' id='L45'>45</a><a href='#L46' id='L46'>46</a><a href='#L47' id='L47'>47</a></div><div class="highlight markdown-code-block"><pre class=""><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">rule</span> <span class="o">=</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC2'>	<span class="na">title</span><span class="p">:</span><span class="dl">'</span><span class="s1">路漫漫</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC3'>	<span class="c1">// host:'https://www.96ba.com',</span>&#x000A;</div><div class='line' id='LC4'>	<span class="na">host</span><span class="p">:</span><span class="dl">'</span><span class="s1">https://m.lmm52.com</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC5'>	<span class="c1">// url:'/vod/show/id/fyclass/page/fypage.html',</span>&#x000A;</div><div class='line' id='LC6'>	<span class="na">url</span><span class="p">:</span><span class="dl">'</span><span class="s1">/vod/show/id/fyclassfyfilter.html</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC7'>	<span class="na">filterable</span><span class="p">:</span><span class="mi">1</span><span class="p">,</span><span class="c1">//是否启用分类筛选,</span>&#x000A;</div><div class='line' id='LC8'>	<span class="na">filter_url</span><span class="p">:</span><span class="dl">'</span><span class="s1">{{fl.by}}/page/fypage{{fl.year}}</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC9'>	<span class="na">filter</span><span class="p">:{</span>&#x000A;</div><div class='line' id='LC10'>		<span class="dl">"</span><span class="s2">ribendongman</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">year</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">年份</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">全部</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">""</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2024</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2024</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2023</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2023</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2022</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2022</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2021</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2021</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2020</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2020</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2019</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2019</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2018</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2018</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2017</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2017</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2016</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2016</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2015</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2015</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2014</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2014</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更早</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2013-1980</span><span class="dl">"</span><span class="p">}]},{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">by</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">排序</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更新</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/time</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">人气</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/hits</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">评分</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/score</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">点赞</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/up</span><span class="dl">"</span><span class="p">}]}],</span>&#x000A;</div><div class='line' id='LC11'>		<span class="dl">"</span><span class="s2">guochandongman</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">year</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">年份</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">全部</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">""</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2024</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2024</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2023</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2023</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2022</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2022</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2021</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2021</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2020</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2020</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2019</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2019</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2018</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2018</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2017</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2017</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2016</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2016</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2015</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2015</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2014</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2014</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更早</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2013-1980</span><span class="dl">"</span><span class="p">}]},{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">by</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">排序</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更新</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/time</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">人气</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/hits</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">评分</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/score</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">点赞</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/up</span><span class="dl">"</span><span class="p">}]}],</span>&#x000A;</div><div class='line' id='LC12'>		<span class="dl">"</span><span class="s2">oumeidongman</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">year</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">年份</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">全部</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">""</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2024</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2024</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2023</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2023</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2022</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2022</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2021</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2021</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2020</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2020</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2019</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2019</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2018</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2018</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2017</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2017</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2016</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2016</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2015</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2015</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2014</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2014</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更早</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2013-1980</span><span class="dl">"</span><span class="p">}]},{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">by</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">排序</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更新</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/time</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">人气</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/hits</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">评分</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/score</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">点赞</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/up</span><span class="dl">"</span><span class="p">}]}],</span>&#x000A;</div><div class='line' id='LC13'>		<span class="dl">"</span><span class="s2">ribendonghuadianying</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">year</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">年份</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">全部</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">""</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2024</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2024</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2023</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2023</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2022</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2022</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2021</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2021</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2020</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2020</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2019</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2019</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2018</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2018</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2017</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2017</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2016</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2016</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2015</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2015</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2014</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2014</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更早</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2013-1980</span><span class="dl">"</span><span class="p">}]},{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">by</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">排序</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更新</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/time</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">人气</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/hits</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">评分</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/score</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">点赞</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/up</span><span class="dl">"</span><span class="p">}]}],</span>&#x000A;</div><div class='line' id='LC14'>		<span class="dl">"</span><span class="s2">guochandonghuadianying</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">year</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">年份</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">全部</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">""</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2024</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2024</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2023</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2023</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2022</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2022</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2021</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2021</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2020</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2020</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2019</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2019</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2018</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2018</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2017</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2017</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2016</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2016</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2015</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2015</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2014</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2014</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更早</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2013-1980</span><span class="dl">"</span><span class="p">}]},{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">by</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">排序</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更新</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/time</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">人气</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/hits</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">评分</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/score</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">点赞</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/up</span><span class="dl">"</span><span class="p">}]}],</span>&#x000A;</div><div class='line' id='LC15'>		<span class="dl">"</span><span class="s2">oumeidonghuadianying</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">year</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">年份</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">全部</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">""</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2024</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2024</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2023</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2023</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2022</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2022</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2021</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2021</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2020</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2020</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2019</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2019</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2018</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2018</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2017</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2017</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2016</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2016</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2015</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2015</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">2014</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2014</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更早</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/year/2013-1980</span><span class="dl">"</span><span class="p">}]},{</span><span class="dl">"</span><span class="s2">key</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">by</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">name</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">排序</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">value</span><span class="dl">"</span><span class="p">:[{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">更新</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/time</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">人气</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/hits</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">评分</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/score</span><span class="dl">"</span><span class="p">},{</span><span class="dl">"</span><span class="s2">n</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">点赞</span><span class="dl">"</span><span class="p">,</span><span class="dl">"</span><span class="s2">v</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">/by/up</span><span class="dl">"</span><span class="p">}]}]</span>&#x000A;</div><div class='line' id='LC16'>	<span class="p">},</span>&#x000A;</div><div class='line' id='LC17'>	<span class="na">searchUrl</span><span class="p">:</span><span class="dl">'</span><span class="s1">/vod/search/page/fypage/wd/**.html</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC18'>	<span class="na">searchable</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span><span class="c1">//是否启用全局搜索,</span>&#x000A;</div><div class='line' id='LC19'>	<span class="na">quickSearch</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span><span class="c1">//是否启用快速搜索,</span>&#x000A;</div><div class='line' id='LC20'>	<span class="na">headers</span><span class="p">:</span> <span class="p">{</span>&#x000A;</div><div class='line' id='LC21'>		<span class="dl">'</span><span class="s1">User-Agent</span><span class="dl">'</span><span class="p">:</span> <span class="dl">'</span><span class="s1">MOBILE_UA</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC22'>	<span class="p">},</span>&#x000A;</div><div class='line' id='LC23'>	<span class="na">class_parse</span><span class="p">:</span><span class="dl">'</span><span class="s1">.container&amp;&amp;.tag.text-light;a&amp;&amp;Text;a&amp;&amp;href;.*/(.*?).html</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC24'>	<span class="na">play_parse</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC25'>	<span class="na">lazy</span><span class="p">:</span><span class="s2">`js:</span>&#x000A;</div><div class='line' id='LC26'><span class="s2">		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)&lt;/)[1]);</span>&#x000A;</div><div class='line' id='LC27'><span class="s2">		var url = html.url;</span>&#x000A;</div><div class='line' id='LC28'><span class="s2">		var from = html.from;</span>&#x000A;</div><div class='line' id='LC29'><span class="s2">		if (/m3u8/.test(url)) {</span>&#x000A;</div><div class='line' id='LC30'><span class="s2">			input = url.split("&amp;")[0]</span>&#x000A;</div><div class='line' id='LC31'><span class="s2">		} else {</span>&#x000A;</div><div class='line' id='LC32'><span class="s2">			input</span>&#x000A;</div><div class='line' id='LC33'><span class="s2">		}</span>&#x000A;</div><div class='line' id='LC34'><span class="s2">	`</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC35'>	<span class="na">limit</span><span class="p">:</span> <span class="mi">6</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC36'>	<span class="na">推荐</span><span class="p">:</span><span class="dl">'</span><span class="s1">.owl-theme-jable .item;*;*;*;*</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC37'>	<span class="na">一级</span><span class="p">:</span><span class="dl">'</span><span class="s1">#mdym .col-6;h6&amp;&amp;Text;.lazyload&amp;&amp;data-src;.label&amp;&amp;Text;a&amp;&amp;href</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC38'>	<span class="na">二级</span><span class="p">:{</span>&#x000A;</div><div class='line' id='LC39'>		<span class="dl">"</span><span class="s2">title</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">h1&amp;&amp;Text;.video-info-aux&amp;&amp;Text</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC40'>		<span class="dl">"</span><span class="s2">img</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">.url_img&amp;&amp;src</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC41'>		<span class="dl">"</span><span class="s2">desc</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">.video-info-items--span:eq(3)&amp;&amp;Text;;;.video-info-actor:eq(1)&amp;&amp;Text;.video-info-actor:eq(0)&amp;&amp;Text</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC42'>		<span class="dl">"</span><span class="s2">content</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">.content-text&amp;&amp;Text</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC43'>		<span class="dl">"</span><span class="s2">tabs</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">.module-tab-content .tab-item</span><span class="dl">"</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC44'>		<span class="dl">"</span><span class="s2">lists</span><span class="dl">"</span><span class="p">:</span><span class="dl">"</span><span class="s2">.scroll-content:eq(#id) a</span><span class="dl">"</span>&#x000A;</div><div class='line' id='LC45'>	<span class="p">},</span>&#x000A;</div><div class='line' id='LC46'>	<span class="na">搜索</span><span class="p">:</span><span class="dl">'</span><span class="s1">*</span><span class="dl">'</span><span class="p">,</span>&#x000A;</div><div class='line' id='LC47'><span class="p">}</span>&#x000A;</div></pre><div class="markdown-code-block-copy-btn"></div></div></div>
</div>
<script>
  window.Gitee.initReadmeCatalog();
  toMathMlCode('','markdown-body');
  $('.file_content a, .catalog-li a.anchor').click(function () {
    var anchor = $(this).attr('href')
    window.location.hash = anchor
  })
</script>

</div>
</div>
<div class='tree_progress'></div>
<div class='ui small modal' id='modal-linejump'>
<div class='ui custom form content'>
<div class='field'>
<div class='ui right action input'>
<input placeholder='跳转至某一行...' type='number'>
<div class='ui orange button'>
跳转
</div>
</div>
</div>
</div>
</div>

<div class='complaint'>
<div class='ui modal small form' id='landing-comments-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
举报
</div>
<div class='content'>
<div class='appeal-success-tip hide'>
<i class='iconfont icon-ic_msg_success'></i>
<div class='appeal-success-text'>
举报成功
</div>
<span>
我们将于2个工作日内通过站内信反馈结果给你！
</span>
</div>
<div class='appeal-tip'>
请认真填写举报原因，尽可能描述详细。
</div>
<div class='ui form appeal-form'>
<div class='inline field'>
<label class='left-part appeal-type-wrap'>
举报类型
</label>
<div class='ui dropdown selection' id='appeal-comments-types'>
<div class='text default'>
请选择举报类型
</div>
<i class='dropdown icon'></i>
<div class='menu'></div>
</div>
</div>
<div class='inline field'>
<label class='left-part'>
举报原因
</label>
<textarea class='appeal-reason' id='appeal-comment-reason' name='msg' placeholder='请说明举报原因' rows='3'></textarea>
</div>
<div class='ui message callback-msg hide'></div>
<div class='ui small error text message exceeded-size-tip'></div>
</div>
</div>
<div class='actions'>
<div class='ui button blank cancel'>
取消
</div>
<div class='ui orange icon button disabled ok' id='complaint-comment-confirm'>
发送
</div>
</div>
</div>
<script>
  var $complaintCommentsModal = $('#landing-comments-complaint-modal'),
      $complainCommentType = $complaintCommentsModal.find('#appeal-comments-types'),
      $complaintModalTip = $complaintCommentsModal.find('.callback-msg'),
      $complaintCommentsContent = $complaintCommentsModal.find('.appeal-reason'),
      $complaintCommentBtn = $complaintCommentsModal.find('#complaint-comment-confirm'),
      complaintSending = false,
      initedCommentsType = false;
  
  function initCommentsTypeList() {
    if (!initedCommentsType) {
      $.ajax({
        url: "/appeals/fetch_types",
        method: 'get',
        data: {'type': 'comment'},
        success: function (data) {
          var result = '';
          for (var i = 0; i < data.length; i++) {
            result = result + "<div class='item' data-value='" + data[i].id + "'>" + data[i].name + "</div>";
          }
          $complainCommentType.find('.menu').html(result);
        }
      });
      $complainCommentType.dropdown({showOnFocus: false});
      initedCommentsType = true;
    }
  }
  $complainCommentType.on('click', function() {
    $complaintCommentsModal.modal({
      autofocus: false,
      onApprove: function() {
        return false;
      },
      onHidden: function() {
        restoreCommonentDefault();
      }
    }).modal('show');
  });
  
  $complaintCommentsContent.on('change keyup', function(e) {
    var content = $(this).val();
    if ($.trim(content).length > 0 && $complainCommentType.dropdown('get value').length > 0 ) {
      $complaintCommentBtn.removeClass('disabled');
      return;
    }
    $complaintCommentBtn.addClass('disabled');
  });
  
  
  $complainCommentType.dropdown({
    showOnFocus: false,
    onChange: function(value, text, $selectedItem) {
      if (value.length > 0 && $.trim($complaintCommentsContent.val()).length > 0) {
        $complaintCommentBtn.removeClass('disabled');
        return
      }
      $complaintCommentBtn.addClass('disabled');
    }
  });
  
  function restoreCommonentDefault() {
    $complainCommentType.dropdown('restore defaults');
    $complaintCommentsContent.val('');
    $('.exceeded-size-tip').text('').hide();
    $complaintModalTip.text('').hide();
    setTimeout(function() {
      setCommentSendTip(false);
    }, 1500);
  }
  
  $complaintCommentBtn.on('click',function(e){
    var reason = $complaintCommentsContent.val();
    var appealableId = $('#landing-comments-complaint-modal').attr('data-id');
    if (complaintSending) {
      return;
    }
    var appealType = $complainCommentType.dropdown('get value');
    var formData = new FormData();
    formData.append('appeal_type_id', appealType);
    formData.append('reason', reason);
    formData.append('appeal_type','Note');
    formData.append('target_id',appealableId);
    $.ajax({
      type: 'POST',
      url: "/appeals",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: function() {
        setCommentSendStatus(true);
      },
      success: function(res) {
        if (res.status == 200) {
          setCommentSendTip(true);
          setTimeout(function() {
            $complaintCommentsModal.modal('hide');
            restoreCommonentDefault();
          }, 3000);
        }
        setCommentSendStatus(false);
      },
      error: function(err) {
        showCommonTips(err.responseJSON.message, 'error');
        setCommentSendStatus(false);
      }
    })
  });
  
  function showCommonTips(text, type) {
    $complaintModalTip.text(text).show();
    if (type == 'error') {
      $complaintModalTip.removeClass('success').addClass('error');
    } else {
      $complaintModalTip.removeClass('error').addClass('success');
    }
  }
  
  function setCommentSendStatus(value) {
    complaintSending = value;
    if (complaintSending) {
      $complaintCommentBtn.addClass('loading');
      $complaintCommentsContent.attr('readonly', true);
      $complainCommentType.attr('readonly', true);
    } else {
      $complaintCommentBtn.removeClass('loading');
      $complaintCommentsContent.attr('readonly', false);
      $complainCommentType.attr('readonly', false);
    }
  }
  
  function setCommentSendTip(value) {
    if (value) {
      $('.appeal-success-tip').removeClass('hide');
      $('.appeal-tip').addClass('hide');
      $('.appeal-form').addClass('hide');
      $('#landing-comments-complaint-modal .actions').addClass('hide');
    } else {
      $('.appeal-success-tip').addClass('hide');
      $('.appeal-tip').removeClass('hide');
      $('.appeal-form').removeClass('hide');
      $('#landing-comments-complaint-modal .actions').removeClass('hide');
    }
  }
</script>

<div class='ui small modal' id='misjudgment_appeal_modal'>
<i class='close icon'></i>
<div class='header dividing ui'>
误判申诉
</div>
<div class='content'>
<p>此处可能存在不合适展示的内容，页面不予展示。您可通过相关编辑功能自查并修改。</p>
<p>如您确认内容无涉及 不当用语 / 纯广告导流 / 暴力 / 低俗色情 / 侵权 / 盗版 / 虚假 / 无价值内容或违法国家有关法律法规的内容，可点击提交进行申诉，我们将尽快为您处理。</p>
<div class='buttons'>
<div class='ui button blank cancel'>取消</div>
<div class='ui button orange submit'>提交</div>
</div>
</div>
</div>
<style>
  #misjudgment_appeal_modal .buttons {
    float: right;
    margin-top: 30px;
    margin-bottom: 20px; }
    #misjudgment_appeal_modal .buttons .cancel {
      margin-right: 20px; }
</style>
<script>
  var $misjudgmentAppealModal = $('#misjudgment_appeal_modal');
  $('.cancel').on('click',function(){
    $misjudgmentAppealModal.modal('hide');
  });
  var $jsSubmitAppeal = $misjudgmentAppealModal.find('.submit')
  $jsSubmitAppeal.on('click', function(e) {
    e.preventDefault();
    $(this).addClass('loading').addClass('disabled');
    var type = $(this).attr('data-type');
    var id = $(this).attr('data-id');
    var projectId = $(this).attr('data-project-id');
    var appealType = $(this).attr('data-appeal-type');
    $.ajax({
      type: "PUT",
      url: "/misjudgment_appeal",
      data: {
        type: type,
        id: id,
        project_id: projectId,
        appeal_type: appealType
      },
      success: function(data) {
        Flash.info('提交成功');
        $jsSubmitAppeal.removeClass('loading');
        $misjudgmentAppealModal.modal('hide');
        location.reload()
      },
      error: function(e) {
        Flash.error('提交失败:'+e.responseText);
        $jsSubmitAppeal.removeClass('loading').removeClass('disabled');
        location.reload()
      }
    });
  })
</script>

</div>
<script>
  "use strict";
  $('.js-check-star').checkbox('set unchecked')
</script>

</div>
</div>
</div>
<div class='four wide column' style='display: none;'>
<div class='project__right-side'>
<div class='side-item intro'>
<div class='header'>
<h4>简介</h4>
</div>
<div class='content'>
<span class='git-project-desc-text text-muted'>暂无描述</span>
<a class='hide spread' href='javascript:void(0);'>
展开
<i class='caret down icon'></i>
</a>
<a class='retract hide' href='javascript:void(0);'>
收起
<i class='caret up icon'></i>
</a>
<div class='intro-list'>
<div class='blank d-flex d-flex-between dropdown item js-project-label_show label-list-line-feed project-label-list ui' data-labels='[]' data-url='/dodboy/88/update_description'>
<div class='mixed-label'>
</div>

<div class='default'>暂无标签</div>
</div>
<div class='hide item'>
<i class='iconfont icon-link'></i>
<span class='git-project-homepage'>
<a rel="nofollow" id="homepage" target="_blank" href="/dodboy/88/blob/master/js/lu.js">/dodboy/88/blob/master/js/lu.js</a>
</span>
</div>
<div class='item'>
<i class='iconfont icon-tag-program'></i>
<span class='summary-languages'>
JavaScript
</span>
<div class='ui popup summary-languages-popup'>
<div class='row'>
<div class='lang'>
<a href="/explore/all?lang=JavaScript">JavaScript</a>
</div>
<div class='lang-bar'>
<div class='bar' style='width: 100.0%;'></div>
</div>
<a class="percentage" href="/explore/all?lang=JavaScript">100.0%</a>
</div>
</div>
</div>

<!-- - page = @project.page -->
<!-- - if page&.status? -->
<!-- .item -->
<!-- %i.iconfont.icon-giteepage -->
<!-- Pages： -->
<!-- = link_to page.domain_url, page.domain_url, target: '_blank' -->
</div>
</div>
<div class='content intro-form'>
<div class='ui small input'>
<textarea name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text'>
</div>
<button class='ui orange button mt-1 btn-save'>
保存更改
</button>
<div class='ui blank button btn-cancel-edit'>
取消
</div>
</div>
</div>
<div class='side-item release'>
<div class='header'>
<h4>发行版</h4>
</div>
<div class='content'>
<span class='text-muted'>
暂无发行版
</span>
</div>
</div>
<div class='side-item contrib' data-url='/dodboy/88/contributors_count?ref=master' id='contributor'>
<div class='header'>
<h4>
贡献者
<span class='text-muted' id='contributor-count'></span>
</h4>
<a class="ui link button pull-right" href="/dodboy/88/contributors?ref=master">全部</a>
</div>
<div class='content' id='contributor-list'></div>
<div class='ui active centered inline loader' id='contributor-loader'></div>
</div>
<div class='side-item events' data-url='/dodboy/88/events.json' id='proj-events'>
<div class='header'>
<h4>近期动态</h4>
</div>
<div class='content'>
<div class='ui comments' id='event-list'></div>
<a class="loadmore hide" href="javascript:void(0);">加载更多
<i class='icon dropdown'></i>
</a><center>
<div class='text-muted nomore hide'>不能加载更多了</div>
<div class='ui inline loader active'></div>
</center>
</div>
</div>
</div>
<div class='ui modal tiny' id='edit-project-description'>
<i class='iconfont icon-close close'></i>
<div class='header'>编辑仓库简介</div>
<div class='content'>
<div class='item mb-2'>
<div class='title label'>简介内容</div>
<div class='ui small input'>
<textarea maxlength='200' name='project[description]' placeholder='描述' rows='5'></textarea>
</div>
</div>
<div class='item mb-2'>
<div class='title label'>主页</div>
<div class='ui small input'>
<input data-regex-value='(^$)|(^(http|https):\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).*)|(^(http|https):\/\/[a-zA-Z0-9]+([_\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,10}(:[0-9]{1,10})?(\?.*)?(\/.*)?$)' name='project[homepage]' placeholder='主页(eg: https://gitee.com)' type='text'>
</div>
</div>
</div>
<div class='actions'>
<button class='ui button blank cancel'>取消</button>
<button class='ui button orange btn-save'>保存更改</button>
</div>
</div>

<style>
  #license-popup {
    color: #005980;
    cursor: pointer; }
</style>
<script>
  window.gon.projectRightSide = {
    homepage: null,
    description: "",
    url: '/dodboy/88/update_description',
    i18n: {
      invalidHomepage: '不是有效的 http 地址',
      descriptionLimitExceeded: '简介长度不得超过%{limit}个字符',
      noDescription: '暂无描述',
      noPermission: '无权限操作！',
      requestError: '修改发生错误，请稍后重试！'
    }
  }
  window.gon.cloneArrSelectedLabel = [] || []
  $(function () {
    var $editModal = $('#edit-project-description')
    $editModal.modal({
      onShow: function () {
        window.globalUtils.getFocus($editModal.find('textarea'))
      }
    })
    $('.project__right-side').on('click', '.header .btn-edit', function () {
      $editModal.modal('show')
    })
    $('#license-popup').popup({ position: 'bottom center', lastResort: 'bottom center' })
  
    $('.js-project-label_show').projectLabel({
      i18n: {
        empty: "标签名不能为空",
        verify: "标签名只允许包含中文、字母、数字或者中划线(-)，不能以中划线开头，且长度少于35个字符",
        max: "最多选择 5 个标签"
      }
    })
  })
</script>

</div>
<div class='project-right-side-contaner' id='code-parsing'>
<div class='d-flex-between mb-2'>
<div class='title fs-16 d-align-center'>
<img class='mr-1' height='32' src='/static/images/mjc_icon@2x.png' width='32'>
<span class='ai-file-name'>马建仓 AI 助手</span>
</div>
<div>
<i class='iconfont icon-close close gitee-icon-close'></i>
</div>
</div>
<div class='code-parsing-content'>
<div class='sub_title'></div>
<div class='markdown-body'></div>
<div class='bottom-content'>
<div class='js-code-parsing-img'></div>
<div class='ai_code_btns_simple'>
<div class='ai_code_btns_simple_container'>
<div class='mr-1 test-more'>尝试更多</div>
<div class='btn_box' data-text='代码解读' data-value='parsing'>
<div class='btn_box_title'>代码解读</div>
</div>
<div class='btn_box' data-text='代码找茬' data-value='analysis'>
<div class='btn_box_title'>代码找茬</div>
</div>
<div class='btn_box' data-text='代码优化' data-value='optimize'>
<div class='btn_box_title'>代码优化</div>
</div>
</div>
</div>
</div>
</div>
<div class='skeleton'>
<div class='line line1'></div>
<div class='line line2'></div>
<div class='line line3'></div>
<div class='line line4'></div>
<div class='line line1'></div>
<div class='line line2'></div>
<div class='line line3'></div>
<div class='line line4'></div>
<div class='line line1'></div>
<div class='line line2'></div>
<div class='line line3'></div>
<div class='line line4'></div>
</div>
<div class='resize-handle'>
<div class='resize-handle-line'></div>
</div>
<script src="/static/javascripts/markdown-it.min.js"></script>
<script src="https://cn-assets.gitee.com/assets/ai_code_parsing/app-642ecd30110bdb891918afedc215072c.js"></script>
<script>
  $(function() {
    var maxWidthPercentage = 0.5;
    $("#code-parsing").resizable({
      handles: 'e, w', // 通过左边调整大小
      minWidth: 350, // 设置 代码解析框 的最小宽度
      resize: function(event, ui) {
        // 当调整大小时，确保 文件详情 的宽度不小于最小宽度
        var parentWidth = $(this).parent().width();
        var newWidthDiv2 = ui.size.width;
        var newWidthDiv1 = parentWidth - newWidthDiv2;
        // 计算最大宽度
        var maxWidthDiv2 = parentWidth * maxWidthPercentage;
        // 确保 代码解析框 不超过最大宽度
        newWidthDiv2 = Math.min(newWidthDiv2, maxWidthDiv2);
        // 确保 文件详情 至少有最小宽度
        newWidthDiv1 = Math.max(parentWidth - newWidthDiv2, 750);
  
        var percentageCode = (newWidthDiv2 / parentWidth) * 100;
        var percentageProject = (newWidthDiv1 / parentWidth) * 100;
  
        $('#code-parsing').css('width',percentageCode+"%")
        $('#git-project-container').attr('style', 'width: ' + percentageProject + '% !important;');
      }
    });
  })
</script>

</div>
</div>
</div>
<script>
  (function() {
    $(function() {
      Tree.init();
      return TreeCommentActions.init();
    });
  
  }).call(this);
</script>
<script>
  function scrollToReadmeBox() {
    var readmeBox = document.getElementById('git-readme');
    if (readmeBox) {
      const topPos = readmeBox.offsetTop;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }
  $(".box-licence").click(function(event) {
    $('.lisence-content').show()
    $('.lisence-edit').show()
    $('.readme-content').hide()
    $('.readme-edit').hide()
    $('.file_title_license').addClass('active-title')
    $('.file_title_readme').removeClass('active-title')
    scrollToReadmeBox()
  });
</script>
<script src="/static/javascripts/file-icons.js"></script>

</div>
<script>
  (function() {
    var donateModal;
  
    Gitee.modalHelper = new GiteeModalHelper({
      alertText: '提示',
      okText: '确定'
    });
  
    donateModal = new ProjectDonateModal({
      el: '#project-donate-modal',
      alipayUrl: '/dodboy/88/alipay',
      wepayUrl: '/dodboy/88/wepay',
      nameIsBlank: '名称不能为空',
      nameTooLong: '名称过长（最多为 36 个字符）',
      modalHelper: Gitee.modalHelper
    });
  
    if (null === 'true') {
      donateModal.show();
    }
  
    $('#project-donate').on('click', function() {
      return donateModal.show();
    });
  
  }).call(this);
</script>
<script>
  Tree.initHighlightTheme('white')
</script>


</div>
<div class='gitee-project-extension'>
<div class='extension public'>1</div>
<div class='extension https'>https://gitee.com/dodboy/88.git</div>
<div class='extension ssh'>git@gitee.com:dodboy/88.git</div>
<div class='extension namespace'>dodboy</div>
<div class='extension repo'>88</div>
<div class='extension name'>88</div>
<div class='extension branch'>master</div>
</div>

<script>
  $(function() {
    GitLab.GfmAutoComplete.dataSource = "/dodboy/88/autocomplete_sources"
    GitLab.GfmAutoComplete.Emoji.assetBase = '/assets/emoji'
    GitLab.GfmAutoComplete.setup();
  });
</script>

<footer id='git-footer-main'>
<div class='ui container'>
<div class='logo-row'>
<a href="https://gitee.com"><img alt='Gitee - 基于 Git 的代码托管和研发协作平台' class='logo-img' src='/static/images/logo-black.svg?t=158106666'>
</a></div>
<div class='name-important'>
深圳市奥思网络科技有限公司版权所有
</div>
<div class='ui two column grid d-flex-center'>
<div class='eight wide column git-footer-left'>
<div class='ui four column grid' id='footer-left'>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/all-about-git">Git 大全</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://oschina.gitee.io/learn-git-branching/">Git 命令学习</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://copycat.gitee.com/">CopyCat 代码克隆检测</a>
</div>
<div class='item'>
<a class="item" href="/appclient">APP与插件下载</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/gitee_reward">Gitee Reward</a>
</div>
<div class='item'>
<a class="item" href="/gitee-stars">Gitee 封面人物</a>
</div>
<div class='item'>
<a class="item" href="/gvp">GVP 项目</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://blog.gitee.com/">Gitee 博客</a>
</div>
<div class='item'>
<a class="item" href="/enterprises#nonprofit-plan">Gitee 公益计划</a>
</div>
<div class='item'>
<a class="item" href="https://gitee.com/features/gitee-go">Gitee 持续集成</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/api/v5/swagger">OpenAPI</a>
</div>
<div class='item'>
<a class="item" href="https://help.gitee.com">帮助文档</a>
</div>
<div class='item'>
<a class="item" href="/self_services">在线自助服务</a>
</div>
<div class='item'>
<a class="item" href="/help/articles/4378">更新日志</a>
</div>
</div>
</div>
<div class='column'>
<div class='ui link list'>
<div class='item'>
<a class="item" href="/about_us">关于我们</a>
</div>
<div class='item'>
<a class="item" rel="nofollow" href="https://www.oschina.net/news/131099/oschina-hiring">加入我们</a>
</div>
<div class='item'>
<a class="item" href="/terms">使用条款</a>
</div>
<div class='item'>
<a class="item" href="/oschina/git-osc/issues">意见建议</a>
</div>
<div class='item'>
<a class="item" href="/links.html">合作伙伴</a>
</div>
</div>
</div>
</div>
</div>
<div class='eight wide column right aligned followus git-footer-right'>
<div class='qrcode mr-1'>
<div class='qrcode-box'>
<img alt="技术交流QQ群" src="https://cn-assets.gitee.com/assets/contact_qr-5e2c2a8da453396590e56a545bce4974.jpg" />
</div>
<p class='mt-1 mini_app-text'>技术交流QQ群</p>
</div>
<div class='qrcode'>
<div class='qrcode-box'>
<img alt="微信服务号" class="weixin-qr" src="https://cn-assets.gitee.com/assets/qrcode-weixin@2x-b74cc97a2ea80123ea53a737f709836d.png" />
</div>
<p class='mt-1 weixin-text'>微信服务号</p>
</div>
<div class='phone-and-qq column'>
<div class='ui list official-support-container'>
<div class='item'></div>
<div class='item mail-and-zhihu'>
<a rel="nofollow" href="mailto: client@oschina.cn"><i class='iconfont icon-msg-mail'></i>
<span id='git-footer-email'>client#oschina.cn</span>
</a></div>
<div class='item tel'>
<a>
<i class='iconfont icon-tel'></i>
<span>企业版在线使用：400-606-0201</span>
</a>
</div>
<div class='item tel'>
<a class='d-flex'>
<i class='iconfont icon-tel mt-05 mr-05'></i>
<span>专业版私有部署：</span>
<div>
<div>13670252304</div>
<div>13352947997</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class='bottombar'>
<div class='ui container'>
<div class='ui d-flex d-flex-between'>
<div class='seven wide column partner d-flex'>
<div class='open-atom d-flex-center'>
<img class="logo-openatom mr-1" alt="开放原子开源基金会" src="https://cn-assets.gitee.com/assets/logo-openatom-d083391cc8a54e283529f3fc11cc38ca.svg" />
<a target="_blank" rel="nofollow" href="https://www.openatom.org/">开放原子开源基金会</a>
<div class='sub-title ml-1'>合作代码托管平台</div>
</div>
<div class='report-12377 d-flex-center ml-3'>
<img class="report-12377__logo mr-1" alt="违法和不良信息举报中心" src="https://cn-assets.gitee.com/assets/12377@2x-1aa42ed2d2256f82a61ecf57be1ec244.png" />
<a target="_blank" rel="nofollow" href="https://12377.cn">违法和不良信息举报中心</a>
</div>
<div class='copyright ml-3'>
<a rel="nofollow" href="http://beian.miit.gov.cn/">粤ICP备12009483号</a>
</div>
</div>
<div class='nine wide column right aligned'>
<i class='icon world'></i>
<a href="/language/zh-CN">简 体</a>
/
<a href="/language/zh-TW">繁 體</a>
/
<a href="/language/en">English</a>
</div>
</div>
</div>
</div>
</footer>

<script>
  var officialEmail = $('#git-footer-email').text()
  $('#git-footer-main .icon-popup').popup({ position: 'bottom center' })
  $('#git-footer-email').text(officialEmail.replace('#', '@'))
  window.gon.popover_card_locale = {
    follow:"关注",
    unfollow:"已关注",
    gvp_title: "GVP - Gitee 最有价值开源项目",
    project: "项目",
    org: "开源组织",
    member: "",
    author: "作者",
    user_blocked: "该用户已被屏蔽或已注销",
    net_error: "网络错误",
    unknown_exception: "未知异常"
  }
  window.gon.select_message = {
    placeholder: "请输入个人空间地址或完整的邮箱地址"
  }
</script>
<script src="https://cn-assets.gitee.com/webpacks/popover_card-d759637c3dbef944c008.bundle.js"></script>
<link rel="stylesheet" media="all" href="https://cn-assets.gitee.com/webpacks/css/gitee_nps-ae0dbee40f6ddc72015a.css" />
<script src="https://cn-assets.gitee.com/webpacks/gitee_nps-fb459ed1da83f9bc24dc.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/gitee_icons-a30057b5990085b2c57b.bundle.js"></script>



<div class='side-toolbar'>
<div class='button toolbar-help'>
<i class='iconfont icon-help'></i>
</div>
<div class='ui popup left center dark'>点此查找更多帮助</div>
<div class='toolbar-help-dialog'>
<div class='toolbar-dialog-header'>
<h3 class='toolbar-dialog-title'>搜索帮助</h3>
<form class="toolbar-help-search-form" action="/help/load_keywords_data" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
<div class='ui icon input fluid toolbar-help-search'>
<input name='keywords' placeholder='请输入产品名称或问题' type='text'>
<i class='icon search'></i>
</div>
</form>

<i class='iconfont icon-close toolbar-dialog-close-icon'></i>
</div>
<div class='toolbar-dialog-content'>
<div class='toolbar-help-hot-search'>
<div class='toolbar-roll'>
<a class="init active" title="Git 命令在线学习" href="https://oschina.gitee.io/learn-git-branching/?utm_source==gitee-help-widget"><i class='Blue icon icon-command iconfont'></i>
<span>Git 命令在线学习</span>
</a><a class="init " title="如何在 Gitee 导入 GitHub 仓库" href="https://gitee.com/help/articles/4261?utm_source==gitee-help-widget"><i class='icon icon-clipboard iconfont orange'></i>
<span>如何在 Gitee 导入 GitHub 仓库</span>
</a></div>
<div class='toolbar-list'>
<div class='toolbar-list-item'>
<a href="/help/articles/4114">Git 仓库基础操作</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4166">企业版和社区版功能对比</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4191">SSH 公钥设置</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4194">如何处理代码冲突</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4232">仓库体积过大，如何减小？</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4279">如何找回被删除的仓库数据</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4283">Gitee 产品配额说明</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4284">GitHub仓库快速导入Gitee及同步更新</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4328">什么是 Release（发行版）</a>
</div>
<div class='toolbar-list-item'>
<a href="/help/articles/4354">将 PHP 项目自动发布到 packagist.org</a>
</div>
</div>
</div>
<div class='toolbar-help-search-reseult'></div>
</div>
</div>
<script>
  var opt = { position: 'left center'};
  var $helpSideToolbar = $('.button.toolbar-help');
  var $toolbarRoll = $('.toolbar-roll');
  
  $(function() {
    if (false) {
      $helpSideToolbar.popup(opt).popup({lastResort:'left center'})
    } else {
      $helpSideToolbar.popup({lastResort:'left center'}).popup('show', opt);
      setTimeout(function() {
        $helpSideToolbar.popup('hide', opt);
      }, 3000);
    }
  
    if ($toolbarRoll.length) {
      setInterval(function() {
        var $nextActiveLink = $toolbarRoll.find('a.active').next();
        if (!$nextActiveLink.length) {
          $nextActiveLink = $toolbarRoll.find('a:first-child');
        }
        $nextActiveLink.attr('class', 'active').siblings().removeClass('active init');
      }, 5000);
    }
  })
</script>

<div class='popup button' id='home-comment'>
<i class='iconfont icon-comment'></i>
</div>
<div class='ui popup dark'>评论</div>
<div class='toolbar-appeal popup button'>
<i class='iconfont icon-report'></i>
</div>
<div class='ui popup dark'>
仓库举报
</div>
<script>
  $('.toolbar-appeal').popup({ position: 'left center' });
</script>

<div class='button gotop popup' id='gotop'>
<i class='iconfont icon-top'></i>
</div>
<div class='ui popup dark'>回到顶部</div>
</div>
<div class='form modal normal-modal tiny ui' id='unlanding-complaint-modal'>
<i class='iconfont icon-close close'></i>
<div class='header'>
登录提示
</div>
<div class='container actions'>
<div class='content'>
该操作需登录 Gitee 帐号，请先登录后再操作。
</div>
<div class='ui orange icon large button ok'>
立即登录
</div>
<div class='ui button blank cancel'>
没有帐号，去注册
</div>
</div>
</div>
<script>
  var $elm = $('.toolbar-appeal');
  
  $elm.on('click', function() {
    var modals = $("#unlanding-complaint-modal.normal-modal");
    if (modals.length > 1) {
      modals.eq(0).modal('show');
    } else {
      modals.modal('show');
    }
  })
  $("#unlanding-complaint-modal.normal-modal").modal({
    onDeny: function() {
      window.location.href = "/signup?from=";
    },
    onApprove: function() {
      window.location.href = "/login?from=";
    }
  })
</script>

<style>
  .side-toolbar .bdsharebuttonbox a {
    font-size: 24px;
    color: white !important;
    opacity: 0.9;
    margin: 6px 6px 0px 6px;
    background-image: none;
    text-indent: 0;
    height: auto;
    width: auto;
  }
</style>
<style>
  #udesk_btn a {
    margin: 0px 20px 167px 0px !important;
  }
</style>
<script>
  (function() {
    $('#project-user-message').popup({
      position: 'left center'
    });
  
  }).call(this);
</script>
<script>
  Gitee.initSideToolbar({
    hasComment: true,
    commentUrl: '/dodboy/88#tree_comm_title'
  })
</script>



<style>
  .gitee-stars-main-widget {
    display: none;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 106; }
    .gitee-stars-main-widget .close-icon {
      width: 20px;
      right: 10px;
      position: absolute;
      top: 0px;
      cursor: pointer; }
    .gitee-stars-main-widget .people-image {
      width: 200px;
      margin: 0 10px; }
  
  .gitee-stars-main-widget.gitee-stars-widget .close-icon {
    left: 20px; }
</style>
<div class='gitee-stars-main-widget pendan-widget'>
<a target="_blank" href="https://ai.gitee.com/events/iluvatar-ai-app-contest"><img class="people-image" src="https://foruda.gitee.com/images/1718352672824857275/344bd9b3_5694891.png" alt="344bd9b3 5694891" />
<img class="close-icon" src="https://foruda.gitee.com/images/1718352670433698340/d2dac590_5694891.png" alt="D2dac590 5694891" />
</a></div>
<script>
  $(function () {
    var $giteeStarsWidget = $('.gitee-stars-main-widget')
    var cookieKey = "visit-gitee--2024-06-14"
  
    if ($.cookie(cookieKey) == 1) {
      $giteeStarsWidget.hide()
    } else {
      $giteeStarsWidget.show()
    }
  
    $giteeStarsWidget.on('click', '.close-icon', function (e) {
      e.preventDefault()
      $.cookie(cookieKey, 1, {path: '/', expires: 60})
      $giteeStarsWidget.hide()
    })
  })
</script>


<script>
  (function() {
    this.__gac = {
      domain: 'www.oschina.net'
    };
  
  }).call(this);
</script>

<script src="https://cn-assets.gitee.com/webpacks/build_status-a0b08cd330f9f9ab2e6c.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/scan_status-9d8541af0799261fce2a.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/mermaid_render-a13de7e2b5d6f4663bb5.bundle.js"></script>
<script src="https://cn-assets.gitee.com/webpacks/check_runs-8fe2f388fec18d6b424e.bundle.js"></script>
</body>
</html>
