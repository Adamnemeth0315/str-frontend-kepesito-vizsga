function changeOuterLinks() {
    const links = Array.from(document.getElementsByTagName('a')).filter(link => link.innerHTML.includes('outer-link'));
    links.forEach(item => item.setAttribute('target', '_blank'));
    
    const nav = document.querySelector('#link-list');
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.width = "30%";
    nav.style.margin = "0px auto";
    nav.style.border = "1px solid blue";
    nav.style.padding = "16px";
    }


export { changeOuterLinks };