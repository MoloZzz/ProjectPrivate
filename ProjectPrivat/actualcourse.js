document.querySelector(".gradient-button").onclick = fActualCourse1;

function fActualCourse(){
const xhr = new XMLHttpRequest();

xhr.open("GET","https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
   if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
   } else { // если всё прошло гладко, выводим результат
     alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
   }
 };
 
 xhr.onprogress = function(event) {
   if (event.lengthComputable) {
     alert(`Получено ${event.loaded} из ${event.total} байт`);
   } else {
     alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
   }
 
 };
 
 xhr.onerror = function() {
   alert("Запрос не удался");
 };


}


 


function fActualCourse1(){
   const getJSON = async url => {
      const response = await fetch(url);
      if(!response.ok) // check if response worked (no 404 errors etc...)
        throw new Error(response.statusText);
    
      const data = response.json(); // get JSON from the response
      return data; // returns a promise, which resolves to this data value
    }
    
   alert("Fetching data...")

   getJSON("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11").then(data => {
     alert(data);
   }).catch(error => {
     alert(error);
   })

}