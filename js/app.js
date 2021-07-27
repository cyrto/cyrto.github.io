function li(d){
    let li= d.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {

        li[i].addEventListener('click', function (e) {
            for (let j = 0; j < li.length; j++) {
                if (li[j].className === 'active') {
                    li[j].className = ''
                }
            }
            let a = li[i].getElementsByTagName("a")
            let href = a[0].getAttribute("href");
            let id = href.replace("#","");
            li[i].className = 'active';
            e.stopPropagation()
        });
    }
}