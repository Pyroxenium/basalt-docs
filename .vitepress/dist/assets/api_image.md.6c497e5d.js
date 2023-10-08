import{_ as a,o as s,c as e,Q as o}from"./chunks/framework.9bc09dc8.js";const E=JSON.parse('{"title":"Image","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api/image.md","filePath":"api/image.md"}'),n={name:"api/image.md"},l=o(`<h1 id="image" tabindex="-1">Image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;Image&quot;">​</a></h1><p>The Image object is designed for adding more advanced backgrounds to your interface. It supports the loading of .nfp and .bimg images, allowing for greater customization of your interface’s appearance.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>frame</td><td>number</td><td>Determines the current frame of the bimg image</td></tr><tr><td>XOffset</td><td>number</td><td>Horizontal offset of the image from its starting position</td></tr><tr><td>YOffset</td><td>number</td><td>Vertical offset of the image from its starting position</td></tr></tbody></table><h2 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h2><p>This method sets the image to be displayed in the Image object.</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The path to the image file you wish to use.</li><li><code>string</code> (optional) - The format of the image: <code>nfp</code> or <code>bimg</code>.</li></ol><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>object</code> The object in use</li></ol><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> main </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">createFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addImage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">image</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;dog.nfp&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> main </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">createFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> image </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addImage</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">image</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;dog.nfp&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="play" tabindex="-1">play <a class="header-anchor" href="#play" aria-label="Permalink to &quot;play&quot;">​</a></h2><p>Plays a animated bimg image</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>boolean</code> optional - infinite loop.</li></ol><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>object</code> The object in use</li></ol><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> main </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">createFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addImage</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">image</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;dog.bimg&quot;</span><span style="color:#E1E4E8;">):</span><span style="color:#79B8FF;">play</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> main </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">createFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> image </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addImage</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">image</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;dog.bimg&quot;</span><span style="color:#24292E;">):</span><span style="color:#005CC5;">play</span><span style="color:#24292E;">()</span></span></code></pre></div>`,20),t=[l];function p(r,c,i,d,y,h){return s(),e("div",null,t)}const g=a(n,[["render",p]]);export{E as __pageData,g as default};
