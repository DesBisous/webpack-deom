import _ from 'lodash';
import './style.css';
import User from './user.jpg';
import Data from './data.xml';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = User;
  myIcon.width = '80';
  myIcon.height = '80';
  element.appendChild(myIcon);

  console.log(Data);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
