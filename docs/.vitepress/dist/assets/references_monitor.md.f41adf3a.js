import{_ as a,o as s,c as e,Q as t}from"./chunks/framework.4313453f.js";const E=JSON.parse('{"title":"Monitor","description":"","frontmatter":{},"headers":[],"relativePath":"references/monitor.md","filePath":"references/monitor.md","lastUpdated":null}'),o={name:"references/monitor.md"},n=t(`<h1 id="monitor" tabindex="-1">Monitor <a class="header-anchor" href="#monitor" aria-label="Permalink to &quot;Monitor&quot;">​</a></h1><p>Monitors are special containers in Basalt designed for interaction with the peripheral device <a href="https://tweaked.cc/peripheral/monitor.html" target="_blank" rel="noreferrer">Monitor</a>. They allow for displaying user interfaces on monitors and process touch events to convert them into mouse click events.</p><p>Monitors have specific properties and behaviors that differentiate them from other containers. They are intended exclusively for use with the <a href="https://tweaked.cc/peripheral/monitor.html" target="_blank" rel="noreferrer">Monitor</a> peripheral device and only function with it.</p><p>Monitor inherit from <a href="./container.html">Container</a>, <a href="./visualelement.html">VisualElement</a> and <a href="./element.html">BasicElement</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>monitor</td><td>string/table</td><td>Specifies either the name or the peripheral representation of the desired monitor to use.</td></tr><tr><td>side</td><td>string</td><td>Indicates the orientation or position of the monitor, e.g., &#39;left&#39;, &#39;right&#39;, &#39;top&#39;, or &#39;bottom&#39;.</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> basalt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;basalt&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> monitor </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addMonitor</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">monitor</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">setMonitor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">-- automatically changes the side-property to top and attaches the monitor on top.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">basalt.</span><span style="color:#79B8FF;">autoUpdate</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> basalt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;basalt&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> monitor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addMonitor</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">monitor</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">setMonitor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">-- automatically changes the side-property to top and attaches the monitor on top.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">basalt.</span><span style="color:#005CC5;">autoUpdate</span><span style="color:#24292E;">()</span></span></code></pre></div></details>`,8),l=[n];function r(p,i,c,d,h,y){return s(),e("div",null,l)}const u=a(o,[["render",r]]);export{E as __pageData,u as default};
