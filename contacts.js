const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("./db/contacts.json");

async function readContacts() {
  try {
    const contacts = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function writeContacts(value) {
  try {
    const contacts = await fs.writeFile(
      contactsPath,
      JSON.stringify(value, null, 4)
    );
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function listContacts() {
  try {
    const contacts = await readContacts();
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await readContacts();
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
    const contacts = await readContacts();
    const indexOfContactToDelete = await contacts.findIndex(
      ({ id }) => String(contactId) === id
    );
    if (indexOfContactToDelete === -1) {
      console.log("Not found the contact to delete!");
      return;
    }
    await contacts.splice(indexOfContactToDelete, 1);
    await writeContacts(contacts);
    console.log(await readContacts());
    return;
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await readContacts();
    const id = nanoid();
    const contactToAdd = {
      id,
      name,
      email,
      phone,
    };
    const contactsWithAddedNewOne = [...contacts, contactToAdd];
    await writeContacts(contactsWithAddedNewOne);
    console.log(await listContacts());
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
