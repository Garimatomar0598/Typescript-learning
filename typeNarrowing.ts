function getChai(kind:string | number){
    if(typeof kind === 'string'){
        return 'making ${kind} chai...';
    }
    return 'chai order: ${kind}';
}

type chaiOrder ={
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === "object" &&
obj !== null &&
typeof obj.type === "string" &&
typeof obj.sugar === "number"

    )


function serveOrder(item:chaiOrder | string){
if(isChaiOrder(item)){
    return 'serving ${itrm.type}chai with ${item.sugar}sugar'
}
return 'serving custom chai:${item}'
}

}