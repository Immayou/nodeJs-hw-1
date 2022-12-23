const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = await contacts.find(({ id }) => id === String(contactId));
    if (!result) {
      console.log("Not found the contact!");
      return;
    }
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const indexOfContactToDelete = await contacts.findIndex(
      ({ id }) => String(contactId) === id
    );
    if (indexOfContactToDelete === -1) {
      console.log("Not found the contact to delete!");
      return;
    }
    await contacts.splice(indexOfContactToDelete, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
    return;
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const id = nanoid();
    const contactToAdd = {
      id,
      name,
      email,
      phone,
    };
    const contactsWithAddedNewOne = [...contacts, contactToAdd];
    await fs.writeFile(
      contactsPath,
      JSON.stringify(contactsWithAddedNewOne, null, 4),
      "utf8"
    );
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
