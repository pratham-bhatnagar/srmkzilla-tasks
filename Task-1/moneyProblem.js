const denomination = [2000,500,200,100,50,20,10,5,2,1]
const amount = 98731;
const notes = [];

for(let i=0; i<denomination.length;i++)
{
    if(denomination[i]<=amount)
    {
        notes[i]=Math.floor(amount/denomination[i])
        amount = amount - (notes[i]*denomination[i])
    }
    else
    {
        notes[i] = 0
    }
    
}
const index = 0;
while(index<denomination.length){
    console.log(denomination[index],' - ',notes[index])
    index++
}