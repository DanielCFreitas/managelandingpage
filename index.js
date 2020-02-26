function changeHamburguerMenuIcon(e) {
  e.preventDefault();

  const hambuguerMenu = document.getElementById('hambuguerMenu');
  const hambuguerBackground = document.getElementById('headerBackgroundHamburguer');
  const navigation = document.getElementById('navigation');

  if (hambuguerMenu.classList.contains('active')) {
    hambuguerMenu.classList.remove('active');
    hambuguerBackground.classList.remove('active');
    navigation.classList.remove('active');
    hambuguerMenu.src = './images/icon-hamburger.svg'
  } else {
    hambuguerMenu.classList.add('active');
    hambuguerBackground.classList.add('active');
    navigation.classList.add('active');
    hambuguerMenu.src = './images/icon-close.svg'
  }
}