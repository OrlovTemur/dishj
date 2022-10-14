axios.get("http://localhost:3001/dataOne")
    .then(res => {
        console.log(res.data);
        reloud(res.data)
    })

let list = document.querySelector('.list')
let boxs = document.querySelectorAll('.box')
let tabl = document.querySelector('.tabl')
let plit = document.querySelector('.plit')
// let listPlit = document.querySelectorChildNods

const reloud = (arr) => {
    for(let item of arr) {
        let box = document.createElement('div')
        let title = document.createElement('p')
        let info = document.createElement('h1')
        let date = document.createElement('b')
        let time = document.createElement('span')
        let status = document.createElement('a')
        box.classList.add('box')



        box.append(title, info, date, time, status)
        list.append(box)

        date.innerHTML = item.date
        status.innerHTML = item.status
        time.innerHTML = item.time
        info.innerHTML = item.info
        title.innerHTML = item.title


        if(item.status === 'Не выполнено') {
            status.style.color = 'rgba(255, 63, 63, 1)'
        } else if(item.status === 'В прогрессе') {
            status.style.color = 'rgba(0, 127, 255, 1)'
        }

        
        plit.onclick = () => {  
            box.classList.remove('box')
            box.classList.add('boxPlit')
            console.log(item);   
        }

        tabl.onclick = () => {  
            box.classList.remove('boxPlit')
            box.classList.add('box')
            console.log(item);   
        }

    }
}




