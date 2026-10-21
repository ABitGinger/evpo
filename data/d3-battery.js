/* 模块三：动力储能装置（讲义 01 · 第三章） */
(function () {
  var I = window.EV.items, C = window.EV.cards;
  var S = "01 结构与电池";

  I.push({
    id: "b1", m: "batt", t: "动力储能装置的定义与范围", s: 2,
    tag: "储能装置 蓄电池 超级电容 飞轮 燃料电池 定义",
    src: S + " · P60",
    b: `<p>定义：在车上安装的<b>能储存电能的装置</b>，包括各类蓄电池、超级电容、高速飞轮和燃料电池等<b>或其组合</b>。</p>
<p>意义：提高性价比不仅为电动汽车发展提供前提，也为<b>削峰填谷</b>提高电能利用率打下基础。</p>`
  });

  I.push({
    id: "b2", m: "batt", t: "电池的三大类与化学电池的四个分类维度", s: 3,
    tag: "生物电池 物理电池 化学电池 酸性 碱性 中性 有机电解液 一次电池 二次电池 贮备电池 燃料电池",
    src: S + " · P61–62",
    b: `<p><b>按反应原理分三大类</b>：</p>
<ul>
<li><b>生物电池</b>：酶电池、微生物电池、生物太阳电池；</li>
<li><b>物理电池</b>：利用光、热、物理吸附发电，如超级电容、太阳能电池、飞轮、核能、温差电池；</li>
<li><b>化学电池</b>：化学反应产能转电能（车用主力）。</li>
</ul>
<p><b>化学电池的三个细分维度</b></p>
<div class="tw"><table>
<thead><tr><th>维度</th><th>类别</th></tr></thead>
<tbody>
<tr><td>按电解液</td><td><b>酸性</b>（硫酸水溶液，如铅酸）· <b>碱性</b>（KOH，如镍镉、镍氢）· <b>中性</b>（盐溶液，如锌锰干电池）· <b>有机电解液</b>（锂电池、锂离子）</td></tr>
<tr><td>按正负极材料</td><td>锌系列、镍系列、锂系列（锂离子/锂锰/聚合物锂/磷酸铁锂）、二氧化锰系列、铅系列、空气系列（锌空气、铝空气）</td></tr>
<tr><td>按特征功能</td><td><b>一次电池</b>（不可充电原电池，电解质不流动即干电池）· <b>二次电池</b>（可充电蓄电池，车用主力）· <b>贮备电池</b>（激活电池）· <b>燃料电池</b>（连续电池）</td></tr>
</tbody></table></div>`
  });

  I.push({
    id: "b3", m: "batt", t: "化学电池的四大组成", s: 3,
    tag: "电极 电解质 隔膜 外壳 阳极 阴极 氧化 还原",
    src: S + " · P63",
    b: `<div class="kv">
<div><span class="k">电极</span><span class="v">活性物质 + 导电骨架；内部阴/阳极对应外部正/负极。<b>阳极氧化</b>（从负极输出电子）→ 外电路 → 正极；<b>阴极还原</b></span></div>
<div><span class="k">电解质</span><span class="v">在两极间传递带电离子；要求比电导高、电压降小、化学性质稳定；分液体/固体</span></div>
<div><span class="k">隔膜</span><span class="v">两极间绝缘层，<b>防内部短路与自放电</b>；对离子阻力小、对电子是良绝缘体</span></div>
<div><span class="k">外壳</span><span class="v">盛放保护；要求机械强度、耐振、耐冲击、耐腐蚀、化学稳定</span></div>
</div>`
  });

  I.push({
    id: "b4", m: "batt", t: "电池串、并、复联的电压·内阻·电流", s: 3,
    tag: "串联 并联 复联 内阻 开路电压 电流计算",
    src: S + " · P64",
    b: `<p>设单体开路电压 <i>U</i>、内阻 <i>R</i><sub>i</sub>，负载 <i>R</i>：</p>
<div class="fm"><div class="eq"><b>串联（n 个）</b>：<i>U</i><sub>组</sub> = <i>nU</i>，<i>R</i><sub>总</sub> = <i>nR</i><sub>i</sub>，
<i>I</i> = <span class="fr"><b><i>nU</i></b><u><i>R</i> + <i>nR</i><sub>i</sub></u></span></div>
<div class="note">串联想提电压；内阻随个数线性增大。</div></div>
<div class="fm"><div class="eq"><b>并联（n 个）</b>：<i>U</i><sub>组</sub> = <i>U</i>，<i>R</i><sub>总</sub> = <i>R</i><sub>i</sub> / <i>n</i>，
<i>I</i> = <span class="fr"><b><i>U</i></b><u><i>R</i> + <i>R</i><sub>i</sub>/<i>n</i></u></span></div>
<div class="note">并联不提电压，只降内阻、提电流能力。</div></div>
<div class="fm"><div class="eq"><b>复联（m 并 → n 串）</b>：<i>U</i><sub>组</sub> = <i>nU</i>，<i>R</i><sub>总</sub> = <i>nR</i><sub>i</sub>/<i>m</i>，
<i>I</i> = <span class="fr"><b><i>nU</i></b><u><i>R</i> + <i>nR</i><sub>i</sub>/<i>m</i></u></span></div>
<div class="note">组合时须选<b>同系列、同规格、性能尽可能一致</b>的单体。</div></div>`
  });

  I.push({
    id: "b5", m: "batt", t: "放电与充电的术语体系", s: 3,
    tag: "DOD 放电深度 时率 倍率 恒流 恒压 涓流 脉冲 记忆效应 SOC",
    src: S + " · P65–67",
    b: `<p><b>五种放电方式</b>：工况放电、倍率放电、深度放电（50% 或更大容量释放）、恒流放电、恒功率放电。</p>
<div class="kv">
<div><span class="k">DOD</span><span class="v">放电深度 = 实际放电容量 / 额定容量 × 100%</span></div>
<div><span class="k">放电率</span><span class="v"><b>时率</b>：以某放电电流放完额定容量所需<b>小时数</b>；<b>倍率</b>：规定时间放出额定容量所输出电流值与额定值的<b>倍数</b></span></div>
<div><span class="k">SOC</span><span class="v">荷电状态 = 剩余容量 / 全荷电（额定）容量 × 100%，为充放电综合参数</span></div>
</div>
<p><b>四种充电方式</b>：</p>
<div class="tw"><table>
<thead><tr><th>方式</th><th>做法 / 用途</th></tr></thead>
<tbody>
<tr><td>恒流充电</td><td>充电电流保持不变</td></tr>
<tr><td>恒压充电</td><td>保持充电器端电压不变</td></tr>
<tr><td>涓流充电</td><td>小电流补充自放电，维持完全充电状态</td></tr>
<tr><td>脉冲式快速充电</td><td>脉冲电流反复充放电，<b>消除记忆效应、恢复极板晶体结构、缩短充电时间</b></td></tr>
</tbody></table></div>
<div class="warn"><b>记忆效应</b>：未完全放电就充电，电池"记住"该放电平台并作为下次放电终点，容量逐渐变低。主要见于 <b>镍-镉电池</b>，其他电池较小或不存在。成因是内部<b>生长晶枝</b>；深度充放电可缓解但伤电池，<b>较好方法是脉冲充电</b>（抑制晶枝生长、溶解已生成晶枝）。</div>`
  });

  I.push({
    id: "b6", m: "batt", t: "容量的四个概念 与 能量/容量之别", s: 3,
    tag: "理论容量 额定容量 可用容量 剩余容量 能量 瓦时",
    src: S + " · P68–69",
    b: `<div class="kv">
<div><span class="k">理论容量</span><span class="v">活性物质完全被利用可释放的最高容量，由法拉第定律计算</span></div>
<div><span class="k">额定容量</span><span class="v">规定条件下测得、制造商给定的最低容量，<b>保证容量</b></span></div>
<div><span class="k">可用容量</span><span class="v">规定条件下从完全充电电池能释放的电量，<b>实际容量</b></span></div>
<div><span class="k">剩余容量</span><span class="v">使用后在指定放电率和温度下能释放的电量</span></div>
</div>
<div class="tip"><b>容量 ≠ 能量</b>：容量（Ah）表示能输出的<b>电量</b>；能量（Wh）= <b>容量 × 放电平均电压</b>，表示做功能力。</div>
<p>能量又分：总能量（寿命周期内输出总和）、充电能量（充入）、放电能量（放出）。</p>`
  });

  I.push({
    id: "b7", m: "batt", t: "比能量与比功率：四种表示法，为何难以兼顾", s: 3,
    tag: "质量能量密度 体积能量密度 质量功率密度 体积功率密度 Wh/kg W/kg",
    src: S + " · P70",
    b: `<div class="tw"><table>
<thead><tr><th>指标</th><th>定义</th><th>单位</th><th>决定什么</th></tr></thead>
<tbody>
<tr><td>质量能量密度</td><td>单位质量获取的电能</td><td class="tnum">Wh/kg</td><td rowspan="2"><b>一次充电续驶里程</b></td></tr>
<tr><td>体积能量密度</td><td>单位体积获取的电能</td><td class="tnum">Wh/L</td></tr>
<tr><td>质量功率密度</td><td>单位质量获取的输出功率</td><td class="tnum">W/kg</td><td rowspan="2"><b>加速、爬坡、最高车速</b></td></tr>
<tr><td>体积功率密度</td><td>单位体积获取的输出功率</td><td class="tnum">W/L</td></tr>
</tbody></table></div>
<p><b>为什么难以兼顾</b>：① 要产生大电流必须有<b>大量集电器</b>；② 要储存电能必须有<b>足够电极材料</b>——两者争体积与质量。同时质量还影响驱动力，体积受车内布置限制。</p>`
  });

  I.push({
    id: "b8", m: "batt", t: "电压、内阻、放电曲线与寿命", s: 2,
    tag: "开路电压 欧姆内阻 极化电阻 工作电压 终止电压 循环寿命 自放电",
    src: S + " · P71–74",
    b: `<div class="kv">
<div><span class="k">开路电压</span><span class="v">开路时两极电位差；取决于材料特性；存放期延长会因自放电下降（幅度不大），<b>下降很快说明内部短路或已衰退</b></span></div>
<div><span class="k">内阻</span><span class="v"><b>欧姆内阻</b>（电子/离子导电阻力+接触电阻，与电极结构和装配工艺有关）+ <b>极化电阻</b>（电极反应引起，与反应本质及材料有关）。内阻越小，压降越小，输出能量和功率越大</span></div>
<div><span class="k">工作电压</span><span class="v">放电时两极电位差 = 开路电压 − 内阻压降</span></div>
<div><span class="k">终止电压</span><span class="v">不宜继续放电的最低端电压。<b>低温或大电流放电</b>时极化大、活性物质利用不充分、电压下降快 → <b>终止电压定得低</b>；小电流时定得高</span></div>
<div><span class="k">寿命</span><span class="v">循环寿命 = 容量降到规定值时能承受的循环次数；<b>放电深度较浅有利于延长寿命</b></span></div>
</div>
<div class="fm"><div class="eq">自放电速率 <i>R</i><sub>Z</sub> = <span class="fr"><b><i>C</i><sub>0</sub> − <i>C</i><sub>T</sub></b><u><i>C</i><sub>0</sub> × <i>T</i></u></span> × 100%　　<span style="margin-left:14px">容量保持率 <i>R</i><sub>b</sub> = <span class="fr"><b><i>C</i><sub>T</sub></b><u><i>C</i><sub>0</sub></u></span> × 100%</div>
<div class="note"><i>C</i><sub>0</sub> 储存前容量；<i>C</i><sub>T</sub> 储存 T 时间后容量。自放电原因：电极腐蚀、活性物质溶解、歧化反应、活性物质钝化、内部材料分解变质。</div></div>`
  });

  I.push({
    id: "b9", m: "batt", t: "各类车用电池性能对比（★核心大表）", s: 3,
    tag: "铅酸 镍氢 锂离子 聚合物 磷酸铁锂 锌空气 铝空气 超级电容 飞轮 燃料电池 比能量 比功率",
    src: S + " · P76（表1-3）",
    b: `<div class="tw"><table>
<thead><tr><th>类型</th><th>单体电压<br>V</th><th>比能量<br>Wh/kg</th><th>比功率<br>W/kg</th><th>寿命/次</th><th>优点</th><th>缺点</th></tr></thead>
<tbody>
<tr><td>铅酸</td><td class="tnum">2.0</td><td class="tnum">35~40</td><td class="tnum">50</td><td class="tnum">400~800</td><td>成熟、原料丰富、便宜、温度特性好</td><td>比能量/比功率低、寿命短、铅污染</td></tr>
<tr><td>镍氢</td><td class="tnum">1.2</td><td class="tnum">55~70</td><td class="tnum">160</td><td class="tnum">600</td><td>放电倍率高、免维护</td><td>自放电高、单体电压低</td></tr>
<tr><td>锂离子</td><td class="tnum">3.6</td><td class="tnum">110</td><td class="tnum">300</td><td class="tnum">&gt;1000</td><td>比能量大、寿命长</td><td>成本高、需保护电路</td></tr>
<tr><td>聚合物锂</td><td class="tnum">3.8</td><td class="tnum">150</td><td class="tnum">315</td><td class="tnum">约 800</td><td>比能量大、可超薄化</td><td>成本高</td></tr>
<tr><td>磷酸铁锂</td><td class="tnum">3.2</td><td class="tnum">100</td><td class="tnum">—</td><td class="tnum">2000</td><td>寿命长、安全性好</td><td><b>体积大</b>（振实密度低）</td></tr>
<tr><td>锌空气</td><td class="tnum">—</td><td class="tnum">180~230</td><td class="tnum">小</td><td class="tnum">—</td><td>比能量大</td><td>比功率低</td></tr>
<tr><td>铝空气</td><td class="tnum">—</td><td class="tnum">350</td><td class="tnum">小</td><td class="tnum">长</td><td>比能量大、成本低</td><td>比功率低</td></tr>
<tr><td>超级电容</td><td class="tnum">—</td><td class="tnum">小</td><td class="tnum">1000</td><td class="tnum">&gt;1 万</td><td>比功率大、寿命超长</td><td>比能量小</td></tr>
<tr><td>高速飞轮</td><td class="tnum">—</td><td class="tnum">较小</td><td class="tnum">大</td><td class="tnum">长</td><td>比功率大、寿命长</td><td>比能量较小</td></tr>
<tr><td>燃料电池</td><td class="tnum">—</td><td class="tnum">—</td><td class="tnum">—</td><td class="tnum">—</td><td>寿命长、效率高、污染小、噪声低、可快速补能连续工作</td><td>制氢储氢成本与安全问题</td></tr>
</tbody></table></div>
<div class="tip">记忆抓手：<b>铅酸 2.0 / 镍氢 1.2 / 锂离子 3.6 / 聚合物 3.8 / 磷酸铁锂 3.2</b>——单体电压就是这五个数。</div>`
  });

  I.push({
    id: "b10", m: "batt", t: "铅酸蓄电池：定义、型号与反应", s: 3,
    tag: "铅酸 二氧化铅 稀硫酸 6DAW150 型号 放电 充电 硫化",
    src: S + " · P77–81",
    b: `<p><b>定义</b>：以<b>稀硫酸</b>为电解液、<b>二氧化铅</b>（PbO₂）作正极、<b>绒状铅</b>（Pb）作负极的酸性蓄电池。1859 年法国普兰特发明。</p>
<p><b>型号三段式</b>：① 串联单体数；② 用途与特征的中文拼音首字母；③ 额定容量。</p>
<div class="ex"><b>例</b> 6DAW150 = 6 个 2.0 V 单体串联成额定 <b>12 V</b>，用于电动车（D），干荷电式免维护（AW），额定容量 <b>150 Ah</b>。</div>
<div class="fm"><div class="eq">Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> &nbsp;<span style="opacity:.6">⇌</span>&nbsp; 2PbSO<sub>4</sub> + 2H<sub>2</sub>O</div>
<div class="note">向右为<b>放电</b>：电解液水增多、硫酸减少、浓度下降 → 可用<b>测电解液密度</b>判断荷电状态。向左为充电。</div></div>
<p><b>构造</b>：正负极板（栅架支承活性物质并导电）、隔板、电解液、电池盖、外壳、联条、加液螺塞、通气孔。</p>
<div class="warn"><b>容量影响因素（4 条）</b>：① 极板构造——薄极板、多片数、高孔隙率→面积与活性物质多；② 放电电流——避免长期大电流，防极板孔隙被硫酸铅阻塞；③ 电解液温度——最佳 <b>30~40 ℃</b>（降粘度、增流动性与溶解度）；④ 电解液密度——过低离子少，过高渗透力降、粘度与内阻增大、<b>硫化极板</b>。</div>`
  });

  I.push({
    id: "b11", m: "batt", t: "铅酸电池的改进与使用管理", s: 2,
    tag: "免维护 密封 板栅合金 木素 炭黑 初充电 均衡充电 快速充电 回收",
    src: S + " · P83–84",
    b: `<p><b>结构与工艺改进</b>：① 免维护密封化（正极 O₂ 移向负极与 H₂ 复合降内压，改进安全阀）；② 改进板栅合金（铅锑合金、填 SiO₂ 降晶间腐蚀）；③ 负极改进（木素添加剂 + 均布炭黑提高充电接受能力）；④ 改进装配工艺（控制松紧度、减小反应阻抗）。</p>
<p><b>使用管理</b>：新电池灌电解液后经<b>二段充电法或恒流充电法</b>初充电；使用中采用均衡充电或恒压充电；快速充电电流控制在正常充电电流的 <b>1.5~3 倍</b>，单体升到 <b>2.4 V</b> 左右改回正常电流；定期检查液面高度与硫酸密度、补蒸馏水；避免亏电存放与过充过放；报废后<b>集中回收</b>。</p>`
  });

  I.push({
    id: "b12", m: "batt", t: "锂离子电池：摇椅式机理与三类锂电", s: 3,
    tag: "锂离子 摇椅式 钴酸锂 石墨 脱嵌 聚合物 磷酸铁锂 锂空气",
    src: S + " · P85–90",
    b: `<p>锂电极电位最负（<span class="n">−3.045 V</span>），故比能量大、放电电压平稳、电压高、工作温度宽（−40~50 ℃）、寿命长。</p>
<p><b>锂离子电池</b>：正极钴酸锂 LiCoO₂（也可镍酸锂/锰酸锂），负极为石墨等锂碳化合物，电解质为有机溶剂溶有锂盐。以<b>脱嵌可逆反应</b>替代氧化-还原反应，Li⁺ 像摇椅在正负极间来回嵌入脱出——"<b>摇椅式电池</b>"。</p>
<div class="fm"><div class="eq">正极：LiCoO<sub>2</sub> <span style="opacity:.6">⇌</span> Li<sub>1−x</sub>CoO<sub>2</sub> + <i>x</i>Li<sup>+</sup> + <i>x</i>e<sup>−</sup>　　（充电脱出、放电嵌回）</div>
<div class="note">负极：Li<sub>x</sub>C<sub>6</sub> ⇌ C<sub>6</sub> + xLi⁺ + xe⁻（充电嵌入、放电脱出）。方向记法：<b>充电 Li⁺ 从正极脱出嵌入负极</b>，放电反之。</div></div>
<div class="kv">
<div><span class="k">聚合物锂</span><span class="v">原理同上，差别在电解质：<b>干态/胶态柔性固态聚合物</b>。单体由 5 层总厚约 0.1 mm 薄层叠成；小型化、超薄、轻量、比能量高、安全性好、自放电小、形状可定制</span></div>
<div><span class="k">磷酸铁锂</span><span class="v">正极 LiFePO₄（橄榄石结构，铝箔集流），负极碳/石墨（铜箔），聚合物隔膜只过 Li⁺ 不过电子。优点：安全、环保、材料易得、寿命长、充放电与温度特性好；<b>缺点：振实密度低→体积大</b></span></div>
<div><span class="k">锂空气</span><span class="v">负金属锂、正空气氧，理论比能量 <b>5210 Wh/kg</b>（含氧）或 <b>11140 Wh/kg</b>（不含氧）。致命缺陷：生成物 Li₂O 在正极堆积阻断电解液与空气接触→放电停止；对策：负极侧有机电解液 + 正极侧水性电解液，中间设只透 Li⁺ 的固体电解质膜，生成 LiOH 易溶</span></div>
</div>`
  });

  I.push({
    id: "b13", m: "batt", t: "镍氢蓄电池：反应、优点与三条缺点", s: 3,
    tag: "镍氢 MH Ni(OH)2 KOH 储氢合金 自放电 1.2V 成本",
    src: S + " · P91–93",
    b: `<p>负极<b>金属氢化物 MH</b>、正极<b>氢氧化镍 Ni(OH)₂</b>、电解液 <b>KOH</b>。</p>
<div class="fm"><div class="eq">正极：Ni(OH)<sub>2</sub> + OH<sup>−</sup> <span style="opacity:.6">⇌</span> NiOOH + H<sub>2</sub>O + e<sup>−</sup></div>
<div class="eq" style="margin-top:4px">负极：M + H<sub>2</sub>O + e<sup>−</sup> <span style="opacity:.6">⇌</span> MH + OH<sup>−</sup></div>
<div class="note">总反应：Ni(OH)₂ + M ⇌ NiOOH + MH —— <b>充电由左向右</b>（生成 NiOOH 与 MH），<b>放电由右向左</b>。</div></div>
<p><b>优点</b>：能量密度、功率密度均高于铅酸与镍镉；循环寿命在实用车用电池中较高；快速充电与深度放电性能好、充放电效率高；<b>无重金属污染、全密封免维护</b>。</p>
<p><b>缺点（3 条）</b>：① 成本高，约为同容量铅酸的 <b>5~8 倍</b>；② 单体电压低（<b>1.2 V</b>）；③ <b>自放电损耗大</b>，对环境温度敏感、电池组热管理要求高。</p>`
  });

  I.push({
    id: "b14", m: "batt", t: "钠硫 / 锌空气 / 铝空气电池", s: 2,
    tag: "钠硫 高温 ABB 锌空气 铝空气 机械更换 8100",
    src: S + " · P94–97",
    b: `<div class="kv">
<div><span class="k">钠硫</span><span class="v">需<b>高温</b>工作。德国 ABB B240K：重 17.5 kg、蓄电 19.2 kWh、比能量 <b>109 Wh/kg</b>、循环寿命 1200 次，装车试验创 <b>2300 km</b> 无故障记录。可兼作电网<b>削峰填谷</b>供电</span></div>
<div><span class="k">锌空气</span><span class="v">锌为负极、空气氧为正极、KOH 电解液；反应生成 ZnO。放电中锌板氧化失效，再充电极慢且需铂/银催化剂 → 实用上采用 <b>3 min 机械式整体更换</b>（锌板/锌粒+电解质），回收 ZnO 循环。优点：比能量大、性能稳定、安全、成本低；缺点：<b>对空气湿度敏感、比功率低</b>；阻隔空气即停止反应、不自放电</span></div>
<div><span class="k">铝空气</span><span class="v">负极为含 Mn 0.4~0.8%、Ga 0.04% 及微量 Fe 的铝合金，KOH/NaOH 电解液；理论比能量高达 <b>8100 Wh/kg</b>，实际已达 <b>350 Wh/kg</b>。优点：比能量大、环保、成本低、寿命长、活化稳定不钝化；缺点：<b>比功率低、充放电慢、电压滞后、自放电大、需热管理</b>，最好与超级电容配合</span></div>
</div>`
  });

  I.push({
    id: "b15", m: "batt", t: "超级电容：原理、公式、分类与管理系统", s: 3,
    tag: "双电层 电化学电容 C=εS/d E=CU²/2 比功率 双向DC/DC 均衡",
    src: S + " · P98–103",
    b: `<p>按结构原理应称<b>电化学双电层电容</b>，介于传统电解电容与蓄电池之间；极限容量提高 3~4 个数量级，可达 <b>10³ F/g</b> 以上；比功率 <b>&gt;1 kW/kg</b>；循环寿命上万次（极限 10 万次）。充放电过程<b>无化学反应、无机械运动</b>。</p>
<div class="fm"><div class="eq"><i>C</i> = <span class="fr"><b><i>q</i></b><u><i>U</i><sub>电极</sub> − <i>U</i><sub>电解液</sub></u></span> = <span class="fr"><b>ε<i>S</i></b><u><i>d</i></u></span>　　<i>E</i> = <span class="fr"><b>1</b><u>2</u></span><i>CU</i><sup>2</sup></div>
<div class="note"><i>d</i> 双电层厚度仅纳米级，<i>S</i> 取多孔碳高比表面积 → 电容量极大。<b>E ∝ U²</b>，所以提电压对比能量最有效。</div></div>
<p><b>分类</b>：按电极材料——碳电极双电层（面积大、便宜，但稳定性与导通性随面积增大而降）、金属氧化物（电导率高两个数量级、比功率极高，但贵，多军用）、有机聚合物（实验室阶段）、<b>碳镍体系混合型</b>（性价比最好）。按电解质——有机电解液（可提单体电压提比能量，但内阻高、比功率降）/ 水基电解液（内阻低、比功率高、工艺简单，但单体电压低）。</p>
<p><b>管理系统四功能</b>：① 充放电<b>均衡控制</b>（单体仅 1~3.0 V，串联需均衡，被动/主动）；② 状态采集与通信（电压、电流、温度、SOC、单体差异度）；③ 故障检测与失效报警（过压/欠压/不均衡/过温/泄漏/短断路）；④ <b>双向 DC/DC</b>（放电升压、充电降压，限压限功率防过充放）。</p>
<div class="warn">超级电容最大不足是<b>比能量很小</b>（约 2.1 Wh/kg、2.7 Wh/L），只能作<b>辅助能源</b>与蓄电池配合。</div>`
  });

  I.push({
    id: "b16", m: "batt", t: "飞轮储能器：能量公式与两大难题", s: 2,
    tag: "飞轮 J ω 碳纤维 磁悬浮 真空 陀螺力矩 失效",
    src: S + " · P104–106",
    b: `<div class="fm"><div class="eq"><i>E</i> = <span class="fr"><b>1</b><u>2</u></span><i>Jω</i><sup>2</sup></div>
<div class="note">提高 ω 使 E 按<b>平方</b>增长，比增大 J 更有效 → 采用高达 <b>200 000 r/min</b> 的超高速飞轮。增大直径/质量虽可增 J，但受材料极限强度与离心力限制。</div></div>
<p><b>结构要点</b>：永磁电动-发电机（高功率密度）、<b>碳纤维复合材料</b>橄榄型飞轮（应力分布均衡）、<b>磁悬浮</b>高速轴承、<b>真空</b>密封腔。</p>
<p><b>优点</b>：大电流放电、比功率超高、效率高、无污染、可快速充电、免维护寿命长。<br><b>缺点</b>：比能量小；两大难题——① <b>陀螺力矩</b>（转弯/颠簸产生陀螺进动力矩，影响操稳；可正反两组抵消，但带来布置与效率问题）；② <b>失效时能量瞬间释放</b>（可化整为零、转子边缘特殊设计先脱落）。</p>`
  });

  I.push({
    id: "b17", m: "batt", t: "燃料电池原理与五大类", s: 3,
    tag: "燃料电池 PEMFC AFC SOFC PAFC MCFC 温度 电解质",
    src: S + " · P107–109",
    b: `<p>定义：将燃料与氧化剂的化学能经<b>电化学反应直接</b>转化为电能的装置。</p>
<div class="fm"><div class="eq">阳极：H<sub>2</sub> → 2H<sup>+</sup> + 2e<sup>−</sup>　　阴极：½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O</div>
<div class="note">总反应 H₂ + ½O₂ → H₂O，即电解水的逆过程；电子经外电路形成电流，只要供氢供氧即可连续输出电能。</div></div>
<div class="tw"><table>
<thead><tr><th>类型</th><th>电解质 / 工作温度</th><th>备注</th></tr></thead>
<tbody>
<tr><td><b>质子交换膜 PEMFC</b></td><td>质子交换膜，温度适宜</td><td>效率高、紧凑、轻、比功率大、无腐蚀、不受 CO₂ 影响、燃料来源广 → <b>最有希望作汽车动力源</b></td></tr>
<tr><td>碱性 AFC</td><td>KOH 类碱性溶液，温度低</td><td>可用镍作催化剂</td></tr>
<tr><td>固体氧化物 SOFC</td><td>约 <b>1000 ℃</b></td><td>燃料为碳氢化合物或 CO</td></tr>
<tr><td>磷酸型 PAFC</td><td>磷酸，约 <b>200 ℃</b></td><td>可不用纯氢</td></tr>
<tr><td>熔融碳酸盐 MCFC</td><td><b>650~700 ℃</b></td><td>净化煤气或天然气</td></tr>
</tbody></table></div>
<p>其他分类：按工作温度分高/中/低温；按燃料来源分直接氢气、间接（甲烷/甲醇重整）、再生水分解。</p>
<div class="tip">后三类（SOFC/PAFC/MCFC）主要适于<b>电厂发电</b>，车上用 PEMFC。</div>`
  });

  I.push({
    id: "b18", m: "batt", t: "能量管理与复合储能（储能装置互补）", s: 3,
    tag: "能量管理 电池管理系统 BMS 复合储能 削峰填谷 双向DC/DC 10倍",
    src: S + " · P110–112",
    b: `<p><b>系统构成</b>：硬件（控制单元、传感器、声光显示、执行元件）+ 软件（信号分析运算、优化决策）。分两大部分：</p>
<div class="kv">
<div><span class="k">能源协调管理</span><span class="v">按实际工况动力需求，结合主/辅两种动力源特性与储能状况，进行协调、能量分配与优化控制</span></div>
<div><span class="k">电池管理系统</span><span class="v">保证电池组在合理电压、电流、温度、SOC 下安全有效运行，避免过充过放；功能含参数检测、信息采集、运算分析、充放电能量管理、温度热管理、安全管理、状态显示、故障诊断报警</span></div>
</div>
<p><b>为什么要复合储能</b>：加速爬坡的峰值功率与低匀速平路所需功率相差可达 <b>10 倍</b>；回馈制动又要回收瞬间大电流；提续驶里程还要高比能量——单一装置无法同时满足。</p>
<div class="tip"><b>组合原则</b>：高比能量 + 较低比功率的<b>蓄电池</b>（或锌/铝空气电池）+ 高比功率 + 低比能量的<b>超级电容</b>，<b>并联</b>连接，中间最好经<b>双向 DC/DC</b>，以发挥对负载的均衡作用。三种工况能量流向：低匀速平路（主能源供驱动）→ 加速爬坡（两能源共同供）→ 降速制动（回馈至高比功率能源）。</div>`
  });

  C.push(
    { id: "bc1", m: "batt", q: "电池串/并/复联后的电压、内阻、电流公式？", a: "串联 n 个：U 组 = nU，R 总 = nRᵢ；并联 n 个：U 不变，R 总 = Rᵢ/n；复联（m 并 n 串）：U 组 = nU，R 总 = nRᵢ/m。电流均为 I = U 组 /(R + R 总)。" },
    { id: "bc2", m: "batt", q: "容量与能量的区别？", a: "容量（Ah）表示能输出的<b>电量</b>；能量（Wh）表示做功能力，<b>= 容量 × 放电平均电压</b>。" },
    { id: "bc3", m: "batt", q: "为什么比能量与比功率难以兼顾？", a: "① 产生大电流需大量集电器；② 储存电能需足够电极材料——两者在质量与体积上互相挤占。" },
    { id: "bc4", m: "batt", q: "终止电压在什么情况下定得低？", a: "<b>低温或大电流放电</b>时：电极极化大、活性物质难充分利用、电压下降快，故终止电压定得低；小电流放电时定得高。" },
    { id: "bc5", m: "batt", q: "记忆效应的成因、主要电池与最佳对策？", a: "成因是电池内部<b>生长晶枝</b>；主要见于<b>镍-镉电池</b>；最佳对策是<b>脉冲充电</b>（抑制晶枝生长并溶解已生成晶枝），深度充放电虽可缓解但伤电池。" },
    { id: "bc6", m: "batt", q: "锂离子电池为什么叫“摇椅式电池”？", a: "充放电靠 Li⁺ 在正极（LiCoO₂）与负极（锂碳）之间来回<b>嵌入/脱出</b>，如摇椅往复，以脱嵌可逆反应替代氧化-还原反应。" },
    { id: "bc7", m: "batt", q: "磷酸铁锂电池的主要缺点？", a: "<b>振实密度低导致体积较大</b>。优点是安全、环保、材料易得、寿命长（2000 次）、充放电与温度特性好。" },
    { id: "bc8", m: "batt", q: "镍氢电池的三条缺点？", a: "① 成本高（约为同容量铅酸的 5~8 倍）；② 单体电压低（1.2 V）；③ 自放电损耗大、对温度敏感、热管理要求高。" },
    { id: "bc9", m: "batt", q: "超级电容的储能公式与两个关键结论？", a: "C = εS/d，E = ½CU²。① d 为纳米级、S 极大 → 电容量极大；② E ∝ U² → <b>提高单体电压是提升比能量最有效的途径</b>（有机电解液即为此，但内阻高、比功率下降）。" },
    { id: "bc10", m: "batt", q: "高速飞轮的两大难题？", a: "① <b>陀螺力矩</b>——转弯/颠簸时产生陀螺进动力矩影响操纵稳定性；② <b>失效时能量瞬间释放</b>——机械能瞬间释放破坏车辆。" },
    { id: "bc11", m: "batt", q: "最有希望成为车用动力源的燃料电池是哪种？为什么？", a: "<b>质子交换膜燃料电池（PEMFC）</b>：效率高、结构紧凑、重量轻、比功率大、无腐蚀性、不受 CO₂ 影响、工作温度适宜、燃料来源广。" },
    { id: "bc12", m: "batt", q: "为什么需要蓄电池 + 超级电容复合储能？", a: "加速爬坡峰值功率与匀速平路功率相差可达 10 倍，回馈制动需回收瞬间大电流，续驶里程又需高比能量；单一储能无法兼顾，故用高比能量蓄电池 + 高比功率超级电容并联（经双向 DC/DC）互补。" },
    { id: "bc13", m: "batt", q: "铅酸电池型号 6DAW150 各段含义？", a: "6 个 2.0 V 单体串联 → 额定 12 V；D = 电动车用；AW = 干荷电式免维护；150 = 额定容量 150 Ah。" }
  );
})();
