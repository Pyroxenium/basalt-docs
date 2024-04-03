import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.4313453f.js";const h=JSON.parse('{"title":"Menubar","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"references/menubar.md","filePath":"references/menubar.md","lastUpdated":null}'),l={name:"references/menubar.md"},o=n(`<h1 id="menubar" tabindex="-1">Menubar <a class="header-anchor" href="#menubar" aria-label="Permalink to &quot;Menubar&quot;">​</a></h1><p>Menubars are similar to lists but are displayed horizontally instead of vertically. They are ideal for creating user interfaces like taskbars in operating systems, as they can be scrollable, allowing for endless entries.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>spacing</td><td>number</td><td>Determines the space between each entry</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Here&#39;s a simple example to help you get started with creating a Menubar:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> main </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aMenubar </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addMenubar</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">aMenubar</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItems</span><span style="color:#E1E4E8;">({</span><span style="color:#9ECBFF;">&quot;File&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Edit&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;View&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Help&quot;</span><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> main </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aMenubar </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addMenubar</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">aMenubar</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItems</span><span style="color:#24292E;">({</span><span style="color:#032F62;">&quot;File&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Edit&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;View&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Help&quot;</span><span style="color:#24292E;">})</span></span></code></pre></div>`,7),t=[o];function p(r,c,i,d,y,E){return s(),e("div",null,t)}const b=a(l,[["render",p]]);export{h as __pageData,b as default};
