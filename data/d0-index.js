/* 模块索引
   每个模块: {id, name, short, desc}
   id 用于条目归属 m 字段；short 显示在顶部 chip；desc 显示为分组副标题 */
window.EV = {
  mods: [
    { id: "theory", name: "车辆动力学（前置）", short: "理论", desc: "行驶方程 · 附着条件 · 制动与操稳" },
    { id: "struct", name: "电动汽车构造与原理", short: "构造", desc: "BEV · HEV · FCEV · 驱动结构" },
    { id: "batt", name: "动力储能装置", short: "电池", desc: "电池原理 · 性能指标 · 各类电池 · 储能复合" },
    { id: "motor", name: "驱动电机与调速", short: "电机", desc: "直流 · 交流 · 永磁 · 开关磁阻 · 轮毂" },
    { id: "ctrl", name: "性能优化与电控", short: "电控", desc: "ABS · ASR · ESP · 转向 · 防撞 · 悬架 · 巡航" },
    { id: "quick", name: "速记与答题", short: "速记", desc: "缩写 · 数字 · 易混 · 开卷策略" }
  ],
  items: [],
  cards: []
};
