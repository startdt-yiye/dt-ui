<template>
  <div class="">
    <dt-card>
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <dt-button style="float: right; padding: 3px 0" type="text">操作按钮</dt-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </dt-card>

    <dt-button @click="handleButtonClick"
               :disabled="false"
               type="primary"
               size="mini">
               123123
      <dt-icon name=" fa fa-search"></dt-icon>
    </dt-button>

    <dt-row>
      <dt-col :span="20">13123</dt-col>
      <dt-col :span="4">123132</dt-col>
    </dt-row>

    <div style="margin: 20px 0">
      <!-- <dt-checkbox>备选项</dt-checkbox> -->
      <el-checkbox-group v-model="chackedList" @change="handleChange">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
      </el-checkbox-group>
      <dt-checkbox-group v-model="chackedList">
        <dt-checkbox label="复选框 A"></dt-checkbox>
        <dt-checkbox label="复选框 B"></dt-checkbox>
        <dt-checkbox label="复选框 C"></dt-checkbox>
      </dt-checkbox-group>
    </div>

    <dt-container>
      <dt-header>Header</dt-header>
      <dt-main>Main</dt-main>
    </dt-container>

    <dt-container>
      <dt-header>Header</dt-header>
      <dt-main>Main</dt-main>
      <dt-footer>Footer</dt-footer>
    </dt-container>

    <dt-container>
      <dt-aside width="200px">Aside</dt-aside>
      <dt-main>Main</dt-main>
    </dt-container>

    <router-link to="/radio">Go to radio</router-link>

  </div>
</template>

<script>
import DtCard from '@/components/Card/card'
import DtButton from '@/components/Button/button'
import DtIcon from '@/components/Icon/icon'
import DtRow from '@/components/Row/row'
import DtCol from '@/components/Col/col'
import DtCheckbox from '@/components/Checkbox/checkbox'
import DtCheckboxGroup from '@/components/Checkbox/checkbox-group'

import DtContainer from '@/components/Container/container'
import DtHeader from '@/components/Header/header'
import DtFooter from '@/components/Footer/footer'
import DtMain from '@/components/Main/main'
import DtAside from '@/components/Aside/aside'

import DtRadio from '@/components/Radio/radio'

export default {
  name: 'RootView',
  components: {
    DtCard,
    DtButton,
    DtIcon,
    DtRow,
    DtCol,
    DtCheckbox,
    DtCheckboxGroup,
    DtContainer,
    DtHeader,
    DtFooter,
    DtMain,
    DtAside,
    DtRadio
  },
  data () {
    return {
      checked: true,
      chackedList: ['复选框 A', '复选框 B']
    }
  },
  methods: {
    handleButtonClick(){
      console.log('123123')
    },
    handleChange(val) {
      console.log(val, 'checkGroup')
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dt-header, .dt-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.dt-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.dt-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
