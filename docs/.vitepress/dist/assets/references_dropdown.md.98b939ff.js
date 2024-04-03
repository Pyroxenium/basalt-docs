import{_ as s,o,c as a,Q as n}from"./chunks/framework.4313453f.js";const m=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"references/dropdown.md","filePath":"references/dropdown.md","lastUpdated":null}'),e={name:"references/dropdown.md"},t=n(`<h1 id="dropdown" tabindex="-1">Dropdown <a class="header-anchor" href="#dropdown" aria-label="Permalink to &quot;Dropdown&quot;">​</a></h1><p>Dropdowns are objects where the user can click on a button, which opens a list from which the user can choose an item.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>opened</td><td>bool</td><td>Indicates if the dropdown list is currently visible</td></tr><tr><td>dropdownHeight</td><td>number</td><td>The maximum height of the dropdown list when opened</td></tr><tr><td>dropdownWidth</td><td>number</td><td>The width of the dropdown list</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>The following example demonstrates how to create a Dropdown object:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> main </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> myDropdown </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addDropdown</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- Adding items to the dropdown</span></span>
<span class="line"><span style="color:#B392F0;">myDropdown</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">setItems</span><span style="color:#E1E4E8;">({</span><span style="color:#9ECBFF;">&quot;Option 1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Option 2&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Option 3&quot;</span><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> main </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> myDropdown </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addDropdown</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- Adding items to the dropdown</span></span>
<span class="line"><span style="color:#6F42C1;">myDropdown</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">setItems</span><span style="color:#24292E;">({</span><span style="color:#032F62;">&quot;Option 1&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Option 2&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Option 3&quot;</span><span style="color:#24292E;">})</span></span></code></pre></div>`,7),p=[t];function l(r,c,d,i,y,h){return o(),a("div",null,p)}const u=s(e,[["render",l]]);export{m as __pageData,u as default};
