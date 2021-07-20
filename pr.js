let img = document.querySelector('.doce2');
let cont = document.querySelector('.container');
let pos;
img.addEventListener('click', func1);

function func1() {
  {

    let div = document.createElement('div');
    div.classList.add('linza');

    img.addEventListener('mousemove', (e) => {

      pos = getCursorPos(e);

      x = pos.x;
      y = pos.y;
      console.log(img.width);

      //console.log(x, y);
      div.style.backgroundImage = 'url(cart1.png)';
      div.style.backgroundRepeat = 'no-repeat';

      //div.style.backgroundAttachment = 'fixed';
      div.style.width = '100px';
      div.style.height = '100px';
      div.style.backgroundSize = '512px';

      div.style.backgroundPositionX = -x * 2 + 25 * 2 + 'px';    //находим X у нашей картинки
      div.style.backgroundPositionY = -y * 2 + 25 * 2 + 'px';

      div.style.left = x - 50 + 'px';
      div.style.top = y - 50 + 'px';
      div.addEventListener('mousemove', (e) => {
        pos = getCursorPos(e);

        x = pos.x;
        y = pos.y;
        if (x > img.width - 50 / 2) { x = img.width - 50 / 2; }
        if (x < 50 / 2) { x = 50 / 2; }
        if (y > img.height - 50 / 2) { y = img.height - 50 / 2; }
        if (y < 50 / 2) { y = 50 / 2; }
        //console.log(x, y);
        div.style.backgroundImage = 'url(cart1.png)';
        div.style.backgroundRepeat = 'no-repeat';

        //div.style.backgroundAttachment = 'fixed';
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.backgroundSize = '512px';

        div.style.backgroundPositionX = -x * 2 + 25 * 2 + 'px';    //находим X у нашей картинки
        div.style.backgroundPositionY = -y * 2 + 25 * 2 + 'px';

        div.style.left = x - 50 + 'px';
        div.style.top = y - 50 + 'px';
      })
    });

    cont.appendChild(div);
    img.removeEventListener('click', func1);

  }
}

function getCursorPos(e) {
  var a, x = 0, y = 0;
  e = e || window.event;
  /* Получить x и y позиции изображения: */
  a = img.getBoundingClientRect();
  /* Вычислите координаты курсора x и y относительно изображения: */
  x = e.pageX - a.left;
  y = e.pageY - a.top;
  /* Consider any page scrolling: */
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  return { x: x, y: y };
}
