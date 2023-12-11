//할당
let target = document.querySelector("#dynamic");

let stringArr = ["Heejin", "Hyunjin", "Haseul", "Yeojin", "ViVi", "Kim Lip", "JinSoul", "Choerry", "Yves", "Chuu", "Gowon", "Olivia Hye"];
let index = 0;

function selectString(){
    if(index>=stringArr.length){
        index = 0;
    }
    let selectStr = stringArr[index];
    let selectStringArr = selectStr.split("");

    index++; // 다음 문자열을 선택하기 위해 인덱스를 증가시킵니다.

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent="";
    dynamic(selectString());
}

//한글자씩 텍스트 출력 함수
function dynamic(selectArr){
    // console.log(randomArr);
    if(selectArr.length>0){
        target.textContent += selectArr.shift();
        setTimeout(function(){
            dynamic(selectArr);
        }, 80);
    }
    else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(selectString());

// console.log(selectString);
// console.log(selectStringArr);

//커서 깜빡 함수
function blink(){
    target.classList.toggle("active");
}
//반복
setInterval(blink, 500);

//이미지
let imagePaths = {
    '희진': 'https://i.namu.wiki/i/TgANdEoXWOPfPu0p1ZVnz8nWULXw7BvODB8mw6SPGJIMQGPlyEEKxMkcOZIWNCbowmkM4poBOMFCQIZ3VQJFDuIv7ySfONK7Pmb6XNWcuSjPKv4hGF8jugaHXzlzzjgx5CJRFsoBrfyi4YWiqOJYhA.webp',
    '현진': 'https://i.namu.wiki/i/_S-xl-dowUpvxhiIPv54Nw2lD8xWUpBzvazYSHYm0jdXBx-H9NG7r2qxY95srThwEqGB1gmfjop0-_dooQ8RddXbp1U2oguYyMuUZqUVEfVRDZhS8gFeEQrsp8UevD4XDrog1gMgUtJ6mnP9kJrKvQ.webp',
    '하슬': 'https://i.namu.wiki/i/OXfkAi10RQpEJlhgjhEe-L44lv_o_RHh3r3t90foStWEBrh3GGz4FAV1QEPUHt9wB2j_vJ9yC-9btqMWActwrPE36_7r1IucbD44GS0l8ZTWfuts9Y8giaIpJnhtFt7_To8o7-_OPxcQFRV6JJHV9A.webp',
    '여진': 'https://i.namu.wiki/i/zriOZ3StH58VjoTCUk7qeOIegYaBqGny5bvtnGrfUwyZoxeUKTPjEhy0WlyQEzc_-U5zAH9FpCzdBkZvEn7XG994dl4PgGlzHkt7B9hRGPzM7LDkvXF303V8yH_Oo9k2De6GE7-x4bZ33-gImYTQwA.webp',
    '비비': 'https://i.namu.wiki/i/flipNMe-B_-RqH9wFG56-YCC69iuI0Gfw0UfmDQ2fQ-RUMymarhntHzjQwgH8TAbNOkoJbTxkDNfDtyPjDpXRGPzjArI3MNIStYzQGIeZRFXZJeerXmx0kHOR-1FQkG0nVJfxkJX0RjcIflRxf00KQ.webp',
    '김립': 'https://i.namu.wiki/i/M66GKo6Cish8P1M3zkBmN20kWcyA6i2jyzHhhBMVDw2nDc_LFmmnMHjg005MnBapwcPUdAvfORxesHUtWJCjvm7DAb7mY3Tf35ZvdQa4ukFcl5C1NeN0t_FdcrTZAhWLOqx4L6PHCOvpXkSBQhW68w.webp',
    '진솔': 'https://i.namu.wiki/i/j816LoulTipHxSpdkW7zeMGM-SHy2Aa7LKL8yvWJ5-sI9dxiiN95dXGN2sRcQL7HkWOfEgn2L0vrscLLq-ROnhgw3GWkewbfdpPaRUWXsaP7DGRRgy0MLgauvpt1zkULKmfLtkUaktqzkNp8qDaMSw.webp',
    '최리': 'https://i.namu.wiki/i/eUhpAsl2XIgHR7cwpDFWHQ_tcowjV5IAq0FvVww7xlMjW_kvtz74r4T5fbtEmFmi3-DuBVyOhT3uzHPO5K54OA-b03NqL-6nQyMSUrwa3c6Xp0VsNXXNpcqh2MfwhpfhVltiNxPDWmP75DEP0D97Hw.webp',
    '이브': 'https://i.namu.wiki/i/zQv3W1SKOFkDWoG0M7Ky4c0mz73T39k-1Je576RBHk58YMUM0_BoEpolEFAihnPeny4fIBaOoYl88dqGdghDA8op3lRJI2W067xrKUnc1IwMOrYTmCuKyoFGi3FnanRbS0e4HHg9_WWGWDOUbT_vFA.webp',
    '츄': 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/11/26/27e6f7a7-0cbd-452e-93c2-e63dea0c0d34.jpg',
    '고원': 'https://i.namu.wiki/i/7vjKamrjXOEbpZipti6XM8HR8ifS_U8h13bEb-ptxLmotyWZaFVYAhQwSHbzVGiVN3FTcW7T7zY4t2m6wOeQZgnusT9nrn5xMMmWJIgf6IxQ3JE8cLRN_Suumts9wWM02z5k-_iBqeIpmGgfrR_sRQ.webp',
    '올리비아혜': 'https://i.namu.wiki/i/LeBT8WfedltM6DynznL_wDOQvWpk64pMWgA6R4-gYdty4CVgyYVi_7zv8-Tcwg6vvzuFi_YD04sLuLTkCHIb1mDTXVMcB09SmYberB6ErDnJjbHbdbSgFxAztXUzmbKhJdH3PiatpB8Yl6P6CsNAgQ.webp',
};

document.querySelectorAll('input[type="button"]').forEach(function(button) {
    button.addEventListener('click', function() {
        let img = document.createElement('img');
        img.src = imagePaths[this.value]; // 이미지 URL을 참조합니다.
        img.width = 500;
        document.getElementById('image').innerHTML = '';
        document.getElementById('image').appendChild(img);
        document.getElementById('closebutton').style.display = 'block'; //이미지를 띄우면 닫기 버튼 생성
    });
});

document.getElementById('closebutton').addEventListener('click', function() {
    // document.getElementById('image').innerHTML = '';    //닫기 버튼을 누르면 이미지 컨테이너를 비움
    // this.style.display = 'none';    //닫기 버튼을 숨김
    location.reload();
});