import { writable } from 'svelte/store';

const initialUser = {
    name: "Pete Davidsonvc",
    email: "john@gmail.com",
    goals: ["Talk", "Have a conversation for 10 min", "Join 5 events"],
    stats: {
        clicks: 5,
        stress: 37,
        exercises: 3,
    },
    interests: [
    { id: 1, name: "Football", selected: false },
    { id: 2, name: "Basketball", selected: true },
    { id: 3, name: "Draw", selected: false },
    { id: 4, name: "Paint", selected: true },
    { id: 5, name: "Game", selected: false },
],
};

export const UserArray = writable(initialUser);
