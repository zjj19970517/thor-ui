import{_ as b,V as h,c as C,a as g,w as p,b as n,d as a,r as _,o as x}from"./app.556fd7af.js";const y={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:o,createElementVNode:k,openBlock:i,createElementBlock:r}=h,d={class:"button-demo-container-1"};function c(t,s){const m=l("TTCheckbox");return i(),r("div",null,[k("div",d,[o(m,{modelValue:t.checked1,"onUpdate:modelValue":s[0]||(s[0]=u=>t.checked1=u),label:"Option 1",size:"large"},null,8,["modelValue"]),o(m,{modelValue:t.checked2,"onUpdate:modelValue":s[1]||(s[1]=u=>t.checked2=u),label:"Option 2",size:"large"},null,8,["modelValue"])])])}const{ref:e,defineComponent:f}=h,v=f({setup(){const t=e(!1),s=e(!0);return{checked1:t,checked2:s}}});return{render:c,...v}}()}},q=JSON.parse('{"title":"Checkbox \u591A\u9009","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"components/basic/checkbox/index.md"}'),V=n("h1",{id:"checkbox-\u591A\u9009",tabindex:"-1"},[a("Checkbox \u591A\u9009 "),n("a",{class:"header-anchor",href:"#checkbox-\u591A\u9009","aria-hidden":"true"},"#")],-1),T=n("p",null,"\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u3002",-1),A=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),E=n("div",null,[a("\u4F7F\u7528 "),n("code",null,"demo"),a("\u3001"),n("code",null,"plain"),a("\u3001"),n("code",null,"round"),a(" \u548C "),n("code",null,"circle"),a(" \u6765\u5B9A\u4E49\u6309\u94AE\u7684\u6837\u5F0F\u3002")],-1),F=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("button-demo-container-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("TTCheckbox")]),a("  "),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checked1"),n("span",{class:"token punctuation"},'"')]),a("  "),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Option 1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("TTCheckbox")]),a("  "),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checked2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Option 2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" defineComponent "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`

      `),n("span",{class:"token keyword"},"const"),a(" checked1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" checked2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        checked1`),n("span",{class:"token punctuation"},","),a(`
        checked2`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("css"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".button-demo-container-1 .tt-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 0 10px 0 0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function w(l,o,k,i,r,d){const c=_("render-demo-0"),e=_("demo");return x(),C("div",null,[V,T,A,g(e,{sourceCode:`<template>
  <div class="button-demo-container-1">
    <TTCheckbox  v-model="checked1"  label="Option 1" size="large" />
    <TTCheckbox  v-model="checked2" label="Option 2" size="large" />
  </div>
</template>

<script>
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    setup() {

      const checked1 = ref(false);
      const checked2 = ref(true);

      return {
        checked1,
        checked2,
      }
    }
  })
  <\/script>

<style lang="css" scoped>
.button-demo-container-1 .tt-btn {
  margin: 0 10px 0 0;
}
</style>
`},{description:p(()=>[E]),highlight:p(()=>[F]),default:p(()=>[g(c)]),_:1})])}var D=b(y,[["render",w]]);export{q as __pageData,D as default};
