import{_ as a,c as e,o as t,aa as i}from"./chunks/framework.8XkOrD3J.js";const o="/assets/blog-2024-05-09-22-39-54.BNs6PGRs.png",l="/assets/blog-2024-05-09-22-42-58.BiMJ4zdq.png",d="/assets/blog-2024-05-09-22-43-48.DplULrjN.png",s="/assets/blog-2024-05-09-22-45-02.BUNVaL0E.png",r="/assets/blog-2024-05-09-22-45-43.np8169p8.png",n="/assets/blog-2024-05-09-22-46-11.BUZzccNW.png",x=JSON.parse('{"title":"虚拟DOM","description":"","frontmatter":{"title":"虚拟DOM","tags":["面试","Vue"],"categories":[["面试","Vue"]],"abbrlink":"f78772e0","date":"2024-05-09T15:36:34.000Z"},"headers":[],"relativePath":"posts/Vue/Vue-4.md","filePath":"posts/Vue/Vue-4.md","lastUpdated":1715957459000}'),f={name:"posts/Vue/Vue-4.md"},p=i('<h1 id="虚拟-dom" tabindex="-1">虚拟 DOM <a class="header-anchor" href="#虚拟-dom" aria-label="Permalink to &quot;虚拟 DOM&quot;">​</a></h1><ul><li><a href="#虚拟-dom">虚拟 DOM</a><ul><li><a href="#什么是虚拟-dom">什么是虚拟 DOM</a></li><li><a href="#为什么使用虚拟-dom">为什么使用虚拟 DOM</a></li><li><a href="#虚拟-dom-与实际-dom-的比较和更新">虚拟 DOM 与实际 DOM 的比较和更新</a></li><li><a href="#vue-中的-diff">vue 中的 diff</a></li><li><a href="#比较方式">比较方式</a></li><li><a href="#vue3-中的优化">Vue3 中的优化</a></li></ul></li></ul><h2 id="什么是虚拟-dom" tabindex="-1">什么是虚拟 DOM <a class="header-anchor" href="#什么是虚拟-dom" aria-label="Permalink to &quot;什么是虚拟 DOM&quot;">​</a></h2><ul><li>虚拟 DOM（Virtual DOM）是一种编程概念，其中 DOM 的对象被抽象化为一个 JavaScript 对象，这个对象被称为 &quot;虚拟 DOM 对象&quot;，虚拟 DOM 至少包含三个属性：tag(html 标签)，props(标签的属性，如 class)，children(子元素对象)。</li><li>实际上它是一层对真实 DOM 的抽象，以 JavaScript 对象 (VNode 节点) 作为基础的树，用对象的属性来描述节点，最终可以通过一系列操作使这棵树映射到真实环境上</li><li>创建虚拟 DOM 是为了更好将虚拟的节点渲染到页面视图中，所以虚拟 DOM 对象的节点与真实 DOM 的属性一一照应</li></ul><h2 id="为什么使用虚拟-dom" tabindex="-1">为什么使用虚拟 DOM <a class="header-anchor" href="#为什么使用虚拟-dom" aria-label="Permalink to &quot;为什么使用虚拟 DOM&quot;">​</a></h2><ol><li><strong>提高性能</strong>：直接操作 DOM 是非常消耗性能的，<strong>因为每次 DOM 的改变都会引发浏览器的重排或重绘</strong>。而虚拟 DOM 在内存中进行操作，只有在最后一步才将最终的改变应用到真实的 DOM 上，这大大减少了操作 DOM 的次数，从而提高了性能。</li><li><strong>跨平台</strong>：虚拟 DOM 是在 JavaScript 中实现的，它并不依赖浏览器环境。这意味着它可以在任何可以运行 JavaScript 的环境中使用，如 Node.js、React Native 等。</li></ol><h2 id="虚拟-dom-与实际-dom-的比较和更新" tabindex="-1">虚拟 DOM 与实际 DOM 的比较和更新 <a class="header-anchor" href="#虚拟-dom-与实际-dom-的比较和更新" aria-label="Permalink to &quot;虚拟 DOM 与实际 DOM 的比较和更新&quot;">​</a></h2><ol><li>生成新的虚拟 DOM：当应用的状态发生变化时，会生成一个新的虚拟 DOM。</li><li>对比新旧虚拟 DOM：新的虚拟 DOM 会与旧的虚拟 DOM 进行对比，这个过程通常被称为 &quot;diffing&quot;。在这个过程中，会计算出两个虚拟 DOM 之间的差异。</li><li>生成差异对象：根据对比的结果，会生成一个描述这些差异的对象，这个对象通常被称为 &quot;patches&quot;。</li><li>最后，这个差异对象会被应用到真实的 DOM 上，以实现 DOM 的更新。这个过程通常被称为 &quot;patching&quot;。</li></ol><h2 id="vue-中的-diff" tabindex="-1">vue 中的 diff <a class="header-anchor" href="#vue-中的-diff" aria-label="Permalink to &quot;vue 中的 diff&quot;">​</a></h2><p><code>diff</code> 算法是一种通过同层的树节点进行比较的高效算法，有两个特点：</p><ul><li>比较只会在同层级进行, 不会跨层级比较</li><li>在 diff 比较的过程中，循环从两边向中间比较</li></ul><p><code>diff</code> 算法的目的是根据 key 复用 dom 节点，通过移动节点而不是创建新节点来减少 dom 操作</p><h2 id="比较方式" tabindex="-1">比较方式 <a class="header-anchor" href="#比较方式" aria-label="Permalink to &quot;比较方式&quot;">​</a></h2><p><code>diff</code>整体策略为：深度优先，同层比较</p><p>示例如下：</p><p><img src="'+o+'" alt="diff1"></p><p>第一次循环，发现旧节点 D 与新节点 D 相同，直接复用旧节点 D 作为 diff 后的第一个真实节点，同时旧节点 endIndex 向前移动到 C，新节点的 startIndex 向后移动到了 C</p><p><img src="'+l+'" alt="diff2"></p><p>第二次循环，同样是旧节点的末尾和新节点的开头(都是 C)相同，diff 后创建了 C 的真实节点插入到第一次创建的 D 节点后面。同时旧节点的 endIndex 移动到了 B，新节点的 startIndex 移动到了 E</p><p><img src="'+d+'" alt="diff3"></p><p>第三次循环，发现 E 没有找到，这时候直接创建新的真实节点 E，插入到第二次创建的 C 节点之后。同时新节点的 startIndex 移动到了 A。旧节点的 startIndex 和 endIndex 都保持不动</p><p><img src="'+s+'" alt="diff4"></p><p>第四次循环，新旧节点的开头(都是 A)相同，于是 diff 创建 A 的真实节点，插入到前一次创建的 E 节点后面。同时旧节点的 startIndex 移动到了 B，新节点的 startIndex 移动到了 B</p><p><img src="'+r+'" alt="diff5"></p><p>第五次循环，diff 后创建了 B 真实节点 插入到前一次创建的 A 节点后面。同时旧节点的 startIndex 移动到了 C，新节点的 startIndex 移动到了 F</p><p><img src="'+n+'" alt="diff6"></p><p>最终，新节点的 startIndex 已经大于 endIndex 了，需要创建 newStartIdx 和 newEndIdx 之间的所有节点，也就是节点 F，直接创建 F 节点对应的真实节点放到 B 节点后面</p><h2 id="vue3-中的优化" tabindex="-1">Vue3 中的优化 <a class="header-anchor" href="#vue3-中的优化" aria-label="Permalink to &quot;Vue3 中的优化&quot;">​</a></h2><ol><li>静态树优化：Vue 3 引入了静态树（Static Tree）的概念。如果一个组件的虚拟 DOM 树在两次渲染之间没有发生变化，那么这个虚拟 DOM 树就被认为是静态的。在 diff 过程中，静态树会被直接复用，而不会进行任何比较和更新。</li><li>静态节点优化：Vue 3 还引入了静态节点（Static Node）的概念。如果一个节点在两次渲染之间没有发生变化，那么这个节点就被认为是静态的。在 diff 过程中，静态节点会被直接复用，而不会进行任何比较和更新。</li><li>更优的列表 diff 算法：Vue 3 的 diff 算法在处理动态列表时，采用了一种更优的算法，可以更有效地处理列表中的元素重排和复用。</li></ol>',29),c=[p];function u(h,D,m,M,O,_){return t(),e("div",null,c)}const q=a(f,[["render",u]]);export{x as __pageData,q as default};
