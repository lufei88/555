var rule = {
    title:'dkd',
    host:'https://waptv.sogou.com',
    homeUrl:'',
    searchUrl:'/film/result?ie=utf8&query=**',
    searchable:2,
    quickSearch:0,
    filterable:1,
    multi:1,
   
    url:'/napi/video/classlist?abtest=0&iploc=CN1304&spver=&listTab=fyclass&filter=&start=((fypage-1)*15)&len=15&fr=filter',
    filter_url:'style={{fl.style}}&zone={{fl.zone}}&year={{fl.year}}&fee={{fl.fee}}&order={{fl.order}}',
    headers:{
        'User-Agent':'PC_UA'
    },
   
