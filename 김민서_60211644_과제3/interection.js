// 김민서_60211644_과제#3_JS-2
const form = document.querySelector("form");
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");

  // 모달 스타일
  modal.id = "modal";
  modal.style.cssText = `
    display: none; 
    position: fixed; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%; 
    background: rgba(0,0,0,0.6);
    justify-content: center; 
    align-items: center;
    z-index: 9999;
  `;
  modalContent.style.cssText = `
    background: white; 
    padding: 20px; 
    border-radius: 8px;
    width: 80%; 
    max-width: 500px; 
    position: relative;
  `;
  modalContent.innerHTML = `
    <span id="closeModal" style="position:absolute;top:10px;right:15px;font-size:1.5em;cursor:pointer;">&times;</span>
    <div id="modalData"></div>
    <div style="text-align:right; margin-top:20px;">
      <button id="confirmSubmit" style="margin-right:10px;">✅ 최종 전송</button>
      <button id="cancelSubmit">✏️ 수정하기</button>
    </div>
  `;
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("userid").value;
    const email = document.getElementById("useremail").value;
    const tel = document.getElementById("usertel").value;
    const gender = document.getElementById("usersex").value;
    const etc = document.getElementById("etc").value;

    const depart = document.querySelector('input[name="depart"]').value;
    const arrive = document.querySelector('input[name="arrive"]').value;

    const destinations = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
      destinations.push(cb.previousElementSibling?.textContent || cb.name);
    });

    document.getElementById("modalData").innerHTML = `
      <h3>입력 정보 확인</h3>
      <ul>
        <li><strong>이름:</strong> ${name}</li>
        <li><strong>이메일:</strong> ${email}</li>
        <li><strong>전화번호:</strong> ${tel}</li>
        <li><strong>성별:</strong> ${gender}</li>
        <li><strong>출발일:</strong> ${depart || "미지정"}</li>
        <li><strong>도착일:</strong> ${arrive || "미지정"}</li>
        <li><strong>선택한 여행지:</strong> ${destinations.join(", ") || "없음"}</li>
        <li><strong>요청사항:</strong> ${etc || "없음"}</li>
      </ul>
      <p style="color: green;">입력 내용을 확인 후 '최종 전송'을 클릭하세요.</p>
    `;
    modal.style.display = "flex";
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "closeModal" || e.target.id === "cancelSubmit") {
      modal.style.display = "none";
    } else if (e.target.id === "confirmSubmit") {
      modal.style.display = "none";
      form.submit(); // 실제 제출
    }
  });

  // 각 이벤트 헨들러가 콘텐츠나 스타일 업데이트, 새로운 문서객체 샐성 또는 제거, 입력내용 확인과 같은 작업

  // 입력내용 확인
  // pw(4글자 이상인지 확인)
  const pwcheck = document.querySelector('input[type="password"]')
  const pwMsg = document.getElementById("pw-msg");

  pwcheck.addEventListener("keyup",(event)=>{
    const value = event.currentTarget.value
    if(value.length >= 4){
      pwMsg.style.color = "green"
      pwMsg.textContent = "입력 완료"
    }
    else{
      pwMsg.style.color = 'red'
      pwMsg.textContent = "4글자 이상 입력하세요"
    }
  })
  
  // 이메일 형식 확인 + 입력한 이메일 확인
  const emailcheck = document.querySelector('input[type="email"]')
  const emailMsg = document.getElementById("email-msg");

  const isEmail = (value)=>{
    return value.indexOf("@") > 1 && value.split("@")[1].indexOf(".") > 1
  }

  emailcheck.addEventListener("keyup",(event)=>{
    const value = event.currentTarget.value
    if(isEmail(value)){
      emailMsg.style.color = "green"
      emailMsg.textContent = `이메일 형식입니다:${value}`
    }
    else{
      emailMsg.style.color = "red"
      emailMsg.textContent = `이메일 형식이 아닙니다:${value}`
    }
  })

  // 새로운 문서 객체 생성 / 제거
  // 사용자명 입력 옆에 인원 추가를 누르면 동승인원을 입력할 수 있는 입력창 생성
  const addBtn = document.getElementById("addCompanionBtn");
  const removeBtn = document.getElementById("removeCompanionBtn");
  const container = document.getElementById("companions"); // 추가한거 들어갈 공간 생성

  let companionCount = 0; // 추가된 동승자 수

  // 인원 추가 버튼 클릭 시
  addBtn.addEventListener("click", () => {
    companionCount++;
    // input element 생성 후 type, name, placeholder, style 지정
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = `companion${companionCount}`;
    newInput.placeholder = `동승자 ${companionCount} 이름을 입력`;
    newInput.style = "display: block" // 한줄씩 아래로 쭉 나오게

    container.appendChild(newInput);
  });

  // 인원 감소 버튼 클릭 시
  removeBtn.addEventListener("click", () => {
    if (companionCount > 0) {
      const lastInput = container.lastElementChild;
      if (lastInput && lastInput.tagName === 'INPUT') {
        container.removeChild(lastInput); // 제거
        companionCount--;
      }
    }
  });
