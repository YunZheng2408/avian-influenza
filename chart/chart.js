// 初始化echarts实例  
var myChart = echarts.init(document.getElementById('main'));

// 初始数据
var initialData = [
    ['序号', 'country', 'num'],
    [129, '越南社会主义共和国', 129],
    [9, '美利坚合众国', 9],
    [5, '大不列颠及北爱尔兰联合王国', 5],
    [12, '土耳其共和国', 12],
    [25, '泰王国', 25],
    [2, '西班牙王国', 2],
    [3, '巴基斯坦伊斯兰共和国', 3],
    [1, '尼日利亚联邦共和国', 1],
    [1, '尼泊尔', 1],
    [3, '老挝人民民主共和国', 3],
    [3, '伊拉克共和国', 3],
    [200, '印度尼西亚共和国', 200],
    [1, '印度共和国', 1],
    [359, '阿拉伯埃及共和国', 359],
    [1, '厄瓜多尔共和国', 1],
    [1, '吉布提共和国', 1],
    [75, '中华人民共和国', 75],
    [1, '智利共和国', 1],
    [1, '加拿大', 1],
    [69, '柬埔寨王国', 69],
    [1, '缅甸联邦共和国', 1],
    [8, '孟加拉人民共和国', 8],
    [8, '阿塞拜疆共和国', 8],
    [1, '澳大利亚联邦', 1],
    [1, '阿什莫尔和卡捷群岛（澳大利亚）', 1]
];

// 新的数据源
var newData1997_2000 = [
    ['序号', 'country', 'num '],
    [18, '中华人民共和国', 18],
];
var newData2001_2004 = [
    ['序号', 'country', 'num '],
    [31, '越南社会主义共和国', 31],
    [2, '泰王国', 17],
    [3, '中华人民共和国', 3],
];
var newData2005_2008 = [
    ['序号', 'country', 'num '],
    [76, '越南社会主义共和国', 76],
    [12, '土耳其共和国', 12],
    [8, '泰王国', 8],
    [3, '巴基斯坦伊斯兰共和国', 3],
    [1, '尼日利亚联邦共和国', 1],
    [2, '老挝人民民主共和国', 2],
    [3, '伊拉克共和国', 3],
    [141, '印度尼西亚共和国', 141],
    [51, '阿拉伯埃及共和国', 51],
    [1, '吉布提共和国', 1],
    [29, '中华人民共和国', 29],
    [8, '柬埔寨王国', 8],
    [1, '缅甸联邦共和国', 1],
    [1, '孟加拉人民共和国', 1],
    [8, '阿塞拜疆共和国', 8],
];
var newData2009_2012 = [
    ['序号', 'country', 'num '],
    [16, '越南社会主义共和国', 16],
    [51, '印度尼西亚共和国', 51],
    [118, '阿拉伯埃及共和国', 118],
    [13, '中华人民共和国', 13],
    [13, '柬埔寨王国', 13],
    [5, '孟加拉人民共和国', 5],
];
var newData2013_2016 = [
    ['序号', 'country', 'num '],
    [4, '越南社会主义共和国', 4],
    [7, '印度尼西亚共和国', 7],
    [187, '阿拉伯埃及共和国', 187],
    [10, '中华人民共和国', 10],
    [1, '加拿大', 1],
    [35, '柬埔寨王国', 35],
    [2, '孟加拉人民共和国', 2],
];
var newData2017_2020 = [
    ['序号', 'country', 'num '],
    [1, '尼泊尔', 1],
    [1, '老挝人民民主共和国', 1],
    [1, '印度尼西亚共和国', 1],
    [3, '阿拉伯埃及共和国', 3],
];
var newData2021_2024 = [
    ['序号', 'country', 'num '],
    [2, '越南社会主义共和国', 2],
    [9, '美利坚合众国', 9],
    [5, '大不列颠及北爱尔兰联合王国', 5],
    [2, '西班牙王国', 2],
    [1, '印度共和国', 1],
    [1, '厄瓜多尔共和国', 1],
    [2, '中华人民共和国', 2],
    [1, '智利共和国', 1],
    [13, '柬埔寨王国', 13],
    [1, '澳大利亚联邦', 1],
    [1, '阿什莫尔和卡捷群岛（澳大利亚）', 1],
];

