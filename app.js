let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

var arr = [];
let i = 0;





// Starting

btn.addEventListener('click', () => {
    let p = document.createElement('p');
    let inp = input.value;
    if (inp != "") {
        arr[i] = inp;
        let res = document.createElement('span');
        res.setAttribute('class','list');
        res.innerText = arr[i];
        p.append(res);
        p.setAttribute('id', i);
        i++;

        // for deletion

        let del = document.createElement('span');
        del.setAttribute('class','delete');
        del.innerText = 'Delete';
        p.append(del);

        del.addEventListener('click', (e) => {
            let index = e.target.parentNode.id;
            p.remove();

            myfun(index);
        });

        function myfun(di) {
            let count = document.getElementsByTagName('p');
            let n = count.length;
            let k= di;
            k=k++;
            for (let j =k; j <= n; j++) {
                count[j].setAttribute('id',di);
                di++;
            }


        }


        // for Updation

        let Update = document.createElement('span');
        Update.setAttribute('class','update');
        Update.innerText = 'Update';
        p.append(Update);

        Update.addEventListener('click', () => {
            res.innerText = "";
            res.setAttribute('contenteditable', 'true');
        });

        res.addEventListener('keypress', (e) => {
            if (e.which === 13) {
                res.setAttribute('contenteditable', 'false');
            }
        });

        // for Move Up

        let up = document.createElement('span');
        up.setAttribute('class','moveup');
        up.innerText = 'Move Up';
        p.append(up);

        up.addEventListener('click', (e) => {
            let index = e.target.parentNode.id;
            let select = document.getElementById(index);
            if (index != 0) {
                let temp = select.childNodes[0].innerHTML;
                var sel = document.getElementById(index - 1);

                select.childNodes[0].innerHTML = sel.childNodes[0].innerHTML;
                sel.childNodes[0].innerHTML = temp;
            }

        });

        // for move Down 

        let down = document.createElement('span');
        down.setAttribute("class","movedown");
        down.innerText = 'Move Down';
        p.append(down);


        down.addEventListener('click', (e) => {
            let para = document.getElementsByTagName('p');
            let n = para.length;
            let idx = e.target.parentNode.id;
            let select = document.getElementById(idx);
            if (idx >= 0 && idx < n - 1) {
                let temp = select.childNodes[0].innerHTML;
                let result = document.getElementById(++idx);
                select.childNodes[0].innerHTML = result.childNodes[0].innerHTML;
                result.childNodes[0].innerHTML = temp;
            }

        });

        // All in One

        input.value = "";
        list.append(p);


    }
});


