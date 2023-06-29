// 1. Creating User Profiles:
const userProfile = {
    name: "Jane Doe",
    age: 28,
    email: "jane@example.com",
    isAdmin: true
};
function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}

// printUserProfile(userProfile);

// 2. Updating Inventory

function addStock(inventory, newInventory) {
    var updatedInventory = {};
    for (var key in inventory) {
        updatedInventory[key] = inventory[key];
    }

    for (var key in newInventory) {
        if (updatedInventory[key]) {
            updatedInventory[key] += newInventory[key];
        } else {
            updatedInventory[key] = newInventory[key];
        }
    }

    return updatedInventory;
}

console.log(
    addStock(
        { apple: 10, orange: 5, banana: 20 },
        { apple: 5, banana: 10, orange: 7 }
    )
);
