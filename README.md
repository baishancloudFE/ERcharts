# echarts-react
## 简介
因为echarts复杂的配置和繁多的api，出于简化和组件化原因，用react再做了一层封装，只对外部提供简单的配置接口。主要思想在于用最简单的配置完成所需要的图表，减少使用者了解echarts各个配置项的成本，替使用者做出最好的决定。
## 目前支持的图表类型
 1. 柱状图
 2. 线图
 3. 饼图/环图
 4. 点图
## 安装
```
 npm install echarts-react -save
```

## 示例

```
import { Bar } from ' echarts-react'
import React, { Component } from 'react';
import Bar from './index'

class BarDemo extends Component {
    state = {
        data: [],
        col: ["date", { name: "page" }, "food", "tool"]
    }
    componentDidMount() {
        this.setState({
            data: this.getData(10)
        })
    }
    getData = (times) => {
        let data = [],
            stateDate = +new Date(2011, 1, 2),
            day = 1000 * 60 * 60 * 24;
        for (let i = 0, n = times; i < times; ++i) {
            let now = new Date(stateDate += day);
            data.push({
                date: [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                page: Math.floor(Math.random() * 300),
                food: Math.floor(Math.random() * 300),
                tool: Math.floor(Math.random() * 300),
            })
        }
        return data
    }
    addData = () => {
        this.state.data[0].data.push(55)
        this.setState({     
            data: this.state.data
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.addData}>增加</button>
                <Bar
                    data={this.state.data}
                    col={this.state.col}
                >
                </Bar>
            </div>

        );
    }
}

export default BarDemo;
```

## 通用接口
```
 <Bar
    //数据接口
    data={}
    //数据维度接口
    col={}
    //宽度
    width={}
    //高度
    height={}
    //图表标题
    title={}
    //legend
    legend
    //开放的全配置接口
    setting={}
    //提示工具
    toolTip
    //缩放
    dataZoom={}
</Bar>
```
### 接口说明
1. data -图表的数据接口
    * 类型 array[object]
    * 必传参数
    * 参数示例 date参数为X轴的单位，其他字段为数据源
    ```
    [
       {
           date:"2016/05/08",
           sold:50,
           pay:400
       },
       {
           date:"2016/05/09",
           sold:500,
           pay:40
       }
    ]

    ```
2. col -图表数据源和X轴对应的字段
    * 类型 array[string|object]
    * 必传参数 其第一项默认用来作为X轴，剩下的会分别作为数据源渲染
    * 传入string为最简单的配置，传入object的时候必须有name这个字段。其他的字段会加入series的配置里面修改该数据源的单独配置，具体请自行参考 [配置文档](http://echarts.baidu.com/option.html#series)
    * 配置案例
    ```
    [
        "date"，
        {
            name:"sold",
            step:true
        },
        "pay"
    ]
    ```
3. width -宽度配置
   * 类型 number  默认为100%(从父级继承，如果没有父级请直接这项必须声明)
4. height -高度配置
    * 类型 number 默认为100%(从父级继承，如果没有父级请直接这项必须声明)
5. title -图表的标题
    * 类型 string|object 
    * 传入string会配置简单的图表标题，如需扩展自行传入json进行配置[配置文档](http://echarts.baidu.com/option.html#title)   
6. legend  -是否显示legend
    * 类型 bool 默认为true
7. toolTip -是否显示提示工具
    * 类型 string ("shadow"|"corss") 
    * 暂时不支持配置
8. dataZoom -图表缩放的配置
    * 类型 string('inside'|'slider'|'both')
    * 对应图表缩放的模式
9. setting -全配置接口
    * 类型 object
    * 自己去配[配置文档](http://echarts.baidu.com/option.html#title)   
10. legendLimit -legend最大条目
    * 类型 number
11. loading -图表加载状态
    * 类型 bool    
12. grid -网格配置
    * 类型 object
    * 这个用得比较少，具体参考[配置文档](http://echarts.baidu.com/option.html#grid) 
13. reverse -X轴与Y轴互换
    * 类型 bool
14. brush -图形选择工具
    * 类型 array("rect"|"polygon","lineX","lineY","keep","clear")
## 图表

### 折线图接口

1. stack -数据堆叠
   * 类型 bool 默认不堆叠
   * 暂时不支持堆叠类目的选择
2. area -底部填充
    * 类型 bool 默认不填充

### 饼图/环图
1. ring -是否显示为环图
    * 类型 bool
2. rose -面积是否受数据影响
    * 类型 bool    

    
 