export const addItemToBag = (bagItems, bagItemToAdd) => {
    const existingBagItem = bagItems.find(
        bagItem => bagItem.id === bagItemToAdd.id
    );

    if (existingBagItem) {
        return bagItems.map(bagItem =>
            bagItem.id === bagItemToAdd.id ? {
                ...bagItem, quantity: bagItem.quantity + 1
            } : bagItem
        )
    }
    return [...bagItems, { ...bagItemToAdd, quantity: 1 }];
}



