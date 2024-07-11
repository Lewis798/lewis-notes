import{_ as s,c as i,o as a,aa as n}from"./chunks/framework.8XkOrD3J.js";const g=JSON.parse('{"title":"ES6中变量","description":"","frontmatter":{"title":"ES6中变量","tags":["面试","ES6"],"categories":[["面试","ES6"]],"date":"2024-05-26T20:36:21.000Z"},"headers":[],"relativePath":"posts/ES6/ES6-2.md","filePath":"posts/ES6/ES6-2.md","lastUpdated":1716862076000}'),e={name:"posts/ES6/ES6-2.md"},l=n(`<h1 id="es6-中的变量" tabindex="-1">ES6 中的变量 <a class="header-anchor" href="#es6-中的变量" aria-label="Permalink to &quot;ES6 中的变量&quot;">​</a></h1><p>在 ES6 中，有三种方式可以声明变量</p><ul><li><a href="#es6-中的变量">ES6 中的变量</a><ul><li><a href="#var"><code>var</code></a></li><li><a href="#let"><code>let</code></a></li><li><a href="#const"><code>const</code></a></li></ul></li><li><a href="#区别">区别</a><ul><li><a href="#变量提升">变量提升</a></li><li><a href="#暂时性死区">暂时性死区</a></li><li><a href="#块级作用域">块级作用域</a></li><li><a href="#重复声明">重复声明</a></li><li><a href="#修改声明的变量">修改声明的变量</a></li></ul></li></ul><h2 id="var" tabindex="-1"><code>var</code> <a class="header-anchor" href="#var" aria-label="Permalink to &quot;\`var\`&quot;">​</a></h2><p><code>var</code> 是 JavaScript 中最传统的声明变量的方式。它的作用域是<strong>整个封闭函数</strong>，也就是说，<code>var</code> 声明的变量在整个函数中都是可见的，无论声明在函数的哪个位置。</p><ul><li><p>例子</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// undefined，而不是报错</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><p>这个例子中，虽然<code>x</code>是在<code>console.log(x)</code>之后声明的，但是<code>console.log(x)</code>并没有报错，而是输出了 <code>undefined</code>。这是因为<code>var</code>声明的变量会被提升到函数的顶部。</p><ul><li>注：</li></ul><ol><li><p>在函数中使用使用<code>var</code>声明变量时候，该变量是局部的</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 20</span></span></code></pre></div></li><li><p>如果在函数内不使用<code>var</code>，该变量是全局的</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 30</span></span></code></pre></div></li></ol><h2 id="let" tabindex="-1"><code>let</code> <a class="header-anchor" href="#let" aria-label="Permalink to &quot;\`let\`&quot;">​</a></h2><p><code>let</code> 是 <code>ES6</code> 新增的命令，用来声明变量</p><p>用法类似于<code>var</code>，但是所声明的变量，只在<code>let</code>命令所在的代码块内有效</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 报错：x is not defined</span></span></code></pre></div><p><code>let</code>也不会变量提升，必须先声明变量，然后再使用它</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 报错：x is not defined</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>只要块级作用域内存在<code>let</code>命令，这个区域就不再受外部影响<br> 并且，如果一个区域内存在 <code>let</code> 命令，那么这个区域从开始到 <code>let</code> 命令声明的位置，都属于 <code>let</code> 命令的 &quot;暂时性死区&quot;。在这个区域内，任何对这个声明的变量的引用都会导致错误。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ReferenceError</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>let</code>不允许在相同作用域中重复声明</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// SyntaxError: Identifier &#39;x&#39; has already been declared</span></span></code></pre></div><h2 id="const" tabindex="-1"><code>const</code> <a class="header-anchor" href="#const" aria-label="Permalink to &quot;\`const\`&quot;">​</a></h2><p><code>const</code> 用于声明常量，也就是说，一旦一个变量被 <code>const</code> 声明，就不能再被重新赋值。<code>const</code> 的作用域也是块级作用域。</p><p>例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TypeError: Assignment to constant variable.</span></span></code></pre></div><p>如果之前用<code>var</code>或<code>let</code>声明过变量，再用<code>const</code>声明同样会报错</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 都会报错</span></span></code></pre></div><p><code>const</code>实际上保证的并不是变量的值不得改动，而是变量<strong>指向的那个内存地址所保存的数据</strong>不得改动</p><p>对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量</p><p>对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，<code>const</code> 只能保证这个指针是固定的，并<strong>不能确保改变量的结构不变</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 为 foo 添加一个属性，可以成功</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.prop </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.prop; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 123</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将 foo 指向另一个对象，就会报错</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TypeError: &quot;foo&quot; is read-only</span></span></code></pre></div><h1 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h1><h2 id="变量提升" tabindex="-1">变量提升 <a class="header-anchor" href="#变量提升" aria-label="Permalink to &quot;变量提升&quot;">​</a></h2><p><code>var </code>声明的变量存在变量提升，即变量可以在声明之前调用，值为<code> undefined</code></p><p><code>let </code>和<code>const</code>不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错</p><h2 id="暂时性死区" tabindex="-1">暂时性死区 <a class="header-anchor" href="#暂时性死区" aria-label="Permalink to &quot;暂时性死区&quot;">​</a></h2><p><code>var </code>不存在暂时性死区</p><p><code>let </code>和<code>const</code>存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量</p><h2 id="块级作用域" tabindex="-1">块级作用域 <a class="header-anchor" href="#块级作用域" aria-label="Permalink to &quot;块级作用域&quot;">​</a></h2><p><code>var</code>不存在块级作用域</p><p><code>let</code>和<code>const</code>存在块级作用域</p><h2 id="重复声明" tabindex="-1">重复声明 <a class="header-anchor" href="#重复声明" aria-label="Permalink to &quot;重复声明&quot;">​</a></h2><p><code>var </code>允许重复声明变量</p><p><code>let </code>和<code>const</code>在同一作用域不允许重复声明变量</p><h2 id="修改声明的变量" tabindex="-1">修改声明的变量 <a class="header-anchor" href="#修改声明的变量" aria-label="Permalink to &quot;修改声明的变量&quot;">​</a></h2><p><code>var</code>和<code>let</code>可以</p><p><code>const</code>声明一个只读的常量。一旦声明，常量的值就不能改变</p><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noreferrer">https://es6.ruanyifeng.com/</a><br><a href="https://vue3js.cn/interview/es6/var_let_const.html#%E5%9B%9B%E3%80%81%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">https://vue3js.cn/interview/es6/var_let_const.html#四、区别</a></p></div>`,46),t=[l];function h(p,k,d,o,r,c){return a(),i("div",null,t)}const y=s(e,[["render",h]]);export{g as __pageData,y as default};
