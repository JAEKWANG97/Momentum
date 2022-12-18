const clock = document.querySelector("h2#clock");

function sayHello() {
  const time = new Date();
  const year = time.getFullYear();
  const month = String(time.getMonth()).padStart(2, "0");
  const date = String(time.getDate()).padStart(2, "0");
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  clock.innerText = `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;
}

sayHello();
setInterval(sayHello, 1000);
