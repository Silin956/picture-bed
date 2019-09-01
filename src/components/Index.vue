<template>
  <div class="container">
    <!-- 左半边 -->
    <div class="left">
      <!-- 左上 -->
      <div class="left_top">
        <div class="left_top_left">
          <div class="left_title">数森<span class="version">v1.0.0</span></div>
          <div class="left_title2">图床系统</div>
        </div>
        <div class="left_icon"><img id="logo" src="../assets/logo.png" alt="logo"></div>
      </div>
      <!-- 左中 -->
      <div class="left_middle">
        
      </div>
      <!-- 左下 -->
      <div class="left_bottom">
        
      </div>
    </div>
    <!-- 右半边 -->
    <div class="right">
      <!-- 右上 -->
      <div class="right_top">
        
      </div>
      <!-- 右中 -->
      <div class="right_middle">
        
      </div>
      <!-- 右下 -->
      <div class="right_bottom">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .container{
    height: 100vh;
    display: flex;
    flex-direction: row;
    .left{
      width: 13vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      min-width: 180px;
      .left_top{
        height: 7vh;
        background: rgb(215, 222, 223);
        display: flex;
        flex-direction: row;
        .left_top_left{
          .left_title{
            margin-top: 6px;
            text-indent: 18px;
            .version{
              margin-left: 8px;
            }
          }
          .left_title2{
            text-indent: 18px;
            font-weight: 600;
            font-size: 16px;
          }
        }
        .left_icon{
          margin-left: 22px;
          #logo{
            margin-top: 4px;
          }
        }
      }
      .left_middle{
        flex: 1;
        background: rgb(63, 69, 73);
      }
      .left_bottom{
        height: 7vh;
        background: gray;
      }
    }
    .right{
      width: 87vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      .right_top{
        height: 7vh;
        background: rgb(157, 196, 228);
      }
      .right_middle{
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        background: url(../assets/right_top@3x.png) no-repeat right top / 529px 300px, url(../assets/left_bottom@3x.png) no-repeat left bottom / 529px 300px, url(../assets/center@3x.png) no-repeat center center / 174px 122px ;
      }
      .right_bottom{
        height: 7vh;
        background: rgb(191, 212, 182);
      }
    }
  }
</style>
