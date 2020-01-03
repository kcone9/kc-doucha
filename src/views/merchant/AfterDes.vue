<template>
  <div class="publicLine">
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
</template>
<script>
export default {
  data () {
    return {
      refundList: [{ key: '退换编号', value: '454545sdsdsd', color: '#7CBF50' }, { key: '退换类型', value: '换货', color: '#DCA650' }, { key: '申请时间', value: '2019-8-12', color: '#E47470' }, { key: '申请处理进度', value: '待商家处理', color: '#8F9299' }],
      orderList: [{ key: '订单编号', value: '12sdsds' }, { key: '买家名称', value: '渣渣辉' }, { key: '订单状态', value: '已完成' }, { key: '退换货编号', value: '655sdsdsd' }, { key: '下单时间', value: '2019-12-3' }, { key: '退款时间', value: '2019-12-4' }]
    }
  }
}
</script>
<style scoped lang='less'>
.publicLine{
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
      @boxWidth:180px;
      @boxHeight:95px;
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
