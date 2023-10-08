import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.9bc09dc8.js";const b=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api/checkbox.md","filePath":"api/checkbox.md"}'),l={name:"api/checkbox.md"},e=o(`<h1 id="checkbox" tabindex="-1">Checkbox <a class="header-anchor" href="#checkbox" aria-label="Permalink to &quot;Checkbox&quot;">​</a></h1><p>The Checkbox object is derived from the VisualObject class and allows users to set a boolean value to true or false by clicking on it. Checkboxes are commonly used in forms and settings to enable or disable specific options.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>checked</td><td>bool</td><td>Indicates whether the checkbox is currently selected or not.</td></tr><tr><td>checkedSymbol</td><td>char</td><td>The symbol used to represent the checked state.</td></tr><tr><td>checkedColor</td><td>color</td><td>The color of the symbol when the checkbox is checked.</td></tr><tr><td>checkedBgColor</td><td>color</td><td>The color of the symbol when the checkbox is checked.</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> main </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aCheckbox </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addCheckbox</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">aCheckbox</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">onClick</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(self,event,button,x,y)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (event </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;mouse_click&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (button </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">checked</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">      basalt.</span><span style="color:#79B8FF;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Checkbox is checked!&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span></span>
<span class="line"><span style="color:#E1E4E8;">      basalt.</span><span style="color:#79B8FF;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Checkbox is unchecked!&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">end</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">end</span></span>
<span class="line"><span style="color:#F97583;">end</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> main </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aCheckbox </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addCheckbox</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">aCheckbox</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">onClick</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(self,event,button,x,y)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (event </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;mouse_click&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> (button </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">checked</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">      basalt.</span><span style="color:#005CC5;">debug</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Checkbox is checked!&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span></span>
<span class="line"><span style="color:#24292E;">      basalt.</span><span style="color:#005CC5;">debug</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Checkbox is unchecked!&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">end</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">end</span></span>
<span class="line"><span style="color:#D73A49;">end</span><span style="color:#24292E;">)</span></span></code></pre></div>`,6),p=[e];function t(c,r,y,E,d,i){return a(),n("div",null,p)}const u=s(l,[["render",t]]);export{b as __pageData,u as default};
