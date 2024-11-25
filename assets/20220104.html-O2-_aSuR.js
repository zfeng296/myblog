import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e}from"./app-sZwCoPd_.js";const i={},t=e(`<h1 id="tidb" tabindex="-1"><a class="header-anchor" href="#tidb" aria-hidden="true">#</a> tidb</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://ghproxy.com/https://github.com/pingcap/tidb-docker-compose.git

<span class="token builtin class-name">cd</span> tidb-docker-compose

<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

yum <span class="token function">install</span> mysql

mysql <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-P</span> <span class="token number">4000</span> <span class="token parameter variable">-u</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> mysql<span class="token punctuation">;</span>

<span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> authentication_string<span class="token operator">=</span>password<span class="token punctuation">(</span><span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token keyword">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>

flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function c(o,p){return n(),a("div",null,l)}const u=s(i,[["render",c],["__file","20220104.html.vue"]]);export{u as default};
