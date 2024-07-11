import{_ as i,c as s,o as a,aa as t}from"./chunks/framework.8XkOrD3J.js";const n="/assets/blog-2024-05-21-16-28-48.DvsZLal4.png",E=JSON.parse('{"title":"Git基本概念","description":"","frontmatter":{"title":"Git基本概念","date":"2024-05-21T16:20:59.000Z","tags":["面试","Git"],"categories":[["面试"],"Git"]},"headers":[],"relativePath":"posts/Git/Git-1.md","filePath":"posts/Git/Git-1.md","lastUpdated":1716281569000}'),l={name:"posts/Git/Git-1.md"},h=t('<h1 id="git-基本概念" tabindex="-1">Git 基本概念 <a class="header-anchor" href="#git-基本概念" aria-label="Permalink to &quot;Git 基本概念&quot;">​</a></h1><ul><li><a href="#git-基本概念">Git 基本概念</a><ul><li><a href="#什么是-git">什么是 Git</a></li><li><a href="#git-工作流程">Git 工作流程</a><ul><li><a href="#git-工作区域">git 工作区域</a></li><li><a href="#git-文件状态">git 文件状态</a></li></ul></li></ul></li></ul><h2 id="什么是-git" tabindex="-1">什么是 Git <a class="header-anchor" href="#什么是-git" aria-label="Permalink to &quot;什么是 Git&quot;">​</a></h2><ul><li><p>Git 是一个免费的、开源的<code>分布式版本控制系统</code>，即 <strong>一种记录文件内容变化，以便将来查阅特定版本修订情况的系统</strong></p></li><li><p>分布式版本控制系统的客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来</p></li></ul><h2 id="git-工作流程" tabindex="-1">Git 工作流程 <a class="header-anchor" href="#git-工作流程" aria-label="Permalink to &quot;Git 工作流程&quot;">​</a></h2><p><img src="'+n+`" alt="Git 工作流程"></p><h3 id="git-工作区域" tabindex="-1">git 工作区域 <a class="header-anchor" href="#git-工作区域" aria-label="Permalink to &quot;git 工作区域&quot;">​</a></h3><ul><li><p>工作区 相当于本地写代码的区域，它包含了所有的文件和子目录。你可以在这里编辑、添加和删除文件。</p></li><li><p>暂存区<code>（Stage 或 Index）</code><br> 执行<code>git add</code>命令时，更改的文件就会被添加到暂存区。暂存区是一个中间区域，用于临时保存你的更改，直到准备好提交这些更改</p></li><li><p><code>Git</code>本地仓库<br> 执行<code>git commit</code>命令时，暂存区的所有更改就会被永久保存到 Git 仓库。这是 Git 保存项目历史记录的地方。</p></li><li><p><code>Git</code>远程仓库<br> 存储在网络上的项目仓库</p></li></ul><h3 id="git-文件状态" tabindex="-1">git 文件状态 <a class="header-anchor" href="#git-文件状态" aria-label="Permalink to &quot;git 文件状态&quot;">​</a></h3><ul><li><p><code>未跟踪（Untracked）</code><br> 这是文件刚被添加到项目，但还没有被 Git 跟踪的状态。</p></li><li><p><code>已跟踪（Tracked）</code><br> 已跟踪的文件是在上次快照中的文件，有三种状态：</p><ul><li><code>未修改（Unmodified）</code>：如果你从上次提交后没有修改过一个文件，那么<code>Git</code>将其标记为未修改</li><li><code>已修改（Modified）</code>：当你修改了一个已跟踪的文件，<code>Git</code> 将其标记为已修改。这意味着你在本地修改了文件，但还没有提交保存</li><li><code>已暂存（Staged）</code>：当你对一个已修改的文件执行<code>git add</code>命令后，<code>Git</code> 将其标记为已暂存。这意味着你已经标记了这个文件，在下次提交时，这些修改将会被提交到你的仓库</li></ul></li></ul><ul><li>具体例子</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 当前在 main 分支上</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## main 分支与远程 origin/main 分支同步</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;origin/main&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 这些文件已经被添加到暂存区，准备在下次提交时被提交到仓库。这些文件的状态是“已暂存（Staged）”。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git restore --staged &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unstage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   docs/posts/Git/Git-1.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   docs/posts/Git/Git-2.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   docs/posts/JavaScript/JavaScript-1.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   docs/posts/images/blog-2024-05-21-15-19-48.png</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   docs/posts/images/blog-2024-05-21-15-34-13.png</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   docs/posts/images/blog-2024-05-21-16-28-48.png</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   package-lock.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   package.json</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 这些文件已经被修改，但还没有被添加到暂存区。这些文件的状态是“已修改（Modified）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> staged</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git add &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> what</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git restore &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> discard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> working</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        modified:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   docs/posts/Git/Git-1.md</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 未追踪的文件，可以使用 git add &lt;file&gt; 命令。这个命令会将文件添加到暂存区，下次提交时被提交到仓库，会被 Git 跟踪了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Untracked</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git add &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> what</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        docs/posts/Git/Git3.md</span></span></code></pre></div>`,12),p=[h];function e(k,d,F,r,g,o){return a(),s("div",null,p)}const y=i(l,[["render",e]]);export{E as __pageData,y as default};
