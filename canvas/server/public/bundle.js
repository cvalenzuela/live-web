!function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n || e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);return s;
}({ 1: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.partitionCanvas = exports.getWindowSize = exports.resize = exports.create = void 0;var canvas = void 0,
        ctx = void 0,
        clientsConnected = 1,
        totalSize = { width: 0, height: 0 },
        allSizes = void 0,
        yourSize = void 0,
        color = function (obj) {
      if (obj && obj.__esModule) return obj;var newObj = {};if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);return newObj.default = obj, newObj;
    }(require("./colorPallete"))[Math.floor(199 * Math.random())][Math.floor(5 * Math.random())],
        ranking = document.getElementById("ranking"),
        resize = function () {
      ctx.canvas.width = window.innerWidth, ctx.canvas.height = window.innerHeight, ctx.fillStyle = "#AAAAAA", ctx.fillRect(0, 0, canvas.width, canvas.height), drawClientRect();
    },
        sortNumber = function (a, b) {
      return a - b;
    },
        drawClientRect = function () {
      if (totalSize.width > 0 && totalSize.height > 0) {
        var canvasWidth = window.innerWidth / totalSize.width * window.innerWidth,
            canvasHeigth = window.innerHeight / totalSize.height * window.innerHeight,
            rank = [];for (var userSize in allSizes) rank.push(allSizes[userSize]);rank = rank.sort(sortNumber).reverse(), ctx.fillStyle = color, ranking.innerText = "You are N" + (rank.indexOf(window.innerHeight + window.innerWidth) + 1) + " ", ctx.fillRect(window.innerWidth / 2 - canvasWidth / 2, window.innerHeight / 2 - canvasHeigth / 2, canvasWidth, canvasHeigth);
      }
    };exports.create = function () {
      canvas = document.createElement("canvas"), document.body.appendChild(canvas), ctx = canvas.getContext("2d"), resize();
    }, exports.resize = resize, exports.getWindowSize = function () {
      return { height: window.innerHeight, width: window.innerWidth };
    }, exports.partitionCanvas = function (data) {
      clientsConnected = data.clients, allSizes = data.sizes, yourSize = data.yourSize, totalSize.width = data.totalWidth, totalSize.height = data.totalHeight, resize();
    };
  }, { "./colorPallete": 2 }], 2: [function (require, module, exports) {
    module.exports = [["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900"], ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B"], ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A"], ["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58"], ["#774F38", "#E08E79", "#F1D4AF", "#ECE5CE", "#C5E0DC"], ["#E8DDCB", "#CDB380", "#036564", "#033649", "#031634"], ["#490A3D", "#BD1550", "#E97F02", "#F8CA00", "#8A9B0F"], ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2"], ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951"], ["#E94E77", "#D68189", "#C6A49A", "#C6E5D9", "#F4EAD5"], ["#D9CEB2", "#948C75", "#D5DED9", "#7A6A53", "#99B2B7"], ["#FFFFFF", "#CBE86B", "#F2E9E1", "#1C140D", "#CBE86B"], ["#EFFFCD", "#DCE9BE", "#555152", "#2E2633", "#99173C"], ["#3FB8AF", "#7FC7AF", "#DAD8A7", "#FF9E9D", "#FF3D7F"], ["#343838", "#005F6B", "#008C9E", "#00B4CC", "#00DFFC"], ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE"], ["#99B898", "#FECEA8", "#FF847C", "#E84A5F", "#2A363B"], ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4"], ["#554236", "#F77825", "#D3CE3D", "#F1EFA5", "#60B99A"], ["#351330", "#424254", "#64908A", "#E8CAA4", "#CC2A41"], ["#00A8C6", "#40C0CB", "#F9F2E7", "#AEE239", "#8FBE00"], ["#FF4242", "#F4FAD2", "#D4EE5E", "#E1EDB9", "#F0F2EB"], ["#655643", "#80BCA3", "#F6F7BD", "#E6AC27", "#BF4D28"], ["#8C2318", "#5E8C6A", "#88A65E", "#BFB35A", "#F2C45A"], ["#FAD089", "#FF9C5B", "#F5634A", "#ED303C", "#3B8183"], ["#BCBDAC", "#CFBE27", "#F27435", "#F02475", "#3B2D38"], ["#D1E751", "#FFFFFF", "#000000", "#4DBCE9", "#26ADE4"], ["#FF9900", "#424242", "#E9E9E9", "#BCBCBC", "#3299BB"], ["#5D4157", "#838689", "#A8CABA", "#CAD7B2", "#EBE3AA"], ["#5E412F", "#FCEBB6", "#78C0A8", "#F07818", "#F0A830"], ["#EEE6AB", "#C5BC8E", "#696758", "#45484B", "#36393B"], ["#1B676B", "#519548", "#88C425", "#BEF202", "#EAFDE6"], ["#F8B195", "#F67280", "#C06C84", "#6C5B7B", "#355C7D"], ["#452632", "#91204D", "#E4844A", "#E8BF56", "#E2F7CE"], ["#F04155", "#FF823A", "#F2F26F", "#FFF7BD", "#95CFB7"], ["#F0D8A8", "#3D1C00", "#86B8B1", "#F2D694", "#FA2A00"], ["#2A044A", "#0B2E59", "#0D6759", "#7AB317", "#A0C55F"], ["#67917A", "#170409", "#B8AF03", "#CCBF82", "#E33258"], ["#B9D7D9", "#668284", "#2A2829", "#493736", "#7B3B3B"], ["#BBBB88", "#CCC68D", "#EEDD99", "#EEC290", "#EEAA88"], ["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"], ["#E8D5B7", "#0E2430", "#FC3A51", "#F5B349", "#E8D5B9"], ["#B3CC57", "#ECF081", "#FFBE40", "#EF746F", "#AB3E5B"], ["#AB526B", "#BCA297", "#C5CEAE", "#F0E2A4", "#F4EBC3"], ["#607848", "#789048", "#C0D860", "#F0F0D8", "#604848"], ["#515151", "#FFFFFF", "#00B4FF", "#EEEEEE"], ["#3E4147", "#FFFEDF", "#DFBA69", "#5A2E2E", "#2A2C31"], ["#300030", "#480048", "#601848", "#C04848", "#F07241"], ["#1C2130", "#028F76", "#B3E099", "#FFEAAD", "#D14334"], ["#A8E6CE", "#DCEDC2", "#FFD3B5", "#FFAAA6", "#FF8C94"], ["#EDEBE6", "#D6E1C7", "#94C7B6", "#403B33", "#D3643B"], ["#FDF1CC", "#C6D6B8", "#987F69", "#E3AD40", "#FCD036"], ["#AAB3AB", "#C4CBB7", "#EBEFC9", "#EEE0B7", "#E8CAAF"], ["#CC0C39", "#E6781E", "#C8CF02", "#F8FCC1", "#1693A7"], ["#3A111C", "#574951", "#83988E", "#BCDEA5", "#E6F9BC"], ["#FC354C", "#29221F", "#13747D", "#0ABFBC", "#FCF7C5"], ["#B9D3B0", "#81BDA4", "#B28774", "#F88F79", "#F6AA93"], ["#5E3929", "#CD8C52", "#B7D1A3", "#DEE8BE", "#FCF7D3"], ["#230F2B", "#F21D41", "#EBEBBC", "#BCE3C5", "#82B3AE"], ["#5C323E", "#A82743", "#E15E32", "#C0D23E", "#E5F04C"], ["#4E395D", "#827085", "#8EBE94", "#CCFC8E", "#DC5B3E"], ["#DAD6CA", "#1BB0CE", "#4F8699", "#6A5E72", "#563444"], ["#C2412D", "#D1AA34", "#A7A844", "#A46583", "#5A1E4A"], ["#D1313D", "#E5625C", "#F9BF76", "#8EB2C5", "#615375"], ["#9D7E79", "#CCAC95", "#9A947C", "#748B83", "#5B756C"], ["#1C0113", "#6B0103", "#A30006", "#C21A01", "#F03C02"], ["#8DCCAD", "#988864", "#FEA6A2", "#F9D6AC", "#FFE9AF"], ["#CFFFDD", "#B4DEC1", "#5C5863", "#A85163", "#FF1F4C"], ["#75616B", "#BFCFF7", "#DCE4F7", "#F8F3BF", "#D34017"], ["#382F32", "#FFEAF2", "#FCD9E5", "#FBC5D8", "#F1396D"], ["#B6D8C0", "#C8D9BF", "#DADABD", "#ECDBBC", "#FEDCBA"], ["#E3DFBA", "#C8D6BF", "#93CCC6", "#6CBDB5", "#1A1F1E"], ["#A7C5BD", "#E5DDCB", "#EB7B59", "#CF4647", "#524656"], ["#9DC9AC", "#FFFEC7", "#F56218", "#FF9D2E", "#919167"], ["#413D3D", "#040004", "#C8FF00", "#FA023C", "#4B000F"], ["#EDF6EE", "#D1C089", "#B3204D", "#412E28", "#151101"], ["#A8A7A7", "#CC527A", "#E8175D", "#474747", "#363636"], ["#7E5686", "#A5AAD9", "#E8F9A2", "#F8A13F", "#BA3C3D"], ["#FFEDBF", "#F7803C", "#F54828", "#2E0D23", "#F8E4C1"], ["#C1B398", "#605951", "#FBEEC2", "#61A6AB", "#ACCEC0"], ["#5E9FA3", "#DCD1B4", "#FAB87F", "#F87E7B", "#B05574"], ["#951F2B", "#F5F4D7", "#E0DFB1", "#A5A36C", "#535233"], ["#FFFBB7", "#A6F6AF", "#66B6AB", "#5B7C8D", "#4F2958"], ["#000000", "#9F111B", "#B11623", "#292C37", "#CCCCCC"], ["#9CDDC8", "#BFD8AD", "#DDD9AB", "#F7AF63", "#633D2E"], ["#EFF3CD", "#B2D5BA", "#61ADA0", "#248F8D", "#605063"], ["#84B295", "#ECCF8D", "#BB8138", "#AC2005", "#2C1507"], ["#FCFEF5", "#E9FFE1", "#CDCFB7", "#D6E6C3", "#FAFBE3"], ["#0CA5B0", "#4E3F30", "#FEFEEB", "#F8F4E4", "#A5B3AA"], ["#4D3B3B", "#DE6262", "#FFB88C", "#FFD0B3", "#F5E0D3"], ["#B5AC01", "#ECBA09", "#E86E1C", "#D41E45", "#1B1521"], ["#379F7A", "#78AE62", "#BBB749", "#E0FBAC", "#1F1C0D"], ["#FFE181", "#EEE9E5", "#FAD3B2", "#FFBA7F", "#FF9C97"], ["#4E4D4A", "#353432", "#94BA65", "#2790B0", "#2B4E72"], ["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"], ["#30261C", "#403831", "#36544F", "#1F5F61", "#0B8185"], ["#2D2D29", "#215A6D", "#3CA2A2", "#92C7A3", "#DFECE6"], ["#F38A8A", "#55443D", "#A0CAB5", "#CDE9CA", "#F1EDD0"], ["#793A57", "#4D3339", "#8C873E", "#D1C5A5", "#A38A5F"], ["#11766D", "#410936", "#A40B54", "#E46F0A", "#F0B300"], ["#AAFF00", "#FFAA00", "#FF00AA", "#AA00FF", "#00AAFF"], ["#C75233", "#C78933", "#D6CEAA", "#79B5AC", "#5E2F46"], ["#F8EDD1", "#D88A8A", "#474843", "#9D9D93", "#C5CFC6"], ["#6DA67A", "#77B885", "#86C28B", "#859987", "#4A4857"], ["#1B325F", "#9CC4E4", "#E9F2F9", "#3A89C9", "#F26C4F"], ["#BED6C7", "#ADC0B4", "#8A7E66", "#A79B83", "#BBB2A1"], ["#046D8B", "#309292", "#2FB8AC", "#93A42A", "#ECBE13"], ["#82837E", "#94B053", "#BDEB07", "#BFFA37", "#E0E0E0"], ["#312736", "#D4838F", "#D6ABB1", "#D9D9D9", "#C4FFEB"], ["#E5EAA4", "#A8C4A2", "#69A5A4", "#616382", "#66245B"], ["#6DA67A", "#99A66D", "#A9BD68", "#B5CC6A", "#C0DE5D"], ["#395A4F", "#432330", "#853C43", "#F25C5E", "#FFA566"], ["#331327", "#991766", "#D90F5A", "#F34739", "#FF6E27"], ["#FDFFD9", "#FFF0B8", "#FFD6A3", "#FAAD8E", "#142F30"], ["#E21B5A", "#9E0C39", "#333333", "#FBFFE3", "#83A300"], ["#FBC599", "#CDBB93", "#9EAE8A", "#335650", "#F35F55"], ["#C7FCD7", "#D9D5A7", "#D9AB91", "#E6867A", "#ED4A6A"], ["#EC4401", "#CC9B25", "#13CD4A", "#7B6ED6", "#5E525C"], ["#BF496A", "#B39C82", "#B8C99D", "#F0D399", "#595151"], ["#FFEFD3", "#FFFEE4", "#D0ECEA", "#9FD6D2", "#8B7A5E"], ["#F1396D", "#FD6081", "#F3FFEB", "#ACC95F", "#8F9924"], ["#F6F6F6", "#E8E8E8", "#333333", "#990100", "#B90504"], ["#261C21", "#6E1E62", "#B0254F", "#DE4126", "#EB9605"], ["#E9E0D1", "#91A398", "#33605A", "#070001", "#68462B"], ["#F2E3C6", "#FFC6A5", "#E6324B", "#2B2B2B", "#353634"], ["#FFAB07", "#E9D558", "#72AD75", "#0E8D94", "#434D53"], ["#59B390", "#F0DDAA", "#E47C5D", "#E32D40", "#152B3C"], ["#FDE6BD", "#A1C5AB", "#F4DD51", "#D11E48", "#632F53"], ["#E4E4C5", "#B9D48B", "#8D2036", "#CE0A31", "#D3E4C5"], ["#512B52", "#635274", "#7BB0A8", "#A7DBAB", "#E4F5B1"], ["#805841", "#DCF7F3", "#FFFCDD", "#FFD8D8", "#F5A2A2"], ["#E65540", "#F8ECC2", "#65A8A6", "#79896D"], ["#CAFF42", "#EBF7F8", "#D0E0EB", "#88ABC2", "#49708A"], ["#595643", "#4E6B66", "#ED834E", "#EBCC6E", "#EBE1C5"], ["#E4DED0", "#ABCCBD", "#7DBEB8", "#181619", "#E32F21"], ["#058789", "#503D2E", "#D54B1A", "#E3A72F", "#F0ECC9"], ["#FF003C", "#FF8A00", "#FABE28", "#88C100", "#00C176"], ["#311D39", "#67434F", "#9B8E7E", "#C3CCAF", "#A51A41"], ["#EFD9B4", "#D6A692", "#A39081", "#4D6160", "#292522"], ["#C6CCA5", "#8AB8A8", "#6B9997", "#54787D", "#615145"], ["#CC5D4C", "#FFFEC6", "#C7D1AF", "#96B49C", "#5B5847"], ["#111625", "#341931", "#571B3C", "#7A1E48", "#9D2053"], ["#EFEECC", "#FE8B05", "#FE0557", "#400403", "#0AABBA"], ["#CCF390", "#E0E05A", "#F7C41F", "#FC930A", "#FF003D"], ["#73C8A9", "#DEE1B6", "#E1B866", "#BD5532", "#373B44"], ["#79254A", "#795C64", "#79927D", "#AEB18E", "#E3CF9E"], ["#E0EFF1", "#7DB4B5", "#FFFFFF", "#680148", "#000000"], ["#F06D61", "#DA825F", "#C4975C", "#A8AB7B", "#8CBF99"], ["#2D1B33", "#F36A71", "#EE887A", "#E4E391", "#9ABC8A"], ["#2B2726", "#0A516D", "#018790", "#7DAD93", "#BACCA4"], ["#95A131", "#C8CD3B", "#F6F1DE", "#F5B9AE", "#EE0B5B"], ["#360745", "#D61C59", "#E7D84B", "#EFEAC5", "#1B8798"], ["#E3E8CD", "#BCD8BF", "#D3B9A3", "#EE9C92", "#FE857E"], ["#807462", "#A69785", "#B8FAFF", "#E8FDFF", "#665C49"], ["#4B1139", "#3B4058", "#2A6E78", "#7A907C", "#C9B180"], ["#FC284F", "#FF824A", "#FEA887", "#F6E7F7", "#D1D0D7"], ["#FFB884", "#F5DF98", "#FFF8D4", "#C0D1C2", "#2E4347"], ["#027B7F", "#FFA588", "#D62957", "#BF1E62", "#572E4F"], ["#80A8A8", "#909D9E", "#A88C8C", "#FF0D51", "#7A8C89"], ["#A69E80", "#E0BA9B", "#E7A97E", "#D28574", "#3B1922"], ["#A1DBB2", "#FEE5AD", "#FACA66", "#F7A541", "#F45D4C"], ["#641F5E", "#676077", "#65AC92", "#C2C092", "#EDD48E"], ["#FFF3DB", "#E7E4D5", "#D3C8B4", "#C84648", "#703E3B"], ["#F5DD9D", "#BCC499", "#92A68A", "#7B8F8A", "#506266"], ["#2B222C", "#5E4352", "#965D62", "#C7956D", "#F2D974"], ["#D4F7DC", "#DBE7B4", "#DBC092", "#E0846D", "#F51441"], ["#A32C28", "#1C090B", "#384030", "#7B8055", "#BCA875"], ["#85847E", "#AB6A6E", "#F7345B", "#353130", "#CBCFB4"], ["#E6B39A", "#E6CBA5", "#EDE3B4", "#8B9E9B", "#6D7578"], ["#11644D", "#A0B046", "#F2C94E", "#F78145", "#F24E4E"], ["#6D9788", "#1E2528", "#7E1C13", "#BF0A0D", "#E6E1C2"], ["#23192D", "#FD0A54", "#F57576", "#FEBF97", "#F5ECB7"], ["#EB9C4D", "#F2D680", "#F3FFCF", "#BAC9A9", "#697060"], ["#D3D5B0", "#B5CEA4", "#9DC19D", "#8C7C62", "#71443F"], ["#452E3C", "#FF3D5A", "#FFB969", "#EAF27E", "#3B8C88"], ["#041122", "#259073", "#7FDA89", "#C8E98E", "#E6F99D"], ["#B1E6D1", "#77B1A9", "#3D7B80", "#270A33", "#451A3E"], ["#9D9E94", "#C99E93", "#F59D92", "#E5B8AD", "#D5D2C8"], ["#FDCFBF", "#FEB89F", "#E23D75", "#5F0D3B", "#742365"], ["#540045", "#C60052", "#FF714B", "#EAFF87", "#ACFFE9"], ["#B7CBBF", "#8C886F", "#F9A799", "#F4BFAD", "#F5DABD"], ["#280904", "#680E34", "#9A151A", "#C21B12", "#FC4B2A"], ["#F0FFC9", "#A9DA88", "#62997A", "#72243D", "#3B0819"], ["#429398", "#6B5D4D", "#B0A18F", "#DFCDB4", "#FBEED3"], ["#E6EBA9", "#ABBB9F", "#6F8B94", "#706482", "#703D6F"], ["#A3C68C", "#879676", "#6E6662", "#4F364A", "#340735"], ["#44749D", "#C6D4E1", "#FFFFFF", "#EBE7E0", "#BDB8AD"], ["#322938", "#89A194", "#CFC89A", "#CC883A", "#A14016"], ["#CFB590", "#9E9A41", "#758918", "#564334", "#49281F"], ["#FA6A64", "#7A4E48", "#4A4031", "#F6E2BB", "#9EC6B8"], ["#1D1313", "#24B694", "#D22042", "#A3B808", "#30C4C9"], ["#F6D76B", "#FF9036", "#D6254D", "#FF5475", "#FDEBA9"], ["#E7EDEA", "#FFC52C", "#FB0C06", "#030D4F", "#CEECEF"], ["#373737", "#8DB986", "#ACCE91", "#BADB73", "#EFEAE4"], ["#161616", "#C94D65", "#E7C049", "#92B35A", "#1F6764"], ["#26251C", "#EB0A44", "#F2643D", "#F2A73D", "#A0E8B7"], ["#4B3E4D", "#1E8C93", "#DBD8A2", "#C4AC30", "#D74F33"], ["#8D7966", "#A8A39D", "#D8C8B8", "#E2DDD9", "#F8F1E9"], ["#F2E8C4", "#98D9B6", "#3EC9A7", "#2B879E", "#616668"], ["#5CACC4", "#8CD19D", "#CEE879", "#FCB653", "#FF5254"]];
  }, {}], 3: [function (require, module, exports) {
    "use strict";
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;var newObj = {};if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);return newObj.default = obj, newObj;
    }var sockets = _interopRequireWildcard(require("./sockets")),
        canvas = _interopRequireWildcard(require("./canvas"));window.onload = function () {
      window.addEventListener("resize", sockets.emitNewSize, !0), canvas.create(), sockets.init();
    };
  }, { "./canvas": 1, "./sockets": 4 }], 4: [function (require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.emitNewSize = exports.init = void 0;var canvas = function (obj) {
      if (obj && obj.__esModule) return obj;var newObj = {};if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);return newObj.default = obj, newObj;
    }(require("./canvas")),
        socket = require("socket.io-client").connect(":9898", { query: canvas.getWindowSize() });socket.on("partitionCanvas", function (data) {
      canvas.partitionCanvas(data);
    }), exports.init = function () {
      socket.on("connect", function () {
        console.log("Connected to server on port :9898");
      });
    }, exports.emitNewSize = function () {
      socket.emit("resize", canvas.getWindowSize());
    };
  }, { "./canvas": 1, "socket.io-client": 38 }], 5: [function (require, module, exports) {
    function noop() {}module.exports = function (count, callback, err_cb) {
      function proxy(err, result) {
        if (proxy.count <= 0) throw new Error("after called too many times");--proxy.count, err ? (bail = !0, callback(err), callback = err_cb) : 0 !== proxy.count || bail || callback(null, result);
      }var bail = !1;return err_cb = err_cb || noop, proxy.count = count, 0 === count ? callback() : proxy;
    };
  }, {}], 6: [function (require, module, exports) {
    module.exports = function (arraybuffer, start, end) {
      var bytes = arraybuffer.byteLength;if (start = start || 0, end = end || bytes, arraybuffer.slice) return arraybuffer.slice(start, end);if (start < 0 && (start += bytes), end < 0 && (end += bytes), end > bytes && (end = bytes), start >= bytes || start >= end || 0 === bytes) return new ArrayBuffer(0);for (var abv = new Uint8Array(arraybuffer), result = new Uint8Array(end - start), i = start, ii = 0; i < end; i++, ii++) result[ii] = abv[i];return result.buffer;
    };
  }, {}], 7: [function (require, module, exports) {
    function Backoff(opts) {
      opts = opts || {}, this.ms = opts.min || 100, this.max = opts.max || 1e4, this.factor = opts.factor || 2, this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0, this.attempts = 0;
    }module.exports = Backoff, Backoff.prototype.duration = function () {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {
        var rand = Math.random(),
            deviation = Math.floor(rand * this.jitter * ms);ms = 0 == (1 & Math.floor(10 * rand)) ? ms - deviation : ms + deviation;
      }return 0 | Math.min(ms, this.max);
    }, Backoff.prototype.reset = function () {
      this.attempts = 0;
    }, Backoff.prototype.setMin = function (min) {
      this.ms = min;
    }, Backoff.prototype.setMax = function (max) {
      this.max = max;
    }, Backoff.prototype.setJitter = function (jitter) {
      this.jitter = jitter;
    };
  }, {}], 8: [function (require, module, exports) {
    !function () {
      "use strict";
      for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = new Uint8Array(256), i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;exports.encode = function (arraybuffer) {
        var i,
            bytes = new Uint8Array(arraybuffer),
            len = bytes.length,
            base64 = "";for (i = 0; i < len; i += 3) base64 += chars[bytes[i] >> 2], base64 += chars[(3 & bytes[i]) << 4 | bytes[i + 1] >> 4], base64 += chars[(15 & bytes[i + 1]) << 2 | bytes[i + 2] >> 6], base64 += chars[63 & bytes[i + 2]];return len % 3 == 2 ? base64 = base64.substring(0, base64.length - 1) + "=" : len % 3 == 1 && (base64 = base64.substring(0, base64.length - 2) + "=="), base64;
      }, exports.decode = function (base64) {
        var i,
            encoded1,
            encoded2,
            encoded3,
            encoded4,
            bufferLength = .75 * base64.length,
            len = base64.length,
            p = 0;"=" === base64[base64.length - 1] && (bufferLength--, "=" === base64[base64.length - 2] && bufferLength--);var arraybuffer = new ArrayBuffer(bufferLength),
            bytes = new Uint8Array(arraybuffer);for (i = 0; i < len; i += 4) encoded1 = lookup[base64.charCodeAt(i)], encoded2 = lookup[base64.charCodeAt(i + 1)], encoded3 = lookup[base64.charCodeAt(i + 2)], encoded4 = lookup[base64.charCodeAt(i + 3)], bytes[p++] = encoded1 << 2 | encoded2 >> 4, bytes[p++] = (15 & encoded2) << 4 | encoded3 >> 2, bytes[p++] = (3 & encoded3) << 6 | 63 & encoded4;return arraybuffer;
      };
    }();
  }, {}], 9: [function (require, module, exports) {
    (function (global) {
      function mapArrayBufferViews(ary) {
        for (var i = 0; i < ary.length; i++) {
          var chunk = ary[i];if (chunk.buffer instanceof ArrayBuffer) {
            var buf = chunk.buffer;if (chunk.byteLength !== buf.byteLength) {
              var copy = new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength)), buf = copy.buffer;
            }ary[i] = buf;
          }
        }
      }function BlobBuilderConstructor(ary, options) {
        options = options || {};var bb = new BlobBuilder();mapArrayBufferViews(ary);for (var i = 0; i < ary.length; i++) bb.append(ary[i]);return options.type ? bb.getBlob(options.type) : bb.getBlob();
      }function BlobConstructor(ary, options) {
        return mapArrayBufferViews(ary), new Blob(ary, options || {});
      }var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder,
          blobSupported = function () {
        try {
          return 2 === new Blob(["hi"]).size;
        } catch (e) {
          return !1;
        }
      }(),
          blobSupportsArrayBufferView = blobSupported && function () {
        try {
          return 2 === new Blob([new Uint8Array([1, 2])]).size;
        } catch (e) {
          return !1;
        }
      }(),
          blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;module.exports = blobSupported ? blobSupportsArrayBufferView ? global.Blob : BlobConstructor : blobBuilderSupported ? BlobBuilderConstructor : void 0;
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 10: [function (require, module, exports) {}, {}], 11: [function (require, module, exports) {
    var slice = [].slice;module.exports = function (obj, fn) {
      if ("string" == typeof fn && (fn = obj[fn]), "function" != typeof fn) throw new Error("bind() requires a function");var args = slice.call(arguments, 2);return function () {
        return fn.apply(obj, args.concat(slice.call(arguments)));
      };
    };
  }, {}], 12: [function (require, module, exports) {
    function Emitter(obj) {
      if (obj) return mixin(obj);
    }function mixin(obj) {
      for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];return obj;
    }void 0 !== module && (module.exports = Emitter), Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn), this;
    }, Emitter.prototype.once = function (event, fn) {
      function on() {
        this.off(event, on), fn.apply(this, arguments);
      }return on.fn = fn, this.on(event, on), this;
    }, Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var callbacks = this._callbacks["$" + event];if (!callbacks) return this;if (1 == arguments.length) return delete this._callbacks["$" + event], this;for (var cb, i = 0; i < callbacks.length; i++) if ((cb = callbacks[i]) === fn || cb.fn === fn) {
        callbacks.splice(i, 1);break;
      }return this;
    }, Emitter.prototype.emit = function (event) {
      this._callbacks = this._callbacks || {};var args = [].slice.call(arguments, 1),
          callbacks = this._callbacks["$" + event];if (callbacks) for (var i = 0, len = (callbacks = callbacks.slice(0)).length; i < len; ++i) callbacks[i].apply(this, args);return this;
    }, Emitter.prototype.listeners = function (event) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + event] || [];
    }, Emitter.prototype.hasListeners = function (event) {
      return !!this.listeners(event).length;
    };
  }, {}], 13: [function (require, module, exports) {
    module.exports = function (a, b) {
      var fn = function () {};fn.prototype = b.prototype, a.prototype = new fn(), a.prototype.constructor = a;
    };
  }, {}], 14: [function (require, module, exports) {
    (function (process) {
      function load() {
        var r;try {
          r = exports.storage.debug;
        } catch (e) {}return !r && void 0 !== process && "env" in process && (r = process.env.DEBUG), r;
      }(exports = module.exports = require("./debug")).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, exports.formatArgs = function (args) {
        var useColors = this.useColors;if (args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff), useColors) {
          var c = "color: " + this.color;args.splice(1, 0, c, "color: inherit");var index = 0,
              lastC = 0;args[0].replace(/%[a-zA-Z%]/g, function (match) {
            "%%" !== match && (index++, "%c" === match && (lastC = index));
          }), args.splice(lastC, 0, c);
        }
      }, exports.save = function (namespaces) {
        try {
          null == namespaces ? exports.storage.removeItem("debug") : exports.storage.debug = namespaces;
        } catch (e) {}
      }, exports.load = load, exports.useColors = function () {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, exports.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (e) {}
      }(), exports.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], exports.formatters.j = function (v) {
        try {
          return JSON.stringify(v);
        } catch (err) {
          return "[UnexpectedJSONParseError]: " + err.message;
        }
      }, exports.enable(load());
    }).call(this, require("_process"));
  }, { "./debug": 15, _process: 37 }], 15: [function (require, module, exports) {
    function selectColor(namespace) {
      var i,
          hash = 0;for (i in namespace) hash = (hash << 5) - hash + namespace.charCodeAt(i), hash |= 0;return exports.colors[Math.abs(hash) % exports.colors.length];
    }function createDebug(namespace) {
      function debug() {
        if (debug.enabled) {
          var self = debug,
              curr = +new Date(),
              ms = curr - (prevTime || curr);self.diff = ms, self.prev = prevTime, self.curr = curr, prevTime = curr;for (var args = new Array(arguments.length), i = 0; i < args.length; i++) args[i] = arguments[i];args[0] = exports.coerce(args[0]), "string" != typeof args[0] && args.unshift("%O");var index = 0;args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
            if ("%%" === match) return match;index++;var formatter = exports.formatters[format];if ("function" == typeof formatter) {
              var val = args[index];match = formatter.call(self, val), args.splice(index, 1), index--;
            }return match;
          }), exports.formatArgs.call(self, args), (debug.log || exports.log || console.log.bind(console)).apply(self, args);
        }
      }return debug.namespace = namespace, debug.enabled = exports.enabled(namespace), debug.useColors = exports.useColors(), debug.color = selectColor(namespace), "function" == typeof exports.init && exports.init(debug), debug;
    }(exports = module.exports = createDebug.debug = createDebug.default = createDebug).coerce = function (val) {
      return val instanceof Error ? val.stack || val.message : val;
    }, exports.disable = function () {
      exports.enable("");
    }, exports.enable = function (namespaces) {
      exports.save(namespaces), exports.names = [], exports.skips = [];for (var split = ("string" == typeof namespaces ? namespaces : "").split(/[\s,]+/), len = split.length, i = 0; i < len; i++) split[i] && ("-" === (namespaces = split[i].replace(/\*/g, ".*?"))[0] ? exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$")) : exports.names.push(new RegExp("^" + namespaces + "$")));
    }, exports.enabled = function (name) {
      var i, len;for (i = 0, len = exports.skips.length; i < len; i++) if (exports.skips[i].test(name)) return !1;for (i = 0, len = exports.names.length; i < len; i++) if (exports.names[i].test(name)) return !0;return !1;
    }, exports.humanize = require("ms"), exports.names = [], exports.skips = [], exports.formatters = {};var prevTime;
  }, { ms: 33 }], 16: [function (require, module, exports) {
    module.exports = require("./lib/index");
  }, { "./lib/index": 17 }], 17: [function (require, module, exports) {
    module.exports = require("./socket"), module.exports.parser = require("engine.io-parser");
  }, { "./socket": 18, "engine.io-parser": 26 }], 18: [function (require, module, exports) {
    (function (global) {
      function Socket(uri, opts) {
        if (!(this instanceof Socket)) return new Socket(uri, opts);opts = opts || {}, uri && "object" == typeof uri && (opts = uri, uri = null), uri ? (uri = parseuri(uri), opts.hostname = uri.host, opts.secure = "https" === uri.protocol || "wss" === uri.protocol, opts.port = uri.port, uri.query && (opts.query = uri.query)) : opts.host && (opts.hostname = parseuri(opts.host).host), this.secure = null != opts.secure ? opts.secure : global.location && "https:" === location.protocol, opts.hostname && !opts.port && (opts.port = this.secure ? "443" : "80"), this.agent = opts.agent || !1, this.hostname = opts.hostname || (global.location ? location.hostname : "localhost"), this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80), this.query = opts.query || {}, "string" == typeof this.query && (this.query = parseqs.decode(this.query)), this.upgrade = !1 !== opts.upgrade, this.path = (opts.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!opts.forceJSONP, this.jsonp = !1 !== opts.jsonp, this.forceBase64 = !!opts.forceBase64, this.enablesXDR = !!opts.enablesXDR, this.timestampParam = opts.timestampParam || "t", this.timestampRequests = opts.timestampRequests, this.transports = opts.transports || ["polling", "websocket"], this.transportOptions = opts.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = opts.policyPort || 843, this.rememberUpgrade = opts.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== opts.perMessageDeflate && (opts.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = opts.pfx || null, this.key = opts.key || null, this.passphrase = opts.passphrase || null, this.cert = opts.cert || null, this.ca = opts.ca || null, this.ciphers = opts.ciphers || null, this.rejectUnauthorized = void 0 === opts.rejectUnauthorized || opts.rejectUnauthorized, this.forceNode = !!opts.forceNode;var freeGlobal = "object" == typeof global && global;freeGlobal.global === freeGlobal && (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0 && (this.extraHeaders = opts.extraHeaders), opts.localAddress && (this.localAddress = opts.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
      }function clone(obj) {
        var o = {};for (var i in obj) obj.hasOwnProperty(i) && (o[i] = obj[i]);return o;
      }var transports = require("./transports/index"),
          Emitter = require("component-emitter"),
          debug = require("debug")("engine.io-client:socket"),
          index = require("indexof"),
          parser = require("engine.io-parser"),
          parseuri = require("parseuri"),
          parsejson = require("parsejson"),
          parseqs = require("parseqs");module.exports = Socket, Socket.priorWebsocketSuccess = !1, Emitter(Socket.prototype), Socket.protocol = parser.protocol, Socket.Socket = Socket, Socket.Transport = require("./transport"), Socket.transports = require("./transports/index"), Socket.parser = require("engine.io-parser"), Socket.prototype.createTransport = function (name) {
        debug('creating transport "%s"', name);var query = clone(this.query);query.EIO = parser.protocol, query.transport = name;var options = this.transportOptions[name] || {};return this.id && (query.sid = this.id), new transports[name]({ query: query, socket: this, agent: options.agent || this.agent, hostname: options.hostname || this.hostname, port: options.port || this.port, secure: options.secure || this.secure, path: options.path || this.path, forceJSONP: options.forceJSONP || this.forceJSONP, jsonp: options.jsonp || this.jsonp, forceBase64: options.forceBase64 || this.forceBase64, enablesXDR: options.enablesXDR || this.enablesXDR, timestampRequests: options.timestampRequests || this.timestampRequests, timestampParam: options.timestampParam || this.timestampParam, policyPort: options.policyPort || this.policyPort, pfx: options.pfx || this.pfx, key: options.key || this.key, passphrase: options.passphrase || this.passphrase, cert: options.cert || this.cert, ca: options.ca || this.ca, ciphers: options.ciphers || this.ciphers, rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate, extraHeaders: options.extraHeaders || this.extraHeaders, forceNode: options.forceNode || this.forceNode, localAddress: options.localAddress || this.localAddress, requestTimeout: options.requestTimeout || this.requestTimeout, protocols: options.protocols || void 0 });
      }, Socket.prototype.open = function () {
        var transport;if (this.rememberUpgrade && Socket.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) transport = "websocket";else {
          if (0 === this.transports.length) {
            var self = this;return void setTimeout(function () {
              self.emit("error", "No transports available");
            }, 0);
          }transport = this.transports[0];
        }this.readyState = "opening";try {
          transport = this.createTransport(transport);
        } catch (e) {
          return this.transports.shift(), void this.open();
        }transport.open(), this.setTransport(transport);
      }, Socket.prototype.setTransport = function (transport) {
        debug("setting transport %s", transport.name);var self = this;this.transport && (debug("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = transport, transport.on("drain", function () {
          self.onDrain();
        }).on("packet", function (packet) {
          self.onPacket(packet);
        }).on("error", function (e) {
          self.onError(e);
        }).on("close", function () {
          self.onClose("transport close");
        });
      }, Socket.prototype.probe = function (name) {
        function onTransportOpen() {
          if (self.onlyBinaryUpgrades) {
            var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;failed = failed || upgradeLosesBinary;
          }failed || (debug('probe transport "%s" opened', name), transport.send([{ type: "ping", data: "probe" }]), transport.once("packet", function (msg) {
            if (!failed) if ("pong" === msg.type && "probe" === msg.data) {
              if (debug('probe transport "%s" pong', name), self.upgrading = !0, self.emit("upgrading", transport), !transport) return;Socket.priorWebsocketSuccess = "websocket" === transport.name, debug('pausing current transport "%s"', self.transport.name), self.transport.pause(function () {
                failed || "closed" !== self.readyState && (debug("changing transport and sending upgrade packet"), cleanup(), self.setTransport(transport), transport.send([{ type: "upgrade" }]), self.emit("upgrade", transport), transport = null, self.upgrading = !1, self.flush());
              });
            } else {
              debug('probe transport "%s" failed', name);var err = new Error("probe error");err.transport = transport.name, self.emit("upgradeError", err);
            }
          }));
        }function freezeTransport() {
          failed || (failed = !0, cleanup(), transport.close(), transport = null);
        }function onerror(err) {
          var error = new Error("probe error: " + err);error.transport = transport.name, freezeTransport(), debug('probe transport "%s" failed because of error: %s', name, err), self.emit("upgradeError", error);
        }function onTransportClose() {
          onerror("transport closed");
        }function onclose() {
          onerror("socket closed");
        }function onupgrade(to) {
          transport && to.name !== transport.name && (debug('"%s" works - aborting "%s"', to.name, transport.name), freezeTransport());
        }function cleanup() {
          transport.removeListener("open", onTransportOpen), transport.removeListener("error", onerror), transport.removeListener("close", onTransportClose), self.removeListener("close", onclose), self.removeListener("upgrading", onupgrade);
        }debug('probing transport "%s"', name);var transport = this.createTransport(name, { probe: 1 }),
            failed = !1,
            self = this;Socket.priorWebsocketSuccess = !1, transport.once("open", onTransportOpen), transport.once("error", onerror), transport.once("close", onTransportClose), this.once("close", onclose), this.once("upgrading", onupgrade), transport.open();
      }, Socket.prototype.onOpen = function () {
        if (debug("socket open"), this.readyState = "open", Socket.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
          debug("starting upgrade probes");for (var i = 0, l = this.upgrades.length; i < l; i++) this.probe(this.upgrades[i]);
        }
      }, Socket.prototype.onPacket = function (packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (debug('socket receive: type "%s", data "%s"', packet.type, packet.data), this.emit("packet", packet), this.emit("heartbeat"), packet.type) {case "open":
            this.onHandshake(parsejson(packet.data));break;case "pong":
            this.setPing(), this.emit("pong");break;case "error":
            var err = new Error("server error");err.code = packet.data, this.onError(err);break;case "message":
            this.emit("data", packet.data), this.emit("message", packet.data);} else debug('packet received with socket readyState "%s"', this.readyState);
      }, Socket.prototype.onHandshake = function (data) {
        this.emit("handshake", data), this.id = data.sid, this.transport.query.sid = data.sid, this.upgrades = this.filterUpgrades(data.upgrades), this.pingInterval = data.pingInterval, this.pingTimeout = data.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
      }, Socket.prototype.onHeartbeat = function (timeout) {
        clearTimeout(this.pingTimeoutTimer);var self = this;self.pingTimeoutTimer = setTimeout(function () {
          "closed" !== self.readyState && self.onClose("ping timeout");
        }, timeout || self.pingInterval + self.pingTimeout);
      }, Socket.prototype.setPing = function () {
        var self = this;clearTimeout(self.pingIntervalTimer), self.pingIntervalTimer = setTimeout(function () {
          debug("writing ping packet - expecting pong within %sms", self.pingTimeout), self.ping(), self.onHeartbeat(self.pingTimeout);
        }, self.pingInterval);
      }, Socket.prototype.ping = function () {
        var self = this;this.sendPacket("ping", function () {
          self.emit("ping");
        });
      }, Socket.prototype.onDrain = function () {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
      }, Socket.prototype.flush = function () {
        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (debug("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
      }, Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
        return this.sendPacket("message", msg, options, fn), this;
      }, Socket.prototype.sendPacket = function (type, data, options, fn) {
        if ("function" == typeof data && (fn = data, data = void 0), "function" == typeof options && (fn = options, options = null), "closing" !== this.readyState && "closed" !== this.readyState) {
          (options = options || {}).compress = !1 !== options.compress;var packet = { type: type, data: data, options: options };this.emit("packetCreate", packet), this.writeBuffer.push(packet), fn && this.once("flush", fn), this.flush();
        }
      }, Socket.prototype.close = function () {
        function close() {
          self.onClose("forced close"), debug("socket closing - telling transport to close"), self.transport.close();
        }function cleanupAndClose() {
          self.removeListener("upgrade", cleanupAndClose), self.removeListener("upgradeError", cleanupAndClose), close();
        }function waitForUpgrade() {
          self.once("upgrade", cleanupAndClose), self.once("upgradeError", cleanupAndClose);
        }if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";var self = this;this.writeBuffer.length ? this.once("drain", function () {
            this.upgrading ? waitForUpgrade() : close();
          }) : this.upgrading ? waitForUpgrade() : close();
        }return this;
      }, Socket.prototype.onError = function (err) {
        debug("socket error %j", err), Socket.priorWebsocketSuccess = !1, this.emit("error", err), this.onClose("transport error", err);
      }, Socket.prototype.onClose = function (reason, desc) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          debug('socket close with reason: "%s"', reason);var self = this;clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", reason, desc), self.writeBuffer = [], self.prevBufferLen = 0;
        }
      }, Socket.prototype.filterUpgrades = function (upgrades) {
        for (var filteredUpgrades = [], i = 0, j = upgrades.length; i < j; i++) ~index(this.transports, upgrades[i]) && filteredUpgrades.push(upgrades[i]);return filteredUpgrades;
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./transport": 19, "./transports/index": 20, "component-emitter": 12, debug: 14, "engine.io-parser": 26, indexof: 32, parsejson: 34, parseqs: 35, parseuri: 36 }], 19: [function (require, module, exports) {
    function Transport(opts) {
      this.path = opts.path, this.hostname = opts.hostname, this.port = opts.port, this.secure = opts.secure, this.query = opts.query, this.timestampParam = opts.timestampParam, this.timestampRequests = opts.timestampRequests, this.readyState = "", this.agent = opts.agent || !1, this.socket = opts.socket, this.enablesXDR = opts.enablesXDR, this.pfx = opts.pfx, this.key = opts.key, this.passphrase = opts.passphrase, this.cert = opts.cert, this.ca = opts.ca, this.ciphers = opts.ciphers, this.rejectUnauthorized = opts.rejectUnauthorized, this.forceNode = opts.forceNode, this.extraHeaders = opts.extraHeaders, this.localAddress = opts.localAddress;
    }var parser = require("engine.io-parser"),
        Emitter = require("component-emitter");module.exports = Transport, Emitter(Transport.prototype), Transport.prototype.onError = function (msg, desc) {
      var err = new Error(msg);return err.type = "TransportError", err.description = desc, this.emit("error", err), this;
    }, Transport.prototype.open = function () {
      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
    }, Transport.prototype.close = function () {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
    }, Transport.prototype.send = function (packets) {
      if ("open" !== this.readyState) throw new Error("Transport not open");this.write(packets);
    }, Transport.prototype.onOpen = function () {
      this.readyState = "open", this.writable = !0, this.emit("open");
    }, Transport.prototype.onData = function (data) {
      var packet = parser.decodePacket(data, this.socket.binaryType);this.onPacket(packet);
    }, Transport.prototype.onPacket = function (packet) {
      this.emit("packet", packet);
    }, Transport.prototype.onClose = function () {
      this.readyState = "closed", this.emit("close");
    };
  }, { "component-emitter": 12, "engine.io-parser": 26 }], 20: [function (require, module, exports) {
    (function (global) {
      var XMLHttpRequest = require("xmlhttprequest-ssl"),
          XHR = require("./polling-xhr"),
          JSONP = require("./polling-jsonp"),
          websocket = require("./websocket");exports.polling = function (opts) {
        var xd = !1,
            xs = !1,
            jsonp = !1 !== opts.jsonp;if (global.location) {
          var isSSL = "https:" === location.protocol,
              port = location.port;port || (port = isSSL ? 443 : 80), xd = opts.hostname !== location.hostname || port !== opts.port, xs = opts.secure !== isSSL;
        }if (opts.xdomain = xd, opts.xscheme = xs, "open" in new XMLHttpRequest(opts) && !opts.forceJSONP) return new XHR(opts);if (!jsonp) throw new Error("JSONP disabled");return new JSONP(opts);
      }, exports.websocket = websocket;
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./polling-jsonp": 21, "./polling-xhr": 22, "./websocket": 24, "xmlhttprequest-ssl": 25 }], 21: [function (require, module, exports) {
    (function (global) {
      function empty() {}function JSONPPolling(opts) {
        Polling.call(this, opts), this.query = this.query || {}, callbacks || (global.___eio || (global.___eio = []), callbacks = global.___eio), this.index = callbacks.length;var self = this;callbacks.push(function (msg) {
          self.onData(msg);
        }), this.query.j = this.index, global.document && global.addEventListener && global.addEventListener("beforeunload", function () {
          self.script && (self.script.onerror = empty);
        }, !1);
      }var Polling = require("./polling"),
          inherit = require("component-inherit");module.exports = JSONPPolling;var callbacks,
          rNewline = /\n/g,
          rEscapedNewline = /\\n/g;inherit(JSONPPolling, Polling), JSONPPolling.prototype.supportsBinary = !1, JSONPPolling.prototype.doClose = function () {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), Polling.prototype.doClose.call(this);
      }, JSONPPolling.prototype.doPoll = function () {
        var self = this,
            script = document.createElement("script");this.script && (this.script.parentNode.removeChild(this.script), this.script = null), script.async = !0, script.src = this.uri(), script.onerror = function (e) {
          self.onError("jsonp poll error", e);
        };var insertAt = document.getElementsByTagName("script")[0];insertAt ? insertAt.parentNode.insertBefore(script, insertAt) : (document.head || document.body).appendChild(script), this.script = script, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
          var iframe = document.createElement("iframe");document.body.appendChild(iframe), document.body.removeChild(iframe);
        }, 100);
      }, JSONPPolling.prototype.doWrite = function (data, fn) {
        function complete() {
          initIframe(), fn();
        }function initIframe() {
          if (self.iframe) try {
            self.form.removeChild(self.iframe);
          } catch (e) {
            self.onError("jsonp polling iframe removal error", e);
          }try {
            var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';iframe = document.createElement(html);
          } catch (e) {
            (iframe = document.createElement("iframe")).name = self.iframeId, iframe.src = "javascript:0";
          }iframe.id = self.iframeId, self.form.appendChild(iframe), self.iframe = iframe;
        }var self = this;if (!this.form) {
          var iframe,
              form = document.createElement("form"),
              area = document.createElement("textarea"),
              id = this.iframeId = "eio_iframe_" + this.index;form.className = "socketio", form.style.position = "absolute", form.style.top = "-1000px", form.style.left = "-1000px", form.target = id, form.method = "POST", form.setAttribute("accept-charset", "utf-8"), area.name = "d", form.appendChild(area), document.body.appendChild(form), this.form = form, this.area = area;
        }this.form.action = this.uri(), initIframe(), data = data.replace(rEscapedNewline, "\\\n"), this.area.value = data.replace(rNewline, "\\n");try {
          this.form.submit();
        } catch (e) {}this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
          "complete" === self.iframe.readyState && complete();
        } : this.iframe.onload = complete;
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./polling": 23, "component-inherit": 13 }], 22: [function (require, module, exports) {
    (function (global) {
      function empty() {}function XHR(opts) {
        if (Polling.call(this, opts), this.requestTimeout = opts.requestTimeout, this.extraHeaders = opts.extraHeaders, global.location) {
          var isSSL = "https:" === location.protocol,
              port = location.port;port || (port = isSSL ? 443 : 80), this.xd = opts.hostname !== global.location.hostname || port !== opts.port, this.xs = opts.secure !== isSSL;
        }
      }function Request(opts) {
        this.method = opts.method || "GET", this.uri = opts.uri, this.xd = !!opts.xd, this.xs = !!opts.xs, this.async = !1 !== opts.async, this.data = void 0 !== opts.data ? opts.data : null, this.agent = opts.agent, this.isBinary = opts.isBinary, this.supportsBinary = opts.supportsBinary, this.enablesXDR = opts.enablesXDR, this.requestTimeout = opts.requestTimeout, this.pfx = opts.pfx, this.key = opts.key, this.passphrase = opts.passphrase, this.cert = opts.cert, this.ca = opts.ca, this.ciphers = opts.ciphers, this.rejectUnauthorized = opts.rejectUnauthorized, this.extraHeaders = opts.extraHeaders, this.create();
      }function unloadHandler() {
        for (var i in Request.requests) Request.requests.hasOwnProperty(i) && Request.requests[i].abort();
      }var XMLHttpRequest = require("xmlhttprequest-ssl"),
          Polling = require("./polling"),
          Emitter = require("component-emitter"),
          inherit = require("component-inherit"),
          debug = require("debug")("engine.io-client:polling-xhr");module.exports = XHR, module.exports.Request = Request, inherit(XHR, Polling), XHR.prototype.supportsBinary = !0, XHR.prototype.request = function (opts) {
        return opts = opts || {}, opts.uri = this.uri(), opts.xd = this.xd, opts.xs = this.xs, opts.agent = this.agent || !1, opts.supportsBinary = this.supportsBinary, opts.enablesXDR = this.enablesXDR, opts.pfx = this.pfx, opts.key = this.key, opts.passphrase = this.passphrase, opts.cert = this.cert, opts.ca = this.ca, opts.ciphers = this.ciphers, opts.rejectUnauthorized = this.rejectUnauthorized, opts.requestTimeout = this.requestTimeout, opts.extraHeaders = this.extraHeaders, new Request(opts);
      }, XHR.prototype.doWrite = function (data, fn) {
        var isBinary = "string" != typeof data && void 0 !== data,
            req = this.request({ method: "POST", data: data, isBinary: isBinary }),
            self = this;req.on("success", fn), req.on("error", function (err) {
          self.onError("xhr post error", err);
        }), this.sendXhr = req;
      }, XHR.prototype.doPoll = function () {
        debug("xhr poll");var req = this.request(),
            self = this;req.on("data", function (data) {
          self.onData(data);
        }), req.on("error", function (err) {
          self.onError("xhr poll error", err);
        }), this.pollXhr = req;
      }, Emitter(Request.prototype), Request.prototype.create = function () {
        var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };opts.pfx = this.pfx, opts.key = this.key, opts.passphrase = this.passphrase, opts.cert = this.cert, opts.ca = this.ca, opts.ciphers = this.ciphers, opts.rejectUnauthorized = this.rejectUnauthorized;var xhr = this.xhr = new XMLHttpRequest(opts),
            self = this;try {
          debug("xhr open %s: %s", this.method, this.uri), xhr.open(this.method, this.uri, this.async);try {
            if (this.extraHeaders) {
              xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(!0);for (var i in this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && xhr.setRequestHeader(i, this.extraHeaders[i]);
            }
          } catch (e) {}if ("POST" === this.method) try {
            this.isBinary ? xhr.setRequestHeader("Content-type", "application/octet-stream") : xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}try {
            xhr.setRequestHeader("Accept", "*/*");
          } catch (e) {}"withCredentials" in xhr && (xhr.withCredentials = !0), this.requestTimeout && (xhr.timeout = this.requestTimeout), this.hasXDR() ? (xhr.onload = function () {
            self.onLoad();
          }, xhr.onerror = function () {
            self.onError(xhr.responseText);
          }) : xhr.onreadystatechange = function () {
            if (2 === xhr.readyState) {
              var contentType;try {
                contentType = xhr.getResponseHeader("Content-Type");
              } catch (e) {}"application/octet-stream" === contentType && (xhr.responseType = "arraybuffer");
            }4 === xhr.readyState && (200 === xhr.status || 1223 === xhr.status ? self.onLoad() : setTimeout(function () {
              self.onError(xhr.status);
            }, 0));
          }, debug("xhr data %s", this.data), xhr.send(this.data);
        } catch (e) {
          return void setTimeout(function () {
            self.onError(e);
          }, 0);
        }global.document && (this.index = Request.requestsCount++, Request.requests[this.index] = this);
      }, Request.prototype.onSuccess = function () {
        this.emit("success"), this.cleanup();
      }, Request.prototype.onData = function (data) {
        this.emit("data", data), this.onSuccess();
      }, Request.prototype.onError = function (err) {
        this.emit("error", err), this.cleanup(!0);
      }, Request.prototype.cleanup = function (fromError) {
        if (void 0 !== this.xhr && null !== this.xhr) {
          if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = empty : this.xhr.onreadystatechange = empty, fromError) try {
            this.xhr.abort();
          } catch (e) {}global.document && delete Request.requests[this.index], this.xhr = null;
        }
      }, Request.prototype.onLoad = function () {
        var data;try {
          var contentType;try {
            contentType = this.xhr.getResponseHeader("Content-Type");
          } catch (e) {}data = "application/octet-stream" === contentType ? this.xhr.response || this.xhr.responseText : this.xhr.responseText;
        } catch (e) {
          this.onError(e);
        }null != data && this.onData(data);
      }, Request.prototype.hasXDR = function () {
        return void 0 !== global.XDomainRequest && !this.xs && this.enablesXDR;
      }, Request.prototype.abort = function () {
        this.cleanup();
      }, Request.requestsCount = 0, Request.requests = {}, global.document && (global.attachEvent ? global.attachEvent("onunload", unloadHandler) : global.addEventListener && global.addEventListener("beforeunload", unloadHandler, !1));
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./polling": 23, "component-emitter": 12, "component-inherit": 13, debug: 14, "xmlhttprequest-ssl": 25 }], 23: [function (require, module, exports) {
    function Polling(opts) {
      var forceBase64 = opts && opts.forceBase64;hasXHR2 && !forceBase64 || (this.supportsBinary = !1), Transport.call(this, opts);
    }var Transport = require("../transport"),
        parseqs = require("parseqs"),
        parser = require("engine.io-parser"),
        inherit = require("component-inherit"),
        yeast = require("yeast"),
        debug = require("debug")("engine.io-client:polling");module.exports = Polling;var hasXHR2 = null != new (require("xmlhttprequest-ssl"))({ xdomain: !1 }).responseType;inherit(Polling, Transport), Polling.prototype.name = "polling", Polling.prototype.doOpen = function () {
      this.poll();
    }, Polling.prototype.pause = function (onPause) {
      function pause() {
        debug("paused"), self.readyState = "paused", onPause();
      }var self = this;if (this.readyState = "pausing", this.polling || !this.writable) {
        var total = 0;this.polling && (debug("we are currently polling - waiting to pause"), total++, this.once("pollComplete", function () {
          debug("pre-pause polling complete"), --total || pause();
        })), this.writable || (debug("we are currently writing - waiting to pause"), total++, this.once("drain", function () {
          debug("pre-pause writing complete"), --total || pause();
        }));
      } else pause();
    }, Polling.prototype.poll = function () {
      debug("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
    }, Polling.prototype.onData = function (data) {
      var self = this;debug("polling got data %s", data);parser.decodePayload(data, this.socket.binaryType, function (packet, index, total) {
        if ("opening" === self.readyState && self.onOpen(), "close" === packet.type) return self.onClose(), !1;self.onPacket(packet);
      }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : debug('ignoring poll - transport state "%s"', this.readyState));
    }, Polling.prototype.doClose = function () {
      function close() {
        debug("writing close packet"), self.write([{ type: "close" }]);
      }var self = this;"open" === this.readyState ? (debug("transport open - closing"), close()) : (debug("transport not open - deferring close"), this.once("open", close));
    }, Polling.prototype.write = function (packets) {
      var self = this;this.writable = !1;var callbackfn = function () {
        self.writable = !0, self.emit("drain");
      };parser.encodePayload(packets, this.supportsBinary, function (data) {
        self.doWrite(data, callbackfn);
      });
    }, Polling.prototype.uri = function () {
      var query = this.query || {},
          schema = this.secure ? "https" : "http",
          port = "";return !1 !== this.timestampRequests && (query[this.timestampParam] = yeast()), this.supportsBinary || query.sid || (query.b64 = 1), query = parseqs.encode(query), this.port && ("https" === schema && 443 !== Number(this.port) || "http" === schema && 80 !== Number(this.port)) && (port = ":" + this.port), query.length && (query = "?" + query), schema + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query;
    };
  }, { "../transport": 19, "component-inherit": 13, debug: 14, "engine.io-parser": 26, parseqs: 35, "xmlhttprequest-ssl": 25, yeast: 48 }], 24: [function (require, module, exports) {
    (function (global) {
      function WS(opts) {
        opts && opts.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = opts.perMessageDeflate, this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode, this.protocols = opts.protocols, this.usingBrowserWebSocket || (WebSocket = NodeWebSocket), Transport.call(this, opts);
      }var NodeWebSocket,
          Transport = require("../transport"),
          parser = require("engine.io-parser"),
          parseqs = require("parseqs"),
          inherit = require("component-inherit"),
          yeast = require("yeast"),
          debug = require("debug")("engine.io-client:websocket"),
          BrowserWebSocket = global.WebSocket || global.MozWebSocket;if ("undefined" == typeof window) try {
        NodeWebSocket = require("ws");
      } catch (e) {}var WebSocket = BrowserWebSocket;WebSocket || "undefined" != typeof window || (WebSocket = NodeWebSocket), module.exports = WS, inherit(WS, Transport), WS.prototype.name = "websocket", WS.prototype.supportsBinary = !0, WS.prototype.doOpen = function () {
        if (this.check()) {
          var uri = this.uri(),
              protocols = this.protocols,
              opts = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };opts.pfx = this.pfx, opts.key = this.key, opts.passphrase = this.passphrase, opts.cert = this.cert, opts.ca = this.ca, opts.ciphers = this.ciphers, opts.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (opts.headers = this.extraHeaders), this.localAddress && (opts.localAddress = this.localAddress);try {
            this.ws = this.usingBrowserWebSocket ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
          } catch (err) {
            return this.emit("error", err);
          }void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
        }
      }, WS.prototype.addEventListeners = function () {
        var self = this;this.ws.onopen = function () {
          self.onOpen();
        }, this.ws.onclose = function () {
          self.onClose();
        }, this.ws.onmessage = function (ev) {
          self.onData(ev.data);
        }, this.ws.onerror = function (e) {
          self.onError("websocket error", e);
        };
      }, WS.prototype.write = function (packets) {
        function done() {
          self.emit("flush"), setTimeout(function () {
            self.writable = !0, self.emit("drain");
          }, 0);
        }var self = this;this.writable = !1;for (var total = packets.length, i = 0, l = total; i < l; i++) !function (packet) {
          parser.encodePacket(packet, self.supportsBinary, function (data) {
            if (!self.usingBrowserWebSocket) {
              var opts = {};packet.options && (opts.compress = packet.options.compress), self.perMessageDeflate && ("string" == typeof data ? global.Buffer.byteLength(data) : data.length) < self.perMessageDeflate.threshold && (opts.compress = !1);
            }try {
              self.usingBrowserWebSocket ? self.ws.send(data) : self.ws.send(data, opts);
            } catch (e) {
              debug("websocket closed before onclose event");
            }--total || done();
          });
        }(packets[i]);
      }, WS.prototype.onClose = function () {
        Transport.prototype.onClose.call(this);
      }, WS.prototype.doClose = function () {
        void 0 !== this.ws && this.ws.close();
      }, WS.prototype.uri = function () {
        var query = this.query || {},
            schema = this.secure ? "wss" : "ws",
            port = "";return this.port && ("wss" === schema && 443 !== Number(this.port) || "ws" === schema && 80 !== Number(this.port)) && (port = ":" + this.port), this.timestampRequests && (query[this.timestampParam] = yeast()), this.supportsBinary || (query.b64 = 1), (query = parseqs.encode(query)).length && (query = "?" + query), schema + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + port + this.path + query;
      }, WS.prototype.check = function () {
        return !(!WebSocket || "__initialize" in WebSocket && this.name === WS.prototype.name);
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "../transport": 19, "component-inherit": 13, debug: 14, "engine.io-parser": 26, parseqs: 35, ws: 10, yeast: 48 }], 25: [function (require, module, exports) {
    (function (global) {
      var hasCORS = require("has-cors");module.exports = function (opts) {
        var xdomain = opts.xdomain,
            xscheme = opts.xscheme,
            enablesXDR = opts.enablesXDR;try {
          if ("undefined" != typeof XMLHttpRequest && (!xdomain || hasCORS)) return new XMLHttpRequest();
        } catch (e) {}try {
          if ("undefined" != typeof XDomainRequest && !xscheme && enablesXDR) return new XDomainRequest();
        } catch (e) {}if (!xdomain) try {
          return new global[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {}
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "has-cors": 31 }], 26: [function (require, module, exports) {
    (function (global) {
      function encodeBase64Object(packet, callback) {
        return callback("b" + exports.packets[packet.type] + packet.data.data);
      }function encodeArrayBuffer(packet, supportsBinary, callback) {
        if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);var data = packet.data,
            contentArray = new Uint8Array(data),
            resultBuffer = new Uint8Array(1 + data.byteLength);resultBuffer[0] = packets[packet.type];for (var i = 0; i < contentArray.length; i++) resultBuffer[i + 1] = contentArray[i];return callback(resultBuffer.buffer);
      }function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
        if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);var fr = new FileReader();return fr.onload = function () {
          packet.data = fr.result, exports.encodePacket(packet, supportsBinary, !0, callback);
        }, fr.readAsArrayBuffer(packet.data);
      }function encodeBlob(packet, supportsBinary, callback) {
        if (!supportsBinary) return exports.encodeBase64Packet(packet, callback);if (dontSendBlobs) return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);var length = new Uint8Array(1);return length[0] = packets[packet.type], callback(new Blob([length.buffer, packet.data]));
      }function tryDecode(data) {
        try {
          data = utf8.decode(data, { strict: !1 });
        } catch (e) {
          return !1;
        }return data;
      }function map(ary, each, done) {
        for (var result = new Array(ary.length), next = after(ary.length, done), i = 0; i < ary.length; i++) !function (i, el, cb) {
          each(el, function (error, msg) {
            result[i] = msg, cb(error, result);
          });
        }(i, ary[i], next);
      }var base64encoder,
          keys = require("./keys"),
          hasBinary = require("has-binary2"),
          sliceBuffer = require("arraybuffer.slice"),
          after = require("after"),
          utf8 = require("./utf8");global && global.ArrayBuffer && (base64encoder = require("base64-arraybuffer"));var isAndroid = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
          isPhantomJS = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
          dontSendBlobs = isAndroid || isPhantomJS;exports.protocol = 3;var packets = exports.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
          packetslist = keys(packets),
          err = { type: "error", data: "parser error" },
          Blob = require("blob");exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
        "function" == typeof supportsBinary && (callback = supportsBinary, supportsBinary = !1), "function" == typeof utf8encode && (callback = utf8encode, utf8encode = null);var data = void 0 === packet.data ? void 0 : packet.data.buffer || packet.data;if (global.ArrayBuffer && data instanceof ArrayBuffer) return encodeArrayBuffer(packet, supportsBinary, callback);if (Blob && data instanceof global.Blob) return encodeBlob(packet, supportsBinary, callback);if (data && data.base64) return encodeBase64Object(packet, callback);var encoded = packets[packet.type];return void 0 !== packet.data && (encoded += utf8encode ? utf8.encode(String(packet.data), { strict: !1 }) : String(packet.data)), callback("" + encoded);
      }, exports.encodeBase64Packet = function (packet, callback) {
        var message = "b" + exports.packets[packet.type];if (Blob && packet.data instanceof global.Blob) {
          var fr = new FileReader();return fr.onload = function () {
            var b64 = fr.result.split(",")[1];callback(message + b64);
          }, fr.readAsDataURL(packet.data);
        }var b64data;try {
          b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
        } catch (e) {
          for (var typed = new Uint8Array(packet.data), basic = new Array(typed.length), i = 0; i < typed.length; i++) basic[i] = typed[i];b64data = String.fromCharCode.apply(null, basic);
        }return message += global.btoa(b64data), callback(message);
      }, exports.decodePacket = function (data, binaryType, utf8decode) {
        if (void 0 === data) return err;if ("string" == typeof data) {
          if ("b" === data.charAt(0)) return exports.decodeBase64Packet(data.substr(1), binaryType);if (utf8decode && !1 === (data = tryDecode(data))) return err;type = data.charAt(0);return Number(type) == type && packetslist[type] ? data.length > 1 ? { type: packetslist[type], data: data.substring(1) } : { type: packetslist[type] } : err;
        }var type = new Uint8Array(data)[0],
            rest = sliceBuffer(data, 1);return Blob && "blob" === binaryType && (rest = new Blob([rest])), { type: packetslist[type], data: rest };
      }, exports.decodeBase64Packet = function (msg, binaryType) {
        var type = packetslist[msg.charAt(0)];if (!base64encoder) return { type: type, data: { base64: !0, data: msg.substr(1) } };var data = base64encoder.decode(msg.substr(1));return "blob" === binaryType && Blob && (data = new Blob([data])), { type: type, data: data };
      }, exports.encodePayload = function (packets, supportsBinary, callback) {
        function setLengthHeader(message) {
          return message.length + ":" + message;
        }"function" == typeof supportsBinary && (callback = supportsBinary, supportsBinary = null);var isBinary = hasBinary(packets);return supportsBinary && isBinary ? Blob && !dontSendBlobs ? exports.encodePayloadAsBlob(packets, callback) : exports.encodePayloadAsArrayBuffer(packets, callback) : packets.length ? void map(packets, function (packet, doneCallback) {
          exports.encodePacket(packet, !!isBinary && supportsBinary, !1, function (message) {
            doneCallback(null, setLengthHeader(message));
          });
        }, function (err, results) {
          return callback(results.join(""));
        }) : callback("0:");
      }, exports.decodePayload = function (data, binaryType, callback) {
        if ("string" != typeof data) return exports.decodePayloadAsBinary(data, binaryType, callback);"function" == typeof binaryType && (callback = binaryType, binaryType = null);var packet;if ("" === data) return callback(err, 0, 1);for (var n, msg, length = "", i = 0, l = data.length; i < l; i++) {
          var chr = data.charAt(i);if (":" === chr) {
            if ("" === length || length != (n = Number(length))) return callback(err, 0, 1);if (msg = data.substr(i + 1, n), length != msg.length) return callback(err, 0, 1);if (msg.length) {
              if (packet = exports.decodePacket(msg, binaryType, !1), err.type === packet.type && err.data === packet.data) return callback(err, 0, 1);if (!1 === callback(packet, i + n, l)) return;
            }i += n, length = "";
          } else length += chr;
        }return "" !== length ? callback(err, 0, 1) : void 0;
      }, exports.encodePayloadAsArrayBuffer = function (packets, callback) {
        if (!packets.length) return callback(new ArrayBuffer(0));map(packets, function (packet, doneCallback) {
          exports.encodePacket(packet, !0, !0, function (data) {
            return doneCallback(null, data);
          });
        }, function (err, encodedPackets) {
          var totalLength = encodedPackets.reduce(function (acc, p) {
            var len;return len = "string" == typeof p ? p.length : p.byteLength, acc + len.toString().length + len + 2;
          }, 0),
              resultArray = new Uint8Array(totalLength),
              bufferIndex = 0;return encodedPackets.forEach(function (p) {
            var isString = "string" == typeof p,
                ab = p;if (isString) {
              for (var view = new Uint8Array(p.length), i = 0; i < p.length; i++) view[i] = p.charCodeAt(i);ab = view.buffer;
            }resultArray[bufferIndex++] = isString ? 0 : 1;for (var lenStr = ab.byteLength.toString(), i = 0; i < lenStr.length; i++) resultArray[bufferIndex++] = parseInt(lenStr[i]);resultArray[bufferIndex++] = 255;for (var view = new Uint8Array(ab), i = 0; i < view.length; i++) resultArray[bufferIndex++] = view[i];
          }), callback(resultArray.buffer);
        });
      }, exports.encodePayloadAsBlob = function (packets, callback) {
        map(packets, function (packet, doneCallback) {
          exports.encodePacket(packet, !0, !0, function (encoded) {
            var binaryIdentifier = new Uint8Array(1);if (binaryIdentifier[0] = 1, "string" == typeof encoded) {
              for (var view = new Uint8Array(encoded.length), i = 0; i < encoded.length; i++) view[i] = encoded.charCodeAt(i);encoded = view.buffer, binaryIdentifier[0] = 0;
            }for (var lenStr = (encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size).toString(), lengthAry = new Uint8Array(lenStr.length + 1), i = 0; i < lenStr.length; i++) lengthAry[i] = parseInt(lenStr[i]);if (lengthAry[lenStr.length] = 255, Blob) {
              var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);doneCallback(null, blob);
            }
          });
        }, function (err, results) {
          return callback(new Blob(results));
        });
      }, exports.decodePayloadAsBinary = function (data, binaryType, callback) {
        "function" == typeof binaryType && (callback = binaryType, binaryType = null);for (var bufferTail = data, buffers = []; bufferTail.byteLength > 0;) {
          for (var tailArray = new Uint8Array(bufferTail), isString = 0 === tailArray[0], msgLength = "", i = 1; 255 !== tailArray[i]; i++) {
            if (msgLength.length > 310) return callback(err, 0, 1);msgLength += tailArray[i];
          }bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length), msgLength = parseInt(msgLength);var msg = sliceBuffer(bufferTail, 0, msgLength);if (isString) try {
            msg = String.fromCharCode.apply(null, new Uint8Array(msg));
          } catch (e) {
            var typed = new Uint8Array(msg);msg = "";for (i = 0; i < typed.length; i++) msg += String.fromCharCode(typed[i]);
          }buffers.push(msg), bufferTail = sliceBuffer(bufferTail, msgLength);
        }var total = buffers.length;buffers.forEach(function (buffer, i) {
          callback(exports.decodePacket(buffer, binaryType, !0), i, total);
        });
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./keys": 27, "./utf8": 28, after: 5, "arraybuffer.slice": 6, "base64-arraybuffer": 8, blob: 9, "has-binary2": 29 }], 27: [function (require, module, exports) {
    module.exports = Object.keys || function (obj) {
      var arr = [],
          has = Object.prototype.hasOwnProperty;for (var i in obj) has.call(obj, i) && arr.push(i);return arr;
    };
  }, {}], 28: [function (require, module, exports) {
    (function (global) {
      !function (root) {
        function ucs2decode(string) {
          for (var value, extra, output = [], counter = 0, length = string.length; counter < length;) (value = string.charCodeAt(counter++)) >= 55296 && value <= 56319 && counter < length ? 56320 == (64512 & (extra = string.charCodeAt(counter++))) ? output.push(((1023 & value) << 10) + (1023 & extra) + 65536) : (output.push(value), counter--) : output.push(value);return output;
        }function ucs2encode(array) {
          for (var value, length = array.length, index = -1, output = ""; ++index < length;) (value = array[index]) > 65535 && (output += stringFromCharCode((value -= 65536) >>> 10 & 1023 | 55296), value = 56320 | 1023 & value), output += stringFromCharCode(value);return output;
        }function checkScalarValue(codePoint, strict) {
          if (codePoint >= 55296 && codePoint <= 57343) {
            if (strict) throw Error("Lone surrogate U+" + codePoint.toString(16).toUpperCase() + " is not a scalar value");return !1;
          }return !0;
        }function createByte(codePoint, shift) {
          return stringFromCharCode(codePoint >> shift & 63 | 128);
        }function encodeCodePoint(codePoint, strict) {
          if (0 == (4294967168 & codePoint)) return stringFromCharCode(codePoint);var symbol = "";return 0 == (4294965248 & codePoint) ? symbol = stringFromCharCode(codePoint >> 6 & 31 | 192) : 0 == (4294901760 & codePoint) ? (checkScalarValue(codePoint, strict) || (codePoint = 65533), symbol = stringFromCharCode(codePoint >> 12 & 15 | 224), symbol += createByte(codePoint, 6)) : 0 == (4292870144 & codePoint) && (symbol = stringFromCharCode(codePoint >> 18 & 7 | 240), symbol += createByte(codePoint, 12), symbol += createByte(codePoint, 6)), symbol += stringFromCharCode(63 & codePoint | 128);
        }function readContinuationByte() {
          if (byteIndex >= byteCount) throw Error("Invalid byte index");var continuationByte = 255 & byteArray[byteIndex];if (byteIndex++, 128 == (192 & continuationByte)) return 63 & continuationByte;throw Error("Invalid continuation byte");
        }function decodeSymbol(strict) {
          var byte1, byte2, byte3, byte4, codePoint;if (byteIndex > byteCount) throw Error("Invalid byte index");if (byteIndex == byteCount) return !1;if (byte1 = 255 & byteArray[byteIndex], byteIndex++, 0 == (128 & byte1)) return byte1;if (192 == (224 & byte1)) {
            if (byte2 = readContinuationByte(), (codePoint = (31 & byte1) << 6 | byte2) >= 128) return codePoint;throw Error("Invalid continuation byte");
          }if (224 == (240 & byte1)) {
            if (byte2 = readContinuationByte(), byte3 = readContinuationByte(), (codePoint = (15 & byte1) << 12 | byte2 << 6 | byte3) >= 2048) return checkScalarValue(codePoint, strict) ? codePoint : 65533;throw Error("Invalid continuation byte");
          }if (240 == (248 & byte1) && (byte2 = readContinuationByte(), byte3 = readContinuationByte(), byte4 = readContinuationByte(), (codePoint = (7 & byte1) << 18 | byte2 << 12 | byte3 << 6 | byte4) >= 65536 && codePoint <= 1114111)) return codePoint;throw Error("Invalid UTF-8 detected");
        }var freeExports = "object" == typeof exports && exports,
            freeModule = "object" == typeof module && module && module.exports == freeExports && module,
            freeGlobal = "object" == typeof global && global;freeGlobal.global !== freeGlobal && freeGlobal.window !== freeGlobal || (root = freeGlobal);var byteArray,
            byteCount,
            byteIndex,
            stringFromCharCode = String.fromCharCode,
            utf8 = { version: "2.1.2", encode: function (string, opts) {
            for (var strict = !1 !== (opts = opts || {}).strict, codePoints = ucs2decode(string), length = codePoints.length, index = -1, byteString = ""; ++index < length;) byteString += encodeCodePoint(codePoints[index], strict);return byteString;
          }, decode: function (byteString, opts) {
            var strict = !1 !== (opts = opts || {}).strict;byteArray = ucs2decode(byteString), byteCount = byteArray.length, byteIndex = 0;for (var tmp, codePoints = []; !1 !== (tmp = decodeSymbol(strict));) codePoints.push(tmp);return ucs2encode(codePoints);
          } };if ("function" == typeof define && "object" == typeof define.amd && define.amd) define(function () {
          return utf8;
        });else if (freeExports && !freeExports.nodeType) {
          if (freeModule) freeModule.exports = utf8;else {
            var hasOwnProperty = {}.hasOwnProperty;for (var key in utf8) hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
          }
        } else root.utf8 = utf8;
      }(this);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 29: [function (require, module, exports) {
    (function (global) {
      function hasBinary(obj) {
        if (!obj || "object" != typeof obj) return !1;if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) if (hasBinary(obj[i])) return !0;return !1;
        }if ("function" == typeof global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || "function" == typeof global.ArrayBuffer && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) return !0;if (obj.toJSON && "function" == typeof obj.toJSON && 1 === arguments.length) return hasBinary(obj.toJSON(), !0);for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) return !0;return !1;
      }var isArray = require("isarray"),
          toString = Object.prototype.toString,
          withNativeBlob = "function" == typeof global.Blob || "[object BlobConstructor]" === toString.call(global.Blob),
          withNativeFile = "function" == typeof global.File || "[object FileConstructor]" === toString.call(global.File);module.exports = hasBinary;
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { isarray: 30 }], 30: [function (require, module, exports) {
    var toString = {}.toString;module.exports = Array.isArray || function (arr) {
      return "[object Array]" == toString.call(arr);
    };
  }, {}], 31: [function (require, module, exports) {
    try {
      module.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
      module.exports = !1;
    }
  }, {}], 32: [function (require, module, exports) {
    var indexOf = [].indexOf;module.exports = function (arr, obj) {
      if (indexOf) return arr.indexOf(obj);for (var i = 0; i < arr.length; ++i) if (arr[i] === obj) return i;return -1;
    };
  }, {}], 33: [function (require, module, exports) {
    function parse(str) {
      if (!((str = String(str)).length > 100)) {
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if (match) {
          var n = parseFloat(match[1]);switch ((match[2] || "ms").toLowerCase()) {case "years":case "year":case "yrs":case "yr":case "y":
              return n * y;case "days":case "day":case "d":
              return n * d;case "hours":case "hour":case "hrs":case "hr":case "h":
              return n * h;case "minutes":case "minute":case "mins":case "min":case "m":
              return n * m;case "seconds":case "second":case "secs":case "sec":case "s":
              return n * s;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
              return n;default:
              return;}
        }
      }
    }function fmtShort(ms) {
      return ms >= d ? Math.round(ms / d) + "d" : ms >= h ? Math.round(ms / h) + "h" : ms >= m ? Math.round(ms / m) + "m" : ms >= s ? Math.round(ms / s) + "s" : ms + "ms";
    }function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }function plural(ms, n, name) {
      if (!(ms < n)) return ms < 1.5 * n ? Math.floor(ms / n) + " " + name : Math.ceil(ms / n) + " " + name + "s";
    }var s = 1e3,
        m = 60 * s,
        h = 60 * m,
        d = 24 * h,
        y = 365.25 * d;module.exports = function (val, options) {
      options = options || {};var type = typeof val;if ("string" === type && val.length > 0) return parse(val);if ("number" === type && !1 === isNaN(val)) return options.long ? fmtLong(val) : fmtShort(val);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
  }, {}], 34: [function (require, module, exports) {
    (function (global) {
      var rvalidchars = /^[\],:{}\s]*$/,
          rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
          rtrimLeft = /^\s+/,
          rtrimRight = /\s+$/;module.exports = function (data) {
        return "string" == typeof data && data ? (data = data.replace(rtrimLeft, "").replace(rtrimRight, ""), global.JSON && JSON.parse ? JSON.parse(data) : rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, "")) ? new Function("return " + data)() : void 0) : null;
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 35: [function (require, module, exports) {
    exports.encode = function (obj) {
      var str = "";for (var i in obj) obj.hasOwnProperty(i) && (str.length && (str += "&"), str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));return str;
    }, exports.decode = function (qs) {
      for (var qry = {}, pairs = qs.split("&"), i = 0, l = pairs.length; i < l; i++) {
        var pair = pairs[i].split("=");qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }return qry;
    };
  }, {}], 36: [function (require, module, exports) {
    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];module.exports = function (str) {
      var src = str,
          b = str.indexOf("["),
          e = str.indexOf("]");-1 != b && -1 != e && (str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length));for (var m = re.exec(str || ""), uri = {}, i = 14; i--;) uri[parts[i]] = m[i] || "";return -1 != b && -1 != e && (uri.source = src, uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":"), uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), uri.ipv6uri = !0), uri;
    };
  }, {}], 37: [function (require, module, exports) {
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(fun, 0);try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(marker);try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }function cleanUpNextTick() {
      draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue());
    }function drainQueue() {
      if (!draining) {
        var timeout = runTimeout(cleanUpNextTick);draining = !0;for (var len = queue.length; len;) {
          for (currentQueue = queue, queue = []; ++queueIndex < len;) currentQueue && currentQueue[queueIndex].run();queueIndex = -1, len = queue.length;
        }currentQueue = null, draining = !1, runClearTimeout(timeout);
      }
    }function Item(fun, array) {
      this.fun = fun, this.array = array;
    }function noop() {}var cachedSetTimeout,
        cachedClearTimeout,
        process = module.exports = {};!function () {
      try {
        cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }try {
        cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    }();var currentQueue,
        queue = [],
        draining = !1,
        queueIndex = -1;process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
    }, Item.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function (name) {
      return [];
    }, process.binding = function (name) {
      throw new Error("process.binding is not supported");
    }, process.cwd = function () {
      return "/";
    }, process.chdir = function (dir) {
      throw new Error("process.chdir is not supported");
    }, process.umask = function () {
      return 0;
    };
  }, {}], 38: [function (require, module, exports) {
    function lookup(uri, opts) {
      "object" == typeof uri && (opts = uri, uri = void 0), opts = opts || {};var io,
          parsed = url(uri),
          source = parsed.source,
          id = parsed.id,
          path = parsed.path,
          sameNamespace = cache[id] && path in cache[id].nsps;return opts.forceNew || opts["force new connection"] || !1 === opts.multiplex || sameNamespace ? (debug("ignoring socket cache for %s", source), io = Manager(source, opts)) : (cache[id] || (debug("new io instance for %s", source), cache[id] = Manager(source, opts)), io = cache[id]), parsed.query && !opts.query && (opts.query = parsed.query), io.socket(parsed.path, opts);
    }var url = require("./url"),
        parser = require("socket.io-parser"),
        Manager = require("./manager"),
        debug = require("debug")("socket.io-client");module.exports = exports = lookup;var cache = exports.managers = {};exports.protocol = parser.protocol, exports.connect = lookup, exports.Manager = require("./manager"), exports.Socket = require("./socket");
  }, { "./manager": 39, "./socket": 41, "./url": 42, debug: 14, "socket.io-parser": 44 }], 39: [function (require, module, exports) {
    function Manager(uri, opts) {
      if (!(this instanceof Manager)) return new Manager(uri, opts);uri && "object" == typeof uri && (opts = uri, uri = void 0), (opts = opts || {}).path = opts.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = opts, this.reconnection(!1 !== opts.reconnection), this.reconnectionAttempts(opts.reconnectionAttempts || 1 / 0), this.reconnectionDelay(opts.reconnectionDelay || 1e3), this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3), this.randomizationFactor(opts.randomizationFactor || .5), this.backoff = new Backoff({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == opts.timeout ? 2e4 : opts.timeout), this.readyState = "closed", this.uri = uri, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];var _parser = opts.parser || parser;this.encoder = new _parser.Encoder(), this.decoder = new _parser.Decoder(), this.autoConnect = !1 !== opts.autoConnect, this.autoConnect && this.open();
    }var eio = require("engine.io-client"),
        Socket = require("./socket"),
        Emitter = require("component-emitter"),
        parser = require("socket.io-parser"),
        on = require("./on"),
        bind = require("component-bind"),
        debug = require("debug")("socket.io-client:manager"),
        indexOf = require("indexof"),
        Backoff = require("backo2"),
        has = Object.prototype.hasOwnProperty;module.exports = Manager, Manager.prototype.emitAll = function () {
      this.emit.apply(this, arguments);for (var nsp in this.nsps) has.call(this.nsps, nsp) && this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }, Manager.prototype.updateSocketIds = function () {
      for (var nsp in this.nsps) has.call(this.nsps, nsp) && (this.nsps[nsp].id = this.generateId(nsp));
    }, Manager.prototype.generateId = function (nsp) {
      return ("/" === nsp ? "" : nsp + "#") + this.engine.id;
    }, Emitter(Manager.prototype), Manager.prototype.reconnection = function (v) {
      return arguments.length ? (this._reconnection = !!v, this) : this._reconnection;
    }, Manager.prototype.reconnectionAttempts = function (v) {
      return arguments.length ? (this._reconnectionAttempts = v, this) : this._reconnectionAttempts;
    }, Manager.prototype.reconnectionDelay = function (v) {
      return arguments.length ? (this._reconnectionDelay = v, this.backoff && this.backoff.setMin(v), this) : this._reconnectionDelay;
    }, Manager.prototype.randomizationFactor = function (v) {
      return arguments.length ? (this._randomizationFactor = v, this.backoff && this.backoff.setJitter(v), this) : this._randomizationFactor;
    }, Manager.prototype.reconnectionDelayMax = function (v) {
      return arguments.length ? (this._reconnectionDelayMax = v, this.backoff && this.backoff.setMax(v), this) : this._reconnectionDelayMax;
    }, Manager.prototype.timeout = function (v) {
      return arguments.length ? (this._timeout = v, this) : this._timeout;
    }, Manager.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
      if (debug("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;debug("opening %s", this.uri), this.engine = eio(this.uri, this.opts);var socket = this.engine,
          self = this;this.readyState = "opening", this.skipReconnect = !1;var openSub = on(socket, "open", function () {
        self.onopen(), fn && fn();
      }),
          errorSub = on(socket, "error", function (data) {
        if (debug("connect_error"), self.cleanup(), self.readyState = "closed", self.emitAll("connect_error", data), fn) {
          var err = new Error("Connection error");err.data = data, fn(err);
        } else self.maybeReconnectOnOpen();
      });if (!1 !== this._timeout) {
        var timeout = this._timeout;debug("connect attempt will timeout after %d", timeout);var timer = setTimeout(function () {
          debug("connect attempt timed out after %d", timeout), openSub.destroy(), socket.close(), socket.emit("error", "timeout"), self.emitAll("connect_timeout", timeout);
        }, timeout);this.subs.push({ destroy: function () {
            clearTimeout(timer);
          } });
      }return this.subs.push(openSub), this.subs.push(errorSub), this;
    }, Manager.prototype.onopen = function () {
      debug("open"), this.cleanup(), this.readyState = "open", this.emit("open");var socket = this.engine;this.subs.push(on(socket, "data", bind(this, "ondata"))), this.subs.push(on(socket, "ping", bind(this, "onping"))), this.subs.push(on(socket, "pong", bind(this, "onpong"))), this.subs.push(on(socket, "error", bind(this, "onerror"))), this.subs.push(on(socket, "close", bind(this, "onclose"))), this.subs.push(on(this.decoder, "decoded", bind(this, "ondecoded")));
    }, Manager.prototype.onping = function () {
      this.lastPing = new Date(), this.emitAll("ping");
    }, Manager.prototype.onpong = function () {
      this.emitAll("pong", new Date() - this.lastPing);
    }, Manager.prototype.ondata = function (data) {
      this.decoder.add(data);
    }, Manager.prototype.ondecoded = function (packet) {
      this.emit("packet", packet);
    }, Manager.prototype.onerror = function (err) {
      debug("error", err), this.emitAll("error", err);
    }, Manager.prototype.socket = function (nsp, opts) {
      function onConnecting() {
        ~indexOf(self.connecting, socket) || self.connecting.push(socket);
      }var socket = this.nsps[nsp];if (!socket) {
        socket = new Socket(this, nsp, opts), this.nsps[nsp] = socket;var self = this;socket.on("connecting", onConnecting), socket.on("connect", function () {
          socket.id = self.generateId(nsp);
        }), this.autoConnect && onConnecting();
      }return socket;
    }, Manager.prototype.destroy = function (socket) {
      var index = indexOf(this.connecting, socket);~index && this.connecting.splice(index, 1), this.connecting.length || this.close();
    }, Manager.prototype.packet = function (packet) {
      debug("writing packet %j", packet);var self = this;packet.query && 0 === packet.type && (packet.nsp += "?" + packet.query), self.encoding ? self.packetBuffer.push(packet) : (self.encoding = !0, this.encoder.encode(packet, function (encodedPackets) {
        for (var i = 0; i < encodedPackets.length; i++) self.engine.write(encodedPackets[i], packet.options);self.encoding = !1, self.processPacketQueue();
      }));
    }, Manager.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var pack = this.packetBuffer.shift();this.packet(pack);
      }
    }, Manager.prototype.cleanup = function () {
      debug("cleanup");for (var subsLength = this.subs.length, i = 0; i < subsLength; i++) this.subs.shift().destroy();this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
    }, Manager.prototype.close = Manager.prototype.disconnect = function () {
      debug("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
    }, Manager.prototype.onclose = function (reason) {
      debug("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", reason), this._reconnection && !this.skipReconnect && this.reconnect();
    }, Manager.prototype.reconnect = function () {
      if (this.reconnecting || this.skipReconnect) return this;var self = this;if (this.backoff.attempts >= this._reconnectionAttempts) debug("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {
        var delay = this.backoff.duration();debug("will wait %dms before reconnect attempt", delay), this.reconnecting = !0;var timer = setTimeout(function () {
          self.skipReconnect || (debug("attempting reconnect"), self.emitAll("reconnect_attempt", self.backoff.attempts), self.emitAll("reconnecting", self.backoff.attempts), self.skipReconnect || self.open(function (err) {
            err ? (debug("reconnect attempt error"), self.reconnecting = !1, self.reconnect(), self.emitAll("reconnect_error", err.data)) : (debug("reconnect success"), self.onreconnect());
          }));
        }, delay);this.subs.push({ destroy: function () {
            clearTimeout(timer);
          } });
      }
    }, Manager.prototype.onreconnect = function () {
      var attempt = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", attempt);
    };
  }, { "./on": 40, "./socket": 41, backo2: 7, "component-bind": 11, "component-emitter": 12, debug: 14, "engine.io-client": 16, indexof: 32, "socket.io-parser": 44 }], 40: [function (require, module, exports) {
    module.exports = function (obj, ev, fn) {
      return obj.on(ev, fn), { destroy: function () {
          obj.removeListener(ev, fn);
        } };
    };
  }, {}], 41: [function (require, module, exports) {
    function Socket(io, nsp, opts) {
      this.io = io, this.nsp = nsp, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, opts && opts.query && (this.query = opts.query), this.io.autoConnect && this.open();
    }var parser = require("socket.io-parser"),
        Emitter = require("component-emitter"),
        toArray = require("to-array"),
        on = require("./on"),
        bind = require("component-bind"),
        debug = require("debug")("socket.io-client:socket"),
        parseqs = require("parseqs");module.exports = Socket;var events = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },
        emit = Emitter.prototype.emit;Emitter(Socket.prototype), Socket.prototype.subEvents = function () {
      if (!this.subs) {
        var io = this.io;this.subs = [on(io, "open", bind(this, "onopen")), on(io, "packet", bind(this, "onpacket")), on(io, "close", bind(this, "onclose"))];
      }
    }, Socket.prototype.open = Socket.prototype.connect = function () {
      return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);
    }, Socket.prototype.send = function () {
      var args = toArray(arguments);return args.unshift("message"), this.emit.apply(this, args), this;
    }, Socket.prototype.emit = function (ev) {
      if (events.hasOwnProperty(ev)) return emit.apply(this, arguments), this;var args = toArray(arguments),
          packet = { type: parser.EVENT, data: args };return packet.options = {}, packet.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof args[args.length - 1] && (debug("emitting packet with ack id %d", this.ids), this.acks[this.ids] = args.pop(), packet.id = this.ids++), this.connected ? this.packet(packet) : this.sendBuffer.push(packet), delete this.flags, this;
    }, Socket.prototype.packet = function (packet) {
      packet.nsp = this.nsp, this.io.packet(packet);
    }, Socket.prototype.onopen = function () {
      if (debug("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
        var query = "object" == typeof this.query ? parseqs.encode(this.query) : this.query;debug("sending connect packet with query %s", query), this.packet({ type: parser.CONNECT, query: query });
      } else this.packet({ type: parser.CONNECT });
    }, Socket.prototype.onclose = function (reason) {
      debug("close (%s)", reason), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", reason);
    }, Socket.prototype.onpacket = function (packet) {
      if (packet.nsp === this.nsp) switch (packet.type) {case parser.CONNECT:
          this.onconnect();break;case parser.EVENT:case parser.BINARY_EVENT:
          this.onevent(packet);break;case parser.ACK:case parser.BINARY_ACK:
          this.onack(packet);break;case parser.DISCONNECT:
          this.ondisconnect();break;case parser.ERROR:
          this.emit("error", packet.data);}
    }, Socket.prototype.onevent = function (packet) {
      var args = packet.data || [];debug("emitting event %j", args), null != packet.id && (debug("attaching ack callback to event"), args.push(this.ack(packet.id))), this.connected ? emit.apply(this, args) : this.receiveBuffer.push(args);
    }, Socket.prototype.ack = function (id) {
      var self = this,
          sent = !1;return function () {
        if (!sent) {
          sent = !0;var args = toArray(arguments);debug("sending ack %j", args), self.packet({ type: parser.ACK, id: id, data: args });
        }
      };
    }, Socket.prototype.onack = function (packet) {
      var ack = this.acks[packet.id];"function" == typeof ack ? (debug("calling ack %s with %j", packet.id, packet.data), ack.apply(this, packet.data), delete this.acks[packet.id]) : debug("bad ack %s", packet.id);
    }, Socket.prototype.onconnect = function () {
      this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
    }, Socket.prototype.emitBuffered = function () {
      var i;for (i = 0; i < this.receiveBuffer.length; i++) emit.apply(this, this.receiveBuffer[i]);for (this.receiveBuffer = [], i = 0; i < this.sendBuffer.length; i++) this.packet(this.sendBuffer[i]);this.sendBuffer = [];
    }, Socket.prototype.ondisconnect = function () {
      debug("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
    }, Socket.prototype.destroy = function () {
      if (this.subs) {
        for (var i = 0; i < this.subs.length; i++) this.subs[i].destroy();this.subs = null;
      }this.io.destroy(this);
    }, Socket.prototype.close = Socket.prototype.disconnect = function () {
      return this.connected && (debug("performing disconnect (%s)", this.nsp), this.packet({ type: parser.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }, Socket.prototype.compress = function (compress) {
      return this.flags = this.flags || {}, this.flags.compress = compress, this;
    };
  }, { "./on": 40, "component-bind": 11, "component-emitter": 12, debug: 14, parseqs: 35, "socket.io-parser": 44, "to-array": 47 }], 42: [function (require, module, exports) {
    (function (global) {
      var parseuri = require("parseuri"),
          debug = require("debug")("socket.io-client:url");module.exports = function (uri, loc) {
        var obj = uri;loc = loc || global.location, null == uri && (uri = loc.protocol + "//" + loc.host), "string" == typeof uri && ("/" === uri.charAt(0) && (uri = "/" === uri.charAt(1) ? loc.protocol + uri : loc.host + uri), /^(https?|wss?):\/\//.test(uri) || (debug("protocol-less url %s", uri), uri = void 0 !== loc ? loc.protocol + "//" + uri : "https://" + uri), debug("parse %s", uri), obj = parseuri(uri)), obj.port || (/^(http|ws)$/.test(obj.protocol) ? obj.port = "80" : /^(http|ws)s$/.test(obj.protocol) && (obj.port = "443")), obj.path = obj.path || "/";var host = -1 !== obj.host.indexOf(":") ? "[" + obj.host + "]" : obj.host;return obj.id = obj.protocol + "://" + host + ":" + obj.port, obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port), obj;
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { debug: 14, parseuri: 36 }], 43: [function (require, module, exports) {
    (function (global) {
      function _deconstructPacket(data, buffers) {
        if (!data) return data;if (isBuf(data)) {
          var placeholder = { _placeholder: !0, num: buffers.length };return buffers.push(data), placeholder;
        }if (isArray(data)) {
          for (var newData = new Array(data.length), i = 0; i < data.length; i++) newData[i] = _deconstructPacket(data[i], buffers);return newData;
        }if ("object" == typeof data && !(data instanceof Date)) {
          newData = {};for (var key in data) newData[key] = _deconstructPacket(data[key], buffers);return newData;
        }return data;
      }function _reconstructPacket(data, buffers) {
        if (!data) return data;if (data && data._placeholder) return buffers[data.num];if (isArray(data)) for (var i = 0; i < data.length; i++) data[i] = _reconstructPacket(data[i], buffers);else if ("object" == typeof data) for (var key in data) data[key] = _reconstructPacket(data[key], buffers);return data;
      }var isArray = require("isarray"),
          isBuf = require("./is-buffer"),
          toString = Object.prototype.toString,
          withNativeBlob = "function" == typeof global.Blob || "[object BlobConstructor]" === toString.call(global.Blob),
          withNativeFile = "function" == typeof global.File || "[object FileConstructor]" === toString.call(global.File);exports.deconstructPacket = function (packet) {
        var buffers = [],
            packetData = packet.data,
            pack = packet;return pack.data = _deconstructPacket(packetData, buffers), pack.attachments = buffers.length, { packet: pack, buffers: buffers };
      }, exports.reconstructPacket = function (packet, buffers) {
        return packet.data = _reconstructPacket(packet.data, buffers), packet.attachments = void 0, packet;
      }, exports.removeBlobs = function (data, callback) {
        function _removeBlobs(obj, curKey, containingObject) {
          if (!obj) return obj;if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
            pendingBlobs++;var fileReader = new FileReader();fileReader.onload = function () {
              containingObject ? containingObject[curKey] = this.result : bloblessData = this.result, --pendingBlobs || callback(bloblessData);
            }, fileReader.readAsArrayBuffer(obj);
          } else if (isArray(obj)) for (var i = 0; i < obj.length; i++) _removeBlobs(obj[i], i, obj);else if ("object" == typeof obj && !isBuf(obj)) for (var key in obj) _removeBlobs(obj[key], key, obj);
        }var pendingBlobs = 0,
            bloblessData = data;_removeBlobs(bloblessData), pendingBlobs || callback(bloblessData);
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./is-buffer": 45, isarray: 46 }], 44: [function (require, module, exports) {
    function Encoder() {}function encodeAsString(obj) {
      var str = "" + obj.type;return exports.BINARY_EVENT !== obj.type && exports.BINARY_ACK !== obj.type || (str += obj.attachments + "-"), obj.nsp && "/" !== obj.nsp && (str += obj.nsp + ","), null != obj.id && (str += obj.id), null != obj.data && (str += JSON.stringify(obj.data)), debug("encoded %j as %s", obj, str), str;
    }function encodeAsBinary(obj, callback) {
      binary.removeBlobs(obj, function (bloblessData) {
        var deconstruction = binary.deconstructPacket(bloblessData),
            pack = encodeAsString(deconstruction.packet),
            buffers = deconstruction.buffers;buffers.unshift(pack), callback(buffers);
      });
    }function Decoder() {
      this.reconstructor = null;
    }function decodeString(str) {
      var i = 0,
          p = { type: Number(str.charAt(0)) };if (null == exports.types[p.type]) return error();if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
        for (var buf = ""; "-" !== str.charAt(++i) && (buf += str.charAt(i), i != str.length););if (buf != Number(buf) || "-" !== str.charAt(i)) throw new Error("Illegal attachments");p.attachments = Number(buf);
      }if ("/" === str.charAt(i + 1)) for (p.nsp = ""; ++i && "," !== (c = str.charAt(i)) && (p.nsp += c, i !== str.length););else p.nsp = "/";var next = str.charAt(i + 1);if ("" !== next && Number(next) == next) {
        for (p.id = ""; ++i;) {
          var c = str.charAt(i);if (null == c || Number(c) != c) {
            --i;break;
          }if (p.id += str.charAt(i), i === str.length) break;
        }p.id = Number(p.id);
      }return str.charAt(++i) && (p = tryParse(p, str.substr(i))), debug("decoded %s as %j", str, p), p;
    }function tryParse(p, str) {
      try {
        p.data = JSON.parse(str);
      } catch (e) {
        return error();
      }return p;
    }function BinaryReconstructor(packet) {
      this.reconPack = packet, this.buffers = [];
    }function error() {
      return { type: exports.ERROR, data: "parser error" };
    }var debug = require("debug")("socket.io-parser"),
        Emitter = require("component-emitter"),
        hasBin = require("has-binary2"),
        binary = require("./binary"),
        isBuf = require("./is-buffer");exports.protocol = 4, exports.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], exports.CONNECT = 0, exports.DISCONNECT = 1, exports.EVENT = 2, exports.ACK = 3, exports.ERROR = 4, exports.BINARY_EVENT = 5, exports.BINARY_ACK = 6, exports.Encoder = Encoder, exports.Decoder = Decoder, Encoder.prototype.encode = function (obj, callback) {
      obj.type !== exports.EVENT && obj.type !== exports.ACK || !hasBin(obj.data) || (obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK), debug("encoding packet %j", obj), exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type ? encodeAsBinary(obj, callback) : callback([encodeAsString(obj)]);
    }, Emitter(Decoder.prototype), Decoder.prototype.add = function (obj) {
      var packet;if ("string" == typeof obj) packet = decodeString(obj), exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type ? (this.reconstructor = new BinaryReconstructor(packet), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", packet)) : this.emit("decoded", packet);else {
        if (!isBuf(obj) && !obj.base64) throw new Error("Unknown type: " + obj);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");(packet = this.reconstructor.takeBinaryData(obj)) && (this.reconstructor = null, this.emit("decoded", packet));
      }
    }, Decoder.prototype.destroy = function () {
      this.reconstructor && this.reconstructor.finishedReconstruction();
    }, BinaryReconstructor.prototype.takeBinaryData = function (binData) {
      if (this.buffers.push(binData), this.buffers.length === this.reconPack.attachments) {
        var packet = binary.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), packet;
      }return null;
    }, BinaryReconstructor.prototype.finishedReconstruction = function () {
      this.reconPack = null, this.buffers = [];
    };
  }, { "./binary": 43, "./is-buffer": 45, "component-emitter": 12, debug: 14, "has-binary2": 29 }], 45: [function (require, module, exports) {
    (function (global) {
      module.exports = function (obj) {
        return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 46: [function (require, module, exports) {
    arguments[4][30][0].apply(exports, arguments);
  }, { dup: 30 }], 47: [function (require, module, exports) {
    module.exports = function (list, index) {
      for (var array = [], i = (index = index || 0) || 0; i < list.length; i++) array[i - index] = list[i];return array;
    };
  }, {}], 48: [function (require, module, exports) {
    "use strict";
    function encode(num) {
      var encoded = "";do {
        encoded = alphabet[num % length] + encoded, num = Math.floor(num / length);
      } while (num > 0);return encoded;
    }function yeast() {
      var now = encode(+new Date());return now !== prev ? (seed = 0, prev = now) : now + "." + encode(seed++);
    }for (var prev, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {}, seed = 0, i = 0; i < length; i++) map[alphabet[i]] = i;yeast.encode = encode, yeast.decode = function (str) {
      var decoded = 0;for (i = 0; i < str.length; i++) decoded = decoded * length + map[str.charAt(i)];return decoded;
    }, module.exports = yeast;
  }, {}] }, {}, [3]);