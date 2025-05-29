// 김민서_60211644_과제#3_JS-1

// 특정 글자 (1년 운세)를 누르면 운세를 뽑아서 alert 해줌. // 이스터에그 처럼
const luckyClick = document.getElementById("luck")
  
  luckyClick.addEventListener("click",()=>{
    const rand = Math.random()
    if (rand < 0.4){
      return alert("소길입니다. 오늘 하루도 화이팅!")
    }
    else if (rand < 0.4+0.3){
      return alert("중길입니다. 오늘은 좋은 하루가 될 것 같아요")
    }
    else if (rand <0.4+0.3+0.2){
      return alert("길입니다! 오늘은 운이 좋은 날이 될 것 같은걸요?")
    }
    else{
      return alert("대길입니다! 오늘은 복권을 한번 사보는 것도 좋을 것 같아요!")
    }
  })


// 환율 계산기
let 현재값
let 변환상수 = 1

const newInput = document.getElementById("moneyinput")
const newSpan = document.getElementById("moneyspace")
const newSelect = document.getElementById("moneyselect")

// 환율 계산기
const calculator = ()=>{
  newSpan.textContent = (현재값 * 변환상수).toFixed(2)
}

newSelect.addEventListener("change", (event)=>{
    const options = event.currentTarget.options
    const index = event.currentTarget.options.selectedIndex
    변환상수 = Number(options[index].value)
    calculator()
})

newInput.addEventListener("keyup", (event)=>{
    현재값 = Number(event.currentTarget.value)
    calculator()
})