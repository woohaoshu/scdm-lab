import {Member} from './member';

export const MEMBERS: Member[] = [
    //负责人-0，博士-1，硕士-2，本科生-3，合作者-4
    { name:'邹国兵', degree:0, note:'博士，副教授，博士生副导师，硕士生导师', photoUrl:'assets/images/770x860/ZouGB.jpg', intro:''},
    //博士生
    { name:'黄明清', degree:1, grade:2012, photoUrl:'assets/images/770x860/01.jpg', intro:'暂无'},
    { name:'牛森', degree:1, grade:2013, photoUrl:'assets/images/770x860/01.jpg', intro:'暂无'},
    { name:'Farhan Ullah', degree:1, grade:2016, photoUrl:'assets/images/770x860/Farhan.jpg', intro:'暂无'},
    //硕士生
    { name:'李旺', degree:2, grade:2015, photoUrl:'assets/images/770x860/LiW.jpg', intro:'暂无'},
    { name:'庞盛业', degree:2, grade:2016, photoUrl:'assets/images/770x860/PangSY.jpg', intro:'暂无'},
    { name:'向阳', degree:2, grade:2016, photoUrl:'assets/images/770x860/02.jpg', intro:'暂无'},
    { name:'张霞', degree:2, grade:2016, photoUrl:'assets/images/770x860/02.jpg', intro:'暂无'},
    { name:'蒋明', degree:2, grade:2017, photoUrl:'assets/images/770x860/JiangM.jpg', intro:'暂无'},
    { name:'吴浩', degree:2, grade:2017, photoUrl:'assets/images/770x860/WuH.jpg', intro:'1995-8，本科就读于上海大学。对设计美学、Web前端、游泳感兴趣。目前研究方向为API服务聚类。'},
    { name:'陈锦', degree:2, grade:2018, photoUrl:'assets/images/770x860/ChenJ.jpg', intro:'暂无'},
    //本科生
    { name:'陈想东', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“基于协同过滤的服务推荐系统实现”'},
    { name:'秦臻', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“基于深度学习模型的Web服务聚类系统实现”'},
    { name:'韦健', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“面向大规模生物数据的差异分析系统实现”'},
    { name:'赵万钰', degree:3, grade:2014, intro:'目前在做本科毕业设计，题目为“基于统计模型的Web服务聚类系统实现”'},
    //合作者
    { name:'甘杨兰', degree:4, note:'东华大学', photoUrl:'assets/images/770x860/02.jpg', intro:'暂无'}
    
];