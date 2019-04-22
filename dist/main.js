
const send = async function(){
    let thing = $("input").val()
    let t1 = {text: thing}
    let post =  await $.post(`/thing/`, t1)
    $("#container").text(post.text)
}

const loadPage = async function(){
    let things = await $.get(`/things`)
    for(let thing of things){
        let div = `<div>${thing.text}</div>`
        $("#container").append(div)
    }
}

loadPage()