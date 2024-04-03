import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.4313453f.js";const m=JSON.parse('{"title":"List","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"references/list.md","filePath":"references/list.md","lastUpdated":null}'),o={name:"references/list.md"},e=l(`<h1 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h1><p>Lists are objects that allow you to create a collection of entries from which the user can make a selection.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>items</td><td>table</td><td>A collection of entries to be displayed in the list</td></tr><tr><td>selectedIndex</td><td>number</td><td>he index of the currently selected item in the list</td></tr><tr><td>selectionBackground</td><td>color</td><td>Background color of the selected item</td></tr><tr><td>selectionForeground</td><td>color</td><td>Foreground/text color of the selected item</td></tr><tr><td>scrollIndex</td><td>number</td><td>Indicates the first visible item in a scrollable list</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Here&#39;s an example showcasing how to create a List object, populate it with items, and retrieve the selected item:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> main </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> myList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- Adding items to the list</span></span>
<span class="line"><span style="color:#B392F0;">myList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">setItems</span><span style="color:#E1E4E8;">({</span><span style="color:#9ECBFF;">&quot;Item 1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Item 2&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Item 3&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Item 4&quot;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- Retrieving the selected item&#39;s value</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> selectedItem </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> myList.</span><span style="color:#B392F0;">items</span><span style="color:#E1E4E8;">[myList.</span><span style="color:#B392F0;">selectedIndex</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">basalt.</span><span style="color:#79B8FF;">debug</span><span style="color:#E1E4E8;">(selectedItem)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> main </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> myList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addList</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- Adding items to the list</span></span>
<span class="line"><span style="color:#6F42C1;">myList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">setItems</span><span style="color:#24292E;">({</span><span style="color:#032F62;">&quot;Item 1&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Item 2&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Item 3&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Item 4&quot;</span><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- Retrieving the selected item&#39;s value</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> selectedItem </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> myList.</span><span style="color:#6F42C1;">items</span><span style="color:#24292E;">[myList.</span><span style="color:#6F42C1;">selectedIndex</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">basalt.</span><span style="color:#005CC5;">debug</span><span style="color:#24292E;">(selectedItem)</span></span></code></pre></div><h2 id="additem" tabindex="-1">addItem <a class="header-anchor" href="#additem" aria-label="Permalink to &quot;addItem&quot;">​</a></h2><p>Adds a item into the list.</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The entry name</li></ol><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>object</code> The object in use</li></ol><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> mainFrame </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mainFrame</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;3. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> mainFrame </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mainFrame</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;3. Entry&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="removeitem" tabindex="-1">removeItem <a class="header-anchor" href="#removeitem" aria-label="Permalink to &quot;removeItem&quot;">​</a></h2><p>Removes an item from the list</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The name of the item</li></ol><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>object</code> The object in use</li></ol><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> mainFrame </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mainFrame</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;3. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">removeItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> mainFrame </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mainFrame</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;3. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">removeItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="removeitembyindex" tabindex="-1">removeItemByIndex <a class="header-anchor" href="#removeitembyindex" aria-label="Permalink to &quot;removeItemByIndex&quot;">​</a></h2><p>Removes an item from the list by its id</p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>number</code> The id of the item</li></ol><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>object</code> The object in use</li></ol><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> mainFrame </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mainFrame</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;3. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">removeItemByIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> mainFrame </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mainFrame</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;3. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">removeItemByIndex</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="selectitem" tabindex="-1">selectItem <a class="header-anchor" href="#selectitem" aria-label="Permalink to &quot;selectItem&quot;">​</a></h2><p>Selects an item from the list</p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The name of the item</li></ol><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>object</code> The object in use</li></ol><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> mainFrame </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mainFrame</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;3. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">selectItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> mainFrame </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mainFrame</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;3. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">selectItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="selectitembyindex" tabindex="-1">selectItemByIndex <a class="header-anchor" href="#selectitembyindex" aria-label="Permalink to &quot;selectItemByIndex&quot;">​</a></h2><p>Selects an item from the list by its id</p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>number</code> The id of the item</li></ol><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>object</code> The object in use</li></ol><h3 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> mainFrame </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mainFrame</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;3. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">selectItemByIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> mainFrame </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mainFrame</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;3. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">selectItemByIndex</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="getselecteditem" tabindex="-1">getSelectedItem <a class="header-anchor" href="#getselecteditem" aria-label="Permalink to &quot;getSelectedItem&quot;">​</a></h2><p>Returns the currently selected item</p><h3 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>string</code> The name of the item</li></ol><h3 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> mainFrame </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> basalt.</span><span style="color:#79B8FF;">addFrame</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">local</span><span style="color:#E1E4E8;"> aList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mainFrame</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;2. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">addItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;3. Entry&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">basalt.</span><span style="color:#79B8FF;">debug</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">aList</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">getSelectedItem</span><span style="color:#E1E4E8;">())</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> mainFrame </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> basalt.</span><span style="color:#005CC5;">addFrame</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">local</span><span style="color:#24292E;"> aList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mainFrame</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;1. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;2. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">addItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;3. Entry&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">basalt.</span><span style="color:#005CC5;">debug</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">aList</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">getSelectedItem</span><span style="color:#24292E;">())</span></span></code></pre></div>`,53),p=[e];function t(r,c,y,E,i,d){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{m as __pageData,u as default};
