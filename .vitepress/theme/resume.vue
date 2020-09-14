<template>
  <row>
    <row-item cols="3" style="border-right: 1px solid #dfdfdf;">
      <card :elevation="null">
        <card-content>
          <row column gutter="xs">
            <row-item style="padding: 8px 4px;">
              <row justify="center">
                <img class="l-elevation-xs" :src="head" style="width: 60%;outlined: 0;" />
              </row>
            </row-item>
            <row-item>
              <h2>张子衡</h2>
            </row-item>
            <row-item style="width: 100%;">
              <p style="font-weight: 600;">个人介绍：</p>
              <p>我是一名热爱前端技术的web前端开发者，最近热衷于写vue3组件。在实习的过程中常思考如何提高开发效率，因此便萌生了编写组件库的想法，并结合各大成功的组件库，去粗取精，努力为vue生态做贡献。</p>
            </row-item>
            <row-item>
              <p style="font-weight: 600;">个人信息：</p>
              <form-field label-col="3">
                <field label="手机">15001975820</field>
                <field label="邮箱">1002723879@qq.com</field>
                <field label="微信">zhangzihenghammer</field>
              </form-field>
            </row-item>
            <row-item>
              <p style="font-weight: 600;">应聘职位：</p>
              <p>Web前端开发</p>
            </row-item>
          </row>
        </card-content>
      </card>
    </row-item>
    <row-item>
      <card :elevation="null">
        <card-title class="primary-color--text">基本信息</card-title>
        <separator></separator>
        <card-content>
          <form-field label-col="2">
            <field label="个人信息">
              <p>张子衡/男/1997.02.28</p>
            </field>
            <field label="毕业院校">
              <p>江南大学 - 人工智能与计算机学院 - 本科</p>
            </field>
            <field label="毕业年份">
              <p>2021年</p>
            </field>
            <field label="工作年限">
              <p>6个月(实习)</p>
            </field>
            <field label="技术博客">
              <p>
                <a href="https://lagabu-blog.netlify.app/">https://lagabu-blog.netlify.app/</a>
              </p>
            </field>
            <field label="Github">
              <p>
                <a href="https://github.com/zzh97228">https://github.com/zzh97228</a>
              </p>
            </field>
          </form-field>
        </card-content>
      </card>
      <card :elevation="null">
        <card-title class="primary-color--text">个人经历</card-title>
        <separator></separator>
        <card-content>
          <form-field label-col="2">
            <field label="公司">
              <p>上海笃行计算机科技有限公司 (2019年9月 - 2020年1月)</p>
            </field>
            <field label="职位">
              <p>Web前端开发(实习)</p>
            </field>
            <field label="经历">
              <p>参与外包产品的前端开发，使用vue2.0 + echarts进行前端可视化开发，完成了两个可视化外包项目。</p>
            </field>
            <field label="项目">
              <card :elevation="null">
                <card-content>
                  <row gutter="xs" column>
                    <row-item>
                      <card :elevation="null">
                        <card-title style="font-size: 14px;font-weight: 600;">乡村振兴大屏可视化</card-title>
                        <card-subtitle>
                          使用vue2.0 + echarts开发的大屏可视化系统，展示上海乡村振兴结果。
                          项目中我参与了设计和开发前端页面，并于后端约定接口，通过柱状图、线性图、数字展示数据，同时通过自己编写vue-echarts插件将echarts的图表注入vue组件中。
                        </card-subtitle>
                        <card-content>
                          <img :src="snqmx" style="width: 100%" />
                        </card-content>
                      </card>
                    </row-item>
                    <separator></separator>
                    <row-item>
                      <card :elevation="null">
                        <card-title style="font-size: 14px;font-weight: 600;">航线数据大屏可视化</card-title>
                        <card-subtitle>
                          使用vue2.0 + echarts + vue-swiper开发的航线大屏可视化系统。
                          项目中我参与开发大屏的前端页面，页面分为前后两屏，前后两屏的数据互有关联，通过在首屏加载前处理数据并将数据注入页面的方法，来实现屏幕与屏幕之间数据的联动。
                          通过点击国家、大洲、不同出发机场、机场出发的机种都可互动并展示对应类型的航线。
                        </card-subtitle>
                        <card-content>
                          <img :src="flightline" style="width: 100%" />
                        </card-content>
                      </card>
                    </row-item>
                  </row>
                </card-content>
              </card>
            </field>
          </form-field>
        </card-content>
      </card>
      <card :elevation="null">
        <card-title class="primary-color--text">个人项目</card-title>
        <separator></separator>
        <card-content>
          <row gutter="xs" column>
            <row-item>
              <card :elevation="null">
                <card-title>
                  Lagabu - vue3.0组件库
                  <row gutter="xs">
                    <white-spacer></white-spacer>
                    <row-item shrink>
                      <btn
                        small
                        depressed
                        color="primary"
                        target="blank"
                        style="margin-right: 4px;"
                        href="https://github.com/zzh97228/Lagabu"
                      >
                        <icon brand left>github</icon>项目地址
                      </btn>
                    </row-item>
                    <row-item shrink>
                      <btn
                        small
                        depressed
                        color="primary"
                        target="blank"
                        href="http://www.lagabu.com/docs/index.html"
                      >
                        <icon brand left>readme</icon>项目预览
                      </btn>
                    </row-item>
                  </row>
                </card-title>
                <card-subtitle>
                  <b class="primary-color--text">Lagabu</b>是基于vue3.0的轻量级web响应式组件库。
                  <a
                    href="https://github.com/zzh97228/Lagabu"
                  >https://github.com/zzh97228/Lagabu</a>
                </card-subtitle>
                <card-content>
                  目的：使用vue3.0来编写如卡片、flex布局、输入框、下拉框等基础组件。结合了MaterialDesign的设计理念，
                  以及ant-design的组件功能和样式。完全使用
                  <b
                    class="primary-color--text"
                  >typescript</b>而非tsx/jsx语法来编写组件，功能相对丰富但又有足够的
                  自定义空间。所以此组件库中的组件更多的是提供一个容器，使用者可通过插槽自定义其中的内容。
                  特性：
                  <ol>
                    <li>使用flex布局的栅格化系统，并可使用依赖注入为子级元素添加内边距。</li>
                    <li>可自定义主题颜色而无需在webpack配置中定义颜色变量值。</li>
                    <li>使用Boostrap工具类的形式为组件提供颜色的变换。</li>
                    <li>基于vue3.0依赖注入方式写作的表单鉴权组件，装配更加灵活。</li>
                    <li>
                      将
                      <b>tooltip</b>等组件转换为指令的形式，同时从原文档流中脱离，并挂载在根元素下。
                    </li>
                  </ol>现阶段成果：
                  <ol>
                    <li>发布了几个pre-alpha版本，写了基础的文档，正在完善每个组件的单元测试。</li>
                    <li>已配合vitepress使用在自己的博客中，并用组件库编写了此简历。正在个人项目中逐步取代其他组件库。</li>
                    <li>使用vue3.0的功能写作了一个简单的富文本编辑器。</li>
                    <li>正在编写高级组件如markdown编辑器、头像裁剪器等。</li>
                  </ol>
                  <img :src="buttons" style="width: 100%;" />
                  <img :src="grids" style="width: 100%;" />
                </card-content>
              </card>
            </row-item>
            <separator></separator>
            <row-item>
              <card :elevation="null">
                <card-title>
                  Lagabu个人博客
                  <row gutter="xs">
                    <white-spacer></white-spacer>
                    <row-item shrink>
                      <btn
                        small
                        depressed
                        color="primary"
                        target="blank"
                        href="https://github.com/zzh97228/zzh97228.github.io"
                      >
                        <icon brand left>github</icon>
                        <span style="font-size: 12px;">项目地址</span>
                      </btn>
                    </row-item>
                    <row-item shrink>
                      <btn
                        small
                        depressed
                        color="primary"
                        target="blank"
                        href="https://lagabu-blog.netlify.app/"
                      >
                        <icon brand left>readme</icon>
                        <span style="font-size: 1rem;">项目预览</span>
                      </btn>
                    </row-item>
                  </row>
                </card-title>
                <card-subtitle>
                  使用
                  <a
                    class="primary-color--text"
                    href="https://github.com/vuejs/vitepress"
                  >vitepress</a> 和
                  <a class="primary-color--text">lagabu</a> - vue3.0组件库开发的个人博客
                </card-subtitle>
                <card-content>
                  <p>
                    使用自己开发的组件库
                    <a class="primary-color--text">lagabu</a>配合静态网站生成器vitepress进行开发的个人博客，
                    记录个人遇到的问题和自己的leetcode题解。
                  </p>
                </card-content>
              </card>
            </row-item>
            <separator></separator>
            <row-item>
              <card :elevation="null">
                <card-title>
                  spy-on - 窥视：数据工厂
                  <row gutter="xs">
                    <white-spacer></white-spacer>
                    <row-item shrink>
                      <btn
                        small
                        depressed
                        color="primary"
                        target="blank"
                        href="https://github.com/zzh97228/spy-on"
                      >
                        <icon brand left>github</icon>项目地址
                      </btn>
                    </row-item>
                    <row-item shrink>
                      <btn
                        small
                        depressed
                        color="primary"
                        target="blank"
                        href="https://datafactory.netlify.app/"
                      >
                        <icon brand left>readme</icon>项目预览
                      </btn>
                    </row-item>
                  </row>
                </card-title>
                <card-subtitle>
                  使用
                  <a class="primary-color--text">vue3.0</a> 开发的数据可视化网站，通过横向幕布和图标的形式展示个人隐私的泄露程度
                </card-subtitle>
                <card-content>
                  <p>整个网站置于5张平铺的2000 * 1125的画布之上，点击屏幕两侧的按钮可使幕布左右运动，移动时图标会自动更新相对位置，以做到懒加载。通过点击图标展示个人隐私被泄露情况的图表，展示的位置会随着鼠标和屏幕的相对位置变化而变化。网站整体构建在vue3.0之上，通过双向绑定进度条宽度和幕布移动距离来操作并展示进度。发布于netlify上进行自动构建。</p>
                  <img :src="spyon2" width="480" />
                </card-content>
              </card>
            </row-item>
          </row>
        </card-content>
      </card>
      <card :elevation="null">
        <card-title class="primary-color--text">个人技能</card-title>
        <separator></separator>
        <card-content>
          <row gutter="xs" column>
            <row-item v-for="(item, i) in skills" :key="'skill'+i">
              <card :elevation="null">
                <card-title>{{ item.title }}</card-title>
                <card-content>
                  <form-field label-col="2">
                    <field label="熟练程度">{{ item.level }}</field>
                    <field label="具体介绍">
                      <p>{{ item.content }}</p>
                    </field>
                  </form-field>
                </card-content>
              </card>
            </row-item>
          </row>
        </card-content>
      </card>
    </row-item>
  </row>
