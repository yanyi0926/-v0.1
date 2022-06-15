###  项目名:智慧校园  ###
# wisdom-campus

###  项目运行  ###
# npm run serve

###  项目结构  ###
# node_modlules 放置第三方模块
# public 放置主页面以及网页图标
# src 
 ->assets     放置json假数据
 ->components 放置静态路由 
 ->fonts      放置字体 
 ->images     放置图片
 ->route      路由配置
 ->views      放置动态路由 
 ->app.vue    组件汇总
 ->main.js    集中注册
# 外层文件
 ->.gitignore        git管理
 ->babel.config      babel代码编译
 ->jsconfig.json     配置语句
 ->package-lock.json 包版本描述文件
 ->package.json      包配置描述文件
 ->vue.config.js     vue配置描述文件
 
###  项目组件结构  ###
 =>静态组件
   ->Body       主页面
   ->BodyFooter 底栏
   ->Header     头部栏
 =>动态组件
   ->BodySectionMap      主页地图组件
   ->BodySectionMapWihte 宿舍地图组件
   ->BodySectionMapMsg   主页相关信息组件
   ->BodySectionSFQ      主页手风琴组件
   ->BodySectionWeather  主页天气组件
   ->BookMsg             新教页图书馆组件
   ->DiningHallBody      食堂页
   ->DormitoryBody       寝室页
   ->FoodView            食堂页食物组件
   ->ProtestantismBody   新教页
   ->ProtestantismBody   食堂页和寝室页复用地图组件


###  项目亮点  ###
 =>组件开发 路由跳转
 =>主页面的小功能点
   ->地图的拖拽功能 
     >技术：js鼠标事件 js判定界限
   ->天气系统 技术：axios
   ->手风琴 技术：css的flex自动伸缩比例
=>新教页面的小功能点
   ->图书管理系统 技术：增删查
=>食堂页面的小功能点
   ->食堂结算系统 技术：vue的双向绑定