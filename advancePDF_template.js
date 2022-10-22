
const temp_variable = 234;
module.exports = async (saved_image_array) => {

    let img_list;
    let local_path = __dirname
    for (let image_name of saved_image_array) {
        let img_temp_path = `http://localhost:8000/files/images/${image_name}`;
        console.log("temp path", img_temp_path)
        img_list += ` <div>
       <img src= ${img_temp_path} alt="not loadede"/>
   </div>`
    }
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    this is images using array 
    ${img_list}
</body>
</html>
`
}