// JavaScript Document
const img_arr = [];
        for (let index = 0; index < 16; index++) {
            img_arr.push(index);
        }
        var app = new Vue({
            el: '#app',
            data:{
                timer:{
                    m:0,
                    s:0, 
                    ms:0, 
                },
                display:'none',
                img_arr: [...img_arr]},
            created(){
                this.start_yet = false;
                this.timer_int = null;
            },
            methods: {
                dbl(s){ 
                    return s<10?'0'+s:s>100?parseInt(s/10):s
                },
                posi(index){
                    let left = -(index % 4) * 100;
                    let top = -(Math.ceil((index + 1) / 4) - 1) * 150; 
                    return `${left}px ${top}px`;
                },
                left(item) {
                    return (item % 4) * 100;
                },
                top(item) {
                    return (Math.ceil((item + 1) / 4) - 1) * 150;
                },
                xianshi() { 
                    this.display = "block";
                    setTimeout(() => { 
                        this.display = "none"; 
                    }, 3000);
                },
                dasan() {
                    let max = 1;
                    let tm = setInterval(() => {
                        if (max == 0){ 
                            clearInterval(tm);
                            this.start_yet = true
                        }
                        this.suiji(); 
                        max--; 
                    }, 500);
                },
                kaishi(){
                    let max = 1;
                    let tm = setInterval(() => {
                        if (max == 0){ 
                            clearInterval(tm);
                            this.start_yet = true
                            this.start_time = new Date()
                            this.timer_int = setInterval(()=>{
                                let tm = new Date()
                                let yongshi = tm-this.start_time
                                this.timer={
                                    m:new Date(yongshi).getMinutes(), 
                                    s:new Date(yongshi).getSeconds(), 
                                    ms:new Date(yongshi).getMilliseconds(),
                                } 
                            },100);
                        }
                        //this.suiji(); 
                        max--; 
                    }, 500);
                },
                suiji() {
                    this.img_arr.sort(
                        function (a, b) { 
                            return Math.random() - 0.5
                        });
                    console.log('this.img_arr:', this.img_arr);
                },
                diaohuan(arr, index1, index2) {
                    return arr[index2] = arr.splice(index1, 1, arr[index2])[0];
                },
                mousedown(index) {
                    if(!this.start_yet){
                        alert('请先点击打散')
                        return false }
                    console.log('鼠标按下 index:',index);
                    this.start_x = event.targetTouches[0].clientX
                    this.start_y = event.targetTouches[0].clientY
                    this.target = event.target
                    this.start_left = parseInt(this.target.style.left)
                    this.start_top = parseInt(this.target.style.top)
                    this.start_index = index
                    console.log('this.start_x: ',this.start_x)
                },
                 mousemove(index) {
                    event.preventDefault();
                    console.log('鼠标移动 index:',index);
                    let x = event.changedTouches[0].clientX-this.start_x
                    let y = event.changedTouches[0].clientY-this.start_y
                    let left = this.start_left
                    let top = this.start_top
                    this.target.style.left = left+x+'px'
                    this.target.style.top = top+y+'px' 
                 },// 修改这里，应该是 top+y+'px'
                mouseup(index) {
                    console.log('鼠标松开 index:', index);
                    console.log(event);
                    let obj = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                    if(!obj){
                        this.fuwei()
                        return false
                    }
                    let end_index = obj.getAttribute('data-index');
                    if(!end_index || end_index == this.start_index){
                        this.fuwei()
                        return false
                    }
                    this.fuwei()
                    this.diaohuan(this.img_arr, index, end_index);
                    if(JSON.stringify(this.img_arr) == JSON.stringify(img_arr)){
                        //console.log('已完成拼图');
                        alert('已完成拼图')
                        clearInterval(this.timer_int)
                        this.timer_int = null
                        this.start_yet = false
                    }
                    else{
                        console.log(this.img_arr);
                        console.log(img_arr) 
                    }
                    console.log(this.img_arr);  
                },
                fuwei(){
                    this.target.style.left = this.start_left+'px'
                    this.target.style.top = this.start_top+'px'
                }
            }
        }); 