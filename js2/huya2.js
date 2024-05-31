var rule = {
    title:'虎牙直播',
    host:'https://www.huya.com',
    homeUrl:'/cache.php?m=LiveList&do=getLiveListByPage&gameId=2168&tagAll=0&page=1',//用于"分类获取"和"推荐获取"
    url:'/cache.php?m=LiveList&do=getLiveListByPage&gameId=fyfilter&tagAll=0&page=fypage',
    class_name:'娱乐&网游&单机&手游',
    class_url:'8&1&2&3',
    // detailUrl:'https://m.huya.com/fyid',//二级详情拼接链接(json格式用)
    detailUrl:'http://live.yj1211.work/api/live/getRoomInfo?uid=&platform=huya&roomId=fyid',//二级详情拼接链接(json格式用)
    filterable: 1,
    filter_url: '{{fl.cateId}}',
    filter_def:{
        8:{cateId:'2135'},
        1:{cateId:'1'},
        2:{cateId:'1732'},
        3:{cateId:'2336'}
    },
  