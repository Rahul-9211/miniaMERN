const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require('bcryptjs')
const UserModal = require("./client/modal/modal.register");
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const Tokens = require("./client/modal/modal.tokenList");
const fileupload = require("express-fileupload"); // file upload is used to extract images from client end using api 
const pdf = require('html-pdf') // pdf generation library
const pdfTemplate = require('./client/pdfFormats/webAudit')
const advance_PDF_template = require("./advancePDF_template")
const puppeteer = require('puppeteer')


dotenv.config();
const app = express()

app.use(cors());

app.use(fileupload()); // to view files data at server end 
app.use(express.json());

app.use(express.static('client')) // to host the server files locally 

// console.log("dir ", __dirname)
try {
    mongoose.connect(`${process.env.MONGOOSE_STRING}`, { useNewUrlParser: true })
    console.log("mongo connected : ")
} catch (error) {
    console.log(error)
}


// Random Number 15 unique ID Generator  --------------------------------->
function uniqueIdGenerator() {
    var seq = (Math.floor(Math.random() * 100) + 100).toString().substring(1);
    const id = Date.now() + seq;
    return id;
}

// generate pdf from client data 
app.post('/generate-pdf-using-client', async (req, res)=>{
    console.log("files", req.files)
    console.log("body", req.body)
})


// generate pdf from dataBase data 


// API to genrate advance pdf 
app.post('/generate-advance-pdf', async (req, res) => {
    const image_list = Object.entries(req.files)
    // console.log("advacn data", image_list[0][1]);

    // function to save images 
    const local_path = __dirname
    let saved_image_array = new Array()
    // console.log("local_path", local_path)
    for (let file of image_list) {
        // console.log("of", file[1])
        let image_extension = file[1].mimetype.split("/"); // returning an array 
        saved_image_array.push(file[0] + "." + image_extension[1]); // for future saving in file
        file[1].mv(`${local_path}/client/files/images/${file[0]}.${image_extension[1]}`, (err) => {
            // console.error("err",err);
        })
    }

    const html_temp = await advance_PDF_template(saved_image_array)
    // console.log("html_temp",html_temp)


    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ]
    });
    const page = await browser.newPage()


    // We set the page content as the generated html by handlebars
    await page.setContent(html_temp)
    // We use pdf function to generate the pdf in the same folder as this file.
    const created_pdf = await page.pdf({ path: `${local_path}/client/files/pdf/result_pdf.pdf`, printBackground: true, format: "A4" }) // pdf function takes {path : "" , format : "A4"}
    //   res.set({ 'Content-Type': 'application/pdf', 'Content-Length': created_pdf.length }) // here this is use to set content header for pdf 
    //   res.send(created_pdf)

})


// APi to generate pdf ==================================>>>>>>>>>>>>>>
app.post('/generatePDF', async (req, res) => {
    console.log("generate pdf ", req.body);
    const issueDate = req.body.issueDate;
    const validDate = req.body.validDate;
    try {
        const imgName = "logo.png"

        const newpath = __dirname;
        // Pdf creation using html-pdf --------------------------------------->>>>>>
        const created_pdf =  pdf.create(pdfTemplate(imgName, issueDate, validDate), {}).toFile(`${newpath}/client/files/test1.pdf`, (err) => {
            if (err) {
                return res.json({ message: "pdf not generated ", status: false })
                // res.send(Promise.reject());
            }
            // return res.json({ message: "pdf generated ", status: true })
            // res.send(Promise.resolve());
        });

        console.log("created_pdf" , created_pdf)
        res.set({ 'Content-Type': 'application/pdf', 'Content-Length': created_pdf.length }) // here this is use to set content header for pdf 
        res.send(created_pdf)

    } catch (error) {
        console.error(error)
        return res.json({ message: "pdf not generated ", status: false })
    }
})

// API to get Basic form uploaded-images
app.post('/get-images', async (req, res) => {
    console.log("req.files", req.files)
})

// Api to add data for tables- HardCode
app.post('/add-data', async (req, res) => {
    console.log("data", req.body)
})

app.post('/login', async (req, res) => {
    // console.log("req", req.body)
    try {
        const user = await UserModal.findOne({
            Email: req.body.email
        })
        // console.log("user", user)
        if (user) {
            const compare = await bcrypt.compare(
                req.body.pass, user.Password
            )
            if (compare) {
                const token = jwt.sign({ pass: req.body.pass, email: req.body.email }, "pass@123", { expiresIn: "1h" });
                console.log("token", token);
                await Tokens.create({
                    UserID: user.UserID,
                    Token: token,
                    Purpose: "loginAuth",
                    DateTime: new Date().toUTCString()
                })
                return res.json({
                    status: true,
                    message: "Login successfull",
                    token: token,
                    user: user
                })
                console.log("token2", token);
            }
            else {
                res.json({
                    status: false,
                    message: "wrong password"
                })
            }
        }
        else {
            // console.log("email doesnt exist")
            res.json({
                status: false,
                message: "email doen't exist"
            })
        }

    } catch (error) {
        console.log("email ", error);
        res.json({
            status: false,
            message: "some error occured"
        })
    }
})

app.post('/register', async (req, res) => {
    // here the email verification will be sent 
    const newPass = await bcrypt.hash(req.body.pass, 10);
    try {
        await UserModal.create({
            UserID: uniqueIdGenerator(),
            FirstName: req.body.fname,
            LastName: req.body.lname,
            Email: req.body.email,
            Password: newPass,
            Status: "InActive"
        })
        res.json({
            status: true,
            message: "User created"
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: false,
            message: "Email already exist "
        })
    }
})

app.post('/checkcache', async (req, res) => {
    console.log("print", req.body.token)
    try {
        const checkToken = await Tokens.findOne({
            Token: req.body.token
        })

        const verify = jwt.verify(checkToken.Token,
            "pass@123"
        )
        if (verify) {
            console.log("checktoken", checkToken)
            const matchUser = await UserModal.findOne({
                UserID: checkToken.UserID
            })
            console.log("user", matchUser)
            if (matchUser) {
                res.json({
                    status: true,
                    message: "alredy login",
                    user: matchUser
                })
            }
            else {

                res.json({
                    status: false,
                    message: "no user with this token",
                })
            }
        } else {
            res.json({
                status: false,
                message: "invalid token",
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            status: false,
            message: "no response",
        })
    }
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`server is running on Port : ${process.env.PORT}`)
})