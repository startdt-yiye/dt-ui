<template>
  <div>
    {{radioValue}}
    <dt-radio v-model="radioValue" disabled label="1">123123</dt-radio>
    
    <dt-radio border v-model="radioValue" label="1">123123</dt-radio>
    <dt-radio border v-model="radioValue" label="2" size='medium'>123123</dt-radio>
    <dt-radio border v-model="radioValue" label="3" size='small'>123123</dt-radio>
    <dt-radio border v-model="radioValue" label="4" size='mini'>123123</dt-radio>

    <dt-radio v-model="radioValue" label="2" size='medium'>123123</dt-radio>
    <br>
    <br>
    <br>

    <dt-radio-group @change="handleChange" v-model="radioValue">
      <dt-radio border  label="1">123123</dt-radio>
      <dt-radio border  label="2" size='medium'>123123</dt-radio>
      <dt-radio border label="3" size='small'>123123</dt-radio>
      <dt-radio border label="4" size='mini'>123123</dt-radio>
    </dt-radio-group>
    <dt-radio-group @change="handleChange" v-model="radioValue" disabled>
      <dt-radio border  label="1">123123</dt-radio>
      <dt-radio border  label="2" size='medium'>123123</dt-radio>
      <dt-radio border label="3" size='small'>123123</dt-radio>
      <dt-radio border label="4" size='mini'>123123</dt-radio>
    </dt-radio-group>
    <br>
    <el-radio-group @change="handleChange" v-model="radioValue" >
      <el-radio border label="5" size='medium'>123123</el-radio>
      <el-radio border label="6" size='small'>123123</el-radio>
      <el-radio border label="7" size='mini'>123123</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import DtRadio from '@/components/Radio/radio'
import DtRadioGroup from '@/components/Radio/radio-group'

export default {
  components: {
    DtRadio,
    DtRadioGroup
  },
  data() {
    return {
      radioValue: "1"
    }
  },
  methods: {
    handleChange(val) {
      console.log(val, 'RadioGroup')
    }
  }
}
</script>

<style>

</style>
