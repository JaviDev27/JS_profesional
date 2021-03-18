interface Observer{
    update: (data:any) => void,
}


interface Subject{
    subscribe: (observer:Observer) => void,
    unsubscribe: (observer:Observer) => void,
}

class BitcointPrice implements Subject{

    Observers: Observer[] = [];

    constructor(){
        const el: HTMLInputElement = document.querySelector("#value")
        el.addEventListener('input', () =>{
            this.notify(el.value)
        })
    }

    subscribe(observer:Observer){
        this.Observers.push(observer)
    }

    unsubscribe(observer:Observer){
        const index = this.Observers.findIndex(obs =>{
            return obs === observer
        })

        this.Observers.splice(index,1)
    }

    notify(data:any){
        this.Observers.forEach(observer => {
            observer.update(data)
        })
    }
}

class PriceDisplay implements Observer{

    private el : HTMLElement;

    constructor(){
        this.el = document.querySelector("#precio")
    }

    update(data:any){
        this.el.innerText = data;
    }
}

const value = new BitcointPrice();
const display = new PriceDisplay();

value.subscribe(display)

setTimeout(() => {
   value.unsubscribe(display) 
}, 5000);