/* 模块六：速记 · 缩写 · 数字 · 易混 · 答题 */
(function () {
  var I = window.EV.items, C = window.EV.cards;
  var S = "综合";

  I.push({
    id: "q1", m: "quick", t: "英文缩写全表（考场认词用）", s: 3,
    tag: "缩写 ABS ASR TCS ESP VDC VSC EBD AYC EDS ECSS CCS ACC CWS CIS EPS SRM SRD PMSM BLDCM SOC DOD ECU PWM DSP MIF CCD",
    src: S + " · 全书缩写",
    b: `<div class="tw"><table>
<thead><tr><th>缩写</th><th>全称</th><th>中文</th></tr></thead>
<tbody>
<tr><td><b>BEV</b></td><td>Battery Electric Vehicle</td><td>纯电动汽车</td></tr>
<tr><td><b>HEV</b></td><td>Hybrid Electric Vehicle</td><td>混合动力电动汽车</td></tr>
<tr><td><b>PHEV</b></td><td>Plug-in HEV</td><td>插电式混合动力</td></tr>
<tr><td><b>FCEV</b></td><td>Fuel Cell Electric Vehicle</td><td>燃料电池电动汽车</td></tr>
<tr><td><b>ABS</b></td><td>Anti-lock Braking System</td><td>防抱死制动系统</td></tr>
<tr><td><b>ASR / TCS</b></td><td>Anti Slip Regulation / Traction Control System</td><td>驱动防滑转控制 / 牵引力控制</td></tr>
<tr><td><b>ESP / VDC / VSC</b></td><td>Electronic Stability Program / Vehicle Dynamic Control / Vehicle Stability Control</td><td>电子稳定系统</td></tr>
<tr><td><b>EBD</b></td><td>Electric Brake-force Distribution</td><td>电子制动力分配</td></tr>
<tr><td><b>AYC</b></td><td>Active Yaw Control</td><td>主动车身横摆控制</td></tr>
<tr><td><b>BAS</b></td><td>Brake Assist System</td><td>制动助力系统</td></tr>
<tr><td><b>EDS</b></td><td>Electronic Differential System</td><td>电子差速系统</td></tr>
<tr><td><b>EPS</b></td><td>Electric Power Steering</td><td>电动助力转向</td></tr>
<tr><td><b>2WS / 4WS</b></td><td>2/4 Wheels Steering</td><td>两轮 / 四轮转向</td></tr>
<tr><td><b>4WD</b></td><td>4 Wheels Driving</td><td>四轮驱动</td></tr>
<tr><td><b>ECSS</b></td><td>Electronic Controlled Suspension System</td><td>电子控制悬架系统</td></tr>
<tr><td><b>CCS</b></td><td>Cruise Control System</td><td>巡航控制系统</td></tr>
<tr><td><b>ACC</b></td><td>Adaptive Cruise Control</td><td>自适应巡航控制</td></tr>
<tr><td><b>CWS</b></td><td>Collision Warning Systems</td><td>防碰撞预警系统</td></tr>
<tr><td><b>CIS</b></td><td>Collision Intervention Systems</td><td>防碰撞干预系统</td></tr>
<tr><td><b>SRM / SRD</b></td><td>Switched Reluctance Motor / Drive</td><td>开关磁阻电机 / 驱动系统</td></tr>
<tr><td><b>DSRM</b></td><td>Doubly Salient Reluctance Machine</td><td>双凸极磁阻电机</td></tr>
<tr><td><b>DSPM</b></td><td>Doubly Salient Permanent Magnet</td><td>双凸极永磁电机</td></tr>
<tr><td><b>BLDCM</b></td><td>Brushless DC Motor</td><td>永磁无刷直流电机（矩形波）</td></tr>
<tr><td><b>PMSM</b></td><td>Permanent Magnet Synchronous Motor</td><td>永磁交流同步电机（正弦波）</td></tr>
<tr><td><b>IPM / SPM / ITPM</b></td><td>Interior / Surface / Inset PM</td><td>内置式 / 表面式 / 镶嵌式永磁转子</td></tr>
<tr><td><b>PEMFC</b></td><td>Proton Exchange Membrane FC</td><td>质子交换膜燃料电池</td></tr>
<tr><td><b>AFC / SOFC / PAFC / MCFC</b></td><td>Alkaline / Solid Oxide / Phosphoric Acid / Molten Carbonate FC</td><td>碱性 / 固体氧化物 / 磷酸型 / 熔融碳酸盐燃料电池</td></tr>
<tr><td><b>SOC / DOD</b></td><td>State of Charge / Depth of Discharge</td><td>荷电状态 / 放电深度</td></tr>
<tr><td><b>ECU</b></td><td>Electronic Control Unit</td><td>电子控制单元</td></tr>
<tr><td><b>PWM</b></td><td>Pulse Width Modulation</td><td>脉宽调制</td></tr>
<tr><td><b>MIF</b></td><td>Multi-sensor Information Fusion</td><td>多传感信息融合</td></tr>
<tr><td><b>CCD</b></td><td>Charge Coupled Device</td><td>电荷耦合器件（摄像）</td></tr>
<tr><td><b>FRP / SMC / CFRP / GFRP / FRM</b></td><td>纤维增强塑料 / 片状模压 / 碳纤维 / 玻璃钢 / 纤维增强金属</td><td>轻量化材料</td></tr>
</tbody></table></div>`
  });

  I.push({
    id: "q2", m: "quick", t: "关键数字速查（按主题）", s: 3,
    tag: "数字 汇总 0.15 0.2 35 40 60 5% 15% 95% 150m 10mm",
    src: S + " · 讲义全篇",
    b: `<div class="tw"><table>
<thead><tr><th>主题</th><th>数字</th></tr></thead>
<tbody>
<tr><td>混合度分级</td><td>≤5% 微 / 5~15% 轻 / 15~40% 中 / &gt;40% 重</td></tr>
<tr><td>FCEV 效率</td><td>综合 34%（内燃机 11%）；电池组额定 60%、部分功率 70%、过载 50~55%、短时过载 200%；单体 1 V；重整起动 &gt;10 min</td></tr>
<tr><td>铅酸</td><td>单体 2.0 V；最佳电解液温度 30~40 ℃；快充 1.5~3 倍电流，单体 2.4 V 转正常充电</td></tr>
<tr><td>锂系</td><td>锂电极电位 −3.045 V；锂空理论 5210 / 11140 Wh/kg；磷酸铁锂寿命 2000 次</td></tr>
<tr><td>镍氢</td><td>单体 1.2 V；价格 5~8 倍于铅酸；寿命 600 次</td></tr>
<tr><td>超级电容</td><td>单体 1~3.0 V；比功率 &gt;1 kW/kg；能量密度 2.1 Wh/kg、2.7 Wh/L；寿命 &gt;1 万次（极限 10 万）</td></tr>
<tr><td>飞轮</td><td>200 000 r/min</td></tr>
<tr><td>调速</td><td>转速因子 x：永磁 2 / 异步 4 / 开关磁阻 6；弱磁 1~2 倍（特制 3~4 倍）</td></tr>
<tr><td>异步电机</td><td>额定 s≈1~6%；起动电流 4~7 倍、转矩 1~1.5 倍；工频 50 Hz</td></tr>
<tr><td>永磁同步</td><td>效率 &gt;95%（高 10~15%）；功率因数 0.95~0.99；误差 ≤0.25 r/min，&gt;0.5 失步</td></tr>
<tr><td>SR 电机</td><td>常用 6/4、12/8、8/6；6/4 极每相通电转子转 30°</td></tr>
<tr><td>ABS</td><td>最佳滑移率 0.15~0.2；循环 10~12 次/s；&lt;8 km/h 不起作用</td></tr>
<tr><td>ASR</td><td>80~120 km/h 不起作用</td></tr>
<tr><td>ESP</td><td>双 56 kB 微机；20 ms 自检；失控危险性降低 80%；九项功能</td></tr>
<tr><td>转向</td><td>4WS 分界 35 km/h；同相转角 ≤5°（转角比 ≤1/8）；前轮内 39°55′±2′、外 35°00′±2′；EPS 比液压轻 25%，电机 12 V / 10 N·m；ECU 8 bit / 4 kB ROM / 256 B RAM</td></tr>
<tr><td>测距</td><td>反应 0.5~3 s（1.5 s 时 40 km/h→16.7 m、80 km/h→33.4 m）；提前 0.5 s 避免 60%，1 s 避免 90%；80% 反应不及时、65% 追尾；毫米波 &gt;150 m、1 ms、10 mm、2.0°；超声波 0.01~10 m、&gt;20°；红外 0.1~10⁻³ mm；ACC 车道宽 3.5 m</td></tr>
<tr><td>ECSS 阻尼阈值</td><td>变硬：急转弯、&gt;60 km/h 制动、&lt;10 km/h 加速、&lt;20 km/h 急加速；变软：转弯 2 s 后、制动结束 2 s 后、加速过 3 s、起步加速至 15 km/h、车速 50 km/h</td></tr>
<tr><td>CCS</td><td>&gt;40 km/h；节油 15%；制动开关与执行器直接相连</td></tr>
<tr><td>安全气囊</td><td>40 ms 引爆，30 ms 充气；紧急制动踏板转移 0.8 s</td></tr>
</tbody></table></div>`
  });

  I.push({
    id: "q3", m: "quick", t: "十组极易混淆的辨析", s: 3,
    tag: "易混 辨析 容量能量 串联并联 低选高选 同相逆相 比能量比功率",
    src: S + " · 易错归集",
    b: `<div class="tw"><table>
<thead><tr><th>易混对</th><th>辨析</th></tr></thead>
<tbody>
<tr><td>容量 vs 能量</td><td>容量 Ah 是<b>电量</b>；能量 Wh = 容量 × 平均放电电压，是<b>做功能力</b></td></tr>
<tr><td>比能量 vs 比功率</td><td>比能量决定<b>续驶里程</b>；比功率决定<b>加速、爬坡、最高车速</b></td></tr>
<tr><td>串联 vs 并联</td><td>串<b>提电压</b>；并<b>不提电压</b>只降内阻提电流</td></tr>
<tr><td>低选 SL vs 高选 SH</td><td>低选：以 φ 小侧不抱死为准 → <b>稳定性优先，实际采用</b>；高选：制动效能高但易失稳</td></tr>
<tr><td>ABS vs ASR</td><td>ABS 管<b>拖滑</b>（全部车轮、仅制动时）；ASR 管<b>滑转</b>（仅驱动轮、行驶中）</td></tr>
<tr><td>不足转向 vs 过度转向</td><td>不足 = 半径变<b>大</b>（推头）；过度 = 半径变<b>小</b>（甩尾）</td></tr>
<tr><td>同相 vs 逆相</td><td>同相（高速 &gt;35）提稳定性；逆相（低速 &lt;35）缩转弯半径</td></tr>
<tr><td>永磁无刷直流 vs 永磁同步</td><td>前者<b>矩形波</b>驱动、转矩脉动大；后者<b>正弦波</b>驱动、脉动小、弱磁扩速宽</td></tr>
<tr><td>硬磁 vs 软磁</td><td>硬磁 H<sub>C</sub> 大（&gt;1 kA/m）作永磁体；软磁 H<sub>C</sub> 小作铁心</td></tr>
<tr><td>车速传感器 vs 轮速传感器</td><td>轮速必有（电磁/霍尔）；车速靠雷达（多普勒）或由轮速近似推算</td></tr>
<tr><td>能耗/反接制动 vs 再生制动</td><td>前两者把动能变热消耗，<b>不宜用于能源受限的电动车</b>；再生制动回馈电池</td></tr>
<tr><td>半主动 vs 全主动悬架</td><td>半主动只调<b>阻尼</b>（步进电机、功耗低）；全主动调<b>刚度+阻尼+车高</b>（需泵常转）</td></tr>
</tbody></table></div>`
  });

  I.push({
    id: "q4", m: "quick", t: "开卷考试策略与答题模板", s: 3,
    tag: "开卷 策略 答题 模板 关键词 失分",
    src: S + " · 备考建议",
    b: `<p><b>一、先定位，再作答</b></p>
<ul>
<li>看到题先抓<b>关键词</b>：问"区别/比较"→ 找对比表；问"为什么"→ 找机理段；问"有哪些"→ 数条数（很多考点条数是固定的：HEV 定义 4 条、节能机理 3 条、FCEV 优点 5 条、ASR 与 ABS 区别 4 条）。</li>
<li>本速查的<b>星级</b>：●●● 必背核心（概念/对比/公式）；●● 常考（结构、参数）；● 了解（举例、拓展）。</li>
</ul>
<p><b>二、答题结构（简答/论述通用）</b></p>
<div class="ex"><b>① 定义/定性</b>：一句话说清是什么、属于哪一类。<br><b>② 分点展开</b>：用"①②③"编号，每点先给<b>结论词</b>再补一句解释。<br><b>③ 落到车上</b>：补一句"对电动汽车的意义/影响"，如"有利于提高续驶里程""降低对蓄电池的冲击"。<br><b>④ 有数就给数</b>：0.15~0.2、35 km/h、40 km/h、95%、4~7 倍——数字是最省力的加分项。</div>
<p><b>三、计算题通用套路</b></p>
<ol>
<li>写出<b>原始公式</b>（哪怕没算完也有分）；</li>
<li>统一单位（km/h → m/s 除以 3.6；r/min → rad/s 乘 2π/60）；</li>
<li>代入并保留<b>中间量</b>，标注单位；</li>
<li>结果做<b>合理性检查</b>（效率不能 &gt;1、转速不能为负、滑移率 0~1）。</li>
</ol>
<p><b>四、容易丢分的四个点</b></p>
<div class="warn">① 把"下坡回馈"写成第Ⅳ象限（应为<b>第Ⅱ</b>）；② 把 ASR 说成"对所有车轮"；③ 忘记"低选 SL 才是实际采用"；④ 混用"比能量/比功率"决定的东西。</div>`
  });

  C.push(
    { id: "qc1", m: "quick", q: "ESP 的全称与三个等价名称？", a: "Electronic Stability Program；也称 <b>VDC</b>（Vehicle Dynamic Control）、<b>VSC</b>（Vehicle Stability Control）。" },
    { id: "qc2", m: "quick", q: "ASR 的另一个名字？", a: "<b>TCS</b>（Traction Control System，牵引力控制系统）。" },
    { id: "qc3", m: "quick", q: "ABR/EDS/ECSS/CCS/ACC 分别是什么？", a: "EDS 电子差速系统；ECSS 电子控制悬架系统；CCS 巡航控制系统；ACC 自适应巡航控制（ABS 为防抱死制动系统）。" },
    { id: "qc4", m: "quick", q: "开卷简答题的四段结构？", a: "① 定义/定性一句话；② 分点编号展开（先结论词后解释）；③ 落到电动汽车上的意义；④ 能补数字就补数字。" }
  );
})();
