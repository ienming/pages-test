import { Appwrite } from "appwrite";
console.log(Appwrite)
const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost:333/v1') // Your API Endpoint
    .setProject('61dcf9e940213') // Your project ID
;

// let promise = sdk.database.createDocument('61de490873d42', '111', {'camera_name':'Canon 600', 'movie_name': 'Summer 500'});
// let promise = sdk.database.listDocuments('61de490873d42');
// let promise = sdk.database.deleteDocument('61de490873d42', '61de4cb14a89f');

// let promise = sdk.account.createAnonymousSession();
// let promise = sdk.account.createSession('me@example.com', 'password'); //讓使用者登入
// let promise = sdk.account.get(); //取得當前登入者的帳號資料
// let promise = sdk.account.getSessions(); //取得當前登入者的session
// let promise = sdk.account.deleteSession('61de5255134be'); //刪除當前登入者的 session = 登出
let promise
let btn = document.querySelector("#btn")
btn.addEventListener("click", ()=>{
    console.log("i'm clicked")
    promise = sdk.database.listDocuments('61de71bd1e52f');
    // promise = sdk.database.getDocument('61de71bd1e52f', '61de71f08cdab');
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
})
