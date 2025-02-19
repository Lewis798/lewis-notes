/** @format */

import { EnhanceAppContext, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { Ref, h, ref, watch } from "vue";

import ContentFooter from "./components/ContentFooter.vue";
import FooterComment from "./components/FooterComment.vue";
import MDocFooter from "./components/MDocFooter.vue";
import MLayout from "./components/MLayout.vue";
import MNavLinks from "./components/MNavLinks.vue";
import NavVisitor from "./components/NavVisitor.vue";
import { createMediumZoomProvider } from "./composables/useMediumZoom";
import "./styles/index.scss";

let homePageStyle: HTMLStyleElement | undefined;

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(MLayout, props);
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router);

    app.provide("DEV", process.env.NODE_ENV === "development");
    app.component("MNavLinks", MNavLinks);
    app.component("ContentFooter", ContentFooter);
    app.component("NavVisitor", NavVisitor);
    app.component("MDocFooter", MDocFooter);
    app.component("FooterComment", FooterComment);
     
    
    const currentUrl: Ref<string | null> = ref(null);
    if (typeof window !== "undefined") {
      router.onBeforeRouteChange = (to) => {
        currentUrl.value = window.location.origin + "/" + to.split("/").slice(-3).join("/");
      };
      app.provide("currentUrl", currentUrl);
      watch(
        () => router.route.data.relativePath,
        () =>
          updateHomePageStyle(
            /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
            location.pathname === "/" || location.pathname === "/vitepress-nav-template/"
          ),
        { immediate: true }
      );
    }
  },
};

if (typeof window !== "undefined") {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome")) {
    document.documentElement.classList.add("browser-chrome");
  } else if (browser.includes("firefox")) {
    document.documentElement.classList.add("browser-firefox");
  } else if (browser.includes("safari")) {
    document.documentElement.classList.add("browser-safari");
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
