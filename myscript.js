// 获取所有带有“smooth-scroll”类的链接
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// 遍历每个链接，并为其添加点击事件监听器
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // 阻止默认行为（即跳转到锚点）
    event.preventDefault();

    // 获取目标元素的选择器（即链接的href属性）
    const targetSelector = link.getAttribute('href');

    // 获取目标元素
    const targetElement = document.querySelector(targetSelector);

    // 滚动到目标元素的位置，使用平滑滚动效果
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

var imagePopupsLeft = document.getElementsByClassName('image_popup_left');
var imagePopupsRight = document.getElementsByClassName('image_popup_right');
var imagePopupsBottom = document.getElementsByClassName('circle_container');

function checkVisibilityLeft() {
  var windowHeight = window.innerHeight;

  for (var i = 0; i < imagePopupsLeft.length; i++) {
    var imageRect = imagePopupsLeft[i].getBoundingClientRect();

    if (imageRect.top < windowHeight && imageRect.bottom >= 0) {
      imagePopupsLeft[i].classList.add('image_fly_in');
    } else {
      imagePopupsLeft[i].classList.remove('image_fly_in');
    }
  }
}


function checkVisibilityRight() {
  var windowHeight = window.innerHeight;

  for (var i = 0; i < imagePopupsRight.length; i++) {
    var imageRect = imagePopupsRight[i].getBoundingClientRect();

    if (imageRect.top < windowHeight && imageRect.bottom >= 0) {
      imagePopupsRight[i].classList.add('image_fly_in');
    } else {
      imagePopupsRight[i].classList.remove('image_fly_in');
    }
  }
}

function checkVisibilityBottom() {
  var windowHeight = window.innerHeight;

  for (var i = 0; i < imagePopupsBottom.length; i++) {
    var imageRect = imagePopupsBottom[i].getBoundingClientRect();

    if (imageRect.top < windowHeight && imageRect.bottom >= 0) {
      imagePopupsBottom[i].classList.add('image_fly_in_bottom');
    } else {
      imagePopupsBottom[i].classList.remove('image_fly_in_bottom');
    }
  }
}

window.addEventListener('scroll', checkVisibilityLeft);
window.addEventListener('load', checkVisibilityLeft);
window.addEventListener('resize', checkVisibilityLeft);

window.addEventListener('scroll', checkVisibilityRight);
window.addEventListener('load', checkVisibilityRight);
window.addEventListener('resize', checkVisibilityRight);

window.addEventListener('scroll', checkVisibilityBottom);
window.addEventListener('load', checkVisibilityBottom);
window.addEventListener('resize', checkVisibilityBottom);




   






