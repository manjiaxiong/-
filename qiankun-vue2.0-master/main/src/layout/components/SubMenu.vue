<!--
 * @Author: lizhijie429
 * @Date: 2021-08-25 20:56:20
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-08-25 21:05:45
 * @Description: 
-->
<template>
  <div>
    <template v-for="item in subMenu">
      <el-submenu
        v-if="item.children && item.children.length > 0 && item.name !== 'notfound'"
        :key="item.name"
        :index="item.path"
      >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{ item.title }}</span>
        </template>
        <sub-menu :subMenu="item.children"></sub-menu>
      </el-submenu>
      <el-menu-item
        v-else-if="item.name !== 'notfound'"
        :key="item.name"
        :index="item.path"
        @click="handleSelect(item)"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SubMenu",
  props: {
    subMenu: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.permission.currentPage,
      tabsList: (state) => state.tabs.tabsList,
    }),
  },
  methods: {
    handleSelect(item) {
      this.$store.commit("tabs/UPDATE_TABS_LIST", item);
      this.$actions.setGlobalState({ tabsList: this.tabsList });
      this.$router.push(item.path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped></style>
