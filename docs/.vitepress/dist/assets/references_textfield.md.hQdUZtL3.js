import{_ as t,c as e,o as i,a4 as s}from"./chunks/framework.nQaBHiNx.js";const x=JSON.parse('{"title":"Textfield","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"references/textfield.md","filePath":"references/textfield.md","lastUpdated":null}'),a={name:"references/textfield.md"},l=s(`<h1 id="textfield" tabindex="-1">Textfield <a class="header-anchor" href="#textfield" aria-label="Permalink to &quot;Textfield&quot;">​</a></h1><p>Textfields are objects that allow users to write text in multiple lines, similar to the default edit script.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>lines</td><td>table</td><td>A collection of strings, where each string represents a separate line in the Textfield.</td></tr><tr><td>lineIndex</td><td>number</td><td>The current line number where the cursor is positioned.</td></tr><tr><td>scrollIndexX</td><td>number</td><td>The horizontal scroll position, determining which part of the text is visible when the text width exceeds the Textfield width.</td></tr><tr><td>scrollIndexY</td><td>number</td><td>The vertical scroll position, deciding which part of the text is visible when the number of lines exceeds the Textfield&#39;s height.</td></tr><tr><td>cursorIndex</td><td>number</td><td>The current position of the cursor within the line determined by lineIndex.</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Here’s a simple example showcasing how to instantiate a Textfield object within the Basalt framework:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">createFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aTextfield </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addTextfield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- User writes text into the Textfield</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Retrieve the text from the Textfield</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> table.concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aTextfield.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(allText)</span></span></code></pre></div>`,7),n=[l];function h(r,d,p,k,o,c){return i(),e("div",null,n)}const g=t(a,[["render",h]]);export{x as __pageData,g as default};