</template>

<script>
import head from './static/head.jpg';
import flightline from './static/flightline.png';
import snqmx from './static/snqmx.png';
import spyon2 from './static/spy-on-2.png';
import lagabuLogo from './static/lagabu-logo.png';
import buttons from './static/buttons.png';
import grids from './static/grids.png';

export default {
  name: 'Resume',
  data() {
    return {
      head,
      flightline,
      snqmx,
      spyon2,
      buttons,
      grids,
      lagabuLogo,
      skills: [
        {
          title: 'Typescript',
          level: '精通',
          content:
            '熟练掌握ts的类型和高级类型的用法，可根据不同参数写出复杂的重载函数；熟练使用泛型写出工具类；熟练搭建ts版本的测试环境，并能为自己的库编写声明文件。',
        },
        {
          title: 'Vue.js',
          level: '精通',
          content:
            '熟练掌握vue.js的生命周期和生命周期钩子的时机；熟练使用vue构建应用而不依赖于vue-cli；掌握vue.js的数据双向绑定原理，并积极参与社区的开发；可自行开发组件和指令；',
        },
        {
          title: 'Javascript',
          level: '熟练',
          content:
            '熟悉原生javascript，常使用原生dom的api编写应用；了解诸如柯里化、面向对象的设计模式；',
        },
        {
          title: 'Node.js',
          level: '熟练',
          content:
            '熟悉使用express进行后端开发，并运用插件进行ORM操作；熟练使用node.js编写简单脚本进行自动化构建、打包、测试；',
        },
        {
          title: 'Webpack',
          level: '熟练',
          content: '熟练使用webpack打包和调试应用，熟悉webpack的参数',
        },
      ],
    };
  },
};
</script>
