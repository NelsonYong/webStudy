<template>
  <div class="main">
    <div class="btn">
      <Button class="scalingBtn" @click="layerDetail = !layerDetail">
        <Icon type="md-list" size="28"></Icon>
      </Button>
      <div class="selelct">
        <Button @click="checkBtn(0)">
          <Icon type="md-browsers" size="20"></Icon>在线监测</Button
        >
        <Button @click="checkBtn(1)">
          <Icon type="md-search" size="20"></Icon>工程设施</Button
        >
        <Button @click="checkBtn(2)">
          <Icon type="md-stats" size="20"></Icon>专题图层</Button
        >
        <Button @click="checkBtn(3)">
          <Icon type="md-search" size="20"></Icon>四标四实</Button
        >
      </div>
    </div>
    <div v-if="layerDetail">
      <detail-layer :layerIndex="layerIndex"></detail-layer>
    </div>
  </div>
</template>
<script>
import DetailLayer from "./components/DetailLayer.vue";

export default {
  name: "LayerModal",
  components: { DetailLayer },
  data() {
    return {
      layerDetail: true,
      layerIndex: 0,
    };
  },
  created() {},
  computed: {},
  methods: {
    checkBtn(index) {
      this.layerDetail = true;
      this.layerIndex = index;
      if (index == 0) {
        console.log("在线监测");
      } else if (index == 1) {
        console.log("工程设施");
      } else if (index == 2) {
        console.log("专题图层");
      } else if (index == 3) {
        console.log("四标四头");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  height: 100%;
}
.btn {
  display: flex;
  width: 32px;
  flex-direction: column;
  align-items: flex-start;
  .scalingBtn {
    flex: 0.02;
    width: 32px;
    padding: 0;
    border-radius: 0;
  }
  .selelct {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      flex: 1;
      width: 32px;
      padding: 0;
      border-radius: 0;
    }
    .ivu-btn /deep/ span {
      display: inline-block;
      writing-mode: tb-rl;
      letter-spacing: 3px;
    }
    /deep/ .ivu-btn:focus {
      background: #299fdb;
      color: #ffffff;
    }
  }
}
</style>
