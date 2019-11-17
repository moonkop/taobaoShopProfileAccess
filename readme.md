# 淘宝店铺信誉查看工具
淘宝很恶心的下线了淘宝店铺信誉页面（其实也没有 只是加了强制跳转 估计他们都不知道怎么彻底把这个东西关掉）

然后这个插件就是防止这个强制跳转的

这个插件用了一个非常蠢的方法  用window.onbeforeunload弹出一个提示 让用户选择是否离开

//之前有个插件是用window.stop()然后fetch一整个新的页面 然后document.write 这套到最新版chrome不能用了。好像window.stop()以后document.write没有作用了？
