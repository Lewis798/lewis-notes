<template>
  <div>
    <div id="vcomments"></div>
  </div>
</template>
<script setup lang='ts'>
import { onMounted, ref } from "vue"
import { useData } from "vitepress"
import { usePageId } from "../composables"
const { theme } = useData()
const pageId = usePageId()
const { visitor } = theme.value
onMounted(async () => {
  if (typeof window === "undefined") {
    return
  }
  const Valine = await (await import("valine")).default
  const path = visitor.badgeId
    ? `${visitor.badgeId}.${pageId.value}`
    : pageId.value
  new Valine({
    el: "#vcomments",
    appId: "6g8vc53PagWd7ggk3VqLFlQY-gzGzoHsz",
    appKey: "KQgBPZqChx4zRHVOeydPXod6",
    placeholder: "说点什么吧...",
    avatar: "hide",
    path: path,
    visitor: true,
    recordIP: true,
    meta: ["nick"],
  })
})
</script>


<style lang='scss' scoped>
#vcomments {
  margin-top: 30px;
  border-radius: 2%;
}
</style>