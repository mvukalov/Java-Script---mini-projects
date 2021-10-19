function display(input){

    document.getElementById('textarea').value+=input
}


function calculate()
{


let solution= document.getElementById('textarea').value
let answer=eval(solution)
document.getElementById('textarea').value=answer


}
function clr()
{
document.getElementById('textarea').value=""

}