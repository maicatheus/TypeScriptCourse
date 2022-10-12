const main = () =>{
    var data = new Date();
    console.log(data);
    console.log(data.getFullYear());
    console.log(data.getHours());
    console.log(data.getMinutes());

    console.log(`${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`);
    var dataNova = new Date(2022,9,11)
    console.log(dataNova);
}
