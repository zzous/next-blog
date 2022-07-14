import Code from 'components/prism/Code'
const Test = () => {
    return (
      <div>
        <Code language='js'>
            {
`// template
<div v-for="(item, index) in option" :key="index">
  {{ item.tit }}
  {{ item.selectNum }}
  <select @change="selectChoice(index, $event)">
    <option v-for="(num, idx) in Number(item.pdtnum)" :value="num" :key="idx" :selected="num">{{num}}</option>
  </select>
</div>
<button @click="selectChange">ok</button>

// data
option:[
  { tit: '상품명1', pdtnum: 1, selectNum: 1 },
  { tit: '상품명2', pdtnum: 2, selectNum: 2 },
  { tit: '상품명3', pdtnum: 5, selectNum: 5 },
],

// methods
selectChoice(idx, event){
  console.log(event.target.value)
  this.option[idx].selectNum = event.target.value;
},
selectChange() {
  this.option.forEach((item) => {
    item.pdtnum = item.selectNum
  })
}
`
            }
        </Code>
      </div>
    )
  }
  
  export default Test