function changeOuterLinks() {
    const links = document.getElementsByTagName('a');
    links.forEach(item => item.innerHTML.includes('outer-link').setAttribute('target', '_blank'));
}


export { changeOuterLinks };