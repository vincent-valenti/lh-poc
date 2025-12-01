export default function decorate(block) {
  const button = document.createElement('lh-button');

  [...block.children].forEach((row) => {
    const buttonAttr = row.querySelector('p').innerHTML?.split('=');
    const attrKey = buttonAttr[0].trim().toLowerCase();
    const attrValue = (buttonAttr.length > 1) ? buttonAttr[1].trim().toLowerCase() : '';
    if (attrKey === 'text') {
      button.innerText = attrValue;
      return;
    }
    button.setAttribute(attrKey, attrValue);
  });

  block.replaceWith(button);

  button.parentElement.outerHTML = button.parentElement.innerHTML;
}
