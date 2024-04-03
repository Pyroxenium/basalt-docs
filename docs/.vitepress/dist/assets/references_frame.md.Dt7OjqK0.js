import{_ as a,c as s,o as i,a4 as e}from"./chunks/framework.nQaBHiNx.js";const E=JSON.parse('{"title":"Frame","description":"","frontmatter":{},"headers":[],"relativePath":"references/frame.md","filePath":"references/frame.md","lastUpdated":null}'),t={name:"references/frame.md"},n=e(`<h1 id="frame" tabindex="-1">Frame <a class="header-anchor" href="#frame" aria-label="Permalink to &quot;Frame&quot;">​</a></h1><p>Frames are elements in Basalt used for organizing user interfaces. Unlike BaseFrames, Frames always require a parent container.</p><p>Frame inherit from <a href="./container.html">Container</a>, <a href="./visualelement.html">VisualElement</a> and <a href="./element.html">BasicElement</a></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;basalt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- This is a Baseframe</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subFrame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- This is a Frame</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div></details>`,5),l=[n];function h(r,p,k,d,o,m){return i(),s("div",null,l)}const g=a(t,[["render",h]]);export{E as __pageData,g as default};
