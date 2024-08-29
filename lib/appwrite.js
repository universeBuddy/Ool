import { Account, Client, ID } from 'react-native-appwrite';

 export const config ={
    endpoint:'https://cloud.appwrite.io/v1',
    plateform :'com.mosfet.ool',
    projectId : ' 66d06c9a000ad9d33582',
    databaseId : '66d073e30027c24aeb1a',
    userCollecitonId: '66d0741f00307af581e9',
    videoCollectionId: '66d074d5000d0f843b98',
    storageId :'66d0780400313977413b'
 }
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.plateform) 
;


const account = new Account(client);

// Register User
 export const createUser =()=>{
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

}
