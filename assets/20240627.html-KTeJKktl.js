import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e as i}from"./app-sZwCoPd_.js";const s={},l=i(`<h1 id="gitlab报错维护" tabindex="-1"><a class="header-anchor" href="#gitlab报错维护" aria-hidden="true">#</a> gitlab报错维护</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token parameter variable">-f</span> /var/log/gitlab/gitlab-rails/production.log
<span class="token function">vim</span> /opt/gitlab/embedded/service/gitlab-rails/app/models/project.rb
<span class="token builtin class-name">cd</span>
gitlab-rake cache:clear
gitlab-ctl reconfigure
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Project &lt; ApplicationRecord
  def container_registry_enabled
    # 如果不需要启用容器注册表，默认返回false
    false
  end
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[l];function t(r,c){return a(),n("div",null,d)}const b=e(s,[["render",t],["__file","20240627.html.vue"]]);export{b as default};
