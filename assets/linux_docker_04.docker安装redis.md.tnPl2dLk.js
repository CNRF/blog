import{_ as s,o as n,c as a,R as p}from"./chunks/framework.SqDegG6f.js";const k=JSON.parse('{"title":"docker安装redis","description":"","frontmatter":{"title":"docker安装redis","tags":["docker","redis"],"categories":["docker","redis"]},"headers":[],"relativePath":"linux/docker/04.docker安装redis.md","filePath":"linux/docker/04.docker安装redis.md","lastUpdated":1704262757000}'),e={name:"linux/docker/04.docker安装redis.md"},l=p(`<h2 id="查询redis镜像" tabindex="-1">查询redis镜像 <a class="header-anchor" href="#查询redis镜像" aria-label="Permalink to &quot;查询redis镜像&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装redis" tabindex="-1">安装redis <a class="header-anchor" href="#安装redis" aria-label="Permalink to &quot;安装redis&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取redis镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis:7.0.9</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="启动镜像" tabindex="-1">启动镜像 <a class="header-anchor" href="#启动镜像" aria-label="Permalink to &quot;启动镜像&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-p </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:6379</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--privileged=true </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/redis/redis.conf:/etc/redis/redis.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/redis/data:/data</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redis:7.0.9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/redis/redis.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--appendonly </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-port=6379/tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>命令解释说明：</p><p><strong>-p 6379:6379</strong> 端口映射：前表示主机部分，：后表示容器部分。</p><p><strong>--name dockerredis</strong> 指定该容器名称，查看和进行操作都比较方便。</p><p><strong>-v</strong> 挂载目录，规则与端口映射相同。</p><p>为什么需要挂载目录：个人认为docker是个沙箱隔离级别的容器，这个是它的特点及安全机制，不能随便访问外部（主机）资源目录，所以需要这个挂载目录机制。</p><p><strong>-d redis</strong> 表示后台启动redis</p><p><strong>redis-server /etc/redis/redis.conf</strong> 以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录/usr/local/docker/redis.conf</p><h2 id="redis-conf默认配置" tabindex="-1">redis.conf默认配置 <a class="header-anchor" href="#redis-conf默认配置" aria-label="Permalink to &quot;redis.conf默认配置&quot;">​</a></h2><div class="language-conf vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># redis.conf</span></span>
<span class="line"><span>protected-mode no</span></span>
<span class="line"><span>port 6379</span></span>
<span class="line"><span>tcp-backlog 511</span></span>
<span class="line"><span>timeout 0</span></span>
<span class="line"><span>tcp-keepalive 300</span></span>
<span class="line"><span>daemonize no</span></span>
<span class="line"><span>supervised no</span></span>
<span class="line"><span>pidfile /var/run/redis_6379.pid</span></span>
<span class="line"><span>loglevel notic</span></span>
<span class="line"><span>logfile &quot;&quot;</span></span>
<span class="line"><span>databases 16</span></span>
<span class="line"><span>always-show-logo yes</span></span>
<span class="line"><span>save 900 1</span></span>
<span class="line"><span>save 300 10</span></span>
<span class="line"><span>save 60 10000</span></span>
<span class="line"><span>stop-writes-on-bgsave-error yes</span></span>
<span class="line"><span>rdbcompression yes</span></span>
<span class="line"><span>rdbchecksum yes</span></span>
<span class="line"><span>dbfilename dump.rdb</span></span>
<span class="line"><span>rdb-del-sync-files no</span></span>
<span class="line"><span>dir ./</span></span>
<span class="line"><span>replica-serve-stale-data yes</span></span>
<span class="line"><span>replica-read-only yes</span></span>
<span class="line"><span>repl-diskless-sync no</span></span>
<span class="line"><span>repl-diskless-sync-delay 5</span></span>
<span class="line"><span>repl-diskless-load disabled</span></span>
<span class="line"><span>repl-disable-tcp-nodelay no</span></span>
<span class="line"><span>replica-priority 100</span></span>
<span class="line"><span>acllog-max-len 128</span></span>
<span class="line"><span>lazyfree-lazy-eviction no</span></span>
<span class="line"><span>lazyfree-lazy-expire no</span></span>
<span class="line"><span>lazyfree-lazy-server-del no</span></span>
<span class="line"><span>replica-lazy-flush no</span></span>
<span class="line"><span>lazyfree-lazy-user-del no</span></span>
<span class="line"><span>oom-score-adj no</span></span>
<span class="line"><span>oom-score-adj-values 0 200 800</span></span>
<span class="line"><span>appendonly no</span></span>
<span class="line"><span>appendfilename &quot;appendonly.aof&quot;</span></span>
<span class="line"><span>appendfsync everysec</span></span>
<span class="line"><span>no-appendfsync-on-rewrite no</span></span>
<span class="line"><span>auto-aof-rewrite-percentage 100</span></span>
<span class="line"><span>auto-aof-rewrite-min-size 64mb</span></span>
<span class="line"><span>aof-load-truncated yes</span></span>
<span class="line"><span>aof-use-rdb-preamble yes</span></span>
<span class="line"><span>lua-time-limit 5000</span></span>
<span class="line"><span>slowlog-log-slower-than 10000</span></span>
<span class="line"><span>slowlog-max-len 128</span></span>
<span class="line"><span>latency-monitor-threshold 0</span></span>
<span class="line"><span>notify-keyspace-events &quot;&quot;</span></span>
<span class="line"><span>hash-max-ziplist-entries 512</span></span>
<span class="line"><span>hash-max-ziplist-value 64</span></span>
<span class="line"><span>list-max-ziplist-size -2</span></span>
<span class="line"><span>list-compress-depth 0</span></span>
<span class="line"><span>set-max-intset-entries 512</span></span>
<span class="line"><span>zset-max-ziplist-entries 128</span></span>
<span class="line"><span>zset-max-ziplist-value 64</span></span>
<span class="line"><span>hll-sparse-max-bytes 3000</span></span>
<span class="line"><span>stream-node-max-bytes 4096</span></span>
<span class="line"><span>stream-node-max-entries 100</span></span>
<span class="line"><span>activerehashing yes</span></span>
<span class="line"><span>client-output-buffer-limit normal 0 0 0</span></span>
<span class="line"><span>client-output-buffer-limit replica 256mb 64mb 60</span></span>
<span class="line"><span>client-output-buffer-limit pubsub 32mb 8mb 60</span></span>
<span class="line"><span>hz 10</span></span>
<span class="line"><span>dynamic-hz yes</span></span>
<span class="line"><span>aof-rewrite-incremental-fsync yes</span></span>
<span class="line"><span>jemalloc-bg-thread yes</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,15),i=[l];function r(c,t,d,b,h,o){return n(),a("div",null,i)}const m=s(e,[["render",r]]);export{k as __pageData,m as default};
