<row>
  <row-item :cols="3" style="border-right: 1px solid #dfdfdf;">
      <card :elevation="null">
        <card-content>
          <row column gutter="xs">
            <row-item style="padding: 8px 4px;">
              <row justify="center">
                <img class="l-elevation-xs" src="/@theme/assets/head.jpg" style="width: 60%;outlined: 0;"/>
              </row>
            </row-item>
            <row-item>
              <h2>张子衡</h2>
            </row-item>
            <row-item style="width: 100%;">
              <p style="font-weight: 600;">个人介绍：</p>
              <p>
                我是一名热爱前端技术的web前端开发者，最近热衷于写vue3组件。
              </p>
            </row-item>
            <row-item>
              <p style="font-weight: 600;">个人信息：</p>
              <form-field label-col="3">
                <field label="手机">
                 15001975820
                </field>
                <field label="邮箱">
                  1002723879@qq.com
                </field>
                <field label="微信">
                  zhangzihenghammer
                </field>
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
                      <card-subtitle>使用vue2.0 + echarts开发的大屏可视化系统，展示上海乡村振兴结果。
                      项目中我参与了设计和开发前端页面，并于后端约定接口，通过柱状图、线性图、数字展示数据，同时通过自己编写vue-echarts插件将echarts的图表注入vue组件中。</card-subtitle>
                      <card-content>
                        <img src="/@theme/assets/snqmx.png" style="width: 100%"/>
                      </card-content>
                    </card>
                  </row-item>
                  <separator></separator>
                  <row-item>
                    <card :elevation="null">
                      <card-title style="font-size: 14px;font-weight: 600;">航线数据大屏可视化</card-title>
                      <card-subtitle>使用vue2.0 + echarts + vue-swiper开发的航线大屏可视化系统。
                      项目中我参与开发大屏的前端页面，页面分为前后两屏，前后两屏的数据互有关联，通过在首屏加载前处理数据并将数据注入页面的方法，来实现屏幕与屏幕之间数据的联动。
                      通过点击国家、大洲、不同出发机场、机场出发的机种都可互动并展示对应类型的航线。
                      </card-subtitle>
                      <card-content>
                        <img src="/@theme/assets/flightline.png" style="width: 100%"/>
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
      <card-title class="primary-color--text">
          个人项目
      </card-title>
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
                <btn small depressed color="primary" target="blank" style="margin-right: 4px;" href="https://github.com/zzh97228/Lagabu">
                  <icon brand left>github</icon>
                  项目地址
                </btn>
                </row-item>
                <row-item shrink>
                <btn small depressed color="primary" target="blank" href="http://www.lagabu.com/docs/index.html">
                  <icon brand left>readme</icon>
                  项目预览
                </btn>
                </row-item>
                </row>
              </card-title>
              <card-subtitle>
                基于vue@3.0.0-beta开发的组件库 - <a href="https://github.com/zzh97228/Lagabu">https://github.com/zzh97228/Lagabu</a>
              </card-subtitle> 
              <card-content>
                <p style="line-height: 2;"><b class="primary-color--text">Lagabu</b>是基于vue3.0的轻量级web响应式组件库，遵从Material-Design的设计模式，目的是提供一种可高度自定义但功能又相对简单的容器组件。
                语言上使用<strong class="primary-color--text">typescript</strong>编写内容，<b class="primary-color--text">less</b>编写样式，配合vue3.0的hooks式
                写法提高组件的复用性，最后使用<b class="primary-color--text">webpack</b>进行打包。组件的设计上更多参考
                  <a class="primary-color--text" href="https://vuetifyjs.com/zh-Hans/getting-started/quick-start/">Vuetify</a>，
                  样式设计上则参考<a class="primary-color--text" href="https://www.antdv.com/docs/vue/introduce-cn/">ant-design</a>，现已发布几个pre-alpha版本至npm上，正在对组件进行测试，并逐渐应用至自己的个人博客、个人项目中。
                  由于<a class="primary-color--text">vue3.0</a>仍处于beta阶段，对于新版本的用法大多基于源码的阅读而来，这个组件库因此会随着vue版本更新而产生对应的变化。
                </p>
                <img width="256px" src="/@theme/assets/lagabu-logo.png" />
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
                    <btn small depressed color="primary" target="blank" href="https://github.com/zzh97228/zzh97228.github.io">
                      <icon brand left>github</icon>
                      项目地址
                    </btn>
                  </row-item>
                  <row-item shrink>
                   <btn small depressed color="primary" target="blank" href="https://lagabu-blog.netlify.app/">
                      <icon brand left>readme</icon>
                      项目预览
                    </btn>
                  </row-item>
                </row>
              </card-title>
              <card-subtitle>
                使用<a class="primary-color--text" href="https://github.com/vuejs/vitepress">vitepress</a> 和 <a class="primary-color--text">lagabu</a> - vue3.0组件库开发的个人博客
              </card-subtitle>
              <card-content>
                <p>使用自己开发的组件库<a class="primary-color--text">lagabu</a>配合静态网站生成器vitepress进行开发的个人博客，
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
                    <btn small depressed color="primary" target="blank" href="https://github.com/zzh97228/spy-on">
                      <icon brand left>github</icon>
                      项目地址
                    </btn>
                  </row-item>
                  <row-item shrink>
                   <btn small depressed color="primary" target="blank" href="https://datafactory.netlify.app/">
                      <icon brand left>readme</icon>
                      项目预览
                    </btn>
                  </row-item>
                </row>
              </card-title>
              <card-subtitle>
                使用<a class="primary-color--text">vue3.0</a> 开发的数据可视化网站，通过横向幕布和图标的形式展示个人隐私的泄露程度
              </card-subtitle>
              <card-content>
                <p>
                  整个网站置于5张平铺的2000 * 1125的画布之上，点击屏幕两侧的按钮可使幕布左右运动，移动时图标会自动更新相对位置，以做到懒加载。通过点击图标展示个人隐私被泄露情况的图表，展示的位置会随着鼠标和屏幕的相对位置变化而变化。网站整体构建在vue3.0之上，通过双向绑定进度条宽度和幕布移动距离来操作并展示进度。发布于netlify上进行自动构建。
                </p>
                <img src="/@theme/assets/spy-on-2.png" width="480"/>
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

<script>
export default {
  data() {
    return {
      skills:[
        {
          title: 'Typescript',
          level: '精通',
          content: '熟练掌握ts的类型和高级类型的用法，可根据不同参数写出复杂的重载函数；熟练使用泛型写出工具类；熟练搭建ts版本的测试环境，并能为自己的库编写声明文件。'
        },
        {
          title: 'Vue.js',
          level: '精通',
          content: '熟练掌握vue.js的生命周期和生命周期钩子的时机；熟练使用vue构建应用而不依赖于vue-cli；掌握vue.js的数据双向绑定原理，并积极参与社区的开发；可自行开发组件和指令；'
        },
        {
          title: 'Javascript',
          level: '熟练',
          content: '熟悉原生javascript，常使用原生dom的api编写应用；了解诸如柯里化、面向对象的设计模式；'
        },
        {
          title: 'Node.js',
          level: '熟练',
          content: '熟悉使用express进行后端开发，并运用插件进行ORM操作；熟练使用node.js编写简单脚本进行自动化构建、打包、测试；'
        },
        {
          title: 'Webpack',
          level: '熟练',
          content: '熟练使用webpack打包和调试应用，熟悉webpack的参数'
        }
      ]
    }
  }
}
</script>
