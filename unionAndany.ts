let subs:number | string = "1M"

let apiRequestStatus: 'pending' | 'sucess'| 'error' ='pending'

apiRequestStatus = "sucess"


let orders = ['12','28','20','42']

let currentorder: string | undefined;
//value undefined ho sakti hai 
for (let order of orders){
    if(order ==="28"){
        currentorder = order;
        break;
    }
    currentorder = "55";
}
console.log(currentorder);