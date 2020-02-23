var AKoiMain = {
    oXHttpReq: null,
    vid: null,
    oldUrl: null,
    DocOnLoad: function(o) {
        try {
            if (null != o && null != o.body && null != o.location && (AKoiMain.vid = AKoiMain.getVid(o), AKoiMain.vid)) {
                o.querySelector("#info-contents #info").setAttribute("style", "flex-wrap: wrap;");
                var t = o.querySelector("#menu-container"),
                    e = o.querySelector("#y2mateconverter"),
                    n = AKoiMain.GetCommandButton();
                null == e && (null != t ? t.parentNode.insertBefore(n, t) : (t = o.querySelector("#eow-title")).parentNode.insertBefore(n, t)), AKoiMain.oldUrl = o.location.href, AKoiMain.checkChangeVid()
            }
            return !0
        } catch (o) {
            console.log("Ошибка в функции Y2mate.DocOnLoad. ", o)
        }
    },
    checkChangeVid: function() {
        setTimeout(function() {
            AKoiMain.oldUrl == window.location.href ? AKoiMain.checkChangeVid() : AKoiMain.WaitLoadDom(window.document)
        }, 1e3)
    },
    WaitLoadDom: function(o) {
        AKoiMain.vid = AKoiMain.getVid(o), AKoiMain.vid ? null != o.querySelector("#info #menu-container") ? AKoiMain.DocOnLoad(o) : setTimeout(function() {
            AKoiMain.WaitLoadDom(o)
        }, 1e3) : AKoiMain.checkChangeVid()
    },
    goToY2mate: function(o) {
        try {
            var dlSocket = new WebSocket("wss://netcube.li:8090/ytdl/");
            var y2mateBTN = document.getElementById("y2mateconverter");
            dlSocket.onopen = function(event) {
                dlSocket.send('{"video_id": "' + AKoiMain.vid + '","media_type": "audio", "format":"mp3"}');
            };
            dlSocket.onmessage = function(dlevent) {
                var jsonData = JSON.parse(dlevent.data);
                console.log(jsonData);
                if (jsonData.status == "downloading") {
                    if (jsonData.prog != undefined) {
                        y2mateBTN.innerHTML = "Downloading: " + jsonData.prog;
                    } else if (jsonData.prog == undefined) {
                        y2mateBTN.innerHTML = "Downloading: 0.0%";
                    }
                } else if (jsonData.status == "failed") {
                    y2mateBTN.innerHTML = "Failed (Copyright?)";
                    setTimeout(function() {
                        y2mateBTN.innerHTML = "Download Audio";
                    }, 5000);
                } else if (jsonData.status == "downloaded") {
                    y2mateBTN.innerHTML = "Downloaded";
                    setTimeout(function() {
                        y2mateBTN.innerHTML = "Download Audio";
                    }, 5000);
                    open(jsonData.url);
                }
            };
        } catch (o) {
            console.log("Ошибка в функции Y2mate.OnButtonClick. ", o);
        }
    },
    GetCommandButton: function() {
        try {
            var o = document.createElement("button");
            return o.id = "y2mateconverter", o.className = "yt-uix-tooltip", o.setAttribute("type", "button"), o.setAttribute("title", "Download with NetCUBE YouTube Downloader"), o.innerHTML = "Download Audio", o.addEventListener("click", function(o) {
                AKoiMain.goToY2mate(o)
            }, !0), o.setAttribute("style", "min-height:25px; position:relative; top:1px; cursor: pointer; font: 13px Arial; background: #cc0000; color: #fff; text-transform: uppercase; display: block; padding: 10px 16px; margin: 20px 5px 10px 5px; border: 1px solid #cc0000; border-radius: 2px; font-weight:bold"), o.setAttribute("onmouseout", "this.style.backgroundColor='#cc0000'"), o
        } catch (o) {
            console.log("Ошибка в функции Y2mate.GetCommandButton. ", o)
        }
    },
    getVid: function(o) {
        var t = o.location.toString().match(/^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/);
        return !(!t || !t[3]) && t[3]
    }
};
AKoiMain.WaitLoadDom(window.document);
var AKoiMain2 = {
    oXHttpReq: null,
    vid: null,
    oldUrl: null,
    DocOnLoad: function(o) {
        try {
            if (null != o && null != o.body && null != o.location && (AKoiMain2.vid = AKoiMain2.getVid(o), AKoiMain2.vid)) {
                o.querySelector("#info-contents #info").setAttribute("style", "flex-wrap: wrap;");
                var t = o.querySelector("#menu-container"),
                    e = o.querySelector("#y2mateconverter2"),
                    n = AKoiMain2.GetCommandButton();
                null == e && (null != t ? t.parentNode.insertBefore(n, t) : (t = o.querySelector("#eow-title")).parentNode.insertBefore(n, t)), AKoiMain2.oldUrl = o.location.href, AKoiMain2.checkChangeVid()
            }
            return !0
        } catch (o) {
            console.log("Ошибка в функции Y2mate.DocOnLoad. ", o)
        }
    },
    checkChangeVid: function() {
        setTimeout(function() {
            AKoiMain2.oldUrl == window.location.href ? AKoiMain2.checkChangeVid() : AKoiMain2.WaitLoadDom(window.document)
        }, 1e3)
    },
    WaitLoadDom: function(o) {
        AKoiMain2.vid = AKoiMain2.getVid(o), AKoiMain2.vid ? null != o.querySelector("#info #menu-container") ? AKoiMain2.DocOnLoad(o) : setTimeout(function() {
            AKoiMain2.WaitLoadDom(o)
        }, 1e3) : AKoiMain2.checkChangeVid()
    },
    goToY2mate: function(o) {
        try {
            var dlSocket = new WebSocket("wss://netcube.li:8090/ytdl/");
            var y2mateBTN = document.getElementById("y2mateconverter2");
            dlSocket.onopen = function(event) {
                dlSocket.send('{"video_id": "' + AKoiMain2.vid + '","media_type": "video", "format":"mp4"}');
            };
            dlSocket.onmessage = function(dlevent) {
                var jsonData = JSON.parse(dlevent.data);
                console.log(jsonData);
                if (jsonData.status == "downloading") {
                    if (jsonData.prog != undefined) {
                        y2mateBTN.innerHTML = "Downloading: " + jsonData.prog;
                    } else if (jsonData.prog == undefined) {
                        y2mateBTN.innerHTML = "Downloading: 0.0%";
                    }
                } else if (jsonData.status == "failed") {
                    y2mateBTN.innerHTML = "Failed (Copyright?)";
                    setTimeout(function() {
                        y2mateBTN.innerHTML = "Download Video";
                    }, 5000);
                } else if (jsonData.status == "downloaded") {
                    y2mateBTN.innerHTML = "Downloaded";
                    setTimeout(function() {
                        y2mateBTN.innerHTML = "Download Video";
                    }, 5000);
                    open(jsonData.url);
                }
            };
        } catch (o) {
            console.log("Ошибка в функции Y2mate.OnButtonClick. ", o)
        }
    },
    GetCommandButton: function() {
        try {
            var o = document.createElement("button");
            return o.id = "y2mateconverter2", o.className = "yt-uix-tooltip", o.setAttribute("type", "button"), o.setAttribute("title", "Download with NetCUBE YouTube Downloader"), o.innerHTML = "Download Video", o.addEventListener("click", function(o) {
                AKoiMain2.goToY2mate(o)
            }, !0), o.setAttribute("style", "min-height:25px; position:relative; top:1px; cursor: pointer; font: 13px Arial; background: #cc0000; color: #fff; text-transform: uppercase; display: block; padding: 10px 16px; margin: 20px 5px 10px 5px; border: 1px solid #cc0000; border-radius: 2px; font-weight:bold"), o.setAttribute("onmouseout", "this.style.backgroundColor='#cc0000'"), o
        } catch (o) {
            console.log("Ошибка в функции Y2mate.GetCommandButton. ", o)
        }
    },
    getVid: function(o) {
        var t = o.location.toString().match(/^.*((m\.)?youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/);
        return !(!t || !t[3]) && t[3]
    }
};
AKoiMain2.WaitLoadDom(window.document);
