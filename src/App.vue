<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less">
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
.privateComment{
  overflow:hidden;
  text-overflow:ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display:-webkit-box;
  width:100%;
}
.publicLine{
  width:100%;
  height:100%;
  text-align:left;
  position:relative;
  .search{
    margin-bottom:10px;
    .input{
      width:200px;
      margin-right:20px;
    }
    .select{
      margin-right:10px;
      width:100px;
    }
  }
  .nav{
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
    .right{
      display:flex;
      .input{
        width:200px;
        margin:0 10px;
      }
      .select{
        width:100px;
      }
    }
  }
  .foot{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    // height:100px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    // border:1px solid red;
    .left{
      button{
        margin-left:10px;
      }
    }
    .right{
      display:flex;
      align-items:center;
      button{
        margin:0 10px;
      }
      p{
        font-size:13px;
        color:#606266;
        font-weight:400;
        span{
          margin:0 4px;
        }
      }
    }
  }
}
</style>
