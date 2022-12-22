const fs = require("fs").promises;
const path = require("path");

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

async function removeContact(contactId) {
  try {
    const copyOfContacts = (await fs.readFile(contactsPath, "utf8")).slice("");
    const indexOfContactToDelete = await JSON.parse(copyOfContacts).findIndex(
      ({ id }) => String(contactId) === id
    );
    console.log(indexOfContactToDelete);

    await JSON.parse(copyOfContacts).splice(indexOfContactToDelete, 1);
    console.log(copyOfContacts);
  } catch (error) {
    console.error(error);
  }
}
removeContact(1);

// function addContact(name, email, phone) {}

module.exports = {
  //   listContacts,
  //   getContactById,
  //   removeContact,
  //   addContact,
};
