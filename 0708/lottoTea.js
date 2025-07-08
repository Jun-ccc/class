

let sortBefore = document.getElementById("sortBefore");
let sortAfter = document.getElementById("sortAfter");
let secNo = document.getElementById("secNo");

// 威力彩
function lott1() {
    let lott = [];
    while (1) {
        if (lott.length == 6) {
            break;
        }
        let lottNo = Math.floor(Math.random() * 38) + 1;
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    // 未排序
    sortBefore.textContent = "排序前號碼：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼：" + lott;
    // 第二區1-8取1個
    secNo.textContent = "第二區號碼：" + (Math.floor(Math.random() * 8) + 1);
}

// 大樂透
function lott2() {
    let lott = [];
    while (1) {
        if (lott.length == 7) {
            break;
        }
        let lottNo = Math.floor(Math.random() * 49) + 1;
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    // 取陣列的最後一個值，並移除
    secNo.textContent = "特別號：" + lott.pop();
    // 未排序
    sortBefore.textContent = "排序前號碼：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼：" + lott;
}

// 今彩539
function lott3() {
    let lott = [];
    while (1) {
        if (lott.length == 5) {
            break;
        }
        let lottNo = Math.floor(Math.random() * 39) + 1;
        if (lott.includes(lottNo) == false) {
            lott.push(lottNo);
        }
    }
    // 未排序
    sortBefore.textContent = "排序前號碼：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼：" + lott;
    // 沒有第二區，所以清除
    secNo.textContent="";
}