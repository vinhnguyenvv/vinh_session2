import HomeDetailView from "./main/HomeDetailView";
import HomeView from "./main/HomeView";

const viewsName = {
    HomeView: {
        component: HomeView,
        options: {
            title: "Home",
        }
    },
    HomeDetailView: {
        // name: "Details",
        component: HomeDetailView,
        options: {
            title: "Detail",
        }
    }
}


export type TViewNames = keyof typeof viewsName;



export {
    viewsName
}