//mock 数据模拟
import Mock from "mockjs";
//图表数据
let List = [];
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位，最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          oppo: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 2000,
      data: {
        //饼图
        videoData: [
          {
            name: "小米",
            value: 2999,
          },
          {
            name: "苹果",
            value: 6999,
          },
          {
            name: "vivo",
            value: 1999,
          },
          {
            name: "oppo",
            value: 2999,
          },
          {
            name: "三星",
            value: 4999,
          },
          {
            name: "魅族",
            value: 999,
          },
        ],
        //柱状图
        userData: [
          { date: "周一", new: 33, active: 870 },
          { date: "周二", new: 18, active: 370 },
          { date: "周三", new: 63, active: 170 },
          { date: "周四", new: 33, active: 170 },
          { date: "周五", new: 13, active: 370 },
          { date: "周六", new: 33, active: 270 },
          { date: "周日", new: 93, active: 770 },
        ],
        //折线图
        orderData: {
          date: [
            "20191001",
            "20191001",
            "20191001",
            "20211001",
            "20211001",
            "20211001",
            "20211001",
          ],
          data: List,
        },
        tableData: [
          {
            name: "oppo",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "小米",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "魅族",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "苹果",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "vivo",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
          {
            name: "三星",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000,
          },
        ],
      },
    };
  },
};
