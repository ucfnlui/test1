// 获取箭头链接元素
const arrowLink = document.getElementById('arrow-link');

// 点击箭头链接后的处理函数
arrowLink.addEventListener('click', function(event) {
  // 阻止默认行为
  event.preventDefault();
  // 获取目标位置的元素
  const targetElement = document.querySelector(arrowLink.getAttribute('href'));
  // 使用scrollIntoView()方法滚动到目标位置
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
});
