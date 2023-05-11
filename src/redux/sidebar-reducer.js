const initialState = {
    friends: [
        {
            id: 1,
            name: "Taras",
            img: "https://cm.author.today/content/2022/02/02/a/bbfcd039f535420bb4faf4668e8c47ae.jpg",
            online: "online"
        },
        {
            id: 2,
            name: "Nazar",
            img: "https://cm.author.today/content/2022/02/02/a/bbfcd039f535420bb4faf4668e8c47ae.jpg",
            online: ""
        },
        {
            id: 3,
            name: "Arina",
            img: "https://cm.author.today/content/2022/02/02/a/bbfcd039f535420bb4faf4668e8c47ae.jpg",
            online: "online"
        },
        {
            id: 4,
            name: "Alex",
            img: "https://cm.author.today/content/2022/02/02/a/bbfcd039f535420bb4faf4668e8c47ae.jpg",
            online: ""
        },
    ],
}

export const sidebarReducer = (state = initialState, action) => {
    return state;
}