/* 模块：符号与术语速查（解决"字母看不懂"） */
(function () {
  var I = window.EV.items, C = window.EV.cards;

  I.push({
    id: "g1", m: "gloss", t: "电与磁：公式里的字母都是什么", s: 3,
    tag: "符号 单位 电压 电流 电阻 功率 磁通 磁感应强度 转矩 转速 极对数 支路对数 Ce CT",
    src: "全书通用",
    b: `<div class="plain">公式看不懂，多半不是公式难，而是<b>没告诉你每个字母指什么、单位是什么</b>。先把这一页当字典：看到不认识的字母就回来查。</div>
<p><b>电学量</b></p>
<div class="gloss">
<div><span class="k"><i>U</i></span><span class="v">电压 / 端电压，单位 <b>V</b>（伏）。电池两端叫端电压，加在电机上的叫电源电压</span></div>
<div><span class="k"><i>E</i>、<i>E</i><sub>a</sub></span><span class="v">电动势，单位 <b>V</b>。电机旋转时绕组自己"发"出来的电压；下标 a = armature（电枢），所以 <i>E</i><sub>a</sub> 专指<b>电枢电动势</b></span></div>
<div><span class="k"><i>I</i></span><span class="v">电流，单位 <b>A</b>（安）。<i>I</i><sub>a</sub> = 电枢电流；<i>I</i><sub>f</sub> = 励磁电流（f = field，磁场）；<i>I</i><sub>2</sub>′ = 折算到定子侧的转子电流</span></div>
<div><span class="k"><i>R</i></span><span class="v">电阻，单位 <b>Ω</b>（欧）。<i>R</i><sub>a</sub> = 电枢绕组电阻；<i>R</i><sub>c</sub> = 人为串进去的附加电阻；<i>R</i><sub>i</sub> = 电池内阻</span></div>
<div><span class="k"><i>P</i></span><span class="v">功率，单位 <b>W</b> 或 <b>kW</b>。<i>P</i><sub>1</sub> 输入功率、<i>P</i><sub>2</sub> 输出功率、<i>P</i><sub>e</sub> 额定功率。注意：<b>小写 <i>p</i> 是极对数，不是功率</b></span></div>
<div><span class="k"><i>η</i></span><span class="v">效率，无量纲（0~1 或 %）。<i>η</i> = 输出/输入 = <i>P</i><sub>2</sub>/<i>P</i><sub>1</sub></span></div>
</div>
<p><b>磁学量</b></p>
<div class="gloss">
<div><span class="k"><i>Φ</i></span><span class="v">每极磁通，单位 <b>Wb</b>（韦伯）。可以理解成"穿过一个磁极的磁力线总根数"，它决定电机有多大劲</span></div>
<div><span class="k"><i>B</i></span><span class="v">磁感应强度，单位 <b>T</b>（特斯拉）。磁场的"浓密程度"。⚠️ 车辆部分里 <i>B</i> 又表示<b>轮距</b>，看上下文</span></div>
<div><span class="k"><i>H</i></span><span class="v">磁场强度，单位 <b>A/m</b>。由电流产生，是"施加"的；<i>B</i> 是材料里的"响应"</span></div>
<div><span class="k"><i>μ</i></span><span class="v">磁导率，材料导磁能力的度量；<i>μ</i><sub>r</sub> 为相对磁导率（铁磁材料可达几千）</span></div>
<div><span class="k"><i>B</i><sub>r</sub> / <i>H</i><sub>C</sub></span><span class="v">剩磁 / 矫顽力（永磁材料）。<i>B</i><sub>r</sub>：外磁场撤掉后还剩多少磁；<i>H</i><sub>C</sub>：要用多强的反向磁场才能把它消掉</span></div>
</div>
<p><b>机械量</b></p>
<div class="gloss">
<div><span class="k"><i>T</i></span><span class="v">转矩，单位 <b>N·m</b>（牛·米）。"转的劲"。<i>T</i><sub>L</sub> 负载转矩、<i>T</i><sub>μ</sub> 制动力矩。⚠️ 别和磁感应强度的 T（特斯拉）混</span></div>
<div><span class="k"><i>n</i></span><span class="v">转速，单位 <b>r/min</b>（转/分）。<i>n</i><sub>0</sub> 理想空载转速（直流）或同步转速（交流）、<i>n</i><sub>e</sub> 额定转速</span></div>
<div><span class="k"><i>ω</i></span><span class="v">角速度，单位 <b>rad/s</b>。与转速换算：<i>ω</i> = 2π<i>n</i>/60</span></div>
<div><span class="k"><i>f</i></span><span class="v">频率，单位 <b>Hz</b>。⚠️ 在车辆部分 <i>f</i> 还表示<b>滚动阻力系数</b>（无量纲），同一个字母两种身份</span></div>
<div><span class="k"><i>J</i></span><span class="v">转动惯量，单位 <b>kg·m²</b>。转起来"难不难停"</span></div>
</div>
<p><b>直流电机公式里三个最容易卡住的符号</b></p>
<div class="gloss">
<div><span class="k"><i>p</i></span><span class="v"><b>极对数</b> = 磁极数 ÷ 2。一台 4 极电机 <i>p</i> = 2。不是功率！</span></div>
<div><span class="k"><i>N</i></span><span class="v"><b>电枢总导体数</b>：整个电枢上所有有效导线的根数（不是匝数，一匝 = 2 根导体）</span></div>
<div><span class="k"><i>a</i></span><span class="v"><b>支路对数</b> = 并联支路数 ÷ 2。单叠绕组 <i>a</i> = <i>p</i>；单波绕组 <i>a</i> = 1</span></div>
<div><span class="k"><i>C</i><sub>e</sub> / <i>C</i><sub>T</sub></span><span class="v"><b>电动势常数 / 转矩常数</b>，由电机结构决定（<i>C</i><sub>e</sub> = <i>pN</i>/60<i>a</i>，<i>C</i><sub>T</sub> = <i>pN</i>/2π<i>a</i>）。<b>只要电机造好，这两个数就是定值</b>，所以公式里当成常数看就行</span></div>
</div>
<div class="tip">看到 <i>C</i><sub>e</sub>、<i>C</i><sub>T</sub> 不用怕：<b>它们只是"结构打包后的一个系数"</b>。真正在变的只有电压 <i>U</i>、磁通 <i>Φ</i>、电流 <i>I</i><sub>a</sub>、转速 <i>n</i>。</div>`
  });

  I.push({
    id: "g2", m: "gloss", t: "车辆与力学：公式里的字母都是什么", s: 3,
    tag: "符号 驱动力 滚动阻力 空气阻力 坡度 加速阻力 附着系数 滑移率 轴距 轮距 质心",
    src: "教材第五章",
    b: `<div class="plain">车辆公式的字母更"挤"：同一个 <i>f</i> 既可能是频率也可能是滚阻系数，<i>B</i> 既可能是磁感应强度也可能是轮距。<b>读之前先认清这一页，后面就不会串。</b></div>
<div class="gloss">
<div><span class="k"><i>F</i><sub>t</sub></span><span class="v"><b>驱动力</b>（N）：地面推着车往前走的力。下标 t = traction（牵引）</span></div>
<div><span class="k"><i>F</i><sub>f</sub></span><span class="v"><b>滚动阻力</b>（N）：轮胎压在地上滚动时的"阻力"，<i>F</i><sub>f</sub> = <i>fG</i></span></div>
<div><span class="k"><i>F</i><sub>w</sub></span><span class="v"><b>空气阻力</b>（N）：风阻。下标 w = wind</span></div>
<div><span class="k"><i>F</i><sub>i</sub></span><span class="v"><b>坡度阻力</b>（N）：上坡时重力沿坡往后的分力。下标 i 来自坡度 <i>i</i></span></div>
<div><span class="k"><i>F</i><sub>j</sub></span><span class="v"><b>加速阻力</b>（N）：惯性力。<b>注意：车加速时它是阻力，减速时它变成动力</b></span></div>
<div><span class="k"><i>F</i><sub>z</sub></span><span class="v">地面对车轮的<b>法向反力</b>（N），即"压在地上的那份重量"；<i>F</i><sub>zφ</sub> 特指作用在<b>驱动轮</b>上的那部分</span></div>
<div><span class="k"><i>F</i><sub>φ</sub></span><span class="v"><b>附着力</b>（N）= <i>F</i><sub>z</sub>·<i>φ</i>。轮胎与地面之间"最多能传多大切向力"，超过就打滑</span></div>
<div><span class="k"><i>G</i> / <i>m</i> / <i>g</i></span><span class="v">重力（N）/ 质量（kg）/ 重力加速度（9.8 m/s²），<i>G</i> = <i>mg</i></span></div>
<div><span class="k"><i>φ</i></span><span class="v"><b>附着系数</b>（无量纲）：干燥沥青约 0.8~0.9，压紧雪地 0.2，冰面 0.1。⚠️ 同一个 φ 在电学里是相位角</span></div>
<div><span class="k"><i>u</i> / <i>u</i><sub>a</sub></span><span class="v">车速。<i>u</i> 用 <b>m/s</b>；<i>u</i><sub>a</sub> 用 <b>km/h</b>（a = automobile）。换算：1 m/s = 3.6 km/h</span></div>
<div><span class="k"><i>i</i></span><span class="v"><b>坡度</b> = 升高 ÷ 水平距离 = tan<i>α</i>，用 % 表示。30% 坡度 ≈ 16.5°</span></div>
<div><span class="k"><i>α</i></span><span class="v">坡道角（°）；在操稳里又指<b>侧偏角</b>；在转向里指<b>转向轮偏转角</b></span></div>
<div><span class="k"><i>δ</i></span><span class="v"><b>旋转质量换算系数</b>（&gt;1）：把车轮、电机转子等"转动的惯性"折算成"平移的等效质量"。⚠️ 在电机里 δ 又是<b>静差率</b></span></div>
<div><span class="k"><i>C</i><sub>D</sub></span><span class="v"><b>空气阻力系数</b>（无量纲）：轿车 0.3 左右，越好越接近 0.2。D = drag</span></div>
<div><span class="k"><i>A</i></span><span class="v"><b>迎风面积</b>（m²）：车头正投影面积，约等于 0.8×车宽×车高</span></div>
<div><span class="k"><i>L</i> / <i>B</i></span><span class="v"><b>轴距</b>（前后轮中心距，m）/ <b>轮距</b>（左右轮中心距，m）。⚠️ <i>B</i> 在电学里是磁感应强度</span></div>
<div><span class="k"><i>h</i><sub>g</sub></span><span class="v"><b>质心高度</b>（m）：越低越不容易侧翻</span></div>
<div><span class="k"><i>s</i></span><span class="v"><b>滑动率</b>（0~100%）：车轮"抱死拖着走"的程度；⚠️ 在电机里 s 是<b>转差率</b>，公式长得像、含义不同</span></div>
<div><span class="k"><i>β</i></span><span class="v">质心到后轴的距离（m）；在转向里指<b>内转向轮偏转角</b>；在制动里指<b>制动力分配比</b>。⚠️ 在直流电机里 β 又是<b>机械特性斜率</b></span></div>
<div><span class="k"><i>K</i></span><span class="v"><b>稳定性因数</b>（s²/m²）：&gt;0 不足转向、=0 中性、&lt;0 过多转向</span></div>
<div><span class="k"><i>ζ</i> / <i>λ</i></span><span class="v">阻尼比 / 频率比（<i>λ</i> = 激励频率 ÷ 固有频率），平顺性分析用</span></div>
</div>
<div class="warn"><b>三组"同名不同义"，考试最容易糊</b>：<br>· <i>f</i> → 频率（电机）／滚动阻力系数（车辆）<br>· <i>B</i> → 磁感应强度（电机）／轮距（车辆）<br>· <i>δ</i> → 静差率（电机）／旋转质量换算系数（车辆）<br>· <i>s</i> → 转差率（电机）／滑动率（制动）</div>`
  });

  I.push({
    id: "g3", m: "gloss", t: "电机术语人话词典", s: 3,
    tag: "术语 机械特性 特性软硬 恒转矩 恒功率 基速 弱磁 飞车 换向 极距 转差率 矢量控制 四象限",
    src: "02 电机",
    b: `<div class="plain">电机课本最爱用"特性软/硬""恒转矩/恒功率"这类词，其实都是<b>一句话能说清的事</b>。下面把它翻译成人话。</div>
<div class="gloss">
<div><span class="k">机械特性</span><span class="v">就是"<b>转速随转矩怎么变</b>"的一条线：<b>纵轴转速 n、横轴转矩 T</b>（和四象限图是同一套坐标）。电机有劲时转得快还是慢，看这条线</span></div>
<div><span class="k">特性"硬"</span><span class="v">负载加大时<b>转速几乎不掉</b>（线很陡、很平）。适合需要稳定转速的场合</span></div>
<div><span class="k">特性"软"</span><span class="v">负载一加大<b>转速就明显往下掉</b>（线很缓）。串励电机就是这样，起步劲大但速度不稳</span></div>
<div><span class="k">恒转矩调速</span><span class="v">调速过程中<b>能输出的最大转矩不变</b>（比如降压调速）。因此功率随转速成正比变化：转得慢，出力也小</span></div>
<div><span class="k">恒功率调速</span><span class="v">调速过程中<b>功率不变</b>，转速升高则转矩按 1/n 下降（比如弱磁调速）。像汽车高速巡航：不需要大劲，但要转得快</span></div>
<div><span class="k">基速</span><span class="v">"分界转速"，通常就是额定转速。<b>基速以下用恒转矩，基速以上用恒功率</b></span></div>
<div><span class="k">弱磁</span><span class="v">故意把磁场 <i>Φ</i> 调小，好让电机转得更快（因为 <i>n</i> ∝ <i>U</i>/<i>Φ</i>）。代价是转矩变小</span></div>
<div><span class="k">飞车</span><span class="v">励磁突然消失（<i>Φ</i>→0）导致转速飙到极高、机械解体。<b>所以弱磁回路必须做互锁保护</b></span></div>
<div><span class="k">换向</span><span class="v">直流电机里，电枢绕组从"接这一极"切换到"接另一极"的瞬间，电流方向要翻转，会打火花——这就是<b>电刷的毛病</b></span></div>
<div><span class="k">换向极</span><span class="v">主磁极之间加的小磁极，专门用来<b>把换向火花压下去</b></span></div>
<div><span class="k">电枢</span><span class="v">电机里"转起来产生转矩"的那部分绕组；直流电机中在转子上，永磁无刷电机中在定子上（"里翻外"）</span></div>
<div><span class="k">励磁</span><span class="v">"建立磁场"这件事。用电流建磁场叫电励磁；用永磁体建磁场叫永磁励磁</span></div>
<div><span class="k">他励/并励/串励/复励</span><span class="v">励磁绕组<b>怎么接</b>：单独供电=他励；与电枢并联=并励；与电枢串联=串励；两套都有=复励</span></div>
<div><span class="k">积复励/差复励</span><span class="v">复励时两个绕组产生的磁场<b>方向相同</b>（叠加）叫积复励；<b>相反</b>（相消）叫差复励</span></div>
<div><span class="k">转差率 <i>s</i></span><span class="v">异步电机"转得比磁场慢多少"：<i>s</i> = (<i>n</i><sub>0</sub>−<i>n</i>)/<i>n</i><sub>0</sub>。<b>s=0 表示跟磁场完全同步（那就没转矩了）</b>，正常约 1%~6%</span></div>
<div><span class="k">同步转速 <i>n</i><sub>0</sub></span><span class="v">旋转磁场的转速，<i>n</i><sub>0</sub> = 60<i>f</i>/<i>p</i>。转子永远追不上它（否则不产生转矩），只能"略慢一点"</span></div>
<div><span class="k">矢量控制</span><span class="v">把交流电机的电流"拆成两股"：一股专门建磁场、一股专门出转矩，<b>像直流电机那样分开管</b>。不拆就调不好</span></div>
<div><span class="k">逆变</span><span class="v">直流 → 交流。车上电池是直流，交流电机要交流，所以必须有逆变器</span></div>
<div><span class="k">PWM</span><span class="v">脉宽调制：用"快速开关"把直流斩成近似正弦的交流，<b>开关得越密，波形越接近正弦</b></span></div>
<div><span class="k">四象限</span><span class="v"><b>纵轴转速 n、横轴负载转矩 T<sub>L</sub></b>分成四块：正转+出力=Ⅰ（正向电动），正转+制动=Ⅱ（<b>下坡回馈就在这</b>），反转+出力=Ⅲ（反向电动），反转+制动=Ⅳ</span></div>
<div><span class="k">再生制动</span><span class="v">让电机反着当发电机用，把车的动能变回电充进电池，<b>而不是变成刹车片的热</b></span></div>
<div><span class="k">转矩脉动</span><span class="v">输出的转矩忽大忽小（一顿一顿），会引起振动和噪声。开关磁阻电机最严重，正弦波驱动的永磁同步最小</span></div>
<div><span class="k">双凸极</span><span class="v">定子和转子上<b>都开有凸出的齿</b>（像齿轮），开关磁阻电机就是这种结构</span></div>
<div><span class="k">磁阻最小原理</span><span class="v">磁力线总想走"阻力最小"的路，所以转子凸极会被拉到与通电定子磁极<b>对齐</b>的位置——这就是开关磁阻电机转起来的唯一原因</span></div>
<div><span class="k">软磁 / 硬磁</span><span class="v">软磁：<b>很容易充磁也很容易退磁</b>（做铁心）；硬磁：<b>充上就很难退</b>（做永久磁铁）。判据是矫顽力 <i>H</i><sub>C</sub> 大不大</span></div>
<div><span class="k">磁能积 <i>BH</i><sub>max</sub></span><span class="v">永磁材料"磁性能的性价比"：<b>同样强的磁场，用它只需要更小体积</b>。钕铁硼最高</span></div>
<div><span class="k">SPM / IPM</span><span class="v">永磁体贴在转子<b>表面</b>（Surface）/ 埋进转子<b>内部</b>（Interior）。内置式能多出一份"磁阻转矩"，更省电、更易弱磁</span></div>
</div>`
  });

  I.push({
    id: "g4", m: "gloss", t: "电池与车辆术语人话词典", s: 3,
    tag: "术语 比能量 比功率 SOC DOD 时率 倍率 记忆效应 摇椅式 双电层 附着 滑移率 不足转向",
    src: "01 结构与电池 / 教材第五章",
    b: `<div class="plain">"比能量决定跑多远、比功率决定跑多快"——这类判断句是考试的送分点，但前提是知道这两个词到底在说什么。</div>
<div class="gloss">
<div><span class="k">比能量</span><span class="v">每公斤电池能存多少电（Wh/kg）。<b>决定"一次充电能跑多远"</b>——像油箱大小</span></div>
<div><span class="k">比功率</span><span class="v">每公斤电池能瞬间放出多大功率（W/kg）。<b>决定"加速、爬坡、最高车速"</b>——像油管粗细</span></div>
<div><span class="k">容量（Ah）</span><span class="v">能放出多少<b>电量</b>；能量（Wh）= 容量 × 平均电压，才是"能干多少活"</span></div>
<div><span class="k">SOC</span><span class="v">荷电状态，剩下的电占满电的百分比，<b>就是"电量百分比"</b></span></div>
<div><span class="k">DOD</span><span class="v">放电深度，已经放掉了百分之多少。<b>DOD = 100% − SOC</b></span></div>
<div><span class="k">时率 / 倍率</span><span class="v">放电快慢的两种说法。时率："几小时放完"（2 时率 = 2 h 放完）；倍率："几倍额定电流"（2C = 2 倍电流）</span></div>
<div><span class="k">终止电压</span><span class="v">放电放到"不能再放"的最低电压。再放就会伤电池</span></div>
<div><span class="k">内阻</span><span class="v">电池自己的"内部电阻"。<b>内阻越大，一放电电压就掉得越狠、发热越多</b>。分欧姆内阻（结构决定）与极化内阻（反应跟不上）</span></div>
<div><span class="k">自放电</span><span class="v">放着不用也会慢慢掉电</span></div>
<div><span class="k">记忆效应</span><span class="v">镍镉电池"记住"了你上次的放电深度，下次到那儿就"以为没电了"。成因是内部<b>长晶枝</b>，用脉冲充电可消除</span></div>
<div><span class="k">摇椅式</span><span class="v">锂离子电池的充放电机理：锂离子在正负极之间<b>来回嵌入脱出</b>，像坐摇椅，不破坏晶体结构，所以寿命长</span></div>
<div><span class="k">双电层</span><span class="v">电极表面与电解液之间形成的"两层电荷"，本质是<b>物理吸附、不反应</b>，所以超级电容能瞬间充放、寿命极长，但存不了多少电</span></div>
<div><span class="k">削峰填谷</span><span class="v">电网白天不够用、夜里用不完，用储能装置把夜里的电存下来白天用</span></div>
<div><span class="k">附着系数 <i>φ</i></span><span class="v">轮胎与地面"抓得住"的程度，0~1 之间。<b>驱动、制动能传的力都不能超过 <i>φ</i>×正压力</b></span></div>
<div><span class="k">滑移率 <i>s</i></span><span class="v">车轮「滚」与「拖」的比例。<b>s=0 纯滚，s=100% 完全抱死拖行</b>；15%~20% 时制动力最大还能转向（ABS 就守这个区间）</span></div>
<div><span class="k">不足转向</span><span class="v">车头"推"着往外跑，转弯半径变<b>大</b>。绝大多数民用车的设定，因为<b>安全</b>（不会甩尾）</span></div>
<div><span class="k">过多转向</span><span class="v">车尾往外甩，转弯半径变<b>小</b>，容易打转失控</span></div>
<div><span class="k">侧偏角</span><span class="v">轮胎被侧向力推得"斜着走"，实际行进方向与轮子朝向的夹角</span></div>
<div><span class="k">静差率 δ</span><span class="v">电机从空载到满载，<b>转速掉了百分之几</b>。δ 越小说明转速越稳（特性越硬）</span></div>
<div><span class="k">混合度</span><span class="v">电机功率占发动机功率的比例，用来区分微混/轻混/中混/重混</span></div>
</div>`
  });

  C.push(
    { id: "gc1", m: "gloss", q: "直流电机公式里的 p、N、a 分别是什么？", a: "p = <b>极对数</b>（磁极数÷2）；N = <b>电枢总导体数</b>（所有有效导线根数）；a = <b>支路对数</b>（并联支路数÷2）。三者都由电机结构决定，造好后是常数。" },
    { id: "gc2", m: "gloss", q: "C_e 和 C_T 到底要不要记住？", a: "不用记数值，只要知道它们是<b>由结构决定的常数</b>（C_e = pN/60a，C_T = pN/2πa），且 <b>C_T = 9.55C_e</b>。公式里当常数看即可。" },
    { id: "gc3", m: "gloss", q: "I_f 和 I_a 的 f、a 分别代表什么？", a: "<b>f = field（磁场）</b>→ I_f 是励磁电流，负责建立磁通 Φ；<b>a = armature（电枢）</b>→ I_a 是电枢电流，负责产生转矩。两者分开控制正是他励电机的优势。" },
    { id: "gc4", m: "gloss", q: "F = Bli 里三个字母和单位？", a: "B 磁感应强度（T）、l 导体在磁场中的有效长度（m）、i 电流（A），乘积就是电磁力 F（N）。方向用<b>左手定则</b>。" },
    { id: "gc5", m: "gloss", q: "e = Blv 里 v 是什么？和 F = Bli 什么关系？", a: "v 是导体<b>切割磁力线的速度</b>（m/s），方向用<b>右手定则</b>。两个公式是同一件事的两面：通电导体在磁场里受力（电动），导体在磁场里运动就产生电动势（发电）。" },
    { id: "gc6", m: "gloss", q: "特性「软」和「硬」分别什么意思？", a: "<b>硬</b>：负载加大转速几乎不掉（机械特性陡）；<b>软</b>：负载一加大转速明显下降（机械特性平缓）。串励电机特性软、并励/他励特性硬。" },
    { id: "gc7", m: "gloss", q: "同一个字母 B 在不同章节是什么意思？", a: "电机里 <i>B</i> = <b>磁感应强度</b>（T）；车辆里 <i>B</i> = <b>轮距</b>（m）。同理 <i>f</i>（频率/滚阻系数）、<i>δ</i>（静差率/旋转质量系数）、<i>s</i>（转差率/滑动率）都要看上下文。" },
    { id: "gc8", m: "gloss", q: "转差率和滑动率有什么区别？", a: "<b>转差率</b>（异步电机）：转子比旋转磁场慢多少，s=(n₀−n)/n₀，正常 1%~6%；<b>滑动率</b>（制动/驱动）：车轮「滚」与「拖」的比例，0~100%。公式形式相似，物理对象完全不同。" }
  );
})();
