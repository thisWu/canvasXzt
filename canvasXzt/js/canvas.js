/**
 * Created by 69023 on 2019-03-14.
 */


function canvas () {
    let dataJson = {
        'chartDef': {
            'lines': [{
                'nodes': [{
                    'xCell': {
                        'name': 'D6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '05849ff7-912a-46e8-8353-9a78f5d287d5',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'D7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '8831344f-df51-4406-8147-97a8fa1b8321',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'H6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'd5bc4860-447b-4d9e-a04d-35a1a8e2bd32',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'H7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'f7b72758-1a38-471b-9b4b-64c80ef01dc0',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'L6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '3328a37c-d52c-4e84-9f67-6eb35a4704a2',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'L7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'd676ac3a-02b1-481c-b457-c3763cca694b',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'P6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'b516b026-0e85-4f8e-8486-7353586a9604',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'P7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '171c2575-0cbf-4f74-9f88-05d18c979981',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'T6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '380e2f84-2679-4461-b6cb-1d5f3d37ffd4',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'T7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'fe89d0f0-86f3-450d-b399-76a3a5830b2a',
                        'dependCellNames': []
                    }
                }], 'lineColor': 'red'
            }, {
                'nodes': [{
                    'xCell': {
                        'name': 'D6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '05849ff7-912a-46e8-8353-9a78f5d287d5',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'F7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '780a2956-3c74-49f3-a9c8-2a0e9987a5d8',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'H6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'd5bc4860-447b-4d9e-a04d-35a1a8e2bd32',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'J7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '88d70134-2a47-4c28-83dd-3f6128801d84',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'L6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '3328a37c-d52c-4e84-9f67-6eb35a4704a2',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'N7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '51f25018-95ab-4124-9489-e3dae4c32074',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'P6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'b516b026-0e85-4f8e-8486-7353586a9604',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'R7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '2809f3f2-be48-45d9-b7a3-8a6e468455fe',
                        'dependCellNames': []
                    }
                }, {
                    'xCell': {
                        'name': 'T6',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': '380e2f84-2679-4461-b6cb-1d5f3d37ffd4',
                        'dependCellNames': []
                    },
                    'yCell': {
                        'name': 'V7',
                        'pageid': 'S5999_9090_15511609586330678',
                        'cellid': 'c8e1864c-fb31-4e3e-8ce5-3fb15386eb11',
                        'dependCellNames': []
                    }
                }], 'lineColor': 'black'
            }], 'needGetCross': false, 'xName': 'x轴', 'yName': 'y轴'
        }
    }
    let arrData = dataJson.chartDef.lines, colors = [], series = [], arrX = [], maxNum = []
    for (let i = 0; i < arrData.length; i++) {
        colors.push(arrData[i].lineColor)       //添加颜色
        arrX.push([])                           //获取y轴坐标值
        series.push({data:[]})
        for (let j = 0; j < arrData[i].nodes.length; j++) {
            arrX[i].push(parseFloat($('#' + arrData[i].nodes[j].xCell.cellid).html()))
            series[i].data.push($('#' + arrData[i].nodes[j].yCell.cellid).html())
            maxNum.push($('#' + arrData[i].nodes[j].yCell.cellid).html())
        }
    }

    let data = series, max = getMaxNum(data[0].data), min = getMinNum(data[0].data)

    document.getElementById('container').style.width = window.screen.wdith + 'px'
    let padding = 30
    let width = $(window).width() - padding
    let height = 300
    document.getElementById('canvas').setAttribute('width', width)
    document.getElementById('canvas').setAttribute('height', height)
    let num = parseInt((width - (2 * padding)) / 12)
    var pointX = []
    /*X*/
    for (let i = 0; i < num; i++) {
        pointX.push(padding + i * width / num)
    }
    var pointY = []
    for (let i = 0; i < num; i++) {
        pointY.push(height - padding - i * height / num)
    }

    var canvas = document.getElementById('canvas').getContext('2d')

    function drawX () {   //x轴网格线 和 xy坐标线
        for (var i = 1; i < pointY.length; i++) {
            canvas.beginPath()
            if (i == pointY.length - 1) {
                canvas.strokeStyle = '#000'
                canvas.moveTo(pointX[0], height - padding)
                canvas.lineTo(pointX[pointY.length - 1], height - padding)
                canvas.moveTo(pointX[0], height - padding)
                canvas.lineTo(pointX[0], 0)

            } else {
                canvas.strokeStyle = '#ccc'
                canvas.moveTo(pointX[0], pointY[i])
                canvas.lineTo(pointX[pointY.length - 1], pointY[i])
            }
            canvas.closePath()
            canvas.lineWidth = 1
            canvas.stroke()
        }

    }

    drawX()

    function drawY () {    //y轴网格线
        for (var i = 1; i < pointX.length; i++) {
            canvas.beginPath()
            canvas.strokeStyle = '#ccc'
            for (var i = 1; i < pointX.length; i++) {
                canvas.moveTo(pointX[i], height - padding)
                canvas.lineTo(pointX[i], 0)
            }
            canvas.closePath()
            canvas.lineWidth = 1
            canvas.stroke()
        }
    }

    drawY()

    function drawZ () {   //尺标线
        maxNum = getMaxNum(maxNum)
        canvas.font = '16px Arial'
        for (let i = 0; i < arrX.length; i++) {
            canvas.beginPath()
            canvas.strokeStyle = colors[i]
            canvas.fillStyle = colors[i]
            let arr = arrX[i],
                maxX = getMaxNum(arr),          //x轴坐标最大值
                minX = getMinNum(arr),          //x轴坐标最小值
                sumX = maxX - minX,             //x轴坐标相差值
                pointX = [],
                maxY = getMaxNum(data[i].data),             //Y轴坐标最大值
                minY = getMinNum(data[i].data),             //Y轴坐标最小值
                sumY = maxY - minY,                         //Y轴坐标相差值
                pointY = [];
            //根据已得到的坐标值“重新计算xy轴的每个坐标”
            for (let a = 0; a < arr.length; a++) {
                if (a == 0) {
                    pointX.push((width - padding) * 0)
                } else {
                    pointX.push((width - padding) * ((arr[a] - minX) / sumX).toFixed(2))
                }
                pointY.push((height - padding) - (height - padding) * (data[i].data[a] / maxNum).toFixed(2))
            }
            //根据重新计算的坐标值绘制“线条”和“刻度值”
            for (let j = 0; j < pointX.length; j++) {
                //线
                canvas.arc(pointX[j] + padding, pointY[j], 2,0.5*Math.PI,true)
                canvas.moveTo(pointX[j] + padding, pointY[j])
                canvas.lineTo(pointX[j + 1] + padding, pointY[1 + j])
                //字
                canvas.fillText(data[i].data[j], 0, pointY[j] + 16)
                canvas.fillText(arr[j], pointX[j] + 10, height - 10)
            }
            canvas.closePath()
            canvas.stroke()
            canvas.lineWidth = 1
            canvas.stroke()
        }
    }
    drawZ()
}
//获取最大数
function getMaxNum (arr) {
    // 将数组第一个元素的值赋给max
    var max = parseFloat(arr[0])
    // 使用for 循环从数组第一个值开始做遍历
    for (var i = 1; i < arr.length; i++) {
        // 如果元素当前值大于max,就把这个当前值赋值给max
        if (parseFloat(arr[i]) > parseFloat(max)) {
            max = parseFloat(arr[i])
        }
    }
    // 返回最大的值
    return max
}
//获取最小数
function getMinNum (arr) {
    // 将数组第一个元素的值赋给min
    var min = parseFloat(arr[0])
    // 使用for 循环从数组第一个值开始做遍历
    for (var i = 1; i < arr.length; i++) {
        // 如果元素当前值小于min,就把这个当前值赋值给min
        if (parseFloat(arr[i]) < parseFloat(min)) {
            min = parseFloat(arr[i])
        }
    }
    // 返回最小的值
    return min
}

