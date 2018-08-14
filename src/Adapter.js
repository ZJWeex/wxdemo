let pathFunc = {
    // 获取图片在三端上不同的路径
    get_img_path(img_name) {
        // e.g. 图片文件名是 test.jpg, 转换得到的图片地址为
	    // - H5      : ../web/assets/images/test.jpg
	    // - Android : local:///test
	    // - iOS     : ../images/test.jpg
       let platform = weex.config.env.platform
       let img_path = ''

       if (platform == 'Web') {
           img_path = `../web/assets/images/${img_name}`
       } else if (platform == 'android') {
           // android 不需要后缀
           img_name = img_name.substr(0, img_name.lastIndexOf('.'));
           img_path = `local:///${img_name}`
       } else {
           img_path = `../images/${img_name}`
       }
      console.log('本地图片路径=======',img_path)
      return img_path
    },
    getBundleUrl(toUrl) {
        //服务器地址
        var severHost = '192.168.15.227:8081';
        var isLocal = true;
 
        var bundleUrl = weex.config.bundleUrl;
        bundleUrl = new String(bundleUrl);
        console.log('NSBundle地址=======',bundleUrl);

       var platform = WXEnvironment.platform.toLowerCase();
       console.log('platform=======',platform);
        var nativeBase;
        var native;
        
        //部署远端地址
        if(!isLocal && (platform === 'ios' || platform === 'android')) {
            bundleUrl = 'http://' + severHost + '/dist/';
            let severPath = bundleUrl + toUrl + ".js";
            console.log('服务器地址=======',severPath)
            return severPath;
           }

        if (platform === 'android') {
            nativeBase = "local://" + 'file://assets/dist/';
            native = nativeBase + toUrl + ".js";
        } else if (platform === 'ios') {
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            native = nativeBase + toUrl + ".js";
        } else {
            var host = 'localhost:8081';
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
 
            //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
            if (typeof window === 'object') {
                nativeBase = 'http://' + host + '/';
            } else {
                nativeBase = 'http://' + host + '/';
            }
 
            native = nativeBase + toUrl + ".html";
        }
        console.log('资源路径=======',native)
        return native;
    }
}
export default pathFunc;