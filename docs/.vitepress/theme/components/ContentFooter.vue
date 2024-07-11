<template>
  <div class="divider"></div>
  <div class="footer-content">
    <div class="Content">
      <strong class="rainbow">作者：</strong><span>Lewis</span>
    </div>

    <div class="Content Cursor" @click.prevent="copyToClipboard">
      <strong class="rainbow">本文网址({{ isCopy }})：</strong>
      <a :href="simplifiedUrl" target="_blank" class="link">{{ simplifiedUrl }}</a>
    </div>
    <div class="Content">
      本文采用
      <a
        class="rainbow"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
      >
        <strong class="rainbow"> BY-NC-SA 4.0</strong></a
      >
      协议进行授权。转载请注明出处
    </div>
    <div
      v-if="!DEV && visitor && isDocFooterVisible"
      v-show="hasSidebar"
      class="m-doc-footer"
    >
      <strong class="rainbow">本页面访客：</strong>
      <img
        class="visitor"
        :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}.${pageId}&left_text=Hello%20Hello`"
        onerror="this.style.display='none'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, Ref, ref } from "vue"
import { useData } from "vitepress"
import { useSidebar } from "vitepress/theme"
import { usePageId } from "../composables"

const DEV = inject<Ref<boolean>>("DEV")
const { theme } = useData()
const { footer, visitor } = theme.value
const { hasSidebar } = useSidebar()
const pageId = usePageId()

const isDocFooterVisible = computed(() => {
  return !DEV || footer.message || footer.copyright || visitor.badgeId
})
const currentUrl = inject("currentUrl")
const simplifiedUrl = computed(() => {
  const url = new URL(currentUrl.value)
  const parts = url.pathname.split('/')
  if (parts.length >= 4) {
    return `${url.origin}/${parts[1]}/${parts[3]}`
  }
  const decodedPath = decodeURIComponent(url.pathname)
  const cleanedPath = decodedPath.replace(/[%\dA-F]{2,}/g, '') // 去掉百分号编码字符
  return `${url.origin}${cleanedPath}`
})
let isCopy = ref("点击复制")
async function copyToClipboard(event) {
  await navigator.clipboard.writeText(simplifiedUrl.value)
  isCopy.value = "复制成功"
  setTimeout(() => (isCopy.value = "点击复制"), 2000) // 持续时间 2 秒
}
</script>

<style scoped>
@import "../styles/rainbow.scss";
.divider {
  border-bottom: 1px solid var(--vp-c-gutter);
}
.footer-content {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 0 5px 20px;
  border-left: 5px double var(--vp-c-brand-1);
  font-size: 14px;
  line-height: 1.8;
  animation: rainbow 246s linear infinite;
}
.footer-content .Content {
  margin-bottom: 10px;
}
.m-doc-footer {
  display: flex;
  align-items: center;
}
.rainbow {
  color: var(--vp-c-brand-1);
}
.Cursor {
  cursor: pointer;
}
.visitor {
  margin-right: 8px;
}
.link {
  display: inline-block;
  max-width: 200px; /* 设置显示的最大宽度 */
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 显示省略号 */
  vertical-align: middle; /* 垂直对齐 */
}
@media (max-width: 414px) {
  .visitor {
    display: none;
  }
  .m-doc-footer {
    display: none;
  }
}
</style>
