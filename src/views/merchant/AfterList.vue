<template>
  <div class="publicLine">
    <pcheckbox :orderValue="evaluateTyValue" :orderCheckList="afterTypeList" :selectValue="selectValue"
      :selectList="selectList" :searchValue="searchValue" @checkboxEvent="checkboxEvent" @radioEvent="radioEvent"/>
    <el-table
      :data="tableData"
      stripe border
      style="width: 100%">
      <el-table-column
        label="编号">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.cb" @change="tableCheck(scope.row.id)">{{scope.row.id}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="lookBtn(item.row.id)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="订单id">
        <template slot-scope="item">
          {{item.row.id}}
        </template>
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="shop"
        label="退换商品">
      </el-table-column>
      <el-table-column
        label="退/换理由">
        <template slot-scope="item">
          <p class="privateComment">{{item.row.excuse}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="售后状态">
      </el-table-column>
      <el-table-column
        label="备注">
        <template slot-scope="item">
          <p class="privateComment">{{item.row.remark}}</p>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="formAfterDes.title" :visible.sync="dialogAfterDes">
      <div class="afterContainer">
        <div class="item">
      <p class="title">退款信息</p>
      <div class="comment">
        <div class="refundmessage" v-for="(item,i) of refundList" :key="i" :style="{'backgroundColor':item.color}">
          <p class="key">{{item.key}}</p>
          <p class="value">{{item.value}}</p>
        </div>
      </div>
    </div>
    <div class="item">
      <p class="title">订单信息</p>
      <div class="comment">
        <div class="order">
          <div class="ordermessage" v-for="(item,i) of orderList" :key="i">
            <p class="key">{{item.key}}</p>
            <p class="value">{{item.value}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p class="title">退换商品</p>
      <div class="comment" style="margin-left:20px;">
        <div class="shopdes">
          <img src="../../assets/image/comment2.png" alt="">
          <div class="text">
            <div class="left">
              <p class="titles">商品描述</p>
              <p class="grey">茶叶来源于中国 茶叶来源于中国 茶叶来源于中国 茶叶来源于中国 茶叶来源于中国 茶叶来源于中国茶叶来源于中国</p>
            </div>
            <div class="right">
              <div class="con">
                <div class="one">
                  <p>数量<span>2</span></p>
                </div>
              </div>
              <div class="con">
                <div class="one">
                  <p>单价<span>234</span></p>
                </div>
                <div class="two">
                  <p>总金额<span>468</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p class="title">售后申请信息</p>
      <div class="comment" style="flex-direction:column;margin-left:20px;">
        <div class="afterItem">
          <div class="left">退款理由</div>
          <div class="right">与实物不符</div>
        </div>
        <div class="afterItem" style="align-items:flex-start">
          <div class="left">问题描述</div>
          <div class="textaea">茶叶源于中国茶叶源于中国茶叶源于中国茶叶源于中国茶叶源于中国茶叶源于中国</div>
        </div>
        <div class="afterItem">
          <div class="left">商品图片</div>
          <div class="right">
            <img src="../../assets/image/comment2.png" alt="">
            <img src="../../assets/image/comment2.png" alt="">
            <img src="../../assets/image/comment2.png" alt="">
          </div>
        </div>
        <div class="afterItem">
          <div class="left">售后状态</div>
          <div class="right"><p class="red">等待买家付款/商家接受申请</p></div>
        </div>
      </div>
    </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAfterDes = false">取 消</el-button>
        <el-button type="primary" @click="dialogAfterDes = false">确 定</el-button>
      </div>
    </el-dialog>
    <ppage :total="total" :selectAll="selectAll" ref="page"
    :type="selectDelBtn" @messgaeAlert="messgaeAlert" @messageTrue="messageTrue"
    @selectAllDo="selectAllDo"/>
  </div>
</template>
<script>
import { MessageBox, Message } from 'element-ui'
export default {
  data () {
    return {
      afterTypeList: ['全部', '换货', '退货'],
      evaluateTyValue: '全部',
      selectValue: '',
      selectList: [{ value: 1, label: '用户名' }, { value: 1, label: '商品名' }],
      searchValue: '',
      selectAll: false,
      total: 50,
      tableData: [],
      selectDelBtn: 'info',
      dialogAfterDes: false,
      formAfterDes: {
        title: ''
      },
      refundList: [{ key: '退换编号', value: '454545sdsdsd', color: '#7CBF50' }, { key: '退换类型', value: '换货', color: '#DCA650' }, { key: '申请时间', value: '2019-8-12', color: '#E47470' }, { key: '申请处理进度', value: '待商家处理', color: '#8F9299' }],
      orderList: [{ key: '订单编号', value: '12sdsds' }, { key: '买家名称', value: '渣渣辉' }, { key: '订单状态', value: '已完成' }, { key: '退换货编号', value: '655sdsdsd' }, { key: '下单时间', value: '2019-12-3' }, { key: '退款时间', value: '2019-12-4' }]
    }
  },
  methods: {
    init () {
      var list = [{ userName: '王小虎', shop: '夏威夷果', excuse: '质量不行', state: '待处理', remark: '处理用户售后请求' }, { userName: '里昂', shop: '粉红色铁观音', excuse: '不够甜', state: '等待买家发货', remark: '等待买家寄货' }, { userName: '张桐', shop: '王老吉一箱', excuse: '太便宜', state: '等待商家收货', remark: '待收买家快递' }, { userName: 'pipa酱', shop: '绿茶一箱', excuse: '味道太淡', state: '商家已收货', remark: '确认是否退/换' }, { userName: '李春天', shop: '咸鱼干', excuse: '太闲了', state: '处理完毕', remark: '售后流程结束' }]
      list.forEach((value, key) => {
        value.cb = false
        value.id = key
      })
      this.tableData = list
    },
    lookBtn (key) {
      this.dialogAfterDes = true
      for (var value of this.tableData) {
        if (value.id === key) {
          this.formAfterDes.title = '订单编号：' + value.id
          break
        }
      }
    },
    checkboxEvent (value1, value2) {
      console.log(value1, value2)
    },
    radioEvent (key) {
      console.log(key)
    },
    tableCheck (key) {
      var index = this.tableData.length
      var i = 0
      for (var value of this.tableData) {
        if (value.cb) {
          i = i + 1
        }
      }
      if (index === i) {
        // this.selectAll = true
        this.$refs.page.selectAlls = true
      } else if (i === (index - 1)) {
        // this.selectAll = false
        this.$refs.page.selectAlls = false
      }
      for (var item of this.tableData) {
        if (item.cb) {
          this.selectDelBtn = 'primary'
          break
        } else {
          this.selectDelBtn = 'info'
        }
      }
    },
    selectAllDo (boolean) {
      for (var value of this.tableData) {
        value.cb = boolean
      }
      if (boolean) this.selectDelBtn = 'primary'
      else this.selectDelBtn = 'info'
    },
    messageTrue () {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.messgaeAlert('success', '删除成功')
      }).catch(() => {
        this.messgaeAlert('info', '已取消删除')
      })
    },
    messgaeAlert (type, text) {
      Message({
        type: type,
        message: text
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
<style scoped lang="less">
.afterContainer{
  .item{
    .title{
      color:#4D4D4F;
      border-bottom:1px solid #CCCCCE;
      font-size:17px;
      font-weight:600;
      padding-bottom:14px;
    }
    .comment{
      display:flex;
      padding:20px 0;
      @boxWidth:160px;
      @boxHeight:85px;
      .refundmessage{
        width:@boxWidth;
        height:@boxHeight;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        // border:1px solid red;
        border-radius:8px;
        color:#fff;
        margin-right:10px;
        .key{
          font-size:15px;
          font-weight:600;
        }
        .value{
          font-size:15px;
        }
      }
      .order{
        display:flex;
        flex-wrap:wrap;
        // border:1px solid red;
        width:800px;
        .ordermessage{
          width:@boxWidth;
          height:@boxHeight;
          display:flex;
          flex-direction:column;
          justify-content:space-around;
          align-items:center;
          margin-right:10px;
          border-radius:8px;
          background-color:#4194E0;
          margin-bottom:10px;
          color:#fff;
          .key{
          font-size:15px;
          font-weight:600;
          }
          .value{
            font-size:15px;
          }
        }
      }
      .shopdes{
        width:100%;
        display:flex;
        img{
          width:64px;
          height:64px;
        }
        .text{
          display:flex;
          .left{
            margin-left:10px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            p{
              color:#888888;
              font-size:14px;
              width:300px;
              // border:1px solid red;
              overflow:hidden;
              text-overflow:ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              display:-webkit-box;
            }
            .titles{
              font-size:14px;
              font-weight:600;
              color:#010101;
            }
          }
          .right{
            font-size:14px;
            margin-left:10px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            // align-items:center;
            .con{
              display:flex;
              .one,.two{
                p{
                  color:#282828;
                  span{
                    margin-left:10px;
                    color:#888888;
                  }
                  margin-right:10px;
                }
              }
            }
          }
        }
      }
      .afterItem{
        display:flex;
        align-items:center;
        margin-bottom:20px;
        .left{
          font-size: 14px;
          font-weight: 600;
          color:#010101;
          margin-right:20px;
        }
        .right{
          color:#888;
          font-size: 14px;
          img{
            width:64px;
            height:64px;
            margin-right:10px;
          }
          .red{
            color:#FB6753;
          }
        }
        .textaea{
          color:#888;
          font-size: 14px;
          width:300px;
          overflow:hidden;
          text-overflow:ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          display:-webkit-box;
          // border:1px solid red;
        }
      }
    }
  }
  .itemRereact{
    margin-left:10px;
  }
}
</style>