// 指定图表的配置项和数据  
var option = {
  dataset: {
    source: initialData
  },
  grid: {
    left: '3%',
    top: '6%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 6
    }
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      fontSize: 6
    }
  },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 0,
    max: 400,
    text: ['400', '0'],
    dimension: 2,
    inRange: {
      color: ['#fec0bfff', '#936978ff', '#7e586aff', '#68465bff', '#53354dff']
    },
    itemWidth: 4,
    itemHeight: 100,
    show: false,
    bottom: '1%',
    padding: 0,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  series: [
    {
      type: 'bar',
      encode: {
        x: 'num',
        y: 'country'
      },
      label: {
        show: true,
        position: 'outside',
        fontSize: 8
      },
      clip: true
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。  
myChart.setOption(option);

var changeLink = document.getElementById('changeImageLink');
// 添加点击事件监听
changeLink.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: initialData
    }
  });
});

// 获取链接元素
var changeLink2 = document.getElementById('changeImageLink2');
// 添加点击事件监听
changeLink2.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: newData1997_2000
    }
  });
});

var changeLink3 = document.getElementById('changeImageLink3');
// 添加点击事件监听
changeLink3.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: newData2001_2004
    }
  });
});

var changeLink4 = document.getElementById('changeImageLink4');
// 添加点击事件监听
changeLink4.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: newData2005_2008
    }
  });
});

var changeLink5 = document.getElementById('changeImageLink5');
// 添加点击事件监听
changeLink5.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: newData2009_2012
    }
  });
});

var changeLink6 = document.getElementById('changeImageLink6');
// 添加点击事件监听
changeLink6.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: newData2013_2016
    }
  });
});

var changeLink7 = document.getElementById('changeImageLink7');
// 添加点击事件监听
changeLink7.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: newData2017_2020
    }
  });
});

var changeLink8 = document.getElementById('changeImageLink8');
// 添加点击事件监听
changeLink8.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart.setOption({
    dataset: {
      source: newData2021_2024
    }
  });
});


var myChart2 = echarts.init(document.getElementById('main2'));

