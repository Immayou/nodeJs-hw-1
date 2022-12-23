const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

// async function listContacts() {
//   try {
//     const contacts = await fs.readFile(contactsPath, "utf8");
//     console.log(JSON.parse(contacts));
//   } catch (error) {
//     console.log(error);
//   }
// }

// listContacts();

// async function getContactById(contactId) {
//   try {
//     const contacts = await fs.readFile(contactsPath, "utf8");
//     const result = await JSON.parse(contacts).find(
//       ({ id }) => id === String(contactId)
//     );
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getContactById(7);

// async function removeContact(contactId) {
//   try {
//     const contacts = JSON.parse(
//       await fs.readFile(contactsPath, "utf8")
//     ).slice(0);
//     const indexOfContactToDelete = await contacts.findIndex(
//       ({ id }) => String(contactId) === id
//     );
//     await contacts.splice(indexOfContactToDelete, 1);
//     console.log(contacts);
//   } catch (error) {
//     console.error(error);
//   }
// }

// removeContact(9);

async function addContact(name, email, phone) {
  try {
    const id = nanoid();
    const contacts = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    const contactToAdd = {
      id,
      name,
      email,
      phone,
    };
    const contactsWithAddedNewOne = [...contacts, contactToAdd];
    const newContacts = await fs.writeFile(
      "./db/contacts1.json",
      JSON.stringify(contactsWithAddedNewOne),
      "utf8"
    );
    console.log(newContacts);
  } catch (error) {
    console.error(error);
  }
}
addContact("Yulia", "nulla.ante@vestibul.co.uk", "093-69-40");

module.exports = {
  //   listContacts,
  //   getContactById,
  //   removeContact,
  //   addContact,
};

addContact;
