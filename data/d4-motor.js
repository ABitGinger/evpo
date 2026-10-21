/* 模块四：驱动电机及其调速控制系统（讲义 02 · 第四章） */
(function () {
  var I = window.EV.items, C = window.EV.cards;
  var S = "02 电机";
  var L = function (num, den) {
    return '<span class="fr"><b>' + num + "</b><u>" + den + "</u></span>";
  };

  I.push({
    id: "m1", m: "motor", t: "四类驱动电机的特点对比（★首考）", s: 3,
    tag: "直流 交流 永磁无刷 开关磁阻 对比 换向火花 矢量控制 转矩脉动",
    src: S + " · P4",
    b: `<div class="tw"><table>
<thead><tr><th>类型</th><th>优点</th><th>缺点</th></tr></thead>
<tbody>
<tr><td><b>直流电机</b></td><td>控制简单、成本低、技术成熟、调速性能好、过载能力强</td><td>有<b>电刷</b>：换向火花、电刷易磨损、需定期维护、结构复杂</td></tr>
<tr><td><b>交流电机</b></td><td>坚固耐用、效率高、体积小、<b>免维护</b>、过载能力强、便宜</td><td>控制器需 DC→AC 逆变 + <b>矢量控制</b>变频调速，控制线路复杂、价格高</td></tr>
<tr><td><b>永磁无刷电机</b></td><td>永磁励磁 → 效率与<b>功率密度</b>大幅提高；调速范围广、起动转矩大、免维护、寿命长</td><td>控制器复杂、成本较高；<b>永磁体受温度影响大</b>，可靠性不足、功率受限</td></tr>
<tr><td><b>开关磁阻电机</b></td><td>结构简单、坚固可靠、成本低、调速范围宽、起动力矩大、过载能力强、效率较高、便于发电回馈与电磁制动；<b>特别适于重载起步、频繁起停、路况多变</b></td><td><b>转矩脉动大</b> → 振动与噪声大（现已有解法）</td></tr>
</tbody></table></div>
<div class="tip"><b>术语约定</b>：仅电动功能称"电动机"；兼有电动与发电两功能简称"电机"。</div>`
  });

  I.push({
    id: "m2", m: "motor", t: "调速性能五个指标（含三个必背公式）", s: 3,
    tag: "机械特性 负载特性 调速范围 转速因子 静差率 调速效率 平滑性",
    src: S + " · P5–7",
    b: `<div class="kv">
<div><span class="k">机械特性</span><span class="v">转矩 T 与转速 n 的关系 n=f(T)。<b>斜率大 = 特性软</b>（转矩随转速变化大）；斜率小 = 特性硬</span></div>
<div><span class="k">负载特性</span><span class="v">负载转矩 T<sub>L</sub> 随转速 n 变化的特性关系</span></div>
<div><span class="k">调速范围 D</span><span class="v">D = n<sub>max</sub> / n<sub>min</sub></span></div>
<div><span class="k">转速因子 x</span><span class="v">x = n<sub>max</sub> / n<sub>base</sub>（基速通常即额定转速 n<sub>e</sub>）</span></div>
<div><span class="k">静差率 δ</span><span class="v">δ% = (n<sub>0</sub> − n<sub>e</sub>)/n<sub>0</sub> × 100%，即 Δn<sub>e</sub>/n<sub>0</sub>。特性越硬，δ 越小，相对稳定性越高</span></div>
<div><span class="k">调速效率</span><span class="v">η = P<sub>2</sub>/P<sub>1</sub> = P<sub>2</sub>/(P<sub>2</sub>+ΔP)</span></div>
<div><span class="k">平滑性</span><span class="v">有级（齿轮档位越多越平滑）vs 无级（纯电气控制）</span></div>
</div>
<div class="tip"><b>低速/高速调速的分界</b>：低于基速用<b>降压恒转矩</b>调速，高于基速用<b>弱磁恒功率</b>调速。</div>
<div class="warn"><b>转速因子必背</b>：永磁电机弱磁较难 <b>x = 2</b>；交流异步电机 <b>x = 4</b>；开关磁阻电机 <b>x = 6</b>。</div>`
  });

  I.push({
    id: "m3", m: "motor", t: "汽车对驱动系统的要求：稳省快宽足 + 八大条", s: 3,
    tag: "稳省快宽足 稳准快宽足 八大要求 峰值电流 电磁制动 跛脚回家",
    src: S + " · P11–27",
    b: `<p>数控机床伺服要求"<b>稳、准、快、宽、足</b>"；电动汽车把"准"换成"省"——<b>稳、省、快、宽、足</b>（稳定、节省电能、快速响应、宽调速范围、足够驱动力）。</p>
<ol>
<li><b>起动力矩大、过载能力强</b>（频繁起步、加速上坡短时过载）；</li>
<li><b>限制峰值电流</b>小于蓄电池最大放电允许电流；</li>
<li><b>调速范围宽</b>，且额定点附近效率高（可多级额定转速设计以简化传动）；</li>
<li><b>能正反转</b>（倒车不必切换倒档齿轮）；</li>
<li><b>能方便高效地发电回馈</b>（降速制动、下坡滑行回收动能）；</li>
<li><b>兼具电磁制动功能</b>（定转子电磁吸力直接制动，响应极快，减少机械制动频率、避免热衰退）；</li>
<li><b>调速响应快</b>；</li>
<li><b>运行平稳、可靠性高</b>，具故障容错，能"<b>跛脚回家</b>"避免交通堵塞。</li>
</ol>`
  });

  I.push({
    id: "m4", m: "motor", t: "四象限运行与再生制动", s: 3,
    tag: "四象限 正向电动 正向制动 反向电动 反向制动 再生制动",
    src: S + " · P14、P46–49",
    b: `<div class="tw"><table>
<thead><tr><th>象限</th><th>n</th><th>T</th><th>状态</th></tr></thead>
<tbody>
<tr><td>第 Ⅰ</td><td>+</td><td>+</td><td>正向电动</td></tr>
<tr><td>第 Ⅱ</td><td>+</td><td>−</td><td><b>正向制动（发电回馈）</b></td></tr>
<tr><td>第 Ⅲ</td><td>−</td><td>−</td><td>反向电动</td></tr>
<tr><td>第 Ⅳ</td><td>−</td><td>+</td><td>反向制动（发电回馈）</td></tr>
</tbody></table></div>
<div class="warn"><b>关键陷阱</b>：汽车<b>下坡时电机仍正转</b>，所以发电回馈制动发生在<b>第Ⅱ象限</b>，不是第Ⅳ象限（第Ⅳ是位能负载下放重物的反向回馈）。</div>
<p><b>三种制动</b>：能耗制动（电枢串耗能电阻）、反接制动（电源极性反接+串电阻）——二者<b>不宜用于能源受限的电动汽车</b>；应采用<b>再生发电制动</b>。正向回馈原理：降低电源电压使 |E<sub>a</sub>| &gt; |U|，I<sub>a</sub> 反向，转矩变制动转矩，UI<sub>a</sub> &lt; 0，电机向电源馈电。</p>`
  });

  I.push({
    id: "m5", m: "motor", t: "五类负载特性与汽车行驶阻力的对应", s: 3,
    tag: "恒功率 反抗性恒转矩 位能性恒转矩 二次方律 直线律 风阻 坡度",
    src: S + " · P16–25",
    b: `<div class="tw"><table>
<thead><tr><th>负载特性</th><th>关系</th><th>典型实例</th></tr></thead>
<tbody>
<tr><td><b>恒功率</b></td><td>P<sub>L</sub> 恒定，T<sub>L</sub> ∝ 1/n（双曲线）</td><td>高速行驶工况</td></tr>
<tr><td><b>反抗性恒转矩</b></td><td>T<sub>L</sub> 恒定（摩擦性），P ∝ n</td><td>起步、加速</td></tr>
<tr><td><b>位能性恒转矩</b></td><td>T<sub>L</sub> 大小方向均恒定</td><td>上下坡（近似）</td></tr>
<tr><td><b>二次方律</b></td><td>T<sub>L</sub> = K<sub>T</sub>n²，P ∝ n³（三次抛物线）</td><td>风机、水泵、螺旋桨；<b>空气阻力 F<sub>w</sub></b></td></tr>
<tr><td><b>直线律</b></td><td>T<sub>L</sub> ∝ n，P ∝ n²（粘滞摩擦）</td><td>—</td></tr>
</tbody></table></div>
<div class="fm"><div class="eq"><i>P</i><sub>L</sub> = <i>T</i><sub>L</sub>ω = <span class="fr"><b>2π<i>n</i></b><u>60</u></span><i>T</i><sub>L</sub> = <span class="fr"><b><i>n T</i><sub>L</sub></b><u>9.55</u></span></div>
<div class="note">恒功率 1/n；反抗性恒转矩 P∝n；二次方律 T∝n²、P∝n³；直线律 T∝n、P∝n²。</div></div>
<div class="tip"><b>结论</b>：汽车为<b>多变型混合特性负载</b>——低速以 F<sub>f</sub>、F<sub>i</sub>、F<sub>j</sub>（恒转矩类）为主，高速以 F<sub>w</sub>（二次方律）为主，故通用工业调速系统难以全面满足要求。</div>`
  });

  I.push({
    id: "m6", m: "motor", t: "直流电机：原理、结构、励磁四方式", s: 3,
    tag: "电磁力 F=Bli 电磁感应 e=Blv 主磁极 换向极 电枢 换向器 他励 并励 串励 复励",
    src: S + " · P26–35",
    b: `<p><b>原理</b>：电动——载流导体受电磁力 <i>F</i> = <i>Bli</i>（左手定则）产生转矩；发电——导体切割磁力线 <i>e</i> = <i>Blv</i>（右手定则）。同一台电机改变外部条件即可电动/发电互换。</p>
<p><b>结构</b>：定子（主磁极［极身+极掌+励磁绕组］、换向极［改善换向、减小火花］、机座、电刷装置）+ 转子（电枢铁心［0.5 mm 硅钢片］、电枢绕组、换向器）+ 气隙。</p>
<div class="tw"><table>
<thead><tr><th>励磁方式</th><th>接线</th><th>机械特性 / 用途</th></tr></thead>
<tbody>
<tr><td><b>他励</b></td><td>励磁与电枢电源分开，可分别控制 I<sub>f</sub>、I<sub>a</sub></td><td>线性好、稳定，调速范围宽，可再生制动；<b>电动汽车直流方案首选</b></td></tr>
<tr><td>并励</td><td>励磁绕组与电枢并联</td><td>特性与永磁直流电机相似</td></tr>
<tr><td>串励</td><td>励磁绕组与电枢串联</td><td>起动转矩大、恒功率调速范围宽，但<b>特性软、加速性能差</b></td></tr>
<tr><td>复励</td><td>并励+串励两个绕组</td><td>磁动势同向为积复励，反向为差复励</td></tr>
</tbody></table></div>
<div class="tip">并励、串励、复励通称<b>自励</b>。工程设想：起步用串励、其余工况用他励。</div>`
  });

  I.push({
    id: "m7", m: "motor", t: "他励直流电机三大公式与机械特性方程", s: 3,
    tag: "电枢电动势 电磁转矩 Ce CT 9.55 机械特性 斜率β 理想空载转速",
    src: S + " · P37–39",
    b: `<div class="fm"><div class="eq"><i>E</i><sub>a</sub> = <i>C</i><sub>e</sub>Φ<i>n</i> = <span class="fr"><b><i>pN</i></b><u>60<i>a</i></u></span>Φ<i>n</i>　　<i>T</i> = <i>C</i><sub>T</sub>Φ<i>I</i><sub>a</sub> = <span class="fr"><b><i>pN</i></b><u>2π<i>a</i></u></span>Φ<i>I</i><sub>a</sub></div>
<div class="note">E<sub>a</sub> ∝ Φn；T ∝ ΦI<sub>a</sub>。<b>C<sub>T</sub> = 9.55 C<sub>e</sub></b>（因 60/2π = 9.55）。p 极对数、N 总导体数、a 支路对数。</div></div>
<div class="fm"><div class="eq">电压平衡：<i>U</i> = <i>E</i><sub>a</sub> + (<i>R</i><sub>a</sub> + <i>R</i><sub>c</sub>)<i>I</i><sub>a</sub></div>
<div class="eq" style="margin-top:6px"><i>n</i> = <span class="fr"><b><i>U</i></b><u><i>C</i><sub>e</sub>Φ</u></span> − <span class="fr"><b>(<i>R</i><sub>a</sub>+<i>R</i><sub>c</sub>)</b><u><i>C</i><sub>e</sub><i>C</i><sub>T</sub>Φ<sup>2</sup></u></span><i>T</i> = <i>n</i><sub>0</sub> − β<i>T</i></div>
<div class="note">理想空载转速 n<sub>0</sub> = U/(C<sub>e</sub>Φ)；斜率 β = (R<sub>a</sub>+R<sub>c</sub>)/(C<sub>e</sub>C<sub>T</sub>Φ²)。<b>β 与 Φ² 成反比</b>——这是弱磁使特性变软的根源。</div></div>`
  });

  I.push({
    id: "m8", m: "motor", t: "三种调速方法与弱磁飞车", s: 3,
    tag: "降压调速 弱磁调速 串电阻 恒转矩 恒功率 飞车 1~2倍",
    src: S + " · P40–45",
    b: `<div class="tw"><table>
<thead><tr><th>方法</th><th>改变量</th><th>性质</th><th>特点</th></tr></thead>
<tbody>
<tr><td><b>降压调速</b></td><td>U（保持 Φ 额定、不串电阻）</td><td><b>恒转矩</b></td><td>特性与固有特性<b>平行</b>、硬度不变；从基速向下无级调速，可到零速</td></tr>
<tr><td><b>弱磁调速</b></td><td>I<sub>f</sub> ↓ → Φ ↓（U=U<sub>e</sub>）</td><td><b>恒功率</b></td><td>n<sub>0</sub> ∝ 1/Φ 上升、Δn ∝ 1/Φ² 上升；从基速向上调速，控制方便、功耗小</td></tr>
<tr><td>串电阻</td><td>R<sub>c</sub> 逐级增加</td><td>—</td><td>可减小起动电流，但特性变软、功耗增加，<b>现很少采用</b></td></tr>
</tbody></table></div>
<div class="warn"><b>弱磁必须互锁保护</b>：若 I<sub>f</sub> = 0，则 Φ → 0，n → ∞ 产生<b>飞车</b>。</div>
<p>弱磁升速上限受<b>换向条件与机械强度</b>限制：一般只能升到 n<sub>e</sub> 的 <b>1~2 倍</b>，特制调速电机可达 <b>3~4 倍</b>。<br>电动汽车常用<b>降压 + 弱磁</b>组合，得到低速恒转矩、高速恒功率的调速特性。</p>`
  });

  I.push({
    id: "m9", m: "motor", t: "交流电机：旋转磁场、转差率与三种运行状态", s: 3,
    tag: "旋转磁场 120度 同步转速 转差率 反接制动 发电机状态",
    src: S + " · P52–55",
    b: `<p>与直流电机的区别主要在磁场：交流电机靠<b>旋转磁场</b>，直流电机为静止磁场。三相绕组空间互差 120°，通入相位互差 120° 的对称正弦电流即产生旋转磁场。</p>
<div class="fm"><div class="eq"><i>n</i><sub>0</sub> = <span class="fr"><b>60<i>f</i></b><u><i>p</i></u></span>　　<i>s</i> = <span class="fr"><b><i>n</i><sub>0</sub> − <i>n</i></b><u><i>n</i><sub>0</sub></u></span>　　<i>n</i> = (1 − <i>s</i>)<span class="fr"><b>60<i>f</i></b><u><i>p</i></u></span></div>
<div class="note">转差率 s 是异步电机最重要运行参数；额定负载时 <b>s ≈ 1%~6%</b>（s 越小越接近同步转速、效率越高）。</div></div>
<div class="tw"><table>
<thead><tr><th>状态</th><th>转速</th><th>转差率</th><th>能量流向</th></tr></thead>
<tbody>
<tr><td>电动机</td><td>0 &lt; n &lt; n<sub>0</sub></td><td>0 &lt; s &lt; 1</td><td>吸收电功率，输出机械功率</td></tr>
<tr><td><b>发电机</b></td><td>n &gt; n<sub>0</sub></td><td><b>s &lt; 0</b></td><td>吸收机械功率，输出电功率（回馈）</td></tr>
<tr><td>反接制动</td><td>n &lt; 0</td><td><b>s &gt; 1</b></td><td>既吸电又吸机械功率，全部变内部损耗</td></tr>
</tbody></table></div>
<div class="tip">电动汽车降速制动时 n 不可能升高，故靠<b>降低电源频率 f 使 n<sub>0</sub> 下降</b>来实现 s&lt;0 发电回馈。</div>`
  });

  I.push({
    id: "m10", m: "motor", t: "异步电机结构、铭牌与起动特性", s: 2,
    tag: "笼型 绕线型 铸铝 铜排 铭牌 堵转 4~7倍 星三角",
    src: S + " · P56–60",
    b: `<p><b>结构</b>：定子（铁芯 0.35~0.5 mm 硅钢片、三相绕组星/角接、机座）+ 转子（铁芯、绕组、转轴）+ 气隙（越小励磁电流越小、功率因数越高）。转子分<b>笼型</b>（铸铝式 / 铜排式，铜导电率远高于铝，电动车多用铜甚至铜银合金）与<b>绕线型</b>（转子串外接电阻调特性）。</p>
<p><b>铭牌</b>：额定功率 P<sub>e</sub>（轴端输出）、额定电压 U<sub>e</sub>（线电压）、额定电流 I<sub>e</sub>（线电流）、额定转速 n<sub>e</sub>、额定频率 f<sub>e</sub>（我国工频 <b>50 Hz</b>）。</p>
<div class="warn"><b>固有起动特性差</b>：堵转时起动电流约为额定值的 <b>4~7 倍</b>，而起动转矩仅 <b>1~1.5 倍</b> —— "电流大、转矩不大"，且大电流易损坏蓄电池。降压或 Y-Δ 切换虽减小起动电流，但<b>起动转矩同时减小</b>。</div>`
  });

  I.push({
    id: "m11", m: "motor", t: "矢量控制与变频调速（调频兼调压）", s: 3,
    tag: "矢量控制 Blaschke 磁场定向 磁通检测 转差频率 U/f 恒转矩 恒功率 4.44",
    src: S + " · P61–65",
    b: `<p><b>矢量控制原理</b>：直流电机 T = C<sub>T</sub>ΦI<sub>a</sub> 中 Φ 由 i<sub>f</sub> 独立决定、与 i<sub>a</sub> 无关，故可分别调节 i<sub>a</sub>、i<sub>f</sub> 实现转矩与磁通解耦控制。1970 年代初德国西门子 <b>F. Blaschke</b> 首次提出按<b>磁场定向</b>的矢量变换控制。</p>
<p><b>两种方法</b>（按获取位置角 θ 的方式）：<b>磁通检测法</b>（霍尔元件或检测定子端电压/感应电压直接得 θ，与电机常数无关，但受低速槽脉动与磁饱和影响）与<b>转差频率（sf）控制法</b>（θ = 转子位置 θ<sub>m</sub> + 滑差角 θ<sub>s</sub>，适用标准结构电机、调速范围广）。</p>
<div class="fm"><div class="eq"><i>n</i> = (1 − <i>s</i>)<span class="fr"><b>60<i>f</i></b><u><i>p</i></u></span>　→　三类调速：变 <b>f</b>、变极对数 <b>p</b>、变转差率 <b>s</b></div>
<div class="note">变极对数只有二级有级调速；变 s（降压、串电抗、转差离合器、转子串阻）特性变软、范围窄；<b>变频调速</b>可平滑无级。</div></div>
<div class="fm"><div class="eq"><i>U</i><sub>1</sub> ≈ <i>E</i><sub>1</sub> = 4.44<i>f N</i><sub>1</sub><i>k</i><sub>1</sub>Φ　　<i>T</i> = <i>C</i><sub>M</sub>Φ<i>I</i><sub>2</sub>′cosψ<sub>2</sub></div>
<div class="note"><b>必须调频兼调压</b>：U<sub>1</sub> 不变而 f 下降 → Φ 增大 → 磁路饱和、励磁电流 I<sub>m</sub> 上升、铁损剧增。故恒转矩负载要求 <b>E<sub>1</sub>/f = 常数</b>，恒功率负载要求 <b>U<sub>1</sub>/√f = 常数</b>。</div></div>`
  });

  I.push({
    id: "m12", m: "motor", t: "永磁电机的分类与转子三大结构", s: 3,
    tag: "永磁 有刷 无刷直流 矩形波 永磁同步 正弦波 复合 IPM SPM ITPM 磁阻转矩",
    src: S + " · P67–71",
    b: `<div class="tw"><table>
<thead><tr><th>分类</th><th>驱动波形 / 说明</th></tr></thead>
<tbody>
<tr><td>永磁有刷直流</td><td>定子主磁极换永磁体，仍靠电刷机械换向</td></tr>
<tr><td><b>永磁无刷直流（BLDCM）</b></td><td><b>矩形波</b>（正负交变）驱动，电子换向</td></tr>
<tr><td><b>永磁交流同步（PMSM）</b></td><td><b>正弦波</b>驱动，转矩脉动小、可弱磁扩速</td></tr>
<tr><td>变磁阻双凸极永磁 / 永磁复合</td><td>磁场 = 永磁体 + 电励磁（附加励磁以克服磁通不可控）</td></tr>
</tbody></table></div>
<div class="kv">
<div><span class="k">IPM 内置式</span><span class="v">磁阻转矩型，功率密度与过载能力高、<b>易弱磁扩速</b>，但转矩脉动大于 SPM</span></div>
<div><span class="k">SPM 表面式</span><span class="v">结构简单，永磁体离气隙近、有效气隙磁场大，可降低电枢反应；应用渐增</span></div>
<div><span class="k">ITPM 镶嵌式</span><span class="v">工艺复杂，永磁体嵌入内部，<b>高速运转时机械完整性好</b></span></div>
</div>
<div class="tip">内置于径向型漏磁小、无需隔离环，但每极有效面积约为切向型的一半（故常用特殊截面补偿）。</div>`
  });

  I.push({
    id: "m13", m: "motor", t: "永磁材料：磁滞回线四要素与三大类", s: 3,
    tag: "Br 剩磁 Hc 矫顽力 BHmax 磁能积 居里温度 软磁 硬磁 钕铁硼 钐钴 铁氧体 铝镍钴",
    src: S + " · P72–78",
    b: `<div class="kv">
<div><span class="k">B<sub>r</sub> 剩磁</span><span class="v">外磁场降为零时磁钢中的 B</span></div>
<div><span class="k">H<sub>C</sub> 矫顽力</span><span class="v">使 B = 0 所需的去磁磁场强度</span></div>
<div><span class="k">BH<sub>max</sub></span><span class="v">去磁曲线上 BH 乘积最大值（最大磁能积）；<b>越大，同等磁场所需材料体积越小</b></span></div>
<div><span class="k">居里温度</span><span class="v">超过则完全失去磁性；永磁电机<b>不宜长时间过载与高温运行</b></span></div>
</div>
<div class="warn"><b>软磁 vs 硬磁</b>：硬磁（永磁体）H<sub>C</sub> 大、磁滞回线<b>宽</b>，要求 <b>H<sub>C</sub> &gt; 1 kA/m</b>；软磁 H<sub>C</sub> 很小、回线窄、B 随 H 变化大，作变压器与电机铁心。<b>bc 段为去磁曲线</b>，是永磁材料的主要磁特性曲线。</div>
<div class="tw"><table>
<thead><tr><th>材料</th><th>特点</th></tr></thead>
<tbody>
<tr><td>铝镍钴</td><td>B<sub>r</sub> 高，但 H<sub>C</sub> 与抗去磁能力低、寿命短，应用下降</td></tr>
<tr><td>铁氧体</td><td>H<sub>C</sub> 大、去磁曲线近直线、B<sub>r</sub> 较低、温度系数大、易碎、<b>便宜、耐氧化耐腐蚀</b></td></tr>
<tr><td><b>稀土</b>（钐钴 1:5、2:17；<b>钕铁硼</b>）</td><td>H<sub>C</sub> 高、BH<sub>max</sub> 大、性能远超其他；钕铁硼剩磁/矫顽力/磁能积都高且价格较低，但<b>温度系数大</b></td></tr>
</tbody></table></div>
<div class="tip">我国稀土储量占世界已探明资源 <b>80%</b>；稀土元素共 <b>17</b> 种（15 个镧系 + 钪 + 钇）。</div>`
  });

  I.push({
    id: "m14", m: "motor", t: "永磁无刷直流电机：里翻外结构与位置检测", s: 3,
    tag: "里翻外 位置传感器 电磁式 光电式 磁敏式 无位置传感器 反电动势 轮毂",
    src: S + " · P79–81",
    b: `<p><b>"里翻外"结构</b>：电枢绕组置于<b>定子</b>内（损耗热量易从机壳散发、便于温控），转子由永磁体激励、无励磁绕组，省去向转子通电的电刷，损耗与发热减小。</p>
<p><b>三大组成</b>：电机本体 + 位置检测器 + 驱动控制器。</p>
<div class="kv">
<div><span class="k">有位置传感器</span><span class="v">电磁式、光电式、磁敏式；转子与电机转子同轴、定子固定在端盖上，检测转子磁极相对定子绕组的位置，为换相逻辑提供信息</span></div>
<div><span class="k">无位置传感器</span><span class="v"><b>反电动势检测法、定子三次谐波检测法、瞬时电压方程法、续流二极管工作状态检测法</b>；省传感器但仍在研发阶段</span></div>
</div>
<p>也可做成<b>内定子、外转子</b>的轮毂直驱结构：外转子永磁体贴在轮辋内圈，减薄磁片以增大电枢直径、提高功率密度，引线从兼作电机轴的车轮中心引出。</p>`
  });

  I.push({
    id: "m15", m: "motor", t: "永磁同步电机：效率与调速精度数据", s: 3,
    tag: "95% 功率因数 0.95 0.99 0.25 失步 0.5 弱磁",
    src: S + " · P82–85",
    b: `<p>定子通三相对称正弦波电流形成旋转磁场，与转子永磁异性磁极间<b>磁拉力</b>牵引转子同步旋转。</p>
<div class="tip"><b>必背数据</b>：效率可达 <b>95% 以上</b>（比 Y 系列异步电机高 10%~15%）；功率因数 <b>0.95~0.99</b>；转速与同步转速误差 <b>不大于 0.25 r/min</b>；若因负载过大使误差 <b>大于 0.5 r/min</b> 则进入<b>失步</b>状态。</div>
<p>与永磁无刷直流相比：正弦波电流驱动<b>转矩脉动小</b>、弱磁扩速范围更宽（靠电枢反应去磁，去磁程度取决于定子电流<b>超前空载电动势的角度</b>），但驱动控制系统更复杂、成本更高。</p>`
  });

  I.push({
    id: "m16", m: "motor", t: "开关磁阻电机（SRM）与 SRD 系统", s: 3,
    tag: "磁阻最小原理 双凸极 SRD 功率变换器 6/4极 8/6极 12/8极 Ns Nr 相数",
    src: S + " · P86–96",
    b: `<p><b>运行原理</b>：遵循"<b>磁阻最小原理</b>"——磁通总沿磁阻最小路径闭合，转子凸极轴线趋向与定子磁通轴线对齐，产生磁阻转矩。定子带集中绕组、<b>转子无绕组无永磁体</b>。</p>
<p><b>SRD 四大部分</b>：SR 电机 + <b>功率变换器</b> + 控制器 + 检测器（位置、电流）。</p>
<div class="tip"><b>为什么效率高</b>：主开关关断后，绕组电感中的剩余能量经续流二极管<b>回馈电源</b>；绕组电流仅需单向 → 主电路简化、且相绕组与开关管串联，避免电源短路。</div>
<p><b>转向只取决于通电顺序</b>（A→B→C 逆时针，A→C→B 顺时针），<b>与电流方向无关</b> → 无需控制电流正负，减少开关管数。</p>
<div class="fm"><div class="eq">转子极距角 θ<sub>r</sub> = <span class="fr"><b>360°</b><u><i>N</i><sub>r</sub></u></span>　　电角度 = 机械角度 × <i>N</i><sub>r</sub>　　<i>n</i> = <span class="fr"><b>60<i>f</i><sub>ph</sub></b><u><i>N</i><sub>r</sub></u></span></div>
<div class="eq" style="margin-top:6px"><i>N</i><sub>s</sub> = 2<i>km</i>　　<i>N</i><sub>r</sub> = 2<i>k</i>(<i>m</i> − 1)　（取「−」号使定子齿多于转子齿）</div>
<div class="note">m 相数、N<sub>s</sub>/N<sub>r</sub> 定/转子凸极数、f<sub>ph</sub> 每相开关频率。常用 <b>三相 6/4、三相 12/8、四相 8/6</b>。</div></div>
<div class="warn">相数、极数增多 → 转矩脉动减小、低速平稳性提高，但结构复杂、开关元件多、成本升高。<b>两相以下无自起动能力</b>。</div>`
  });

  I.push({
    id: "m17", m: "motor", t: "直驱轮毂力矩电机：为什么是粗短型", s: 2,
    tag: "轮毂 力矩电机 扁平 0.2 极对数 低速大扭矩",
    src: S + " · P51",
    b: `<p>轮毂直驱运行于<b>低速大扭矩</b>工况，需用直驱力矩电机。形状为<b>粗而短的扁平式</b>：常规电机为提高功率密度，电枢长度与直径比约为 <b>1</b>；直驱力矩电机约 <b>0.2</b>。</p>
<p>可用直流、交流、变磁阻等原理，但为提高功率密度与效率希望采用<b>永磁式</b>；为减小低速转矩脉动、提高平稳性，要求选取<b>较多极对数</b>。</p>
<div class="tip">讲义判断：轮毂直驱可按路况灵活调配驱动功率、显著提高动能回收率，是电动汽车<b>最佳、最终的驱动形式</b>。</div>`
  });

  C.push(
    { id: "mc1", m: "motor", q: "四类驱动电机各自最致命的缺点？", a: "直流：电刷换向火花、磨损需维护；交流：控制器需逆变+矢量控制，复杂昂贵；永磁无刷：永磁体受温度影响大，可靠性不足、功率受限，控制器复杂；开关磁阻：<b>转矩脉动大</b>导致振动噪声。" },
    { id: "mc2", m: "motor", q: "汽车对驱动系统的五字要求？与数控伺服的差别？", a: "<b>稳、省、快、宽、足</b>；数控伺服是<b>稳、准、快、宽、足</b>——把「准确定位」换成「节省电能」，因车载能源受限。" },
    { id: "mc3", m: "motor", q: "电动汽车下坡滑行时的发电回馈制动在第几象限？为什么？", a: "<b>第Ⅱ象限</b>（正向制动）。因为下坡时电机仍<b>正转</b>（n&gt;0），而电磁转矩方向与转速相反（T&lt;0）。第Ⅳ象限是反向回馈，对应位能负载下放重物。" },
    { id: "mc4", m: "motor", q: "他励直流电机三种调速方法及性质？", a: "① <b>降压调速</b>——恒转矩，特性与固有特性平行，从基速向下无级调速；② <b>弱磁调速</b>——恒功率，从基速向上；③ 串电阻调速——特性变软、功耗大，现已少用。" },
    { id: "mc5", m: "motor", q: "弱磁调速为什么必须设互锁保护？", a: "若励磁电流 I_f = 0，则 Φ→0，由 n = U/(C_eΦ) 得 n→∞，产生<b>飞车</b>事故。" },
    { id: "mc6", m: "motor", q: "弱磁升速的最高转速受什么限制？一般可达多少倍？", a: "受<b>换向条件与机械强度</b>限制；一般 1~2 倍额定转速，特制调速电机可达 3~4 倍。" },
    { id: "mc7", m: "motor", q: "异步电机三种运行状态对应的转差率范围？", a: "电动机 0&lt;s&lt;1（0&lt;n&lt;n₀）；发电机 s&lt;0（n&gt;n₀）；反接制动 s&gt;1（n&lt;0）。额定负载时 s≈1%~6%。" },
    { id: "mc8", m: "motor", q: "变频调速为什么必须同时调压？", a: "U₁≈E₁=4.44fN₁k₁Φ。若 U₁ 不变而 f 降低，Φ 将增大使磁路饱和、励磁电流上升、铁损剧增。故恒转矩负载需 <b>E₁/f=常数</b>，恒功率负载需 <b>U₁/√f=常数</b>。" },
    { id: "mc9", m: "motor", q: "异步电机固有起动特性有何问题？", a: "堵转时起动电流为额定的 4~7 倍，而起动转矩仅 1~1.5 倍——「电流很大、转矩不大」；大电流易损坏蓄电池，降压或 Y-Δ 起动又会同时减小起动转矩。" },
    { id: "mc10", m: "motor", q: "永磁电机转子三种结构及各自特点？", a: "<b>IPM 内置式</b>：磁阻转矩型，功率密度与过载能力高、易弱磁扩速，但转矩脉动大；<b>SPM 表面式</b>：结构简单、气隙磁场大、电枢反应小；<b>ITPM 镶嵌式</b>：工艺复杂，高速机械完整性好。" },
    { id: "mc11", m: "motor", q: "硬磁与软磁的判据？", a: "看矫顽力 H_C 与磁滞回线宽窄：<b>硬磁</b> H_C 大、回线宽，H_C &gt; 1 kA/m，作永磁体；<b>软磁</b> H_C 很小、回线窄，作变压器与电机铁心。" },
    { id: "mc12", m: "motor", q: "开关磁阻电机的转向由什么决定？", a: "只由<b>各相绕组的通电顺序</b>决定（A→B→C 与 A→C→B 相反），<b>与相电流方向无关</b>——这是它可简化功率变换器（电流单向）的根本原因。" },
    { id: "mc13", m: "motor", q: "SR 电机常用极数组合与约束关系？", a: "常用三相 6/4、三相 12/8、四相 8/6。约束：N_s = 2km，N_r = 2k(m−1)，取「−」号使定子齿多于转子齿；相数增多可减小转矩脉动但成本升高。" },
    { id: "mc14", m: "motor", q: "永磁同步电机效率、功率因数与失步判据？", a: "效率 95% 以上（比 Y 系列异步高 10%~15%），功率因数 0.95~0.99；转速误差通常 ≤0.25 r/min，若 &gt;0.5 r/min 即进入<b>失步</b>。" },
    { id: "mc15", m: "motor", q: "直驱力矩电机的外形特征与原因？", a: "粗而短的扁平式，电枢长度/直径约 <b>0.2</b>（常规电机约 1）。因轮毂直驱工作在低速大扭矩工况，需大直径产生大转矩，并要求较多极对数以减小转矩脉动。" }
  );
})();
