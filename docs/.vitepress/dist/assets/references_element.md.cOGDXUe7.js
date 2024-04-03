import{_ as n,E as l,c as r,m as e,a as s,J as t,a4 as i,o as h}from"./chunks/framework.nQaBHiNx.js";const es=JSON.parse('{"title":"BasicElement","description":"","frontmatter":{},"headers":[],"relativePath":"references/element.md","filePath":"references/element.md","lastUpdated":null}'),p={name:"references/element.md"},o=i('<h1 id="basicelement" tabindex="-1">BasicElement <a class="header-anchor" href="#basicelement" aria-label="Permalink to &quot;BasicElement&quot;">​</a></h1><p>The BasicElement class is the fundamental building block class in Basalt, from which all other elements are derived. You can think of it as the “origin” of all elements within the framework. The BasicElement class provides essential functions that are common to all derived elements, such as adding and removing event listeners and managing inheritance and relationships between elements.</p><p>In simple terms, the BasicElement class is like a common ancestor that passes down basic functions and properties to all subsequent elements. This makes it easier to keep the behavior of elements throughout the framework consistent and predictable.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>enabled</td><td>boolean</td><td>Controls whether the event listeners are active. When set to true, event operations related to the element are processed.</td></tr><tr><td>parent</td><td>Container</td><td>References the parent element that this element is nested within, if any.</td></tr><tr><td>events</td><td>table</td><td>A table storing event handlers associated with this element.</td></tr><tr><td>propertyObservers</td><td>table</td><td>A table holding observer functions that get triggered when specific properties of the element change. Useful for reactivity and updating related UI elements.</td></tr><tr><td>name</td><td>string</td><td>A unique identifier or label for the element, which can be useful for debugging or for referencing the element programmatically.</td></tr><tr><td>type</td><td>string</td><td>Describes the kind or category of the element, such as &quot;button&quot;, &quot;input&quot;, &quot;label&quot;, etc.</td></tr><tr><td>z</td><td>number</td><td>Represents the elements&#39;s depth or layering order in the UI. Higher values will render the element on top of those with lower values, allowing for control over overlapping elements.</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table><thead><tr><th>Method</th><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><a href="#getproperty">getProperty</a></td><td>any</td><td>Returns a property value.</td></tr><tr><td><a href="#setproperty">setProperty</a></td><td>self</td><td>Sets a property&#39;s value.</td></tr><tr><td><a href="#hasproperty">hasProperty</a></td><td>boolean</td><td>Checks if a property exists for the element.</td></tr><tr><td><a href="#setproperties">setProperties</a></td><td>self</td><td>Sets multiple properties for a element at once.</td></tr><tr><td><a href="#getproperties">getProperties</a></td><td>table</td><td>Retrieves all properties and their values for a element.</td></tr><tr><td><a href="#getpropertytype">getPropertyType</a></td><td>string</td><td>Retrieves the data type of a specified property for a element.</td></tr><tr><td><a href="#addpropertyobserver">addPropertyObserver</a></td><td>self</td><td>Adds an observer function to monitor changes to a specific property of a element.</td></tr><tr><td><a href="#removepropertyobserver">removePropertyObserver</a></td><td>self</td><td>Removes an observer function from monitoring changes to a specific property of a element.</td></tr><tr><td><a href="#forcepropertyobserverupdate">forcePropertyObserverUpdate</a></td><td>self</td><td>Forces an update of all property observers for a element.</td></tr><tr><td><a href="#fireevent">fireEvent</a></td><td>self</td><td>Fires an event associated with the element.</td></tr><tr><td><a href="#istype">isType</a></td><td>boolean</td><td>Checks if the element belongs to a specified type.</td></tr><tr><td><a href="#updateevents">updateEvents</a></td><td>self</td><td>Updates all events associated with the element.</td></tr></tbody></table>',7),k={id:"getproperty",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#getproperty","aria-label":'Permalink to "getProperty <C content="getProperty"/>"'},"​",-1),c=i(`<p>Retrieves the value of a specified property for a element.</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> the name of the property</li></ol><h3 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>any</code> the value of the specified property. The type of the returned value depends on the nature of the property (e.g., it could be a string, number, table, etc.).</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Retrieve and print the &#39;name&#39; property of the button</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> propertyName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(propertyName)</span></span></code></pre></div></details>`,6),E={id:"setproperty",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#setproperty","aria-label":'Permalink to "setProperty <C content="setProperty"/>"'},"​",-1),g=i(`<p>Sets the value of a specified property for a element.</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The name of the property you wish to set.</li><li><code>any</code>The value you want to assign to the specified property. The type of this parameter should match the expected type for the property in question (e.g., string, number, table, etc.).</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Set the &#39;name&#39; property of the button to a new value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MyButton&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- For demonstration, retrieve and print the updated &#39;name&#39; property</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> updatedPropertyName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(updatedPropertyName)</span></span></code></pre></div></details>`,4),u={id:"hasproperty",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#hasproperty","aria-label":'Permalink to "hasProperty <C content="hasProperty"/>"'},"​",-1),b=i(`<p>Checks if a property exists for the element.</p><h3 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>boolean</code> true if the property exists, false otherwise.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Check if the &#39;name&#39; property exists for the button</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hasNameProperty </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hasProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(hasNameProperty)</span></span></code></pre></div></details>`,4),_={id:"setproperties",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#setproperties","aria-label":'Permalink to "setProperties <C content="setProperties"/>"'},"​",-1),f=i(`<p>Sets multiple properties for an element at once.</p><h3 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>table</code> A table containing key-value pairs of properties and their corresponding values.</li></ol><h3 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>self</code> The element itself.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Set multiple properties for the button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setProperties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;MyButton&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></details>`,6),C={id:"getproperties",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#getproperties","aria-label":'Permalink to "getProperties <C content="getProperties"/>"'},"​",-1),P=i(`<p>Retrieves all properties and their values for an element.</p><h3 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>table</code> Retrieves all properties and their values for an element.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Retrieve all properties and their values for the button</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> properties </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getProperties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(properties) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Output: {name = uuid, enabled = true, x = 1, y = 1, width = 12, height = 3, ...}</span></span></code></pre></div></details>`,4),A={id:"getpropertytype",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#getpropertytype","aria-label":'Permalink to "getPropertyType <C content="getPropertyType"/>"'},"​",-1),B=i(`<p>Retrieves the data type of a specified property for an element.</p><h3 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The name of the property.</li></ol><h3 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>string</code> The data type of the specified property</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Retrieve the data type of the &#39;background&#39; property for the button</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> propertyType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getPropertyType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;background&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(propertyType) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Output: &quot;color&quot;</span></span></code></pre></div></details>`,6),D={id:"addpropertyobserver",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#addpropertyobserver","aria-label":'Permalink to "addPropertyObserver <C content="addPropertyObserver"/>"'},"​",-1),x=i(`<p>Adds an observer function to monitor changes to a specific property of an element. The Observer System is mainly used by the dynamic values extension.</p><h3 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The name of the property to observe.</li><li><code>function</code> The observer function to call when the property changes.</li></ol><h3 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>self</code> The element itself.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Define an observer function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backgroundObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Button background changed to: &quot; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tostring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Add the observer function to monitor changes to the &#39;background&#39; property of the button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addPropertyObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;background&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, backgroundObserver)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Now, whenever the &#39;background&#39; property of the button changes, the observer function will be called</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;background&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, colors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Output: &quot;Button background changed to: 16384&quot;</span></span></code></pre></div></details>`,6),R={id:"removepropertyobserver",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#removepropertyobserver","aria-label":'Permalink to "removePropertyObserver <C content="removePropertyObserver"/>"'},"​",-1),w=i(`<p>Removes an observer function from monitoring changes to a specific property of an element.</p><h3 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The name of the property being observed.</li><li><code>function|number</code> The observer function to remove, or the index in the table.</li></ol><h3 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>self</code> The element itself.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Assuming &#39;backgroundObserver&#39; was previously added as an observer for the &#39;background&#39; property of the button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">removePropertyObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;background&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, backgroundObserver)</span></span></code></pre></div></details>`,6),V={id:"forcepropertyobserverupdate",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#forcepropertyobserverupdate","aria-label":'Permalink to "forcePropertyObserverUpdate <C content="forcePropertyObserverUpdate"/>"'},"​",-1),O=i('<p>Forces an update of all property observers for an element. This can be used by users, but it is mainly meant for internal usage.</p><h3 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>self</code> The element itself.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">forcePropertyObserverUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div></details>',4),N={id:"fireevent",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#fireevent","aria-label":'Permalink to "fireEvent <C content="fireEvent"/>"'},"​",-1),U=i('<p>Fires an event associated with the element</p><h3 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The name of the event to fire.</li></ol><h3 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>self</code> The element itself.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fireEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mouse_click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></details>',6),$={id:"istype",tabindex:"-1"},J=e("a",{class:"header-anchor",href:"#istype","aria-label":'Permalink to "isType <C content="isType"/>"'},"​",-1),z=i(`<p>Checks if the element belongs to a specified type.</p><h3 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><ol><li><code>string</code> The type to check against.</li></ol><h3 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>boolean</code> true if the element belongs to the specified type, false otherwise.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getMainFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> frame </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">addFrame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">basalt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">frame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Output: true</span></span></code></pre></div></details>`,6),H={id:"updateevents",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#updateevents","aria-label":'Permalink to "updateEvents <C content="updateEvents"/>"'},"​",-1),Y=i('<p>This will register all events to the parent. Mainly used internal. For example this is beeing called when we switch the parent frame.</p><h3 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h3><ol><li><code>self</code> The element itself.</li></ol><details class="details custom-block"><summary>Click to see example</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">updateEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div></details>',4);function j(G,K,L,Q,X,Z){const a=l("C");return h(),r("div",null,[o,e("h2",k,[s("getProperty "),t(a,{content:"getProperty"}),s(),d]),c,e("h2",E,[s("setProperty "),t(a,{content:"setProperty"}),s(),y]),g,e("h2",u,[s("hasProperty "),t(a,{content:"hasProperty"}),s(),m]),b,e("h2",_,[s("setProperties "),t(a,{content:"setProperties"}),s(),F]),f,e("h2",C,[s("getProperties "),t(a,{content:"getProperties"}),s(),v]),P,e("h2",A,[s("getPropertyType "),t(a,{content:"getPropertyType"}),s(),T]),B,e("h2",D,[s("addPropertyObserver "),t(a,{content:"addPropertyObserver"}),s(),q]),x,e("h2",R,[s("removePropertyObserver "),t(a,{content:"removePropertyObserver"}),s(),S]),w,e("h2",V,[s("forcePropertyObserverUpdate "),t(a,{content:"forcePropertyObserverUpdate"}),s(),I]),O,e("h2",N,[s("fireEvent "),t(a,{content:"fireEvent"}),s(),M]),U,e("h2",$,[s("isType "),t(a,{content:"isType"}),s(),J]),z,e("h2",H,[s("updateEvents "),t(a,{content:"updateEvents"}),s(),W]),Y])}const is=n(p,[["render",j]]);export{es as __pageData,is as default};