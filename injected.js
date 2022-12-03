//injected_main();
/*

https://www.cyberforum.ru/javascript/thread2365462.html
document.querySelector(".ytd-subscribe-button-renderer[role=button]").click();

*/

let array_triger_chanel = new Array();

array_triger_chanel= [  "Remi Meisner",
                        "Культпросвет",
                        "Dmitry Puchkov",
                        "Плохой сигнал",
                        "НИЯУ МИФИ",
                        "Константин Сёмин",
                        "ВЫХОД ЕСТЬ!",
                        "Простые числа",
                        "Ritartha",
                        "Рабкор",
                        "Мятежник Джек",
                        "STATION MARX",
                        "[99 мыслей] Zvonov",
                        "Вестник Бури Originals",
                        "SciPie",
                        "Воинствующий Материализм",
                        "АгитПроп // Константин Сёмин",
                        "Вестник Бури",
                        "Клим Жуков"
                      ];

let status = '';

let cfg_timer_inerval = 30 * 1000; // в миллисекундах (5 минут == 300 сек.)

function injected_main(){
  loger("Все нормально! скрипт будет работать через каждые "+cfg_timer_inerval/1000+' сек');

    /* установим таймер на выполнение через секунд */
  setInterval(() => injected_wrapper__(), cfg_timer_inerval);
}

function injected_wrapper__(){
  /*  залогинены ли мы ? */
  if( document.getElementById('avatar-btn') ){
    checkOnTrigger__()
  } else {
    loger("Вы не залогинились на youtube");
  }

}

function loger(str =''){
  console.log(" [__-comrad_clicker-__] : "+str);
}

function checkOnTrigger__(){
  let triger = document.getElementById('channel-name');
  let name_c = triger.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string")[0].innerText

  if( array_triger_chanel.indexOf(name_c) > -1 ){
    loger("канал "+name_c + " есть в списке!");
    action__()
  }
}

function action__(){
  // если не подписались - подписываемся.
  loger("action")
  let butt_subscribe = document.querySelector('yt-formatted-string.ytd-subscribe-button-renderer')

  if (  butt_subscribe.innerText == "ПОДПИСАТЬСЯ"){
     butt_subscribe.click()
  }

  // переподписываемся.
   butt_subscribe.click()

  var intervalID=setInterval(function interval()
  	{
  	if(document.querySelector("paper-dialog.ytd-popup-container").style.display != "none")
  		{
      document.querySelector("paper-button[aria-label^='Отказаться от подписки']").click()
  		clearInterval(intervalID);
  		}
  	}, 10);

   butt_subscribe.click()
  // если не лайкали - лайкаем
  let like_butt = document.querySelector("button[aria-label^='Видео понравилось вам и']")
  if(like_butt.getAttribute('aria-pressed') == "false"){
    like_butt.click()
  }
  // тут aria-pressed == true
  like_butt.click();
  like_butt.click()

  // перелайк.
  // колокольчик(пока не решаем).

}
//.getAttribute('aria-pressed')
