/*
 * @Author: jlzm
 * @Date: 2020-07-07 14:17:56
 * @LastEditors: jlzm
 * @LastEditTime: 2020-07-07 14:21:20
 * @FilePath: \leetCode\test.js
 */
`
失信被执行人核查接口
http(s)://boot.csgxcf.com/gxdpops/shixin1
token	是	访问凭证
servtype	否	服务类型：（默认 0）0=数据核查，1=数据核验，2=数据对比
iname	是	被执行人姓名/名称
cardnum	否	身份证号码/组织机构代码
areaname	否	省份代码
11=北京，12=天津，13=河北，14=山西，15=内蒙古，21=辽宁，22=吉林，23=黑龙江，31=上海，32=江苏，33=浙江，34=安徽，35=福建，36=江西，37=山东，41=河南，42=湖北，43=湖南，44=广东，45=广西，46=海南，50=重庆，51=四川，52=贵州，53=云南，54=西藏，61=陕西，62=甘肃，63=青海，64=宁夏，65=新疆，91=香港，92=澳门，93=台湾，99=国外

请求参数示例（JSON格式）：

{

"token" : "W6OeVa_O91UqA0U8VmHpuNE4EK......-kp3LMNqQY4BoDGJw",

"iname" : "周XX"

}

{

"token" : "W6OeVa_O91UqA0U8VmHpuNE4EK......-kp3LMNqQY4BoDGJw",

"iname" : "XXXX科技有限公司"

}
-----------------------
机动车驾驶证核查接口
http(s)://boot.csgxcf.com/gxdpops/driving
token	是	访问凭证
servtype	否	服务类型：（默认 0）
0=数据核查，1=数据核验，2=数据对比
cardno	是	驾驶证号
fileno	否	档案编号
name	否	姓名
`