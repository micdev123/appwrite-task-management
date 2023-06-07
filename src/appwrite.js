import { Client, Account /*Database, Storage */} from 'appwrite'; // Intended services

// Create an instance of the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_PROJECT_ID);

// Initializing Account
export const account = new Account(client);


// Initializing Database
// const database = new Database(client)

// // Initializing Storage
// const storage = new Storage(client)


// export { client, account, /*database, storage*/ ID };