// 初始数据
var initialData2 = [
    ['序号', 'country', 'num'],
    [4, '越南社会主义共和国', 4],
    [52, '阿拉伯埃及共和国', 52],
    [12, '中华人民共和国', 12],
    [13, '柬埔寨王国', 13],
];
var newDataARIMA = [
    ['序号', 'country', 'num '],
    [4, '越南社会主义共和国', 4],
    [52, '阿拉伯埃及共和国', 52],
    [12, '中华人民共和国', 12],
    [13, '柬埔寨王国', 13],
];
var newDataEST = [
    ['序号', 'country', 'num '],
    [20, '越南社会主义共和国', 20],
    [16, '美利坚合众国', 16],
    [4, '大不列颠及北爱尔兰联合王国', 4],
    [4, '土耳其共和国', 4],
    [4, '泰王国', 4],
    [4, '西班牙王国', 4],
    [4, '巴基斯坦伊斯兰共和国', 4],
    [4, '尼日利亚联邦共和国', 4],
    [4, '尼泊尔', 4],
    [4, '老挝人民民主共和国', 4],
    [4, '伊拉克共和国', 4],
    [4, '印度尼西亚共和国', 4],
    [4, '印度共和国', 4],
    [20, '阿拉伯埃及共和国', 20],
    [4, '厄瓜多尔共和国', 4],
    [4, '吉布提共和国', 4],
    [12, '中华人民共和国', 12],
    [4, '智利共和国', 4],
    [4, '加拿大', 4],
    [8, '柬埔寨王国', 8],
    [4, '缅甸联邦共和国', 4],
    [4, '孟加拉人民共和国', 4],
    [4, '阿塞拜疆共和国', 4],
    [4, '澳大利亚联邦', 4],
    [4, '阿什莫尔和卡捷群岛（澳大利亚）', 4],
];
var newDataPROPHET = [
    ['序号', 'country', 'num '],
    [204, '美利坚合众国', 204],
    [114, '大不列颠及北爱尔兰联合王国', 114],
    [46, '西班牙王国', 46],
    [24, '尼泊尔', 24],
    [9, '老挝人民民主共和国', 9],
    [23, '印度共和国', 23],
    [7, '阿拉伯埃及共和国      971', 7],
    [23, '厄瓜多尔共和国', 23],
    [23, '智利共和国', 23],
    [8, '加拿大', 8],
    [578, '柬埔寨王国', 578],
    [47, '孟加拉人民共和国', 47],
    [23, '澳大利亚联邦', 23],
    [23, '阿什莫尔和卡捷群岛（澳大利亚）', 23],
];
var newDataNNETAR = [
    ['序号', 'country', 'num '],
    [11, '越南社会主义共和国', 11],
    [3, '美利坚合众国', 3],
    [6, '大不列颠及北爱尔兰联合王国', 6],
    [12, '土耳其共和国', 12],
    [4, '泰王国', 4],
    [4, '西班牙王国', 4],
    [4, '巴基斯坦伊斯兰共和国', 4],
    [4, '尼日利亚联邦共和国', 4],
    [4, '尼泊尔', 4],
    [4, '老挝人民民主共和国', 4],
    [4, '伊拉克共和国', 4],
    [8, '印度尼西亚共和国', 8],
    [4, '印度共和国', 4],
    [34, '阿拉伯埃及共和国', 34],
    [4, '厄瓜多尔共和国', 4],
    [4, '吉布提共和国', 4],
    [6, '中华人民共和国', 6],
    [4, '智利共和国', 4],
    [4, '加拿大', 4],
    [28, '柬埔寨王国', 28],
    [4, '缅甸联邦共和国', 4],
    [3, '孟加拉人民共和国', 3],
    [4, '阿塞拜疆共和国', 4],
    [4, '澳大利亚联邦', 4],
    [4, '阿什莫尔和卡捷群岛（澳大利亚）', 4],
];
var newDataLSTM = [
    ['序号', 'country', 'num '],
    [25, '越南社会主义共和国', 25],
    [3, '美利坚合众国', 3],
    [7, '大不列颠及北爱尔兰联合王国', 7],
    [4, '泰王国', 4],
    [4, '西班牙王国', 4],
    [4, '巴基斯坦伊斯兰共和国', 4],
    [4, '尼日利亚联邦共和国', 4],
    [4, '尼泊尔', 4],
    [4, '老挝人民民主共和国', 4],
    [4, '伊拉克共和国', 4],
    [7, '印度尼西亚共和国', 7],
    [4, '印度共和国', 4],
    [67, '阿拉伯埃及共和国', 67],
    [4, '厄瓜多尔共和国', 4],
    [4, '吉布提共和国', 4],
    [7, '中华人民共和国', 7],
    [4, '智利共和国', 4],
    [4, '加拿大', 4],
    [21, '柬埔寨王国', 21],
    [4, '缅甸联邦共和国', 4],
    [4, '孟加拉人民共和国', 4],
    [4, '阿塞拜疆共和国', 4],
    [4, '澳大利亚联邦', 4],
    [4, '阿什莫尔和卡捷群岛（澳大利亚）', 4]
];

// 指定图表的配置项和数据  
var option2 = {
  dataset: {
    source: initialData2
  },
  grid: {
    left: '3%',
    top: '6%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 6
    }
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      fontSize: 6
    }
  },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 0,
    max: 60,
    text: ['60', '0'],
    dimension: 2,
    inRange: {
      color: ['#fec0bfff', '#936978ff', '#7e586aff', '#68465bff', '#53354dff']
    },
    itemWidth: 4,
    itemHeight: 100,
    show: false,
    bottom: '1%',
    padding: 0,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  series: [
    {
      type: 'bar',
      encode: {
        x: 'num',
        y: 'country'
      },
      label: {
        show: true,
        position: 'outside',
        fontSize: 8
      },
      clip: true
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。  
myChart2.setOption(option2);

var changeLink9 = document.getElementById('changeImageLink9');
// 添加点击事件监听
changeLink9.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart2.setOption({
    dataset: {
      source: initialData2
    }
  });
});

// 获取链接元素
var changeLink10 = document.getElementById('changeImageLink10');
// 添加点击事件监听
changeLink10.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart2.setOption({
    dataset: {
      source: newDataEST
    }
  });
});

var changeLink11 = document.getElementById('changeImageLink11');
// 添加点击事件监听
changeLink11.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart2.setOption({
    dataset: {
      source: newDataPROPHET
    }
  });
});

var changeLink12 = document.getElementById('changeImageLink12');
// 添加点击事件监听
changeLink12.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart2.setOption({
    dataset: {
      source: newDataNNETAR
    }
  });
});

var changeLink13 = document.getElementById('changeImageLink13');
// 添加点击事件监听
changeLink13.addEventListener('click', function (event) {
  event.preventDefault(); // 防止默认链接行为
  // 更新数据源为新数据
  myChart2.setOption({
    dataset: {
      source: newDataLSTM
    }
  });
});