/* 模块一：车辆动力学（前置基础 · 教材第五章） */
(function () {
  var I = window.EV.items, C = window.EV.cards;
  var S = "教材第五章";
  var L = function (num, den) {
    return '<span class="fr"><b>' + num + "</b><u>" + den + "</u></span>";
  };

  I.push({
    id: "t0", m: "theory", t: "车辆坐标系与六个自由度", s: 2,
    tag: "坐标系 质心 侧倾 俯仰 横摆 自由度 右手螺旋",
    src: S + " · P188",
    b: `<p>原点 0 取车身<b>质心</b>，静止于水平路面时：x 轴为车身纵向水平轴（向前为正）、y 轴水平指向驾驶员<b>左侧</b>、z 轴垂直向上，符合右手法则。</p>
<div class="kv">
<div><span class="k">六个自由度</span><span class="v">沿 x/y/z 的平动（前进速度 U、侧向速度 V、垂直速度 W）+ 绕 x/y/z 的转动（<b>侧倾</b> ω<sub>x</sub>、<b>俯仰</b> ω<sub>y</sub>、<b>横摆</b> ω<sub>z</sub>），转动符合右手螺旋定则</span></div>
</div>
<div class="tip">五大性能与力一一对应：动力性（纵向）、平顺性（垂向）、操纵稳定性（侧向）、通过性（地面力学）、制动安全性（纵向+侧向）。后期所有电控系统都是在"补"这五个性能。</div>`
  });

  I.push({
    id: "t1", m: "theory", t: "四种行驶阻力（★计算题基石）", s: 3,
    tag: "滚动阻力 空气阻力 坡度阻力 加速阻力 行驶方程式 21.15 旋转质量系数",
    src: S + " · P188–193",
    b: `<div class="plain">车要往前走，必须先"付掉"四笔账：<b>轮胎压地的滚阻</b>、<b>迎面来的风阻</b>、<b>上坡的重力分力</b>、<b>加速时的惯性</b>。驱动电机出的力，就是把它们加在一起。</div>
<div class="fm"><div class="eq"><i>F</i><sub>总</sub> = <i>F</i><sub>f</sub> + <i>F</i><sub>w</sub> + <i>F</i><sub>i</sub> + <i>F</i><sub>j</sub></div></div>
<div class="kv">
<div><span class="k">滚动阻力</span><span class="v"><i>F</i><sub>f</sub> = <i>fG</i> = <i>fmg</i>；f 为滚动阻力系数（车轮滚动所需推力与径向载荷之比，由<b>轮胎弹性迟滞损失</b>产生，法向反力前移 a，T<sub>f</sub> = aF<sub>z</sub>，f = a/r）</span></div>
<div><span class="k">空气阻力</span><span class="v"><i>F</i><sub>w</sub> = <i>C</i><sub>D</sub><i>A u</i><sub>a</sub><sup>2</sup>/21.15（u<sub>a</sub> 用 km/h，结果 N）<br>与速度<b>平方</b>成正比；车速翻倍 → 阻力 4 倍、<b>功率 8 倍</b></span></div>
<div><span class="k">坡度阻力</span><span class="v"><i>F</i><sub>i</sub> = <i>G</i> sinα ≈ <i>Gi</i>（i = tanα，坡度小时 sinα ≈ tanα = i）；下坡为<b>负值</b>（变动力）</span></div>
<div><span class="k">加速阻力</span><span class="v"><i>F</i><sub>j</sub> = δ<i>m</i> d<i>u</i>/d<i>t</i>；δ 为<b>旋转质量换算系数</b>（&gt;1），δ = 1 + δ<sub>1</sub> + δ<sub>2</sub>i<sub>g</sub><sup>2</sup>i<sub>0</sub><sup>2</sup>η<sub>T</sub>/(mr²)。纯电动车无发动机飞轮，<b>δ<sub>2</sub>≈0</b></span></div>
</div>
<div class="fm"><div class="eq">阻力功率 <i>P</i> = <span class="fr"><b><i>F</i><sub>总</sub> · <i>u</i><sub>a</sub></b><u>3600</u></span>（kW，F 用 N、u<sub>a</sub> 用 km/h）</div>
<div class="note">只有 <b>F<sub>f</sub></b> 与 <b>F<sub>w</sub></b> 在任何行驶条件下都存在；F<sub>i</sub>、F<sub>j</sub> 仅上坡/加速时存在。</div></div>
<div class="sym"><i>F</i> 阻力或驱动力（N）｜<i>f</i> 滚动阻力系数（无量纲，干沥青 0.013 左右）｜<i>G</i> 车重（N），<i>G</i>=<i>mg</i>｜<i>m</i> 质量（kg）｜<i>g</i> 重力加速度 9.8（m/s²）<br><i>C</i><sub>D</sub> 空气阻力系数（无量纲）｜<i>A</i> 迎风面积（m²）｜<i>u</i><sub>a</sub> 车速（<b>km/h</b>，注意不是 m/s）｜<i>δ</i> 旋转质量换算系数（&gt;1）｜<i>u</i> 车速（m/s）</div>
<div class="tw"><table>
<thead><tr><th>路面（充气轿车轮胎）</th><th>f</th><th>路面（充气货车轮胎）</th><th>f</th></tr></thead>
<tbody>
<tr><td>混凝土、沥青</td><td class="tnum">0.013</td><td>混凝土、沥青</td><td class="tnum">0.006~0.010</td></tr>
<tr><td>方石</td><td class="tnum">0.015</td><td>土路面</td><td class="tnum">0.050</td></tr>
<tr><td>滚压粗卵石</td><td class="tnum">0.020</td><td>耕地</td><td class="tnum">0.10~0.35</td></tr>
<tr><td>沥青碎石</td><td class="tnum">0.025</td><td></td><td></td></tr>
</tbody></table></div>`
  });

  I.push({
    id: "t2", m: "theory", t: "空气阻力的五个组成与风阻系数", s: 2,
    tag: "压力阻力 摩擦阻力 形状 干扰 内循环 诱导 58% 14% 12% 7% 9% CD",
    src: S + " · P190–192",
    b: `<p>空气阻力 = <b>压力阻力</b>（法向压力合力在行驶方向的分力）+ <b>摩擦阻力</b>（空气粘性在车身表面的切向力，与表面积及表面质量有关）。压力阻力又分四部分：</p>
<div class="kv">
<div><span class="k">形状阻力</span><span class="v">前后压力差（压差阻力），占空气阻力<b>大部分</b>；车身外形优化可使其减少一半</span></div>
<div><span class="k">干扰阻力</span><span class="v">表面凸起物（车灯、门把手、后视镜、天线、底盘凸出物）引起的气流干扰</span></div>
<div><span class="k">内循环阻力</span><span class="v">冷却系与通风气流穿过车体内部产生</span></div>
<div><span class="k">诱导阻力</span><span class="v">上下压力差产生升力，升力向后倾斜在行驶方向的分力</span></div>
</div>
<div class="tip"><b>大致比例</b>：形状 <b>58%</b>、干扰 14%、内循环 12%、诱导 7%、摩擦 9%。</div>
<div class="tw"><table>
<thead><tr><th>车身形状</th><th>C<sub>D</sub></th></tr></thead>
<tbody>
<tr><td>敞篷汽车</td><td class="tnum">0.5~0.7</td></tr>
<tr><td>厢式（两厢）</td><td class="tnum">0.5~0.6</td></tr>
<tr><td>折背式（三厢）</td><td class="tnum">0.4~0.55</td></tr>
<tr><td>楔形 + 底部覆盖 + 优化冷却</td><td class="tnum">0.3~0.4</td></tr>
<tr><td>车轮包入车身 + 底部覆盖</td><td class="tnum">0.2~0.25</td></tr>
<tr><td>最佳流线形</td><td class="tnum">0.15~0.20</td></tr>
</tbody></table></div>
<p>其他车型：货车/大型载重 0.8~1.5；公共汽车 0.6~0.7；流线形客车 0.3~0.4；摩托车 0.6~0.7。</p>`
  });

  I.push({
    id: "t3", m: "theory", t: "动力性三大评价指标", s: 3,
    tag: "最高车速 加速时间 最大爬坡度 30% 16.5度 60% 0-100 0-400m",
    src: S + " · P193–194",
    b: `<div class="kv">
<div><span class="k">最高车速</span><span class="v">u<sub>amax</sub>：满载、水平良好路面能达到的最高车速（km/h）。对电机驱动的电动车，即<b>电机最高转速</b>决定最高车速</span></div>
<div><span class="k">加速能力</span><span class="v">用加速度 a、加速时间 t、加速距离 s 评价。原地起步加速：<b>0→400 m 秒数</b>或 <b>0→100 km/h 时间</b>；超车加速：最高档/次高档由 30 或 40 km/h 全力加速至某高速的时间</span></div>
<div><span class="k">上坡能力</span><span class="v">最大爬坡度 i<sub>max</sub>：满载、最低档、良好路面能爬上的最大坡度。一般要求 <b>30%（坡度角 16.5°）</b>左右；越野车可达 <b>60%</b></span></div>
</div>
<div class="warn">i<sub>max</sub> 是<b>极限能力</b>，应比实际道路最大坡度大很多——要留出坡道停车后起步、松软路面、局部崎岖的余量。三项指标均在<b>无风或微风</b>条件下测定。</div>`
  });

  I.push({
    id: "t4", m: "theory", t: "驱动力、行驶方程式与驱动条件", s: 3,
    tag: "驱动力 传动比 效率 轮毂电机 后备驱动力 等速",
    src: S + " · P194",
    b: `<div class="fm"><div class="eq"><i>F</i><sub>t</sub> = <span class="fr"><b><i>T</i><sub>t</sub></b><u><i>r</i></u></span> = <span class="fr"><b><i>k</i> · <i>T</i> · <i>i</i> · η<sub>T</sub></b><u><i>r</i></u></span></div>
<div class="note">T 为单个驱动电机输出转矩，k 为驱动电机个数（集中驱动 k=1，双轮毂 k=2，四轮毂 k=4）；i 为传动比、η<sub>T</sub> 机械效率。不带减速器的轮毂电机 i=1、η<sub>T</sub>=1；若前后电机功率不一致，T 取<b>平均输出转矩</b>。</div></div>
<div class="sym"><i>F</i><sub>t</sub> 驱动力（N）｜<i>T</i> 电机输出转矩（N·m）｜<i>k</i> 电机个数｜<i>i</i> 传动比（减速器把转速降几倍、转矩乘几倍）｜<i>η</i><sub>T</sub> 传动效率（0~1）｜<i>r</i> 车轮半径（m）</div>
<div class="fm"><div class="eq"><i>F</i><sub>t</sub> = <i>F</i><sub>总</sub> = <i>F</i><sub>f</sub> + <i>F</i><sub>w</sub> + <i>F</i><sub>i</sub> + <i>F</i><sub>j</sub>　　（汽车行驶方程式）</div></div>
<p><b>后备驱动力</b> = F<sub>t</sub> − (F<sub>f</sub>+F<sub>w</sub>+F<sub>i</sub>)：等于零→<b>等速</b>；大于零→<b>加速</b>；小于零→不能开动或减速停车。</p>
<div class="fm"><div class="eq">驱动条件：<i>F</i><sub>t</sub> ≥ <i>F</i><sub>f</sub> + <i>F</i><sub>w</sub> + <i>F</i><sub>i</sub></div>
<div class="note">这只是<b>必要条件</b>，不充分——冰雪坡道或驱动轮陷入泥坑时再大的驱动力也只能让车轮滑转。</div></div>`
  });

  I.push({
    id: "t5", m: "theory", t: "附着条件：汽车能开动的充分条件", s: 3,
    tag: "附着力 附着系数 法向反作用力 驱动-附着条件 附着利用率 前驱55%",
    src: S + " · P194–196",
    b: `<div class="fm"><div class="eq">附着力 <i>F</i><sub>φ</sub> = <i>F</i><sub>zφ</sub> · φ　　附着条件 <i>F</i><sub>t</sub> ≤ <i>F</i><sub>zφ</sub>φ</div>
<div class="note">F<sub>zφ</sub> 为作用于<b>所有驱动轮</b>上的法向反作用力之和。地面对驱动轮的切向反作用力不能大于附着力，否则驱动轮滑转。</div></div>
<div class="fm"><div class="eq">驱动-附着条件：<i>F</i><sub>f</sub> + <i>F</i><sub>w</sub> + <i>F</i><sub>i</sub> ≤ <i>F</i><sub>t</sub> ≤ <i>F</i><sub>zφ</sub>φ</div>
<div class="note">这是汽车能行驶的<b>必要与充分条件</b>。</div></div>
<div class="sym"><i>φ</i> 附着系数（无量纲，0~1）｜<i>F</i><sub>zφ</sub> 作用在<b>驱动轮</b>上的法向反力之和（N）｜<i>G</i> 车重（N）｜<i>a</i> 质心到<b>前</b>轴的距离（m）｜<i>b</i> 质心到<b>后</b>轴的距离（m）｜<i>L</i> 轴距（m）｜<i>h</i><sub>g</sub> 质心高度（m）｜<i>f</i> 滚动阻力系数</div>
<div class="kv">
<div><span class="k">后轮驱动</span><span class="v">F<sub>φ2</sub> = φG(a − f h<sub>g</sub>)/L</span></div>
<div><span class="k">前轮驱动</span><span class="v">F<sub>φ1</sub> = φG(b + f h<sub>g</sub>)/(L + φh<sub>g</sub>)</span></div>
<div><span class="k">四轮驱动</span><span class="v">F<sub>φ4</sub> = φ(F<sub>z1</sub>+F<sub>z2</sub>) = φG cosα ≈ φG —— <b>只有四驱才能充分利用总重力产生的附着力</b></span></div>
</div>
<div class="warn"><b>结论性数字</b>：道路附着系数越高，前驱与后驱的附着利用率差距越大；为满足附着条件，<b>前驱轿车质心偏前布置，满载时前轴负荷应在 55% 以上</b>。四驱要真正用满附着力，还要求<b>前后轴驱动力分配比 = 前后轴法向反力比</b>。</div>`
  });

  I.push({
    id: "t6", m: "theory", t: "附着系数的影响因素与滑水现象", s: 2,
    tag: "路面 轮胎 花纹 车速 滑水 100km/h 10mm 水膜",
    src: S + " · P196–197",
    b: `<div class="kv">
<div><span class="k">路面</span><span class="v">越坚硬、微观越粗糙，φ 越高；潮湿时水起润滑作用 → φ 下降。宏观结构应<b>自动排水</b>，微观应粗糙有棱角以穿透水膜。路面有细砂、尘土、油污时 φ 降低，<b>刚下雨时最低</b>，长时间冲刷后回升</span></div>
<div><span class="k">轮胎</span><span class="v">细而浅花纹适合硬路面；宽而深花纹适合松软路面（增大嵌土剪切面）；纵向曲折大沟槽 + 胎面边缘横向沟槽兼顾纵横抓地；<b>低气压、宽断面、子午线轮胎</b>增大接触面提高附着</span></div>
<div><span class="k">车速</span><span class="v">车速升高 φ 下降（胎面来不及与微观凹凸嵌合）。<b>滑水现象</b>：高速通过积水层时流体压力使轮胎上浮，φ 接近零——<b>100 km/h、水膜 10 mm</b> 即可能发生</span></div>
</div>`
  });

  I.push({
    id: "t7", m: "theory", t: "制动性三指标与两种制动力", s: 3,
    tag: "制动效能 恒定性 方向稳定性 地面制动力 制动器制动力 附着力 热衰退",
    src: S + " · P217–218",
    b: `<div class="kv">
<div><span class="k">制动效能</span><span class="v">制动距离、制动减速度、制动力（最基本指标）</span></div>
<div><span class="k">效能恒定性</span><span class="v">抗衰退性能 = <b>抗热衰退</b> + 抗水衰退</span></div>
<div><span class="k">方向稳定性</span><span class="v">按给定路径行驶的能力；跑偏、侧滑、失去转向能力即偏离</span></div>
</div>
<div class="fm"><div class="eq">地面制动力 <i>F</i><sub>xb</sub> = <span class="fr"><b><i>T</i><sub>μ</sub></b><u><i>r</i></u></span> = <i>F</i><sub>μ</sub>（滚动时）　　<i>F</i><sub>xb</sub> ≤ <i>F</i><sub>φ</sub> = <i>F</i><sub>z</sub>φ</div>
<div class="note">F<sub>μ</sub> = T<sub>μ</sub>/r 称<b>制动器制动力</b>（取决于制动器形式、尺寸、摩擦系数、车轮半径，与踏板力成正比）。地面制动力首先取决于制动器制动力，但<b>又受附着条件限制</b>——两者都够，才能获得足够的地面制动力。</div></div>
<div class="tip"><b>制动过程三阶段</b>（按地面印痕）：纯滚动（花纹清晰）→ 相对滑动（花纹模糊，边滚边滑）→ 完全拖滑（粗黑印痕，看不出花纹）。</div>
<div class="warn"><b>热衰退</b>：下长坡连续制动，制动器温度常在 300 ℃以上、有时 600~700 ℃，摩擦系数显著下降。国标要求以一定车速<b>连续制动 15 次、每次强度 3 m/s²</b>，最后效能不低于冷试验的 <b>60%</b>。盘式制动器效能因数虽小于鼓式，但<b>稳定性好</b>，故广泛用于高速轿车。</div>`
  });

  I.push({
    id: "t8", m: "theory", t: "滑动率与 φb-s / φl-s 曲线（ABS 的理论出处）", s: 3,
    tag: "滑动率 15% 20% 峰值附着 滑动附着 侧向力系数 冰 雪 沥青",
    src: S + " · P218–220",
    b: `<div class="fm"><div class="eq"><i>s</i> = <span class="fr"><b><i>u</i><sub>w</sub> − <i>r</i><sub>r0</sub>ω<sub>w</sub></b><u><i>u</i><sub>w</sub></u></span> × 100%</div>
<div class="note">纯滚动 s=0；完全拖滑（抱死）s=100%；边滚边滑 0&lt;s&lt;100%。</div></div>
<div class="sym"><i>s</i> 滑动率（%）｜<i>u</i><sub>w</sub> 车轮中心前进速度（m/s）｜<i>r</i><sub>r0</sub> 无制动力时车轮的滚动半径（m）｜<i>ω</i><sub>w</sub> 车轮角速度（rad/s）<br>分子 <i>u</i><sub>w</sub>−<i>r</i><sub>r0</sub><i>ω</i><sub>w</sub> 就是"车走得比轮转得快多少"，即打滑的那部分</div>
<div class="kv">
<div><span class="k">制动力系数</span><span class="v">φ<sub>b</sub> = F<sub>xb</sub>/G（纵向附着系数）。峰值 <b>φ<sub>p</sub></b> 出现在 <b>s = 15%~20%</b>；s=100% 时为<b>滑动附着系数 φ<sub>s</sub></b>；φ<sub>s</sub>/φ<sub>p</sub> 约 1/3~1</span></div>
<div><span class="k">侧向力系数</span><span class="v">φ<sub>l</sub> = 侧向力/垂直载荷。s 小时随 s 略升，随后<b>迅速下降</b>；φ<sub>l</sub> 越大，保持转向、防止侧滑的能力越强</span></div>
</div>
<div class="tw"><table>
<thead><tr><th>路面</th><th>φ<sub>p</sub></th><th>φ<sub>s</sub></th></tr></thead>
<tbody>
<tr><td>沥青/混凝土（干）</td><td class="tnum">0.8~0.9</td><td class="tnum">0.75</td></tr>
<tr><td>混凝土（湿）/ 沥青（湿）</td><td class="tnum">0.8 / 0.5~0.7</td><td class="tnum">0.7 / 0.45~0.6</td></tr>
<tr><td>砾石</td><td class="tnum">0.6</td><td class="tnum">0.55</td></tr>
<tr><td>雪（压紧）</td><td class="tnum">0.2</td><td class="tnum">0.15</td></tr>
<tr><td>冰</td><td class="tnum">0.1</td><td class="tnum">0.07</td></tr>
</tbody></table></div>
<div class="tip">把 s 保持在 <b>15% 左右</b>，既得较大制动力系数、又保留较高侧向力系数——这正是 ABS 的控制目标（讲义作 0.15~0.2）。</div>`
  });

  I.push({
    id: "t9", m: "theory", t: "制动距离公式与制动全过程", s: 3,
    tag: "制动距离 空驶距离 反应时间 t1 t2 持续制动 0.5 1.0 0.2 0.5",
    src: S + " · P220–221",
    b: `<div class="fm"><div class="eq"><i>L</i><sub>z</sub> = <i>u</i><sub>0</sub>(<i>t</i><sub>1</sub> + <i>t</i><sub>2</sub>) + ∫<sub>0</sub><sup><i>u</i><sub>0</sub></sup> <span class="fr"><b>d<i>u</i></b><u><i>a</i><sub>j</sub></u></span>　　（等减速时后项 = <i>u</i><sub>0</sub><sup>2</sup> / 2<i>a</i><sub>jmax</sub>）</div>
<div class="note">t<sub>1</sub> 驾驶员反应时间（<b>0.5~1.0 s</b>）；t<sub>2</sub> 制动传动系作用时间（<b>0.2~0.5 s</b>）。t<sub>1</sub>+t<sub>2</sub> 内无制动效果，称<b>空驶时间</b>，其距离为空驶距离。</div></div>
<div class="sym"><i>L</i><sub>z</sub> 制动距离（m）｜<i>u</i><sub>0</sub> 制动初速度（m/s）｜<i>t</i><sub>1</sub> 驾驶员反应时间（s）｜<i>t</i><sub>2</sub> 制动器起作用时间（s）｜<i>a</i><sub>j</sub> 制动减速度（m/s²），<i>a</i><sub>jmax</sub> 为其最大值</div>
<div class="kv">
<div><span class="k">三阶段</span><span class="v">驾驶员反应 → 制动器起作用 → 持续制动（真正减速停车）</span></div>
<div><span class="k">制动减速度</span><span class="v">a<sub>jmax</sub> = φ<sub>b</sub>g（一般）；前后轮同时抱死时 = φ<sub>s</sub>g；装理想 ABS 时 = <b>φ<sub>p</sub>g</b></span></div>
<div><span class="k">起作用时间</span><span class="v">良好液压制动系可短至 <b>0.1 s</b> 或更短；真空助力或气压制动系 <b>0.3~0.9 s</b></span></div>
</div>
<div class="tip"><b>答题要点</b>：缩短制动距离的三条路——缩短人的反应（智能防撞）、缩短制动器起作用时间（改进结构、提高压力建立速度）、提高可利用的附着（ABS 用满 φ<sub>p</sub>、改善轮胎与路面）。</div>`
  });

  I.push({
    id: "t10", m: "theory", t: "制动方向稳定性：跑偏三原因与抱死顺序", s: 3,
    tag: "跑偏 侧滑 后轴先抱死 前轴先抱死 失去转向 转向节臂",
    src: S + " · P222–223",
    b: `<p><b>制动跑偏的三个原因</b></p>
<ol>
<li>左右车轮（尤其前轴左右转向轮）<b>制动器制动力不相等</b>——制造调整误差、间隙不均、摩擦片粘油、单边轮缸故障、左右胎压不均 → 产生绕质心的旋转力矩；</li>
<li>悬架导向杆系与转向系拉杆发生<b>运动干涉</b>——设计不合理（转向节上节臂球头销位置过高、钢板弹簧刚度过小），跑偏<b>总是朝同一方向</b>；</li>
<li>汽车<b>质心左右不对称</b>——载荷大的一侧地面制动力大。</li>
</ol>
<div class="warn"><b>抱死顺序决定后果（必背）</b><br>· <b>后轴先抱死 → 后轴侧滑</b>（最危险：高速时发生不规则回转，甚至调头）；<br>· 前轴先抱死 → 侧向力系数接近零，<b>失去转向能力</b>，沿弯道切线方向驶出；<br>· 前、后同时抱死 → 仍会失去转向能力。<br><b>结论</b>：首先不允许"只有后轮抱死或后轮先抱死"；其次尽量少出现"只有前轮抱死或前后同时抱死"；<b>最理想是前后轮都不抱死</b>——这就是 ABS 的立足点。</div>`
  });

  I.push({
    id: "t11", m: "theory", t: "操纵稳定性：侧偏、稳定性因数与侧翻阈值", s: 3,
    tag: "侧偏角 侧偏力 侧偏刚度 稳定性因数K 不足转向 过多转向 中性转向 特征车速 侧翻阈值 B/2hg",
    src: S + " · P204–212",
    b: `<div class="kv">
<div><span class="k">侧偏现象</span><span class="v">侧向力作用下弹性轮胎产生侧向变形，实际运动方向偏离车轮平面一个角度即<b>侧偏角 α</b>；引起的地面侧向反力称<b>侧偏力 F<sub>y</sub></b></span></div>
<div><span class="k">线性范围</span><span class="v">α &lt; 5° 时 F<sub>y</sub> = kα 线性；汽车正常行驶侧向加速度 <b>≤0.4g</b>、侧偏角 <b>≤4°~5°</b>。轿车轮胎侧偏刚度 k ≈ <b>28 000~80 000 N/rad</b></span></div>
</div>
<div class="fm"><div class="eq">稳态横摆角速度增益 <i>g</i><sub>s</sub> = <span class="fr"><b><i>u</i>/<i>L</i></b><u>1 + <i>Ku</i><sup>2</sup></u></span></div>
<div class="note">K 为<b>稳定性因数</b>（s²/m²）。<b>K=0 中性转向；K&gt;0 不足转向；K&lt;0 过多转向</b>。K 越大不足转向量越大。</div></div>
<div class="sym"><i>g</i><sub>s</sub> 稳态横摆角速度增益（1/s）：方向盘转 1°，车身转多快｜<i>u</i> 车速（m/s）｜<i>L</i> 轴距（m）｜<i>K</i> 稳定性因数（s²/m²）</div>
<div class="kv">
<div><span class="k">特征车速</span><span class="v">u<sub>ch</sub> = √(1/K)（不足转向，K&gt;0）：此时增益仅为同轴距中性转向车的<b>一半</b>；<b>u<sub>ch</sub> 越小 → 不足转向量越大</b></span></div>
<div><span class="k">临界车速</span><span class="v">u<sub>cr</sub> = 1/√|K|（过多转向，K&lt;0）：分母为 0、增益趋于无穷，<b>极微小转角就产生极大横摆角速度 → 易事故</b></span></div>
<div><span class="k">设计取向</span><span class="v">过多转向灵敏但<b>不安全</b>；中性转向兼顾但使用中可能转变为过多转向；故一般汽车均应具有<b>适度的不足转向</b>特性</span></div>
</div>
<div class="fm"><div class="eq">刚性汽车侧翻阈值 <span class="fr"><b><i>a</i><sub>y</sub></b><u><i>g</i></u></span> = <span class="fr"><b><i>B</i></b><u>2<i>h</i><sub>g</sub></u></span>　　一般式 <span class="fr"><b><i>a</i><sub>y</sub></b><u><i>g</i></u></span> = <span class="fr"><b><i>B</i>/2 + <i>h</i><sub>g</sub>β</b><u><i>h</i><sub>g</sub></u></span></div>
<div class="sym"><i>a</i><sub>y</sub> 侧向加速度（m/s²）｜<i>g</i> 重力加速度｜<i>B</i> 轮距（m）｜<i>h</i><sub>g</sub> 质心高度（m）｜<i>β</i> 路面横坡角（rad）</div>
<div class="note">侧翻阈值定义：弯道内侧车轮法向反力降为零时的侧向加速度。增大轮距 B、降低质心高度 h<sub>g</sub> 可提高抗侧翻能力；考虑悬架变形后阈值<b>约减小 5%</b>，瞬态侧翻阈值更小。轿车 1.1~1.7 g，重型货车仅 0.4~0.6 g。</div></div>`
  });

  I.push({
    id: "t12", m: "theory", t: "平顺性：三个响应量与评价方法", s: 3,
    tag: "平顺性 车身加速度 动挠度 相对动载 阻尼比 0.2 0.4 ISO2631 加权加速度 4 12.5Hz VDV",
    src: S + " · P197–203",
    b: `<p>平顺性 = 汽车吸收行驶中垂直振动的能力。振动系统可简化为<b>单质量系统</b>（车身质量 m<sub>2</sub> + 弹簧刚度 K + 减振器阻尼 C）。</p>
<div class="kv">
<div><span class="k">三个响应量</span><span class="v">① <b>车身加速度 z̈</b>（评价平顺性的主要指标）；② <b>悬架动挠度 f<sub>d</sub></b>（与限位行程配合，不当会撞限位块）；③ <b>车轮与路面间相对动载 F<sub>d</sub>/G</b>（影响附着与操稳，&gt;1 时车轮跳离地面）</span></div>
<div><span class="k">幅频三区</span><span class="v">低频区（λ≤0.75）车身几乎不动；<b>共振区</b>（0.75≤λ≤√2）幅值急剧放大，阻尼越小峰值越大；高频区（λ≥√2）振幅比&lt;1，悬架起减振作用</span></div>
<div><span class="k">阻尼比取值</span><span class="v">共振段与高频段效果相反 → 综合考虑取 <b>ζ = 0.2~0.4</b> 较合适</span></div>
</div>
<div class="tip"><b>ISO 2631 评价</b>：以<b>加权加速度均方根 a<sub>w</sub></b> 评价；峰值系数 &lt;9 用基本评价法，&gt;9 用辅助评价法（振动剂量值 <b>VDV</b>）。人体最敏感：椅面<b>垂直 4~12.5 Hz</b>（内脏共振 4~8 Hz、脊椎 8~12.5 Hz），<b>水平 0.5~2 Hz</b>。</div>
<div class="kv">
<div><span class="k">结构影响因素</span><span class="v">① 悬架刚度 K（决定固有频率 f<sub>0</sub>）——降低 f<sub>0</sub> 可显著减小车身加速度，但动挠度增大、限位行程受限，故<b>降低有限度</b>；② 弹性特性线性/非线性（变刚度悬架：空气弹簧、油气弹簧）；③ 阻尼（压缩行程取小、伸张行程取大）；④ 轮胎（增大断面、子午线、软胎冠）；⑤ 减小非悬挂质量、使 ε≈1</span></div>
</div>`
  });

  I.push({
    id: "t13", m: "theory", t: "通过性：几何参数、间隙失效与两个系数", s: 2,
    tag: "通过性 最小离地间隙 纵向通过半径 接近角 离去角 顶起 触头 托尾 TC TE",
    src: S + " · P212–216",
    b: `<p><b>间隙失效三型</b>：中间底部被顶住 = <b>顶起失效</b>；前端触及 = <b>触头失效</b>；尾部触及 = <b>托尾失效</b>。</p>
<div class="kv">
<div><span class="k">几何参数</span><span class="v">最小离地间隙 h<sub>min</sub>、纵向通过半径 ρ<sub>1</sub>、横向通过半径 ρ<sub>2</sub>、接近角 γ<sub>1</sub>、离去角 γ<sub>2</sub>、最小转弯直径 d<sub>min</sub>。ρ<sub>1</sub>、ρ<sub>2</sub> <b>越小</b>通过性越好；γ<sub>1</sub>、γ<sub>2</sub> <b>越大</b>越不易失效</span></div>
<div><span class="k">支承通过性</span><span class="v">牵引性系数 <b>TC = F<sub>T</sub>/G</b>（单位车重牵引力，越大越好）；牵引效率 <b>TE</b> = 驱动轮输出功率/输入功率（反映功率传递损失）</span></div>
</div>
<div class="tip"><b>改善通过性的措施</b>：降低胎压增大接地面积（越野车中央充气系 49~440 kPa）；越野花纹（宽而深、脱泥性好）；驱动轮装防滑链；<b>前后轮距相等</b>使轮辙重合以减少滚动阻力；使<b>前轮接地比压比后轮小 20%~30%</b> 时滚动阻力最小。电动车还可加大电机功率、改善低速起动与短时过载、四轮驱动提高附着。</div>`
  });

  I.push({
    id: "t14", m: "theory", t: "电动 vs 燃油：两大驱动优势（论述题金句）", s: 3,
    tag: "调速范围 1:20000 响应 5ms 500ms 两个数量级 短时过载3倍 四象限",
    src: S + " · P223–226",
    b: `<div class="tw"><table>
<thead><tr><th>对比项</th><th>发动机</th><th>电动机</th></tr></thead>
<tbody>
<tr><td>高效转矩转速区间</td><td>很窄（约 3000 r/min 附近）→ 必须配<b>庞大复杂变速机构</b></td><td>相当宽广，直接转矩控制下调速范围可达 <b>1:20 000</b>，远高于行驶要求</td></tr>
<tr><td>转矩响应</td><td>约 <b>500 ms</b></td><td>约 <b>5 ms</b>，<b>高出两个数量级</b></td></tr>
<tr><td>短时过载</td><td>无"拼刺"激发力</td><td>可达额定值 <b>3 倍以上</b>（数分钟），满足起步、超车、爬短坡</td></tr>
<tr><td>能量回收</td><td>不能</td><td>可运行于四象限，降速/下坡<b>发电回馈</b></td></tr>
</tbody></table></div>
<div class="tip"><b>论述可用的因果链</b>：电机调速宽 → 可省变速器 → 减重、减摩擦损耗、腾空间装电池；响应快两个数量级 → 才能实现 ABS/ASR/ESP 那种毫秒级点刹与转矩修正；可四象限 → 能量回收 → 提高续驶里程。</div>
<p><b>电动汽车动力性四大影响因素</b>：① 驱动电机特性（最大功率、最大转矩、调速特性）；② 车载能源；③ 汽车结构参数；④ 使用条件。</p>`
  });

  C.push(
    { id: "tc1", m: "theory", q: "汽车行驶方程式与四个阻力？", a: "F_t = F_f + F_w + F_i + F_j。F_f = fG；F_w = C_D·A·u_a²/21.15；F_i = G sinα ≈ Gi；F_j = δm·du/dt。" },
    { id: "tc2", m: "theory", q: "车速加倍时空气阻力与阻力功率各变几倍？", a: "空气阻力与车速<b>平方</b>成正比 → 4 倍；阻力功率 ∝ 车速三次方 → <b>8 倍</b>。所以最高车速指标提高会使电机功率需求以三次方增长。" },
    { id: "tc3", m: "theory", q: "驱动条件与附着条件分别是什么？合起来的名称？", a: "驱动条件 F_t ≥ F_f+F_w+F_i（必要条件）；附着条件 F_t ≤ F_zφ·φ（充分条件）；合称<b>驱动-附着条件</b>：F_f+F_w+F_i ≤ F_t ≤ F_zφ·φ。" },
    { id: "tc4", m: "theory", q: "为什么前驱轿车的质心要偏前布置？", a: "前驱要满足附着条件，需增大驱动轮（前轮）法向反力。一般要求<b>满载时前轴负荷在 55% 以上</b>，以提高附着利用率。" },
    { id: "tc5", m: "theory", q: "峰值附着系数出现在多大滑动率？ABS 为何控制在此附近？", a: "s = <b>15%~20%</b>。此处制动力系数达峰值 φ_p，同时侧向力系数仍较高 → 制动距离最短且保留转向/抗侧滑能力。" },
    { id: "tc6", m: "theory", q: "制动时后轴先抱死会怎样？前轴先抱死呢？", a: "后轴先抱死 → <b>后轴侧滑</b>，高速时发生不规则回转甚至调头，最危险；前轴先抱死 → 侧向力系数接近零，<b>失去转向能力</b>，沿弯道切线驶出。故绝不允许后轮先抱死。" },
    { id: "tc7", m: "theory", q: "制动距离由哪三段构成？各段时间大致多少？", a: "驾驶员反应段（t₁=0.5~1.0 s）+ 制动器起作用段（t₂=0.2~0.5 s，良好液压可短至 0.1 s，真空助力/气压 0.3~0.9 s）+ 持续制动段。前两段合称空驶时间，无制动效果。" },
    { id: "tc8", m: "theory", q: "稳定性因数 K 的符号与转向特性的关系？", a: "K=0 中性转向；<b>K&gt;0 不足转向</b>（增益小于中性，g_s=u/L/(1+Ku²)）；K&lt;0 过多转向（有临界车速 u_cr=1/√|K|）。一般汽车应具<b>适度不足转向</b>。" },
    { id: "tc9", m: "theory", q: "特征车速与临界车速分别属于哪种转向特性？", a: "<b>特征车速</b> u_ch=√(1/K) 属<b>不足转向</b>，此时增益为中性转向的一半；<b>临界车速</b> u_cr=1/√|K| 属<b>过多转向</b>，此时增益趋于无穷、极易失稳。" },
    { id: "tc10", m: "theory", q: "刚性汽车侧翻阈值公式？如何提高抗侧翻能力？", a: "a_y/g = B/(2h_g)（水平路面）。增大<b>轮距 B</b>、降低<b>质心高度 h_g</b>。考虑悬架变形后阈值约减小 5%，瞬态阈值更小。" },
    { id: "tc11", m: "theory", q: "平顺性分析的三个响应量？阻尼比取值？", a: "车身加速度 z̈（主要指标）、悬架动挠度 f_d、车轮相对动载 F_d/G。阻尼比综合取 <b>ζ=0.2~0.4</b>。" },
    { id: "tc12", m: "theory", q: "人体对振动最敏感的频段？", a: "椅面<b>垂直 4~12.5 Hz</b>（内脏 4~8 Hz、脊椎 8~12.5 Hz 共振）；<b>水平 0.5~2 Hz</b>。评价用 ISO 2631 加权加速度均方根 a_w；峰值系数 &gt;9 时改用 VDV。" },
    { id: "tc13", m: "theory", q: "电动机相对发动机的两大驱动优势？", a: "① 高效产生转矩的<b>转速范围宽</b>（调速范围可达 1:20 000），可省去复杂变速机构；② <b>转矩响应快两个数量级</b>（发动机约 500 ms，电动机约 5 ms）。另有短时过载 3 倍以上、可四象限运行回收能量。" }
  );
})();
